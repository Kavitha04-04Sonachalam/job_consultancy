import React from 'react';
import { Helmet } from 'react-helmet-async';

export const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | GlobalFly</title>
      </Helmet>
      <div className="py-16 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-6 bg-white p-8 sm:p-12 rounded-3xl border border-[#E2E8F0] shadow-sm">
          <h1 className="text-3xl font-bold font-display text-[#0F172A]">Terms of Service</h1>
          <p className="text-xs text-[#64748B]">Last Updated: October 2026</p>
          <div className="space-y-4 text-sm text-[#475569] leading-relaxed">
            <p>Welcome to GlobalFly. By utilizing our website and submitting candidate or employer forms, you agree to these terms.</p>
            <h3 className="text-base font-bold text-[#0F172A]">1. Consultancy & Advisory Scope</h3>
            <p>GlobalFly provides recruitment consultancy, profile evaluation, and document coordination. We act as an intermediary between international candidates and German employers.</p>
            <h3 className="text-base font-bold text-[#0F172A]">2. User Obligations</h3>
            <p>Candidates must provide authentic educational degrees, valid passports, and accurate professional work experience records.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terms;
