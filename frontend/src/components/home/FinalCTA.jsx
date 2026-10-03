import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, ArrowRight, ShieldCheck } from 'lucide-react';
import Button from '../ui/Button';

export const FinalCTA = () => {
  return (
    <section className="py-20 bg-[#0F172A] text-white relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#2563EB]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E293B] border border-[#334155] text-xs font-semibold text-[#F59E0B]">
          <ShieldCheck className="w-4 h-4" />
          <span>Structured Overseas Consultancy</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white leading-tight">
          Ready to Explore Your Path to <span className="text-[#F59E0B]">Germany?</span>
        </h2>

        <p className="text-base sm:text-lg text-[#94A3B8] max-w-2xl mx-auto leading-relaxed">
          Take the first step today by completing your profile assessment or reviewing open vacancies tailored to your professional skills.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link to="/check-eligibility">
            <Button variant="gold" size="lg" icon={Compass}>
              Check Your Eligibility
            </Button>
          </Link>
          <Link to="/jobs">
            <Button variant="primary" size="lg" icon={ArrowRight}>
              Explore Opportunities
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
