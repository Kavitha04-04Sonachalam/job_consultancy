import React from 'react';
import { Helmet } from 'react-helmet-async';

export const CookiePolicy = () => {
  return (
    <>
      <Helmet>
        <title>Cookie Policy | GlobalFly</title>
      </Helmet>
      <div className="py-16 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-6 bg-white p-8 sm:p-12 rounded-3xl border border-[#E2E8F0] shadow-sm">
          <h1 className="text-3xl font-bold font-display text-[#0F172A]">Cookie Policy</h1>
          <p className="text-xs text-[#64748B]">Last Updated: October 2026</p>
          <div className="space-y-4 text-sm text-[#475569] leading-relaxed">
            <p>GlobalFly uses essential browser cookies to ensure smooth navigation, form persistence, and site analytics.</p>
            <p>You may adjust your browser settings to decline non-essential cookies at any time.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookiePolicy;
