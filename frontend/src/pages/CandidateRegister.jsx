import React from 'react';
import { Helmet } from 'react-helmet-async';
import CandidateForm from '../components/forms/CandidateForm';

export const CandidateRegister = () => {
  return (
    <>
      <Helmet>
        <title>Candidate Registration | GlobalFly Overseas Consultancy</title>
        <meta
          name="description"
          content="Register your candidate profile with GlobalFly to be considered for verified Germany jobs in healthcare, chefs, logistics, and skilled trades."
        />
      </Helmet>

      <div className="bg-[#0F172A] text-white py-14 border-b border-[#1E293B]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#2563EB] bg-[#2563EB]/20 px-3 py-1 rounded-full border border-[#2563EB]/40">
            Candidate Database
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-display">
            Candidate Profile Registration
          </h1>
          <p className="text-sm sm:text-base text-[#94A3B8] max-w-2xl mx-auto">
            Register your credentials and CV to match with active and upcoming Germany employer vacancies.
          </p>
        </div>
      </div>

      <div className="py-16 bg-[#F8FAFC]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 border border-[#E2E8F0] shadow-sm space-y-6">
            <h3 className="text-2xl font-bold font-display text-[#0F172A] text-left">
              Registration Form
            </h3>
            <CandidateForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default CandidateRegister;
