import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export const AboutNaviVisaSection = () => {
  return (
    <section className="bg-black text-white py-16 sm:py-24 border-b border-[#1E293B] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Bold Text & CTA (Screenshot Inspired) */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#F59E0B]">
                Your Path to Professional Opportunities in Germany
              </span>
              <p className="text-xl sm:text-2xl lg:text-[28px] font-semibold text-[#F59E0B] leading-snug sm:leading-relaxed font-sans">
                We're a dedicated, results-driven team of recruitment specialists who know how to connect ambitious candidates with top employers across Germany. Backed by structured qualification recognition (Anerkennung), European CV preparation, and compliant immigration frameworks, we make overseas placement seamless, transparent, and human. As we grow, our mission stays the same: to deliver people-first guidance that helps individuals build thriving careers in Europe.
              </p>
            </div>

            <div>
              <Link to="/about" className="inline-block">
                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#EA580C] hover:bg-[#C2410C] text-white text-sm sm:text-base font-bold tracking-wider uppercase transition-all duration-200 shadow-lg hover:shadow-orange-500/20 active:scale-95"
                >
                  <span>ABOUT US</span>
                  <ChevronRight className="w-5 h-5 stroke-[2.5]" />
                </button>
              </Link>
            </div>
          </div>

          {/* Right Column: Professional Team Photo */}
          <div className="lg:col-span-6">
            <div className="relative overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200"
                alt="GLOBALFLY Overseas Recruitment Team"
                className="w-full h-[360px] sm:h-[420px] lg:h-[460px] object-cover object-center filter brightness-95 contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutNaviVisaSection;
