import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CheckCircle2, Send, Upload, AlertCircle } from 'lucide-react';
import Input from '../ui/Input';
import Select from '../ui/Select';
import Button from '../ui/Button';
import LoadingSpinner from '../ui/LoadingSpinner';
import { submitChefApplication } from '../../services/api';

const EMAIL_REGEX = /^[A-Z0-9._%+\-]+@[A-Z0-9.\-]+\.[A-Z]{2,}$/i;

const validatePhone = (value) => {
  const national = (value || '').trim().replace(/^\+\d{1,4}[\s\-.]?/, '');
  const digits = national.replace(/\D/g, '');
  return digits.length === 10 || 'Please enter a valid 10-digit phone number.';
};

const CUISINE_OPTIONS = [
  'Indian Cuisine', 'Continental Cuisine', 'Italian Cuisine',
  'Bakery and Pastry', 'Multi-Cuisine', 'Other',
];
const EXPERIENCE_OPTIONS = ['Fresher (0-1 Year)', '1-2 Years', '3-5 Years', '5+ Years'];
const QUALIFICATION_OPTIONS = [
  'Degree in Culinary Arts', 'Diploma in Hotel Management',
  'Craft Certification / Apprenticeship', 'Other Culinary Credential',
];
const PREFERRED_ROLE_OPTIONS = [
  'Executive Chef / Head Chef', 'Sous Chef', 'Chef de Partie',
  'Commis Chef / Line Cook', 'Bakery & Pastry Chef', 'Specialty Indian Chef',
];
const GERMAN_OPTIONS = ['None / Beginner', 'A1 Certificate', 'A2 Certificate', 'B1 Certificate', 'B2+ Certificate'];
const ENGLISH_OPTIONS = ['Basic', 'Intermediate', 'Fluent'];

