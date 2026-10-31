import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CheckCircle2, Send, Upload, AlertCircle } from 'lucide-react';
import Input from '../ui/Input';
import Select from '../ui/Select';
import Button from '../ui/Button';
import LoadingSpinner from '../ui/LoadingSpinner';
import { submitEngineeringApplication } from '../../services/api';

const EMAIL_REGEX = /^[A-Z0-9._%+\-]+@[A-Z0-9.\-]+\.[A-Z]{2,}$/i;

const validatePhone = (value) => {
  const national = (value || '').trim().replace(/^\+\d{1,4}[\s\-.]?/, '');
  const digits = national.replace(/\D/g, '');
  return digits.length === 10 || 'Please enter a valid 10-digit phone number.';
};

const DISCIPLINE_OPTIONS = [
  'Mechanical & Mechatronics', 'Electrical & Automation', 'IT & Software Engineering',
  'Automotive & Vehicle Systems', 'Civil & Structural Engineering',
  'Industrial & Production Engineering', 'Other Engineering Discipline',
];
const QUALIFICATION_OPTIONS = [
  'Bachelor of Engineering (B.E / B.Tech)', 'Master of Engineering (M.E / M.Tech / M.S)',
  'Polytechnic / Advanced Diploma', 'Other Technical Credential',
];
const EXPERIENCE_OPTIONS = ['Fresher / Under 1 Year', '1-2 Years', '2-4 Years', '5+ Years'];
const GERMAN_OPTIONS = [
  'None / Beginner (English Fluent)', 'A1 German Completed', 'A2 German Completed',
  'B1 German (Eligible for broader roles)', 'B2+ Fluent Professional',
];

export const EngineeringForm = () => {
  const {
    register, handleSubmit, reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      discipline:    DISCIPLINE_OPTIONS[0],
      qualification: QUALIFICATION_OPTIONS[0],
      experience:    EXPERIENCE_OPTIONS[2],
      germanLevel:   GERMAN_OPTIONS[0],
    }
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage,   setErrorMessage]   = useState('');

  const onSubmit = async (data) => {
    setSuccessMessage('');
    setErrorMessage('');
    console.log('[EngineeringForm] Submitting:', data);

    try {
      const formData = new FormData();
      Object.keys(data).forEach((key) => {
        if (key === 'resume') {
          if (data[key] && data[key].length > 0) formData.append('resume', data[key][0]);
        } else if (data[key] !== undefined && data[key] !== null && data[key] !== '') {
          formData.append(key, typeof data[key] === 'string' ? data[key].trim() : data[key]);
        }
      });

      console.log('[EngineeringForm] FormData:');
      for (const [k, v] of formData.entries()) console.log(`  ${k}: ${v}`);

      const res = await submitEngineeringApplication(formData);
      if (res.success) {
        setSuccessMessage(res.message || 'Your Engineering Enquiry has been submitted successfully!');
        reset();
      } else {
        setErrorMessage(res.message || 'Submission failed. Please try again.');
      }
    } catch (err) {
      console.error('[EngineeringForm] Error:', err);
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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-left" noValidate>
      {successMessage && (
        <div className="p-5 rounded-2xl bg-[#DCFCE7] border border-[#86EFAC] flex items-start gap-3 shadow-sm">
          <CheckCircle2 className="w-5 h-5 text-[#16A34A] shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-sm text-[#166534]">Engineering Enquiry Received</p>
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
          placeholder="e.g. Vikram Sharma"
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
          placeholder="e.g. Bengaluru, India"
          {...register('currentLocation', {
            required: 'Current location is required.',
            validate: v => v.trim().length > 0 || 'Current location is required.',
          })}
          error={errors.currentLocation?.message}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Select
          label="Engineering Discipline *"
          options={DISCIPLINE_OPTIONS}
          {...register('discipline', { required: 'Engineering discipline is required.' })}
          error={errors.discipline?.message}
        />
        <Select
          label="Highest Qualification *"
          options={QUALIFICATION_OPTIONS}
          {...register('qualification', { required: 'Qualification is required.' })}
          error={errors.qualification?.message}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Select
          label="Relevant Work Experience *"
          options={EXPERIENCE_OPTIONS}
          {...register('experience', { required: 'Work experience is required.' })}
          error={errors.experience?.message}
        />
        <Select
          label="German Language Level *"
          options={GERMAN_OPTIONS}
          {...register('germanLevel', { required: 'German language level is required.' })}
          error={errors.germanLevel?.message}
        />
      </div>

      <div className="space-y-1">
        <label className="block text-sm font-semibold text-[#0F172A]">
          Message or Technical Profile Summary{' '}
          <span className="text-xs font-normal text-[#64748B]">(Optional)</span>
        </label>
        <textarea
          rows={3}
          placeholder="Mention your key software/CAD tools, industry domain, notice period, or EU Blue Card inquiries..."
          className="w-full px-4 py-3 text-sm text-[#0F172A] bg-white border border-[#CBD5E1] rounded-xl outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10 transition-all placeholder:text-[#94A3B8]"
          {...register('message')}
        />
      </div>

      <div className="space-y-1">
        <label className="block text-xs font-semibold text-[#475569] flex items-center gap-1.5">
          <Upload className="w-3.5 h-3.5 text-[#2563EB]" />
          Attach Engineering Resume / CV{' '}
          <span className="text-[#94A3B8] font-normal">(Optional — PDF, DOC, DOCX up to 10 MB)</span>
        </label>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          className="w-full text-xs text-[#64748B] file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-[#EFF6FF] file:text-[#2563EB] hover:file:bg-[#DBEAFE] cursor-pointer"
          {...register('resume')}
        />
      </div>

      <div className="flex items-start gap-2.5 pt-1">
        <input
          type="checkbox"
          id="engineeringConsent"
          className="mt-1 rounded border-gray-300 text-[#2563EB] focus:ring-[#2563EB] w-4 h-4 cursor-pointer"
          {...register('consent', { required: 'You must consent to the privacy policy to submit.' })}
        />
        <label htmlFor="engineeringConsent" className="text-xs text-[#64748B] leading-relaxed cursor-pointer select-none">
          I consent to GLOBALFLY Consultancy Pvt Ltd reviewing my technical engineering credentials and contacting me regarding German engineering vacancies and EU Blue Card pathways.
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
          className="w-full justify-center shadow-lg hover:shadow-xl transition-all"
        >
          {isSubmitting ? <LoadingSpinner size="sm" /> : 'Submit Engineering Enquiry'}
        </Button>
      </div>
    </form>
  );
};

export default EngineeringForm;
