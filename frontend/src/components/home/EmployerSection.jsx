import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Users, FileCheck2, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

export const EmployerSection = () => {
  return (
    <section className="py-20 bg-[#0F172A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#2563EB] bg-[#2563EB]/20 px-3.5 py-1.5 rounded-full border border-[#2563EB]/40">
              For Employers & Business Partners
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white leading-tight">
              Looking for Qualified <span className="text-[#F59E0B]">International Talent?</span>
            </h2>

            <p className="text-base text-[#94A3B8] leading-relaxed">
              GlobalFly assists German healthcare groups, logistics hubs, hospitality chains, and industrial manufacturing firms with end-to-end overseas recruitment, candidate screening, and documentation coordination.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-sm text-[#E2E8F0]">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-[#2563EB] shrink-0" />
                <span>Pre-Screened Talent Sourcing</span>
              </div>
              <div className="flex items-center gap-3">
                <FileCheck2 className="w-5 h-5 text-[#2563EB] shrink-0" />
                <span>Credential Verification</span>
              </div>
              <div className="flex items-center gap-3">
                <Building2 className="w-5 h-5 text-[#2563EB] shrink-0" />
                <span>Seamless Interview Management</span>
              </div>
              <div className="flex items-center gap-3">
                <FileCheck2 className="w-5 h-5 text-[#2563EB] shrink-0" />
                <span>Attestation & Visa Support</span>
              </div>
            </div>

            <div className="pt-4">
              <Link to="/employer">
                <Button variant="gold" size="lg" icon={ArrowRight}>
                  Submit Hiring Requirement
                </Button>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-[#1E293B] border border-[#334155] rounded-3xl p-8 shadow-2xl text-left space-y-4">
              <h3 className="text-xl font-bold font-display text-white">
                Partner with GlobalFly
              </h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Streamline your hiring process with qualified Indian healthcare professionals, certified chefs, heavy vehicle drivers, and technical specialists.
              </p>
              <div className="pt-4 border-t border-[#334155] flex flex-col gap-2 text-xs text-[#CBD5E1]">
                <div>✔ Custom talent pool sourcing</div>
                <div>✔ German language level verification</div>
                <div>✔ Relocation and arrival onboarding assistance</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EmployerSection;
