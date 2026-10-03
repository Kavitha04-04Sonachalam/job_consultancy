import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../ui/Input';
import Select from '../ui/Select';
import Button from '../ui/Button';
import LoadingSpinner from '../ui/LoadingSpinner';
import { submitEligibility } from '../../services/api';

export const EligibilityForm = () => {
  const [step, setStep] = useState(1);
  const { register, handleSubmit, trigger, watch, formState: { errors } } = useForm({
    defaultValues: {
      targetCountry: 'Germany',
    }
  });

  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const formData = watch();

  const nextStep = async () => {
    let fieldsToValidate = [];
    if (step === 1) fieldsToValidate = ['fullName', 'email', 'phone', 'age'];
    if (step === 2) fieldsToValidate = ['education', 'fieldOfStudy'];
    if (step === 3) fieldsToValidate = ['totalExperience', 'currentRole'];
    if (step === 4) fieldsToValidate = ['germanLevel', 'englishLevel'];
    if (step === 5) fieldsToValidate = ['targetOpportunity'];

    const isValid = await trigger(fieldsToValidate);
    if (isValid) {
      setStep((prev) => Math.min(prev + 1, 6));
    }
  };

  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const onSubmit = async (data) => {
    setLoading(true);
    setErrorMessage('');
    try {
      const res = await submitEligibility(data);
      if (res.success) {
        setIsSubmitted(true);
      } else {
        setErrorMessage(res.message || 'Submission failed. Try again.');
      }
    } catch (err) {
      setErrorMessage('Network error during submission.');
    } finally {
      setLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12 px-6 bg-white rounded-3xl border border-[#E2E8F0] shadow-sm max-w-xl mx-auto space-y-5">
        <div className="w-16 h-16 bg-[#DCFCE7] text-[#166534] rounded-full flex items-center justify-center mx-auto text-3xl font-bold">
          ✓
        </div>
        <h3 className="text-2xl font-bold font-display text-[#0F172A]">
          Assessment Submitted Successfully
        </h3>
        <p className="text-sm text-[#475569] leading-relaxed">
          Your information has been submitted for an eligibility assessment.
        </p>
        <p className="text-xs text-[#64748B]">
          A GlobalFly consultancy expert will evaluate your profile details against current German immigration guidelines and reach out via email/phone.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl border border-[#E2E8F0] p-6 sm:p-10 shadow-sm max-w-2xl mx-auto text-left">
      {/* Step Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-xs font-bold text-[#2563EB] uppercase mb-2">
          <span>Step {step} of 6</span>
          <span>
            {step === 1 && 'Personal Information'}
            {step === 2 && 'Education Background'}
            {step === 3 && 'Work Experience'}
            {step === 4 && 'Language Proficiency'}
            {step === 5 && 'Target Opportunity'}
            {step === 6 && 'Review & Final Submit'}
          </span>
        </div>
        <div className="w-full h-2 bg-[#F1F5F9] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#2563EB] transition-all duration-300"
            style={{ width: `${(step / 6) * 100}%` }}
          />
        </div>
      </div>

      {errorMessage && (
        <div className="p-4 mb-4 rounded-xl bg-red-50 border border-red-200 text-xs font-semibold text-red-700">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Step 1: Personal Info */}
        {step === 1 && (
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-[#0F172A] font-display">Step 1: Personal Details</h4>
            <Input
              label="Full Name *"
              placeholder="e.g. Rahul Sharma"
              {...register('fullName', { required: 'Full Name is required' })}
              error={errors.fullName?.message}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="Email Address *"
                type="email"
                placeholder="rahul@example.com"
                {...register('email', { required: 'Email address is required' })}
                error={errors.email?.message}
              />
              <Input
                label="Phone / WhatsApp *"
                placeholder="+91 98765 43210"
                {...register('phone', { required: 'Phone number is required' })}
                error={errors.phone?.message}
              />
            </div>
            <Input
              label="Age / Date of Birth *"
              placeholder="e.g. 26 Years (or DD/MM/YYYY)"
              {...register('age', { required: 'Age details required' })}
              error={errors.age?.message}
            />
          </div>
        )}

        {/* Step 2: Education */}
        {step === 2 && (
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-[#0F172A] font-display">Step 2: Educational Credentials</h4>
            <Select
              label="Highest Qualification *"
              options={[
                '10th / 12th Pass',
                'ITI / Craft Diploma',
                'General Nursing & Midwifery (GNM)',
                'B.Sc / B.Tech / BE',
                'Master Degree (M.Sc / M.Tech / MBA)',
                'Other Vocational Certification'
              ]}
              {...register('education', { required: 'Highest qualification is required' })}
              error={errors.education?.message}
            />
            <Input
              label="Field of Study / Discipline *"
              placeholder="e.g. Nursing, Culinary Arts, Mechanical, Computer Science"
              {...register('fieldOfStudy', { required: 'Field of study required' })}
              error={errors.fieldOfStudy?.message}
            />
          </div>
        )}

        {/* Step 3: Work Experience */}
        {step === 3 && (
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-[#0F172A] font-display">Step 3: Work Experience</h4>
            <Select
              label="Total Work Experience *"
              options={['Fresher (0 Years)', '1–2 Years', '3–5 Years', '5+ Years']}
              {...register('totalExperience', { required: 'Total experience is required' })}
              error={errors.totalExperience?.message}
            />
            <Input
              label="Current Job Title / Designation *"
              placeholder="e.g. Staff Nurse, Commis Chef, Heavy Truck Driver"
              {...register('currentRole', { required: 'Current role is required' })}
              error={errors.currentRole?.message}
            />
          </div>
        )}

        {/* Step 4: Language Level */}
        {step === 4 && (
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-[#0F172A] font-display">Step 4: Language Proficiency</h4>
            <Select
              label="German Language Level *"
              options={['No German yet (Willing to learn)', 'A1 Certificate', 'A2 Certificate', 'B1 Certificate', 'B2+ Certificate']}
              {...register('germanLevel', { required: 'German language level is required' })}
              error={errors.germanLevel?.message}
            />
            <Select
              label="English Language Proficiency *"
              options={['Basic', 'Intermediate', 'Fluent / Professional']}
              {...register('englishLevel', { required: 'English level is required' })}
              error={errors.englishLevel?.message}
            />
          </div>
        )}

        {/* Step 5: Target Opportunity */}
        {step === 5 && (
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-[#0F172A] font-display">Step 5: Target Pathway</h4>
            <Select
              label="Preferred Pathway in Germany *"
              options={[
                'Skilled Job (Healthcare / Nursing)',
                'Skilled Job (Chef / Hospitality)',
                'Skilled Job (Logistics / Driving)',
                'Skilled Job (Trades / Engineering)',
                'Ausbildung Dual Vocational Program',
                'University Study Program'
              ]}
              {...register('targetOpportunity', { required: 'Target opportunity required' })}
              error={errors.targetOpportunity?.message}
            />
          </div>
        )}

        {/* Step 6: Review & Final Submit */}
        {step === 6 && (
          <div className="space-y-4 text-xs sm:text-sm text-[#475569]">
            <h4 className="text-lg font-bold text-[#0F172A] font-display">Step 6: Review Your Summary</h4>
            <div className="bg-[#F8FAFC] p-4 rounded-xl border border-[#E2E8F0] space-y-2">
              <div><strong>Name:</strong> {formData.fullName} ({formData.email})</div>
              <div><strong>Phone:</strong> {formData.phone}</div>
              <div><strong>Education:</strong> {formData.education} - {formData.fieldOfStudy}</div>
              <div><strong>Experience:</strong> {formData.totalExperience} ({formData.currentRole})</div>
              <div><strong>German Level:</strong> {formData.germanLevel}</div>
              <div><strong>Target Pathway:</strong> {formData.targetOpportunity}</div>
            </div>
            <p className="text-xs text-[#64748B]">
              By submitting, you agree to allow GlobalFly consultants to evaluate your credentials. No visa outcome is automatically guaranteed.
            </p>
          </div>
        )}

        {/* Buttons navigation */}
        <div className="pt-4 flex items-center justify-between border-t border-[#F1F5F9]">
          {step > 1 ? (
            <Button type="button" variant="outline" size="md" onClick={prevStep}>
              Back
            </Button>
          ) : <div />}

          {step < 6 ? (
            <Button type="button" variant="primary" size="md" onClick={nextStep}>
              Continue
            </Button>
          ) : (
            <Button type="submit" variant="gold" size="md" disabled={loading}>
              {loading ? <LoadingSpinner size="sm" /> : 'Submit for Assessment'}
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default EligibilityForm;
