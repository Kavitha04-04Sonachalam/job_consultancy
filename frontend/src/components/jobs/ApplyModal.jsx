import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Modal from '../ui/Modal';
import Input from '../ui/Input';
import Select from '../ui/Select';
import Button from '../ui/Button';
import LoadingSpinner from '../ui/LoadingSpinner';
import {
  submitChefApplication,
  submitEngineeringApplication,
  submitNursingApplication,
  submitApplication,
} from '../../services/api';

// Route each job category to the correct backend endpoint
const getSubmitFn = (job) => {
  const id = (job?.id || job?.category || job?.title || '').toLowerCase();
  if (id.includes('chef') || id.includes('culinary')) return submitChefApplication;
  if (id.includes('engineer') || id.includes('engineering') || id.includes('other')) return submitEngineeringApplication;
  if (id.includes('nurs') || id.includes('health') || id.includes('medical')) return submitNursingApplication;
  return submitApplication; // fallback
};

// Options for Select fields
const EXPERIENCE_OPTIONS = ['Entry Level', '1-2 Years', '3-5 Years', '5+ Years'];
const EDUCATION_OPTIONS  = ['Diploma / ITI', 'Bachelor Degree', 'Master Degree', 'Other'];
const GERMAN_OPTIONS     = ['None / Beginner', 'A1 Certificate', 'A2 Certificate', 'B1 Certificate', 'B2+ Certificate'];

