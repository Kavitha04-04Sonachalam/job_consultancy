import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Modal from '../ui/Modal';
import Input from '../ui/Input';
import Select from '../ui/Select';
import Button from '../ui/Button';
import LoadingSpinner from '../ui/LoadingSpinner';
import { submitApplication } from '../../services/api';

export const ApplyModal = ({ isOpen, onClose, job }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async (data) => {
    setLoading(true);
    setErrorMessage('');
    try {
      const formData = new FormData();
      Object.keys(data).forEach(key => {
        if (key === 'resume' && data[key][0]) {
          formData.append('resume', data[key][0]);
        } else {
          formData.append(key, data[key]);
        }
      });
      formData.append('jobTitle', job?.title || 'General Application');

      const res = await submitApplication(formData);
      if (res.success) {
        setSuccess(true);
        reset();
      } else {
        setErrorMessage(res.message || 'Submission failed. Please try again.');
      }
    } catch (err) {
      setErrorMessage('Failed to connect to backend server. Try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setSuccess(false);
    setErrorMessage('');
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
              {...register('email', { required: 'Email address is required' })}
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
              options={['Entry Level', '1–3 Years', '3–5 Years', '5+ Years']}
              {...register('experience')}
            />
            <Select
              label="Education Level"
              options={['Diploma / ITI', 'Bachelor Degree', 'Master Degree', 'Other']}
              {...register('education')}
            />
            <Select
              label="German Level"
              options={['None / Beginner', 'A1 Certificate', 'A2 Certificate', 'B1 Certificate', 'B2+ Certificate']}
              {...register('germanLevel')}
            />
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-semibold text-[#0F172A]">
              Upload Resume (PDF / DOC) *
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
              Cover Note / Additional Message (Optional)
            </label>
            <textarea
              rows={3}
              placeholder="Briefly state your key skills and notice period..."
              className="w-full px-4 py-3 text-sm text-[#0F172A] bg-white border border-[#CBD5E1] rounded-xl outline-none focus:border-[#2563EB]"
              {...register('coverMessage')}
            />
          </div>

          <div className="pt-2 flex items-center justify-end gap-3 border-t border-[#F1F5F9]">
            <Button variant="ghost" size="md" onClick={handleClose}>
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
