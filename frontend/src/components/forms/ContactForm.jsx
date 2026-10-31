import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CheckCircle2, Send, AlertCircle } from 'lucide-react';
import Input from '../ui/Input';
import Button from '../ui/Button';
import LoadingSpinner from '../ui/LoadingSpinner';
import { submitContact } from '../../services/api';

const EMAIL_REGEX = /^[A-Z0-9._%+\-]+@[A-Z0-9.\-]+\.[A-Z]{2,}$/i;

const validatePhone = (value) => {
  if (!value || !value.trim()) return true; // Optional for contact form
  const national = value.trim().replace(/^\+\d{1,4}[\s\-.]?/, '');
  const digits = national.replace(/\D/g, '');
  return digits.length === 10 || 'Please enter a valid 10-digit phone number.';
};

export const ContactForm = () => {
  const {
    register, handleSubmit, reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage,   setErrorMessage]   = useState('');

  const onSubmit = async (data) => {
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const payload = {
        fullName: data.fullName.trim(),
        name:     data.fullName.trim(),
        email:    data.email.trim(),
        phone:    data.phone?.trim() || '',
        subject:  data.subject?.trim() || '',
        message:  data.message.trim(),
        consent:  Boolean(data.consent),
      };

      const res = await submitContact(payload);
      if (res && res.success) {
        setSuccessMessage(res.message || 'Thank you! Your message has been sent. Our team will get back to you.');
        reset();
      } else {
        setErrorMessage(res?.message || 'Failed to send your message. Please try again.');
      }
    } catch (err) {
      const status = err?.response?.status;
      const detail = err?.response?.data?.detail;
      if (status === 429) {
        setErrorMessage(detail || 'Your message was already received. Please wait a moment before submitting again.');
      } else if (status === 422) {
        setErrorMessage(typeof detail === 'string' ? detail : JSON.stringify(detail));
      } else if (!err?.response) {
        setErrorMessage('Cannot reach the server. Please make sure the backend is running on port 8000.');
      } else {
        setErrorMessage(`Submission failed (${status}). Please try again.`);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-left" noValidate>
      {successMessage && (
        <div className="p-5 rounded-2xl bg-[#DCFCE7] border border-[#86EFAC] flex items-start gap-3 shadow-sm">
          <CheckCircle2 className="w-5 h-5 text-[#16A34A] shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-sm text-[#166534]">Message Sent Successfully</p>
            <p className="text-xs font-normal mt-0.5 text-[#15803D]">{successMessage}</p>
          </div>
        </div>
      )}
      {errorMessage && (
        <div className="p-5 rounded-2xl bg-red-50 border border-red-200 flex items-start gap-3 shadow-sm">
          <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-sm text-red-700">Error Sending Message</p>
            <p className="text-xs font-normal mt-0.5 text-red-600">{errorMessage}</p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label="Full Name *"
          placeholder="e.g. Rahul Verma"
          {...register('fullName', {
            required: 'Full name is required.',
            minLength: { value: 2, message: 'Name must be at least 2 characters.' },
            validate: v => v.trim().length >= 2 || 'Full name is required.',
          })}
          error={errors.fullName?.message}
        />
        <Input
          label="Email Address *"
          type="email"
          placeholder="rahul@example.com"
          {...register('email', {
            required: 'Email address is required.',
            pattern: { value: EMAIL_REGEX, message: 'Invalid email address.' },
            validate: v => EMAIL_REGEX.test(v.trim()) || 'Invalid email address.',
          })}
          error={errors.email?.message}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label="Phone Number"
          placeholder="e.g. +91 9876543210 (Optional)"
          {...register('phone', { validate: validatePhone })}
          error={errors.phone?.message}
        />
        <Input
          label="Subject *"
          placeholder="e.g. Nursing Job Inquiry / General Questions"
          {...register('subject', {
            required: 'Subject is required.',
            validate: v => v.trim().length > 0 || 'Subject is required.',
          })}
          error={errors.subject?.message}
        />
      </div>

      <div className="space-y-1">
        <label className="block text-sm font-semibold text-[#0F172A]">Message *</label>
        <textarea
          rows={4}
          placeholder="Tell us how we can help, and our team will get back to you..."
          className="w-full px-4 py-3 text-sm text-[#0F172A] bg-white border border-[#CBD5E1] rounded-xl outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10 transition-all placeholder:text-[#94A3B8]"
          {...register('message', {
            required: 'Message is required.',
            minLength: { value: 10, message: 'Message must be at least 10 characters.' },
            validate: v => v.trim().length >= 10 || 'Message must be at least 10 characters.',
          })}
        />
        {errors.message && <p className="text-xs text-red-600 font-medium">{errors.message.message}</p>}
      </div>

      <div className="flex items-start gap-2.5 pt-1">
        <input
          type="checkbox"
          id="contactConsent"
          className="mt-1 rounded border-gray-300 text-[#2563EB] focus:ring-[#2563EB] w-4 h-4 cursor-pointer"
          {...register('consent', { required: 'You must consent to the privacy policy to submit.' })}
        />
        <label htmlFor="contactConsent" className="text-xs text-[#64748B] leading-relaxed cursor-pointer select-none">
          I consent to GLOBALFLY Consultancy Pvt Ltd storing and processing my submitted details to respond to my enquiry in accordance with the Privacy Policy.
        </label>
      </div>
      {errors.consent && <p className="text-xs text-red-600 font-medium">{errors.consent.message}</p>}

      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={isSubmitting}
          icon={Send}
          className="w-full justify-center shadow-md hover:shadow-lg font-bold transition-all"
        >
          {isSubmitting ? <LoadingSpinner size="sm" /> : 'Send Message'}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
