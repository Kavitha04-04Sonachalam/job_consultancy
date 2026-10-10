import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CheckCircle2, Send, AlertCircle } from 'lucide-react';
import Input from '../ui/Input';
import Button from '../ui/Button';
import LoadingSpinner from '../ui/LoadingSpinner';
import { submitContact } from '../../services/api';

export const ContactForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async (data) => {
    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');
    try {
      // Format payload ensuring field compatibility
      const payload = {
        name: data.fullName || data.name,
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        subject: data.subject,
        message: data.message,
        consent: Boolean(data.consent)
      };

      const res = await submitContact(payload);
      if (res && res.success) {
        setSuccessMessage(res.message || 'Thank you! Your message has been sent successfully. Our team will get back to you.');
        reset();
      } else {
        setErrorMessage(res?.message || 'Failed to send your message. Please try again.');
      }
    } catch (err) {
      setErrorMessage(err?.response?.data?.detail || 'Network error occurred. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-left">
      {successMessage && (
        <div className="p-5 rounded-2xl bg-[#DCFCE7] border border-[#86EFAC] text-sm font-semibold text-[#166534] flex items-start gap-3 shadow-sm animate-fadeIn">
          <CheckCircle2 className="w-5 h-5 text-[#16A34A] shrink-0 mt-0.5" />
          <div>
            <p className="font-bold">Message Sent Successfully</p>
            <p className="text-xs font-normal mt-0.5 text-[#15803D]">{successMessage}</p>
          </div>
        </div>
      )}

      {errorMessage && (
        <div className="p-5 rounded-2xl bg-red-50 border border-red-200 text-sm font-semibold text-red-700 flex items-start gap-3 shadow-sm animate-fadeIn">
          <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <div>
            <p className="font-bold">Error Sending Message</p>
            <p className="text-xs font-normal mt-0.5 text-red-600">{errorMessage}</p>
          </div>
        </div>
      )}

      {/* Name and Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label="Full Name *"
          placeholder="e.g. Rahul Verma"
          {...register('fullName', {
            required: 'Full name is required',
            minLength: { value: 2, message: 'Name must be at least 2 characters' }
          })}
          error={errors.fullName?.message}
        />
        <Input
          label="Email Address *"
          type="email"
          placeholder="rahul@example.com"
          {...register('email', {
            required: 'Email address is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address'
            }
          })}
          error={errors.email?.message}
        />
      </div>

      {/* Phone and Subject */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label="Phone Number *"
          placeholder="e.g. +91 98765 43210"
          {...register('phone', {
            required: 'Phone number is required',
            minLength: { value: 8, message: 'Please enter a valid phone number' }
          })}
          error={errors.phone?.message}
        />
        <Input
          label="Subject *"
          placeholder="e.g. Nursing Job Inquiry / General Questions"
          {...register('subject', { required: 'Subject is required' })}
          error={errors.subject?.message}
        />
      </div>

      {/* Message */}
      <div className="space-y-1">
        <label className="block text-sm font-semibold text-[#0F172A]">
          Message *
        </label>
        <textarea
          rows={4}
          placeholder="Tell us how we can help, and our team will get back to you..."
          className="w-full px-4 py-3 text-sm text-[#0F172A] bg-white border border-[#CBD5E1] rounded-xl outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10 transition-all placeholder:text-[#94A3B8]"
          {...register('message', {
            required: 'Message is required',
            minLength: { value: 10, message: 'Message should be at least 10 characters' }
          })}
        />
        {errors.message && (
          <p className="text-xs text-red-600 font-medium">{errors.message.message}</p>
        )}
      </div>

      {/* Privacy Consent */}
      <div className="flex items-start gap-2.5 pt-1">
        <input
          type="checkbox"
          id="contactConsent"
          className="mt-1 rounded border-gray-300 text-[#2563EB] focus:ring-[#2563EB] w-4 h-4 cursor-pointer"
          {...register('consent', { required: 'You must consent to the privacy policy to submit' })}
        />
        <label htmlFor="contactConsent" className="text-xs text-[#64748B] leading-relaxed cursor-pointer select-none">
          I consent to GLOBALFLY Consultancy Pvt Ltd storing and processing my submitted details to respond to my enquiry in accordance with the Privacy Policy.
        </label>
      </div>
      {errors.consent && (
        <p className="text-xs text-red-600 font-medium">{errors.consent.message}</p>
      )}

      {/* CTA Button */}
      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={loading}
          icon={Send}
          className="w-full justify-center shadow-md hover:shadow-lg font-bold transition-all"
        >
          {loading ? <LoadingSpinner size="sm" /> : 'Send Message'}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
