import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../ui/Input';
import Select from '../ui/Select';
import Button from '../ui/Button';
import LoadingSpinner from '../ui/LoadingSpinner';
import { submitChefApplication } from '../../services/api';

export const ChefForm = () => {
  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const cuisineSelected = watch('cuisineSpecialisation');

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

      const res = await submitChefApplication(formData);
      if (res.success) {
        setSuccessMessage(res.message || 'Your Chef Details have been sent successfully!');
        reset();
      } else {
        setErrorMessage(res.message || 'Submission failed. Please try again.');
      }
    } catch (err) {
      setErrorMessage('Network error during submission.');
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
          placeholder="e.g. Vikram Singh"
          {...register('fullName', { required: 'Full Name is required' })}
          error={errors.fullName?.message}
        />
        <Input
          label="Email Address *"
          type="email"
          placeholder="vikram@example.com"
          {...register('email', { required: 'Email address is required' })}
          error={errors.email?.message}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label="Phone Number with Country Code *"
          placeholder="+91 98765 43210"
          {...register('phone', { required: 'Phone number is required' })}
          error={errors.phone?.message}
        />
        <Input
          label="Current Location *"
          placeholder="City, Country (e.g. Mumbai, India)"
          {...register('currentLocation', { required: 'Current location is required' })}
          error={errors.currentLocation?.message}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label="Current Job Title *"
          placeholder="e.g. Executive Sous Chef / Commis I"
          {...register('currentJobTitle', { required: 'Current job title is required' })}
          error={errors.currentJobTitle?.message}
        />
        <Select
          label="Cuisine Specialisation *"
          options={[
            'Indian Cuisine',
            'Continental Cuisine',
            'Italian Cuisine',
            'Bakery and Pastry',
            'Multi-Cuisine',
            'Other'
          ]}
          {...register('cuisineSpecialisation', { required: 'Cuisine specialisation is required' })}
          error={errors.cuisineSpecialisation?.message}
        />
      </div>

      {cuisineSelected === 'Other' && (
        <Input
          label="Specify Other Cuisine Specialisation *"
          placeholder="e.g. Japanese / Thai / Mediterranean"
          {...register('otherCuisine', { required: 'Please specify your cuisine specialisation' })}
          error={errors.otherCuisine?.message}
        />
      )}

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Select
          label="Years of Experience *"
          options={['Fresher (0–1 Year)', '1–2 Years', '3–5 Years', '5+ Years']}
          {...register('yearsOfExperience', { required: 'Experience required' })}
          error={errors.yearsOfExperience?.message}
        />
        <Select
          label="Current or Highest Qualification *"
          options={[
            'Degree in Culinary Arts',
            'Diploma in Hotel Management',
            'Craft Certification / Apprenticeship',
            'Other Culinary Credential'
          ]}
          {...register('qualification', { required: 'Qualification is required' })}
          error={errors.qualification?.message}
        />
        <Select
          label="Preferred Opportunity or Role"
          options={[
            'Executive Chef / Head Chef',
            'Sous Chef',
            'Chef de Partie',
            'Commis Chef / Line Cook',
            'Bakery & Pastry Chef',
            'Specialty Indian Chef'
          ]}
          {...register('preferredRole')}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Select
          label="Current German Language Level *"
          options={['None / Beginner', 'A1 Certificate', 'A2 Certificate', 'B1 Certificate', 'B2+ Certificate']}
          {...register('germanLevel', { required: 'German level required' })}
          error={errors.germanLevel?.message}
        />
        <Select
          label="Current English Language Level *"
          options={['Basic', 'Intermediate', 'Fluent']}
          {...register('englishLevel', { required: 'English level required' })}
          error={errors.englishLevel?.message}
        />
      </div>

      <div className="space-y-1">
        <label className="block text-sm font-semibold text-[#0F172A]">
          Upload Culinary CV / Resume (PDF, DOC, DOCX) *
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
          Additional Message (Optional)
        </label>
        <textarea
          rows={3}
          placeholder="Detail your kitchen station experience, hotel brands worked with, or notice period..."
          className="w-full px-4 py-3 text-sm text-[#0F172A] bg-white border border-[#CBD5E1] rounded-xl outline-none focus:border-[#2563EB]"
          {...register('additionalMessage')}
        />
      </div>

      <div className="flex items-start gap-2 pt-2">
        <input
          type="checkbox"
          id="chefConsent"
          className="mt-1 rounded border-gray-300 text-[#2563EB] focus:ring-[#2563EB]"
          {...register('consent', { required: 'You must consent to the privacy policy to submit' })}
        />
        <label htmlFor="chefConsent" className="text-xs text-[#64748B] leading-relaxed">
          I consent to GlobalFly Consultancy Pvt Ltd holding my profile to contact me regarding culinary and chef recruitment opportunities in Germany.
        </label>
      </div>
      {errors.consent && (
        <p className="text-xs text-red-600 font-medium">{errors.consent.message}</p>
      )}

      <div className="pt-2">
        <Button type="submit" variant="gold" size="lg" disabled={loading} className="w-full justify-center">
          {loading ? <LoadingSpinner size="sm" /> : 'Send My Details'}
        </Button>
      </div>

      <p className="text-[11px] text-[#64748B] text-center pt-2 leading-relaxed italic border-t border-[#F1F5F9]">
        Submitting this form allows our team to review your profile and contact you regarding relevant opportunities. Submission does not guarantee employment or visa approval.
      </p>
    </form>
  );
};

export default ChefForm;
