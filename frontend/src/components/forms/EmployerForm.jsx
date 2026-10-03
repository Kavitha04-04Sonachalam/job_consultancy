import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../ui/Input';
import Select from '../ui/Select';
import Button from '../ui/Button';
import LoadingSpinner from '../ui/LoadingSpinner';
import { submitEmployerEnquiry } from '../../services/api';

export const EmployerForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: { country: 'Germany' }
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async (data) => {
    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');
    try {
      const res = await submitEmployerEnquiry(data);
      if (res.success) {
        setSuccessMessage(res.message);
        reset();
      } else {
        setErrorMessage(res.message || 'Submission failed.');
      }
    } catch (err) {
      setErrorMessage('Network error during employer enquiry submission.');
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
          label="Company Name *"
          placeholder="e.g. Bavarian Health Network GmbH"
          {...register('companyName', { required: 'Company Name is required' })}
          error={errors.companyName?.message}
        />
        <Input
          label="Contact Person Name *"
          placeholder="e.g. Klaus Weber"
          {...register('contactPerson', { required: 'Contact person is required' })}
          error={errors.contactPerson?.message}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Input
          label="Business Email *"
          type="email"
          placeholder="weber@company.de"
          {...register('email', { required: 'Email address is required' })}
          error={errors.email?.message}
        />
        <Input
          label="Phone Number *"
          placeholder="+49 30 123456"
          {...register('phone', { required: 'Phone number is required' })}
          error={errors.phone?.message}
        />
        <Input
          label="Company Country *"
          placeholder="Germany"
          {...register('country', { required: 'Country is required' })}
          error={errors.country?.message}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Select
          label="Industry / Sector *"
          options={[
            'Healthcare & Hospitals',
            'Hospitality & Catering',
            'Logistics & Freight',
            'Manufacturing & Engineering',
            'Construction & Trades',
            'IT & Software'
          ]}
          {...register('industry', { required: 'Industry is required' })}
          error={errors.industry?.message}
        />
        <Input
          label="Position / Role Title *"
          placeholder="e.g. Registered Nurse, CNC Machinist"
          {...register('position', { required: 'Position title is required' })}
          error={errors.position?.message}
        />
        <Input
          label="Number of Vacancies *"
          type="number"
          placeholder="e.g. 5"
          {...register('vacancies', { required: 'Vacancies count required' })}
          error={errors.vacancies?.message}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Select
          label="Required Experience Level"
          options={['Entry Level', '1–3 Years', '3–5 Years', '5+ Years']}
          {...register('requiredExperience')}
        />
        <Select
          label="Language Requirement"
          options={['German A1/A2', 'German B1/B2', 'English Only']}
          {...register('languageRequirement')}
        />
      </div>

      <div className="space-y-1">
        <label className="block text-sm font-semibold text-[#0F172A]">
          Additional Role Requirements / Hiring Criteria (Optional)
        </label>
        <textarea
          rows={3}
          placeholder="Describe specific qualifications, shift timing, housing provision..."
          className="w-full px-4 py-3 text-sm text-[#0F172A] bg-white border border-[#CBD5E1] rounded-xl outline-none focus:border-[#2563EB]"
          {...register('additionalRequirements')}
        />
      </div>

      <div className="pt-2">
        <Button type="submit" variant="gold" size="md" disabled={loading} className="w-full justify-center">
          {loading ? <LoadingSpinner size="sm" /> : 'Submit Hiring Requirement'}
        </Button>
      </div>
    </form>
  );
};

export default EmployerForm;
