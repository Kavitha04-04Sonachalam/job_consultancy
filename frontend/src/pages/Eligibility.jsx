import React from 'react';
import { Helmet } from 'react-helmet-async';
import EligibilityForm from '../components/forms/EligibilityForm';

export const Eligibility = () => {
  return (
    <>
      <Helmet>
        <title>Check Eligibility | Germany Overseas Recruitment | GlobalFly</title>
        <meta
          name="description"
          content="Submit your profile details for an eligibility assessment for Germany skilled worker jobs, nursing recognition, or Ausbildung programs."
        />
      </Helmet>

      <div className="bg-[#0F172A] text-white py-14 border-b border-[#1E293B]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#F59E0B] bg-[#F59E0B]/10 px-3 py-1 rounded-full border border-[#F59E0B]/20">
            Profile Evaluation
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-display">
            Check Your Germany Eligibility
          </h1>
          <p className="text-sm sm:text-base text-[#94A3B8] max-w-2xl mx-auto">
            Complete our multi-step assessment form to receive realistic feedback on your qualifications, language requirements, and Germany career options.
          </p>
        </div>
      </div>

      <div className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <EligibilityForm />
        </div>
      </div>
    </>
  );
};

export default Eligibility;
