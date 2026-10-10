import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ShieldCheck, Award } from 'lucide-react';
import Button from '../ui/Button';

export const AboutNaviVisaSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#0F172A] text-white py-16 sm:py-24 border-b border-[#1E293B]">
      {/* Decorative ambient background glows aligned with application theme */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#2563EB]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#F59E0B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Mission & CTA */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#F59E0B] bg-[#F59E0B]/10 border border-[#F59E0B]/30 px-3.5 py-1.5 rounded-full">
                <ShieldCheck className="w-4 h-4 text-[#F59E0B]" />
                Your Path to Professional Opportunities in Germany
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white leading-tight">
                Connecting Ambitious Talent with Verified Careers in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-[#F59E0B]">Germany</span>
              </h2>

              <p className="text-base sm:text-lg text-[#CBD5E1] leading-relaxed font-normal">
                We're a dedicated, results-driven team of recruitment specialists who know how to connect ambitious candidates with top employers across Germany. Backed by structured qualification recognition (Anerkennung), European CV preparation, and compliant immigration frameworks, we make overseas placement seamless, transparent, and human. As we grow, our mission stays the same: to deliver people-first guidance that helps individuals build thriving careers in Europe.
              </p>
            </div>

            <div className="pt-2">
              <Link to="/about" className="inline-block">
                <Button
                  variant="gold"
                  size="lg"
                  icon={ChevronRight}
                  className="font-black tracking-wider uppercase text-sm sm:text-base px-8 py-3.5 shadow-xl hover:shadow-2xl"
                >
                  ABOUT GLOBALFLY
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column: Professional Team Photo */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-[#334155] shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200"
                alt="GLOBALFLY Overseas Recruitment Team"
                className="w-full h-[360px] sm:h-[420px] lg:h-[460px] object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/70 via-[#0F172A]/20 to-transparent pointer-events-none" />
              
              {/* Bottom floating badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#0F172A]/90 backdrop-blur-md border border-[#334155] text-left">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#2563EB] text-white flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Germany Recruitment Specialists</h4>
                    <p className="text-xs text-[#94A3B8]">Transparent candidate representation & employer matching</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutNaviVisaSection;
