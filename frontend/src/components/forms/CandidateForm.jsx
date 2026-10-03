import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../ui/Input';
import Select from '../ui/Select';
import Button from '../ui/Button';
import LoadingSpinner from '../ui/LoadingSpinner';
import { registerCandidate } from '../../services/api';

export const CandidateForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: { targetCountry: 'Germany' }
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
        if (key === 'resume' && data[key][0]) {
          formData.append('resume', data[key][0]);
        } else {
          formData.append(key, data[key]);
        }
      });

      const res = await registerCandidate(formData);
      if (res.success) {
        setSuccessMessage(res.message);
        reset();
      } else {
        setErrorMessage(res.message || 'Registration failed.');
      }
    } catch (err) {
      setErrorMessage('Network error during candidate registration.');
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
          placeholder="e.g. Suresh Kumar"
          {...register('fullName', { required: 'Full Name is required' })}
          error={errors.fullName?.message}
        />
        <Input
          label="Email Address *"
          type="email"
          placeholder="suresh@example.com"
          {...register('email', { required: 'Email address is required' })}
          error={errors.email?.message}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Input
          label="Phone / WhatsApp *"
          placeholder="+91 98765 43210"
          {...register('phone', { required: 'Phone number is required' })}
          error={errors.phone?.message}
        />
        <Input
          label="Date of Birth *"
          type="date"
          {...register('dob', { required: 'Date of birth is required' })}
          error={errors.dob?.message}
        />
        <Input
          label="Current Location *"
          placeholder="City, State, Country"
          {...register('currentLocation', { required: 'Current location is required' })}
          error={errors.currentLocation?.message}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Select
          label="Target Country"
          options={['Germany', 'Other EU Countries']}
          {...register('targetCountry')}
        />
        <Select
          label="Preferred Industry *"
          options={[
            'Healthcare & Nursing',
            'Chef & Culinary Arts',
            'Driving & Logistics',
            'Hospitality & Services',
            'Skilled Trades',
            'IT & Software',
            'Manufacturing & CNC',
            'Ausbildung Program'
          ]}
          {...register('preferredIndustry', { required: 'Industry is required' })}
          error={errors.preferredIndustry?.message}
        />
        <Select
          label="Total Experience"
          options={['Entry Level', '1–3 Years', '3–5 Years', '5+ Years']}
          {...register('experience')}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Select
          label="Education Level"
          options={['ITI / Diploma', 'Bachelor Degree', 'Master Degree', 'Other']}
          {...register('education')}
        />
        <Select
          label="German Language Level"
          options={['None / Beginner', 'A1', 'A2', 'B1', 'B2+']}
          {...register('germanLevel')}
        />
        <Select
          label="English Level"
          options={['Basic', 'Intermediate', 'Fluent']}
          {...register('englishLevel')}
        />
      </div>

      <div className="space-y-1">
        <label className="block text-sm font-semibold text-[#0F172A]">
          Upload CV / Resume (PDF, DOC, DOCX) *
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

      <div className="space-y-1">
        <label className="block text-sm font-semibold text-[#0F172A]">
          Additional Details / Key Credentials (Optional)
        </label>
        <textarea
          rows={3}
          placeholder="Mention any active registrations, passport validity, notice period..."
          className="w-full px-4 py-3 text-sm text-[#0F172A] bg-white border border-[#CBD5E1] rounded-xl outline-none focus:border-[#2563EB]"
          {...register('additionalInfo')}
        />
      </div>

      <div className="pt-2">
        <Button type="submit" variant="primary" size="md" disabled={loading} className="w-full justify-center">
          {loading ? <LoadingSpinner size="sm" /> : 'Register Candidate Profile'}
        </Button>
      </div>
    </form>
  );
};

export default CandidateForm;
