import React from 'react';
import { Target, FileCheck, Languages, Send, Plane, ShieldCheck } from 'lucide-react';

export const WhyChooseUs = () => {
  const features = [
    {
      icon: Target,
      title: 'Germany-Focused Guidance',
      desc: 'Specialized focus on German Skilled Immigration Act pathways, nursing recognition, and dual vocational training.'
    },
    {
      icon: ShieldCheck,
      title: 'Profile-Based Opportunity Matching',
      desc: 'We match candidate qualifications directly with active employer criteria, avoiding mismatch and wasted effort.'
    },
    {
      icon: FileCheck,
      title: 'Documentation Support',
      desc: 'Structured guidance on educational apostille, official translations, and recognition board submissions.'
    },
    {
      icon: Languages,
      title: 'Language Preparation Pathways',
      desc: 'Clear roadmaps for acquiring required A1, A2, B1, or B2 German language proficiency.'
    },
    {
      icon: Send,
      title: 'Application Assistance',
      desc: 'Professional CV formatting according to European standards and interview preparation.'
    },
    {
      icon: Plane,
      title: 'Pre-Departure & Relocation Support',
      desc: 'Briefing on accommodation search, German health insurance, tax registration, and cultural integration.'
    }
  ];

  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#2563EB] bg-[#EFF6FF] px-3.5 py-1.5 rounded-full mb-3">
            Why Choose GlobalFly
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] font-display tracking-tight">
            Your Journey. Our Guidance.
          </h2>
          <p className="mt-3 text-base text-[#64748B] leading-relaxed">
            We provide realistic, structured, and ethically grounded consultancy for candidates seeking legitimate employment and study opportunities in Germany.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {features.map((feat, i) => {
            const IconComp = feat.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm hover:shadow-lg transition-all duration-300 hover:border-[#2563EB]/40 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#F59E0B]/15 text-[#D97706] flex items-center justify-center mb-4">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0F172A] font-display mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
