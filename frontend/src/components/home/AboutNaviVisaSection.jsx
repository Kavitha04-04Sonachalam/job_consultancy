import React from 'react';
import { Compass, ShieldCheck, CheckCircle2, Globe, Building2, UserCheck } from 'lucide-react';

export const AboutNaviVisaSection = () => {
  return (
    <section className="py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Representation */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              <div className="rounded-3xl overflow-hidden border border-[#CBD5E1] shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=900"
                  alt="GLOBALFLY Germany Recruitment Advisory"
                  className="w-full h-[420px] object-cover"
                />
              </div>

              {/* Trust Badge Card */}
              <div className="absolute -bottom-6 -right-2 sm:right-4 bg-[#0F172A] text-white p-5 rounded-2xl border border-[#334155] shadow-2xl max-w-xs text-left">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#2563EB] flex items-center justify-center text-white shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-sm font-bold font-display">Germany Recruitment</span>
                    <span className="block text-xs text-[#94A3B8]">Transparent Candidate Support</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#2563EB] bg-[#EFF6FF] px-3.5 py-1.5 rounded-full">
              <Compass className="w-3.5 h-3.5" />
              About GLOBALFLY
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-[#0F172A] tracking-tight leading-tight">
              Your Path to Professional Opportunities in <span className="text-[#2563EB]">Germany</span>
            </h2>

            <p className="text-base sm:text-lg text-[#334155] leading-relaxed font-medium">
              GLOBALFLY aims to connect candidates with suitable professional opportunities in Germany. We provide guidance to help candidates understand the recruitment process, prepare their profiles, and explore the next steps towards international employment.
            </p>

            <p className="text-sm text-[#64748B] leading-relaxed">
              Navigating international employment requires structured preparation, realistic expectations, and compliance with statutory German immigration regulations. Our consultancy focuses on ethical recruitment practices, ensuring applicants receive genuine information on qualification suitability, employer criteria, and necessary documentation.
            </p>

            {/* Core Guidance Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-[#E2E8F0] space-y-1">
                <div className="flex items-center gap-2 text-sm font-bold text-[#0F172A]">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB]" />
                  <span>Transparent Process</span>
                </div>
                <p className="text-xs text-[#64748B]">Clear timelines and truthful prerequisites without misleading guarantees.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#E2E8F0] space-y-1">
                <div className="flex items-center gap-2 text-sm font-bold text-[#0F172A]">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB]" />
                  <span>Candidate-Centric Guidance</span>
                </div>
                <p className="text-xs text-[#64748B]">Personalized evaluation matching candidates to verified employer openings.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#E2E8F0] space-y-1">
                <div className="flex items-center gap-2 text-sm font-bold text-[#0F172A]">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB]" />
                  <span>Documentation Direction</span>
                </div>
                <p className="text-xs text-[#64748B]">Step-by-step assistance with degree translation, attestation, and filing.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#E2E8F0] space-y-1">
                <div className="flex items-center gap-2 text-sm font-bold text-[#0F172A]">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB]" />
                  <span>German Employer Integration</span>
                </div>
                <p className="text-xs text-[#64748B]">Direct coordination with German healthcare, hospitality, and engineering employers.</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutNaviVisaSection;