export const ApplyModal = ({ isOpen, onClose, job }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      experience:  EXPERIENCE_OPTIONS[0],
      education:   EDUCATION_OPTIONS[1],  // 'Bachelor Degree'
      germanLevel: GERMAN_OPTIONS[0],
      // Chef-specific defaults (ignored for other job types)
      cuisineSpecialisation: 'Indian Cuisine',
      yearsOfExperience:     '1-2 Years',
      qualification:         'Bachelor Degree',
      germanLevelChef:       'None / Beginner',
      englishLevel:          'Intermediate',
      // Engineering-specific defaults
      discipline:            'Mechanical & Mechatronics',
      engQualification:      'Bachelor of Engineering (B.E / B.Tech)',
      engExperience:         '2-4 Years',
      // Nursing-specific defaults
      workExperience:        '1-2 Years',
      nursingGermanLevel:    'None / Not Started',
    }
  });

  const [loading, setLoading]       = useState(false);
  const [success, setSuccess]       = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async (data) => {
    setLoading(true);
    setErrorMessage('');

    console.log('[ApplyModal] Submitting for job:', job?.id || job?.title);
    console.log('[ApplyModal] Data:', data);

    try {
      const formData = new FormData();

      // Always include core contact fields
      const coreFields = ['fullName', 'email', 'phone', 'currentLocation', 'coverMessage'];
      coreFields.forEach(k => {
        if (data[k] !== undefined && data[k] !== null && data[k] !== '') {
          formData.append(k, data[k]);
        }
      });

      // Resume (optional for all job types)
      if (data.resume && data.resume.length > 0) {
        formData.append('resume', data.resume[0]);
      }

      // Include jobTitle for context
      formData.append('jobTitle', job?.title || 'General Application');

      const jobId = (job?.id || job?.category || job?.title || '').toLowerCase();

      if (jobId.includes('chef') || jobId.includes('culinary')) {
        // Chef-specific required fields
        formData.append('currentJobTitle',       data.currentJobTitle || 'Not specified');
        formData.append('cuisineSpecialisation', data.experience || 'Indian Cuisine');
        formData.append('yearsOfExperience',     data.experience || '1-2 Years');
        formData.append('qualification',         data.education  || 'Degree in Culinary Arts');
        formData.append('germanLevel',           data.germanLevel || 'None / Beginner');
        formData.append('englishLevel',          'Intermediate');
        formData.append('message',               data.coverMessage || '');
        formData.append('consent',               'true');

      } else if (jobId.includes('engineer') || jobId.includes('engineering') || jobId.includes('other')) {
        // Engineering-specific required fields
        formData.append('discipline',   'Mechanical & Mechatronics');
        formData.append('qualification','Bachelor of Engineering (B.E / B.Tech)');
        formData.append('experience',   data.experience  || '1-2 Years');
        formData.append('germanLevel',  data.germanLevel || 'None / Beginner (English Fluent)');
        formData.append('message',      data.coverMessage || '');
        formData.append('consent',      'true');

      } else if (jobId.includes('nurs') || jobId.includes('health') || jobId.includes('medical')) {
        // Nursing-specific required fields
        formData.append('qualification',    'B.Sc. Nursing - Qualified');
        formData.append('workExperience',   data.experience  || '1-2 Years');
        formData.append('germanLevel',      data.germanLevel || 'None / Not Started');
        formData.append('currentLocation',  data.currentLocation || '');
        formData.append('message',          data.coverMessage || '');
        formData.append('consent',          'true');

      } else {
        // Generic fallback — send all fields
        Object.keys(data).forEach(key => {
          if (!['resume', ...coreFields].includes(key) && data[key] !== undefined && data[key] !== null && data[key] !== '') {
            formData.append(key, data[key]);
          }
        });
        formData.append('consent', 'true');
      }

      console.log('[ApplyModal] FormData entries:');
      for (const [k, v] of formData.entries()) console.log(`  ${k}: ${v}`);

      const submitFn = getSubmitFn(job);
      const res = await submitFn(formData);
      console.log('[ApplyModal] Response:', res);

      if (res.success) {
        setSuccess(true);
        reset();
      } else {
        setErrorMessage(res.message || 'Submission failed. Please try again.');
      }
    } catch (err) {
      console.error('[ApplyModal] Error:', err);
      const detail = err?.response?.data?.detail;
      const status = err?.response?.status;
      if (detail) {
        setErrorMessage(`Error ${status}: ${typeof detail === 'string' ? detail : JSON.stringify(detail)}`);
      } else if (!err?.response) {
        setErrorMessage('Cannot reach the server. Please make sure the backend is running on port 8000.');
      } else {
        setErrorMessage(`Submission failed (${status}). Please try again.`);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setSuccess(false);
    setErrorMessage('');
    reset();
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title={`Apply for ${job?.title || 'Opportunity'}`}>
      {success ? (
        <div className="text-center py-8 space-y-4">
          <div className="w-16 h-16 bg-[#DCFCE7] text-[#166534] rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
            ✓
          </div>
          <h4 className="text-xl font-bold text-[#0F172A] font-display">Application Received</h4>
          <p className="text-sm text-[#475569] max-w-md mx-auto">
            Thank you for applying for <strong>{job?.title}</strong>. Our consultancy team will review your CV and credentials.
          </p>
          <Button variant="primary" size="md" onClick={handleClose}>
            Close Window
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-left">
          {errorMessage && (
            <div className="p-3 text-xs bg-red-50 text-red-700 rounded-xl border border-red-200">
              {errorMessage}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Full Name *"
              placeholder="e.g. Rahul Sharma"
              {...register('fullName', { required: 'Full name is required' })}
              error={errors.fullName?.message}
            />
            <Input
              label="Email Address *"
              type="email"
              placeholder="rahul@example.com"
              {...register('email', {
                required: 'Email address is required',
                pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid email' }
              })}
              error={errors.email?.message}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Phone / WhatsApp Number *"
              placeholder="+91 98765 43210"
              {...register('phone', { required: 'Phone number is required' })}
              error={errors.phone?.message}
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
              label="Total Experience"
              options={EXPERIENCE_OPTIONS}
              {...register('experience')}
            />
            <Select
              label="Education Level"
              options={EDUCATION_OPTIONS}
              {...register('education')}
            />
            <Select
              label="German Level"
              options={GERMAN_OPTIONS}
              {...register('germanLevel')}
            />
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-semibold text-[#0F172A]">
              Upload Resume (PDF / DOC){' '}
              <span className="text-xs font-normal text-[#64748B]">(Optional)</span>
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
              Cover Note / Additional Message <span className="text-xs font-normal text-[#64748B]">(Optional)</span>
            </label>
            <textarea
              rows={3}
              placeholder="Briefly state your key skills and notice period..."
              className="w-full px-4 py-3 text-sm text-[#0F172A] bg-white border border-[#CBD5E1] rounded-xl outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10 transition-all"
              {...register('coverMessage')}
            />
          </div>

          <div className="pt-2 flex items-center justify-end gap-3 border-t border-[#F1F5F9]">
            <Button variant="ghost" size="md" type="button" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" size="md" type="submit" disabled={loading}>
              {loading ? <LoadingSpinner size="sm" /> : 'Submit Application'}
            </Button>
          </div>
        </form>
      )}
    </Modal>
  );
};

export default ApplyModal;
