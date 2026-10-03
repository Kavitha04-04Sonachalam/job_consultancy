import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ShieldAlert } from 'lucide-react';

export const VisaDisclaimer = () => {
  return (
    <>
      <Helmet>
        <title>Visa & Immigration Disclaimer | GlobalFly</title>
      </Helmet>
      <div className="py-16 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-6 bg-white p-8 sm:p-12 rounded-3xl border border-[#E2E8F0] shadow-sm">
          <div className="flex items-center gap-3 text-red-600">
            <ShieldAlert className="w-8 h-8" />
            <h1 className="text-3xl font-bold font-display text-[#0F172A]">Visa & Immigration Disclaimer</h1>
          </div>
          <div className="p-4 rounded-xl bg-[#FFF7ED] border border-[#FFEDD5] text-sm text-[#C2410C] font-semibold leading-relaxed">
            "GlobalFly provides recruitment and consultancy support. Visa, immigration and work permit decisions are made by the relevant authorities and depend on individual circumstances. No visa, job, admission or placement outcome is guaranteed."
          </div>
          <div className="space-y-4 text-sm text-[#475569] leading-relaxed">
            <p>1. <strong>Government Authority:</strong> All visa, work permit, residence permit, and immigration approvals are governed exclusively by official federal German authorities (including BAMF, ZAB, local Ausländerbehörde, and German Diplomatic Missions).</p>
            <p>2. <strong>No Placement Guarantees:</strong> Candidate profile submission or consultation with GlobalFly does not constitute a legal guarantee of visa issuance or employment placement.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default VisaDisclaimer;
