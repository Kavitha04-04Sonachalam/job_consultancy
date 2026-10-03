import React from 'react';
import { Helmet } from 'react-helmet-async';
import EmployerSection from '../components/home/EmployerSection';
import EmployerForm from '../components/forms/EmployerForm';

export const Employer = () => {
  return (
    <>
      <Helmet>
        <title>For Employers | International Talent Recruitment | GlobalFly</title>
        <meta
          name="description"
          content="German employers and business partners can submit hiring requirements for international nurses, chefs, drivers, CNC operators, and skilled workers."
        />
      </Helmet>

      <div className="bg-[#0F172A] text-white py-14 border-b border-[#1E293B]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#F59E0B] bg-[#F59E0B]/10 px-3 py-1 rounded-full border border-[#F59E0B]/20">
            Employer Services
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-display">
            International Recruitment Services
          </h1>
          <p className="text-sm sm:text-base text-[#94A3B8] max-w-2xl mx-auto">
            Partner with GlobalFly to source pre-screened, qualified candidates from India tailored for German businesses.
          </p>
        </div>
      </div>

      <EmployerSection />

      <div className="py-16 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 border border-[#E2E8F0] shadow-sm space-y-6">
            <h3 className="text-2xl font-bold font-display text-[#0F172A] text-left">
              Submit Your Hiring Requirements
            </h3>
            <EmployerForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Employer;