export const ChefForm = () => {
  const {
    register, handleSubmit, watch, reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      cuisineSpecialisation: CUISINE_OPTIONS[0],
      yearsOfExperience:     EXPERIENCE_OPTIONS[1],
      qualification:         QUALIFICATION_OPTIONS[0],
      preferredRole:         PREFERRED_ROLE_OPTIONS[1],
      germanLevel:           GERMAN_OPTIONS[0],
      englishLevel:          ENGLISH_OPTIONS[1],
    }
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage,   setErrorMessage]   = useState('');

  const cuisineSelected = watch('cuisineSpecialisation');

  const onSubmit = async (data) => {
    setSuccessMessage('');
    setErrorMessage('');
    console.log('[ChefForm] Submitting:', data);

    try {
      const formData = new FormData();
      Object.keys(data).forEach((key) => {
        if (key === 'resume') {
          if (data[key] && data[key].length > 0) formData.append('resume', data[key][0]);
        } else if (data[key] !== undefined && data[key] !== null && data[key] !== '') {
          formData.append(key, typeof data[key] === 'string' ? data[key].trim() : data[key]);
        }
      });

      console.log('[ChefForm] FormData:');
      for (const [k, v] of formData.entries()) console.log(`  ${k}: ${v}`);

      const res = await submitChefApplication(formData);
      if (res.success) {
        setSuccessMessage(res.message || 'Your Chef Details have been sent successfully!');
        reset();
      } else {
        setErrorMessage(res.message || 'Submission failed. Please try again.');
      }
    } catch (err) {
      console.error('[ChefForm] Error:', err);
      const status = err?.response?.status;
      const detail = err?.response?.data?.detail;
      if (status === 409) {
        setErrorMessage(detail || 'You have already submitted an application for this position using this email address.');
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
            <p className="font-bold text-sm text-[#166534]">Chef Enquiry Received</p>
            <p className="text-xs font-normal mt-0.5 text-[#15803D]">{successMessage}</p>
          </div>
        </div>
      )}
      {errorMessage && (
        <div className="p-5 rounded-2xl bg-red-50 border border-red-200 flex items-start gap-3 shadow-sm">
          <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-sm text-red-700">Submission Error</p>
            <p className="text-xs font-normal mt-0.5 text-red-600">{errorMessage}</p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label="Full Name *"
          placeholder="e.g. Vikram Singh"
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
          placeholder="vikram@example.com"
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
          label="Phone Number with Country Code *"
          placeholder="+91 9876543210"
          type="tel"
          inputMode="tel"
          onKeyDown={(e) => {
            const allowed = /^[0-9+\-\s.]$/.test(e.key);
            const isControl = e.ctrlKey || e.metaKey;
            const isNav = ['Backspace','Delete','Tab','Enter','ArrowLeft','ArrowRight','Home','End'].includes(e.key);
            if (!allowed && !isControl && !isNav) e.preventDefault();
          }}
          onPaste={(e) => {
            e.preventDefault();
            const pasted = (e.clipboardData || window.clipboardData).getData('text');
            const clean = pasted.replace(/[^0-9+\-\s.]/g, '');
            document.execCommand('insertText', false, clean);
          }}
          {...register('phone', {
            required: 'Phone number is required.',
            validate: validatePhone,
          })}
          error={errors.phone?.message}
        />
        <Input
          label="Current Location *"
          placeholder="City, Country (e.g. Mumbai, India)"
          {...register('currentLocation', {
            required: 'Current location is required.',
            validate: v => v.trim().length > 0 || 'Current location is required.',
          })}
          error={errors.currentLocation?.message}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label="Current Job Title *"
          placeholder="e.g. Executive Sous Chef / Commis I"
          {...register('currentJobTitle', {
            required: 'Current job title is required.',
            validate: v => v.trim().length > 0 || 'Current job title is required.',
          })}
          error={errors.currentJobTitle?.message}
        />
        <Select
          label="Cuisine Specialisation *"
          options={CUISINE_OPTIONS}
          {...register('cuisineSpecialisation', { required: 'Cuisine specialisation is required.' })}
          error={errors.cuisineSpecialisation?.message}
        />
      </div>

      {cuisineSelected === 'Other' && (
        <Input
          label="Specify Other Cuisine *"
          placeholder="e.g. Japanese / Thai / Mediterranean"
          {...register('otherCuisine', {
            required: 'Please specify your cuisine specialisation.',
            validate: v => v.trim().length > 0 || 'Please specify your cuisine specialisation.',
          })}
          error={errors.otherCuisine?.message}
        />
      )}

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Select
          label="Years of Experience *"
          options={EXPERIENCE_OPTIONS}
          {...register('yearsOfExperience', { required: 'Experience is required.' })}
          error={errors.yearsOfExperience?.message}
        />
        <Select
          label="Highest Qualification *"
          options={QUALIFICATION_OPTIONS}
          {...register('qualification', { required: 'Qualification is required.' })}
          error={errors.qualification?.message}
        />
        <Select
          label="Preferred Role"
          options={PREFERRED_ROLE_OPTIONS}
          {...register('preferredRole')}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Select
          label="German Language Level *"
          options={GERMAN_OPTIONS}
          {...register('germanLevel', { required: 'German level is required.' })}
          error={errors.germanLevel?.message}
        />
        <Select
          label="English Language Level *"
          options={ENGLISH_OPTIONS}
          {...register('englishLevel', { required: 'English level is required.' })}
          error={errors.englishLevel?.message}
        />
      </div>

      <div className="space-y-1">
        <label className="block text-xs font-semibold text-[#475569] flex items-center gap-1.5">
          <Upload className="w-3.5 h-3.5 text-[#2563EB]" />
          Upload Culinary CV / Resume{' '}
          <span className="text-[#94A3B8] font-normal">(Optional — PDF, DOC, DOCX up to 10 MB)</span>
        </label>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          className="w-full text-xs text-[#64748B] file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-[#EFF6FF] file:text-[#2563EB] hover:file:bg-[#DBEAFE] cursor-pointer"
          {...register('resume')}
        />
      </div>

      <div className="space-y-1">
        <label className="block text-sm font-semibold text-[#0F172A]">
          Additional Message <span className="text-xs font-normal text-[#64748B]">(Optional)</span>
        </label>
        <textarea
          rows={3}
          placeholder="Detail your kitchen station experience, hotel brands worked with, or notice period..."
          className="w-full px-4 py-3 text-sm text-[#0F172A] bg-white border border-[#CBD5E1] rounded-xl outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10 transition-all placeholder:text-[#94A3B8]"
          {...register('additionalMessage')}
        />
      </div>

      <div className="flex items-start gap-2 pt-2">
        <input
          type="checkbox"
          id="chefConsent"
          className="mt-1 rounded border-gray-300 text-[#2563EB] focus:ring-[#2563EB] w-4 h-4 cursor-pointer"
          {...register('consent', { required: 'You must consent to the privacy policy to submit.' })}
        />
        <label htmlFor="chefConsent" className="text-xs text-[#64748B] leading-relaxed cursor-pointer select-none">
          I consent to GLOBALFLY Consultancy Pvt Ltd holding my profile to contact me regarding culinary and chef recruitment opportunities in Germany.
        </label>
      </div>
      {errors.consent && <p className="text-xs text-red-600 font-medium">{errors.consent.message}</p>}

      <div className="pt-2">
        <Button type="submit" variant="gold" size="lg" disabled={isSubmitting} className="w-full justify-center">
          {isSubmitting ? <LoadingSpinner size="sm" /> : 'Send My Details'}
        </Button>
      </div>

      <p className="text-[11px] text-[#64748B] text-center pt-2 leading-relaxed italic border-t border-[#F1F5F9]">
        Submitting this form allows our team to review your profile. Submission does not guarantee employment or visa approval.
      </p>
    </form>
  );
};

export default ChefForm;
