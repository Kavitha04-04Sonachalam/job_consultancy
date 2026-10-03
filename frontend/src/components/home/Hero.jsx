import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Compass, ArrowRight, Award, CheckCircle2, Globe2 } from 'lucide-react';
import Button from '../ui/Button';

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#0F172A] text-white pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-[#1E293B]">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 bg-[#2563EB]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 bg-[#F59E0B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Trust Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#1E293B] border border-[#334155] text-xs font-semibold text-[#E2E8F0]">
              <div className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
              <ShieldCheck className="w-4 h-4 text-[#F59E0B]" />
              <span>Germany Overseas Recruitment & Consultancy Specialist</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display leading-[1.1] tracking-tight text-white">
              Build Your Career in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-[#F59E0B]">Germany</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-[#94A3B8] leading-relaxed max-w-2xl">
              Explore career, education and professional opportunities in Germany with structured guidance from application to relocation support.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link to="/jobs">
                <Button variant="primary" size="lg" icon={ArrowRight}>
                  Explore Opportunities
                </Button>
              </Link>
              <Link to="/check-eligibility">
                <Button variant="gold" size="lg" icon={Compass}>
                  Check Eligibility
                </Button>
              </Link>
            </div>

            {/* Supporting Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[#1E293B]">
              <div className="flex items-center gap-2 text-xs text-[#CBD5E1]">
                <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0" />
                <span>Germany-Focused</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#CBD5E1]">
                <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0" />
                <span>Career Guidance</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#CBD5E1]">
                <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0" />
                <span>Documentation Support</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#CBD5E1]">
                <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0" />
                <span>German A1–B2 Prep</span>
              </div>
            </div>
          </div>

          {/* Right Visual Image Cards Grid */}
          <div className="lg:col-span-5 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative rounded-2xl overflow-hidden border border-[#334155] shadow-xl group">
                  <img
                    src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=600"
                    alt="Healthcare Professional in Germany"
                    className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-3 right-3 text-xs font-semibold text-white">
                    Nursing & Healthcare
                  </div>
                </div>

                <div className="relative rounded-2xl overflow-hidden border border-[#334155] shadow-xl group">
                  <img
                    src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=600"
                    alt="Professional Chef"
                    className="w-full h-36 sm:h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-3 right-3 text-xs font-semibold text-white">
                    Chef & Hospitality
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-6">
                <div className="relative rounded-2xl overflow-hidden border border-[#334155] shadow-xl group">
                  <img
                    src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=600"
                    alt="Heavy Transport Driver"
                    className="w-full h-36 sm:h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-3 right-3 text-xs font-semibold text-white">
                    Logistics & Driving
                  </div>
                </div>

                <div className="relative rounded-2xl overflow-hidden border border-[#334155] shadow-xl group">
                  <img
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600"
                    alt="German Vocational Training"
                    className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-3 right-3 text-xs font-semibold text-white">
                    Study & Ausbildung
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Live Badge */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-4 bg-[#1E293B] border border-[#334155] rounded-2xl p-4 shadow-2xl backdrop-blur-md flex items-center gap-3 whitespace-nowrap">
              <div className="w-10 h-10 rounded-xl bg-[#2563EB]/20 flex items-center justify-center text-[#3B82F6]">
                <Globe2 className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="block text-xs text-[#94A3B8] font-medium">Now Recruiting</span>
                <span className="block text-sm font-bold text-white">Healthcare, Chefs, Logistics & Trades</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
