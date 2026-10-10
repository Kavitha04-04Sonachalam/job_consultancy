import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CheckCircle2, HeartPulse, Send, Upload, AlertCircle } from 'lucide-react';
import Input from '../ui/Input';
import Select from '../ui/Select';
import Button from '../ui/Button';
import LoadingSpinner from '../ui/LoadingSpinner';
import { submitNursingApplication } from '../../services/api';

export const NursingForm = () => {
  const { register, handleSubmit, reset, watch, setValue, formState: { errors } } = useForm({
    defaultValues: {
      qualification: 'B.Sc. Nursing — Qualified',
      germanLevel: 'None / Not Started',
      workExperience: '1–2 Years',
    }
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const currentQualification = watch('qualification');

  // Screenshot Reference: "What is your current nursing status?"
  const nursingStatusOptions = [
    { label: 'B.Sc. Nursing — Qualified', desc: 'Graduated degree in nursing' },
    { label: 'B.Sc. Nursing — Pursuing', desc: 'Currently in final or active year' },
    { label: 'GNM — Qualified', desc: 'Completed diploma in general nursing' },
    { label: 'GNM — Pursuing', desc: 'Currently studying GNM diploma' },
    { label: 'Post Basic / M.Sc. Nursing', desc: 'Advanced or post-basic degree' },
  ];

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

      // Ensure field parity for backend
      formData.append('currentLocation', data.currentLocation || data.currentCityCountry || '');
      formData.append('currentCityCountry', data.currentLocation || '');
      formData.append('yearsOfExperience', data.workExperience || '');
      formData.append('enquiry', data.message || '');

      const res = await submitNursingApplication(formData);
      if (res.success) {
        setSuccessMessage(res.message || 'Thank you! Your Nursing Enquiry has been successfully submitted. Our Germany healthcare advisory team will contact you soon.');
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
            <p className="font-bold">Enquiry Received Successfully</p>
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

      {/* 1. Nursing Status Selection (Leverage Edu Screenshot Reference) */}
      <div className="space-y-3 bg-[#F8FAFC] p-4 sm:p-5 rounded-2xl border border-[#E2E8F0]">
        <label className="block text-sm font-bold text-[#0F172A]">
          What is your current nursing status? <span className="text-red-500">*</span>
        </label>
        <p className="text-xs text-[#64748B] -mt-1">
          Select the option matching your clinical qualification status:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
          {nursingStatusOptions.map((opt) => {
            const isSelected = currentQualification === opt.label;
            return (
              <button
                type="button"
                key={opt.label}
                onClick={() => setValue('qualification', opt.label, { shouldValidate: true })}
                className={`p-3.5 rounded-xl border text-left transition-all flex items-center justify-between gap-3 ${
                  isSelected
                    ? 'border-[#2563EB] bg-[#EFF6FF] text-[#0F172A] shadow-sm ring-2 ring-[#2563EB]/20'
                    : 'border-[#CBD5E1] bg-white text-[#334155] hover:border-[#94A3B8] hover:bg-[#F1F5F9]'
                }`}
              >
                <div>
                  <div className="text-xs sm:text-sm font-bold text-[#0F172A]">{opt.label}</div>
                  <div className="text-[11px] text-[#64748B] mt-0.5">{opt.desc}</div>
                </div>
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                    isSelected ? 'border-[#2563EB] bg-[#2563EB]' : 'border-[#94A3B8]'
                  }`}
                >
                  {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                </div>
              </button>
            );
          })}
        </div>
        <input
          type="hidden"
          {...register('qualification', { required: 'Please select your current nursing status' })}
        />
        {errors.qualification && (
          <p className="text-xs text-red-600 font-medium">{errors.qualification.message}</p>
        )}
      </div>

      {/* 2. Contact Information */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label="Full Name *"
          placeholder="e.g. Anitha Joseph"
          {...register('fullName', {
            required: 'Full Name is required',
            minLength: { value: 2, message: 'Name must be at least 2 characters' }
          })}
          error={errors.fullName?.message}
        />
        <Input
          label="Email Address *"
          type="email"
          placeholder="anitha@example.com"
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
          placeholder="e.g. Kochi, Kerala / Mumbai, India"
          {...register('currentLocation', { required: 'Current location is required' })}
          error={errors.currentLocation?.message}
        />
      </div>

      {/* 3. Qualifications, Experience & Language */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Select
          label="Years of Experience *"
          options={[
            'Fresher / Under 1 Year',
            '1–2 Years',
            '2–4 Years',
            '5+ Years'
          ]}
          {...register('workExperience', { required: 'Years of experience is required' })}
          error={errors.workExperience?.message}
        />
        <Select
          label="German Language Level *"
          options={[
            'None / Not Started',
            'A1 Beginner',
            'A2 Elementary',
            'B1 Intermediate (Required for Visa)',
            'B2 Upper Intermediate'
          ]}
          {...register('germanLevel', { required: 'German language level is required' })}
          error={errors.germanLevel?.message}
        />
      </div>

      {/* 4. Message or Enquiry */}
      <div className="space-y-1">
        <label className="block text-sm font-semibold text-[#0F172A]">
          Message or Enquiry <span className="text-xs font-normal text-[#64748B]">(Optional)</span>
        </label>
        <textarea
          rows={3}
          placeholder="Ask questions regarding hospital placements, B1/B2 training, qualification recognition, or visa process..."
          className="w-full px-4 py-3 text-sm text-[#0F172A] bg-white border border-[#CBD5E1] rounded-xl outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10 transition-all placeholder:text-[#94A3B8]"
          {...register('message')}
        />
      </div>

      {/* 5. Optional Resume Upload */}
      <div className="space-y-1">
        <label className="block text-xs font-semibold text-[#475569] flex items-center gap-1.5">
          <Upload className="w-3.5 h-3.5 text-[#2563EB]" />
          Attach Nursing Resume / CV <span className="text-[#94A3B8] font-normal">(Optional — PDF, DOC, DOCX up to 10MB)</span>
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
          id="nursingConsent"
          className="mt-1 rounded border-gray-300 text-[#2563EB] focus:ring-[#2563EB] w-4 h-4 cursor-pointer"
          {...register('consent', { required: 'You must consent to the privacy policy to submit' })}
        />
        <label htmlFor="nursingConsent" className="text-xs text-[#64748B] leading-relaxed cursor-pointer select-none">
          I consent to GLOBALFLY Consultancy Pvt Ltd storing my contact information and reviewing my nursing qualifications to contact me regarding Germany nursing opportunities in accordance with the Privacy Policy.
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
          {loading ? <LoadingSpinner size="sm" /> : 'Submit Enquiry'}
        </Button>
      </div>
    </form>
  );
};

export default NursingForm;
