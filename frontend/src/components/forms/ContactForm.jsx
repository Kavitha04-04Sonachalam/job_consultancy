import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
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
      const res = await submitContact(data);
      if (res.success) {
        setSuccessMessage(res.message);
        reset();
      } else {
        setErrorMessage(res.message || 'Failed to send message.');
      }
    } catch (err) {
      setErrorMessage('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-left">
      {successMessage && (
        <div className="p-4 rounded-xl bg-[#DCFCE7] border border-[#BBF7D0] text-xs font-semibold text-[#166534]">
          ✓ {successMessage}
        </div>
      )}

      {errorMessage && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-xs font-semibold text-red-700">
          ✕ {errorMessage}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label="Your Full Name *"
          placeholder="e.g. Rahul Verma"
          {...register('name', { required: 'Full name is required' })}
          error={errors.name?.message}
        />
        <Input
          label="Email Address *"
          type="email"
          placeholder="rahul@example.com"
          {...register('email', { required: 'Email is required' })}
          error={errors.email?.message}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label="Phone / WhatsApp *"
          placeholder="+91 98765 43210"
          {...register('phone', { required: 'Phone number is required' })}
          error={errors.phone?.message}
        />
        <Input
          label="Subject / Topic *"
          placeholder="e.g. Nursing Job in Germany"
          {...register('subject', { required: 'Subject is required' })}
          error={errors.subject?.message}
        />
      </div>

      <div className="space-y-1">
        <label className="block text-sm font-semibold text-[#0F172A]">
          Your Message / Query *
        </label>
        <textarea
          rows={4}
          placeholder="Write your detailed inquiry here..."
          className="w-full px-4 py-3 text-sm text-[#0F172A] bg-white border border-[#CBD5E1] rounded-xl outline-none focus:border-[#2563EB]"
          {...register('message', { required: 'Message content is required' })}
        />
        {errors.message && (
          <p className="text-xs text-red-600 font-medium">{errors.message.message}</p>
        )}
      </div>

      <div className="pt-2">
        <Button type="submit" variant="primary" size="md" disabled={loading} className="w-full justify-center">
          {loading ? <LoadingSpinner size="sm" /> : 'Send Message'}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
