import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CheckCircle2, Wrench, Send, Upload, AlertCircle } from 'lucide-react';
import Input from '../ui/Input';
import Select from '../ui/Select';
import Button from '../ui/Button';
import LoadingSpinner from '../ui/LoadingSpinner';
import { submitEngineeringApplication } from '../../services/api';

export const EngineeringForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      discipline: 'Mechanical & Mechatronics',
      experience: '2–4 Years',
      germanLevel: 'None / Beginner (English Fluent)'
    }
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async (data) => {
    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');
    try {
      const formData = new FormData();
      Object.keys(data).forEach((key) => {
        if (key === 'resume' && data[key] && data[key][0]) {
          formData.append('resume', data[key][0]);
        } else if (data[key] !== undefined && data[key] !== null) {
          formData.append(key, data[key]);
        }
      });

      const res = await submitEngineeringApplication(formData);
      if (res.success) {
        setSuccessMessage(res.message || 'Thank you! Your Engineering Enquiry has been successfully submitted. Our German technical recruitment team will review your profile.');
        reset();
      } else {
        setErrorMessage(res.message || 'Submission failed. Please check your details and try again.');
      }
    } catch (err) {
      setErrorMessage(err?.response?.data?.detail || 'Network error during submission. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-left">
      {successMessage && (
        <div className="p-5 rounded-2xl bg-[#DCFCE7] border border-[#86EFAC] text-sm font-semibold text-[#166534] flex items-start gap-3 shadow-sm animate-fadeIn">
          <CheckCircle2 className="w-5 h-5 text-[#16A34A] shrink-0 mt-0.5" />
          <div>
            <p className="font-bold">Engineering Enquiry Received</p>
            <p className="text-xs font-normal mt-0.5 text-[#15803D]">{successMessage}</p>
          </div>
        </div>
      )}

      {errorMessage && (
        <div className="p-5 rounded-2xl bg-red-50 border border-red-200 text-sm font-semibold text-red-700 flex items-start gap-3 shadow-sm animate-fadeIn">
          <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <div>
            <p className="font-bold">Submission Error</p>
            <p className="text-xs font-normal mt-0.5 text-red-600">{errorMessage}</p>
          </div>
        </div>
      )}

      {/* 1. Contact Information */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label="Full Name *"
          placeholder="e.g. Vikram Sharma"
          {...register('fullName', {
            required: 'Full Name is required',
            minLength: { value: 2, message: 'Name must be at least 2 characters' }
          })}
          error={errors.fullName?.message}
        />
        <Input
          label="Email Address *"
          type="email"
          placeholder="vikram@example.com"
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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label="Phone Number with Country Code *"
          placeholder="e.g. +91 98765 43210"
          {...register('phone', {
            required: 'Phone number with country code is required',
            minLength: { value: 8, message: 'Please enter a valid phone number with country code' }
          })}
          error={errors.phone?.message}
        />
        <Input
          label="Current Location *"
          placeholder="e.g. Bengaluru, India / Pune, India"
          {...register('currentLocation', { required: 'Current location is required' })}
          error={errors.currentLocation?.message}
        />
      </div>

      {/* 2. Engineering Discipline & Qualification */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Select
          label="Engineering Discipline *"
          options={[
            'Mechanical & Mechatronics',
            'Electrical & Automation',
            'IT & Software Engineering',
            'Automotive & Vehicle Systems',
            'Civil & Structural Engineering',
            'Industrial & Production Engineering',
            'Other Engineering Discipline'
          ]}
          {...register('discipline', { required: 'Engineering discipline is required' })}
          error={errors.discipline?.message}
        />
        <Select
          label="Highest Qualification *"
          options={[
            'Bachelor of Engineering (B.E / B.Tech)',
            'Master of Engineering (M.E / M.Tech / M.S)',
            'Polytechnic / Advanced Diploma',
            'Other Technical Credential'
          ]}
          {...register('qualification', { required: 'Qualification is required' })}
          error={errors.qualification?.message}
        />
      </div>

      {/* 3. Experience & German Level */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Select
          label="Relevant Work Experience *"
          options={[
            'Fresher / Under 1 Year',
            '1–2 Years',
            '2–4 Years',
            '5+ Years'
          ]}
          {...register('experience', { required: 'Work experience is required' })}
          error={errors.experience?.message}
        />
        <Select
          label="German Language Level *"
          options={[
            'None / Beginner (English Fluent)',
            'A1 German Completed',
            'A2 German Completed',
            'B1 German (Eligible for broader roles)',
            'B2+ Fluent Professional'
          ]}
          {...register('germanLevel', { required: 'German language level is required' })}
          error={errors.germanLevel?.message}
        />
      </div>

      {/* 4. Message or Enquiry */}
      <div className="space-y-1">
        <label className="block text-sm font-semibold text-[#0F172A]">
          Message or Technical Profile Summary <span className="text-xs font-normal text-[#64748B]">(Optional)</span>
        </label>
        <textarea
          rows={3}
          placeholder="Mention your key software/CAD tools, industry domain, notice period, or EU Blue Card inquiries..."
          className="w-full px-4 py-3 text-sm text-[#0F172A] bg-white border border-[#CBD5E1] rounded-xl outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10 transition-all placeholder:text-[#94A3B8]"
          {...register('message')}
        />
      </div>

      {/* 5. Optional Resume Upload */}
      <div className="space-y-1">
        <label className="block text-xs font-semibold text-[#475569] flex items-center gap-1.5">
          <Upload className="w-3.5 h-3.5 text-[#2563EB]" />
          Attach Engineering Resume / CV <span className="text-[#94A3B8] font-normal">(Optional — PDF, DOC, DOCX up to 10MB)</span>
        </label>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          className="w-full text-xs text-[#64748B] file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-[#EFF6FF] file:text-[#2563EB] hover:file:bg-[#DBEAFE] cursor-pointer"
          {...register('resume')}
        />
      </div>

      {/* 6. Privacy Consent */}
      <div className="flex items-start gap-2.5 pt-1">
        <input
          type="checkbox"
          id="engineeringConsent"
          className="mt-1 rounded border-gray-300 text-[#2563EB] focus:ring-[#2563EB] w-4 h-4 cursor-pointer"
          {...register('consent', { required: 'You must consent to the privacy policy to submit' })}
        />
        <label htmlFor="engineeringConsent" className="text-xs text-[#64748B] leading-relaxed cursor-pointer select-none">
          I consent to GLOBALFLY Consultancy Pvt Ltd reviewing my technical engineering credentials and contacting me regarding German engineering vacancies and EU Blue Card pathways in accordance with the Privacy Policy.
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
          className="w-full justify-center shadow-lg hover:shadow-xl transition-all"
        >
          {loading ? <LoadingSpinner size="sm" /> : 'Submit Engineering Enquiry'}
        </Button>
      </div>
    </form>
  );
};

export default EngineeringForm;
