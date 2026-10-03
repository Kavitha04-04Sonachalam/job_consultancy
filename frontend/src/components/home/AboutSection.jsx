import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ShieldCheck, ArrowRight, Award } from 'lucide-react';
import Button from '../ui/Button';

export const AboutSection = () => {
  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Image Stack */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="rounded-3xl overflow-hidden border border-[#CBD5E1] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1000"
                  alt="GlobalFly Recruitment Team"
                  className="w-full h-[400px] object-cover"
                />
              </div>

              {/* Overlay Badge */}
              <div className="absolute -bottom-6 -right-2 sm:right-6 bg-[#0F172A] text-white p-5 rounded-2xl border border-[#334155] shadow-2xl max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F59E0B] flex items-center justify-center text-[#0F172A] font-bold">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-sm font-bold font-display">Germany Specialist</span>
                    <span className="block text-xs text-[#94A3B8]">Structured Placement Guidance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Text Content */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#2563EB] bg-[#EFF6FF] px-3.5 py-1.5 rounded-full">
              About GlobalFly
            </span>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] font-display tracking-tight leading-tight">
              Connecting Global Talent with Opportunities in Germany
            </h2>

            <p className="text-base text-[#475569] leading-relaxed">
              GlobalFly is a dedicated overseas recruitment and career consultancy bridging skilled professionals and students from India to opportunities across Germany.
            </p>

            <p className="text-sm text-[#64748B] leading-relaxed">
              We operate with transparent processes, structured document preparation, German language training support, and pre-departure briefings. Our goal is to empower candidates through realistic advice aligned with official German regulations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-sm text-[#0F172A] font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#2563EB]" />
                <span>Zero Fake Promises</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#0F172A] font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#2563EB]" />
                <span>Profile Matching System</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#0F172A] font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#2563EB]" />
                <span>German Language Support</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#0F172A] font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#2563EB]" />
                <span>Comprehensive Documentation</span>
              </div>
            </div>

            <div className="pt-4">
              <Link to="/about">
                <Button variant="secondary" size="md" icon={ArrowRight}>
                  Discover GlobalFly
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
