import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../ui/Input';
import Select from '../ui/Select';
import Button from '../ui/Button';
import LoadingSpinner from '../ui/LoadingSpinner';
import { submitNursingApplication } from '../../services/api';

export const NursingForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
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
        if (key === 'resume' && data[key][0]) {
          formData.append('resume', data[key][0]);
        } else {
          formData.append(key, data[key]);
        }
      });

      const res = await submitNursingApplication(formData);
      if (res.success) {
        setSuccessMessage(res.message || 'Your Nursing Application has been submitted successfully!');
        reset();
      } else {
        setErrorMessage(res.message || 'Submission failed. Please try again.');
      }
    } catch (err) {
      setErrorMessage('Network error during application submission.');
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
          label="Full Name *"
          placeholder="e.g. Anitha Joseph"
          {...register('fullName', { required: 'Full Name is required' })}
          error={errors.fullName?.message}
        />
        <Input
          label="Email Address *"
          type="email"
          placeholder="anitha@example.com"
          {...register('email', { required: 'Email address is required' })}
          error={errors.email?.message}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label="Phone Number with Country Code *"
          placeholder="+91 98765 43210"
          {...register('phone', { required: 'Phone number with country code is required' })}
          error={errors.phone?.message}
        />
        <Input
          label="Current City and Country *"
          placeholder="e.g. Kochi, India"
          {...register('currentCityCountry', { required: 'Current city & country is required' })}
          error={errors.currentCityCountry?.message}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Select
          label="Nursing Qualification *"
          options={[
            'General Nursing & Midwifery (GNM)',
            'B.Sc Nursing',
            'Post Basic B.Sc Nursing',
            'M.Sc Nursing',
            'Other Nursing Credential'
          ]}
          {...register('qualification', { required: 'Nursing qualification is required' })}
          error={errors.qualification?.message}
        />
        <Input
          label="Graduation Year *"
          placeholder="e.g. 2021"
          {...register('graduationYear', { required: 'Graduation year is required' })}
          error={errors.graduationYear?.message}
        />
        <Select
          label="Work Experience *"
          options={['Fresher (0 Years)', '1–2 Years', '3–5 Years', '5+ Years']}
          {...register('workExperience', { required: 'Work experience required' })}
          error={errors.workExperience?.message}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Select
          label="Current German Language Level *"
          options={['None / Beginner', 'A1 Certificate', 'A2 Certificate', 'B1 Certificate', 'B2+ Certificate']}
          {...register('germanLevel', { required: 'German level required' })}
          error={errors.germanLevel?.message}
        />
        <Select
          label="Valid Passport Availability *"
          options={['Yes (Valid Passport)', 'Applied / In Process', 'No Passport Yet']}
          {...register('passportAvailability', { required: 'Passport availability required' })}
          error={errors.passportAvailability?.message}
        />
        <Select
          label="Preferred Contact Method *"
          options={['WhatsApp', 'Phone Call', 'Email']}
          {...register('contactMethod')}
        />
      </div>

      <div className="space-y-1">
        <label className="block text-sm font-semibold text-[#0F172A]">
          Upload Nursing Resume / CV (PDF, DOC, DOCX) *
        </label>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          className="w-full text-xs text-[#64748B] file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-[#EFF6FF] file:text-[#2563EB] hover:file:bg-[#DBEAFE] cursor-pointer"
          {...register('resume', { required: 'Resume upload is required' })}
        />
        {errors.resume && (
          <p className="text-xs text-red-600 font-medium">{errors.resume.message}</p>
        )}
      </div>

      <div className="flex items-start gap-2 pt-2">
        <input
          type="checkbox"
          id="nursingConsent"
          className="mt-1 rounded border-gray-300 text-[#2563EB] focus:ring-[#2563EB]"
          {...register('consent', { required: 'You must consent to the privacy policy to submit' })}
        />
        <label htmlFor="nursingConsent" className="text-xs text-[#64748B] leading-relaxed">
          I consent to GlobalFly Consultancy Pvt Ltd reviewing my profile and contacting me regarding nursing opportunities in Germany in accordance with the Privacy Policy.
        </label>
      </div>
      {errors.consent && (
        <p className="text-xs text-red-600 font-medium">{errors.consent.message}</p>
      )}

      <div className="pt-2">
        <Button type="submit" variant="primary" size="lg" disabled={loading} className="w-full justify-center">
          {loading ? <LoadingSpinner size="sm" /> : 'Submit Nursing Application'}
        </Button>
      </div>
    </form>
  );
};

export default NursingForm;
