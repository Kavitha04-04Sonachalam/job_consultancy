import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const HowItWorks = () => {
  const steps = [
    {
      num: '01',
      title: 'Profile Assessment',
      desc: 'Submit your CV and details via our online portal or eligibility checker for initial review.'
    },
    {
      num: '02',
      title: 'Opportunity Matching',
      desc: 'Our consultants evaluate your qualification alignment with current Germany employer demand.'
    },
    {
      num: '03',
      title: 'Application & Documentation',
      desc: 'Prepare European format CV, document translations, and educational recognition files.'
    },
    {
      num: '04',
      title: 'Employer / Institution Process',
      desc: 'Interview coordination with partner German employers, healthcare networks, or vocational schools.'
    },
    {
      num: '05',
      title: 'Visa & Permit Guidance',
      desc: 'Step-by-step preparation for German Embassy / VFS appointments and document checklists.'
    },
    {
      num: '06',
      title: 'Pre-Departure Support',
      desc: 'Relocation briefing, health insurance guidance, and initial arrival coordination.'
    }
  ];

  return (
    <section className="py-20 bg-white border-y border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#2563EB] bg-[#EFF6FF] px-3.5 py-1.5 rounded-full mb-3">
            Structured Workflow
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] font-display tracking-tight">
            How The Recruitment Process Works
          </h2>
          <p className="mt-3 text-base text-[#64748B] leading-relaxed">
            A transparent six-step journey from your initial profile submission to onboarding in Germany.
          </p>
        </div>

        {/* Timeline Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {steps.map((step, i) => (
            <div
              key={i}
              className="relative bg-[#F8FAFC] rounded-2xl p-6 border border-[#E2E8F0] shadow-sm hover:shadow-xl hover:border-[#2563EB]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black font-display text-[#2563EB]">
                    {step.num}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-[#2563EB]/10 flex items-center justify-center text-[#2563EB]">
                    <CheckCircle2 className="w-4 h-4" />
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#0F172A] font-display mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
