import React from 'react';
import { Helmet } from 'react-helmet-async';

export const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | GlobalFly Overseas Consultancy</title>
      </Helmet>
      <div className="py-16 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-6 bg-white p-8 sm:p-12 rounded-3xl border border-[#E2E8F0] shadow-sm">
          <h1 className="text-3xl font-bold font-display text-[#0F172A]">Privacy Policy</h1>
          <p className="text-xs text-[#64748B]">Last Updated: October 2026</p>
          <div className="space-y-4 text-sm text-[#475569] leading-relaxed">
            <p>At GlobalFly Overseas Recruitment & Consultancy, we prioritize candidate and client privacy. This policy details how personal information collected through our web forms (such as candidate registrations, eligibility assessments, and employer enquiries) is handled.</p>
            <h3 className="text-base font-bold text-[#0F172A]">1. Data Collection & Purpose</h3>
            <p>We collect personal data (including name, email address, phone number, resume uploads, and qualifications) exclusively for evaluating candidate profiles, matching job opportunities, and facilitating recruitment services.</p>
            <h3 className="text-base font-bold text-[#0F172A]">2. Data Sharing</h3>
            <p>Candidate information is shared with verified employer partners only after candidate evaluation and explicit consent for job matching procedures.</p>
            <h3 className="text-base font-bold text-[#0F172A]">3. Data Security</h3>
            <p>We apply standard technical safeguards to protect uploaded documents against unauthorized access, loss, or misuse.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
