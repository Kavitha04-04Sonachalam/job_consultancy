import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Compass, CheckCircle2, ShieldAlert, ArrowRight, Briefcase } from 'lucide-react';
import Button from '../components/ui/Button';

export const WorkInGermany = () => {
  const sectors = [
    { title: 'Nursing & Healthcare', desc: 'High demand across hospitals and care centers with official Anerkennung (recognition) support.' },
    { title: 'Professional Chefs & Culinary', desc: 'Hotel and restaurant culinary roles for experienced chefs holding hotel management degrees or craft diplomas.' },
    { title: 'Heavy Vehicle & Logistics Drivers', desc: 'CE Class transport and warehouse distribution operators across German logistics hubs.' },
    { title: 'Skilled Trades & Technicians', desc: 'Electricians, mechanics, welders, and HVAC specialists.' },
    { title: 'Manufacturing & CNC Operators', desc: 'CNC lathe/milling operators and industrial machine setup technicians.' },
    { title: 'IT & Software Engineering', desc: 'Fast-track pathways for developers, DevOps, and cloud specialists.' },
  ];

  const steps = [
    'Profile Assessment & Qualification Review',
    'German Language Level Acquisition (A1 to B2)',
    'Document Translation & Apostille Attestation',
    'Official Recognition Application (Anerkennungsverfahren)',
    'Employer Interview & Contract Finalization',
    'German Embassy / VFS Visa Submission',
    'Pre-Departure Orientation & Relocation Onboarding'
  ];

  return (
    <>
      <Helmet>
        <title>Work in Germany | Skilled Overseas Employment | GlobalFly</title>
        <meta
          name="description"
          content="Learn about skilled work opportunities in Germany under the Skilled Immigration Act. Nursing, chefs, drivers, IT, and skilled trades."
        />
      </Helmet>

      <div className="bg-[#0F172A] text-white py-16 border-b border-[#1E293B]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#F59E0B] bg-[#F59E0B]/10 px-3 py-1 rounded-full border border-[#F59E0B]/20">
            Skilled Worker Pathway
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-display">
            Work in Germany
          </h1>
          <p className="text-sm sm:text-base text-[#94A3B8] max-w-2xl mx-auto">
            Build your professional career in Europe's leading economy through Germany's Skilled Immigration Act.
          </p>
        </div>
      </div>

      <div className="py-16 bg-[#F8FAFC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-12">
          
          {/* Legal Disclaimer Box */}
          <div className="p-4 rounded-xl bg-[#FFF7ED] border border-[#FFEDD5] text-xs text-[#C2410C] flex items-start gap-2.5">
            <ShieldAlert className="w-4 h-4 shrink-0 mt-0.5" />
            <p>
              <strong>Important Disclaimer:</strong> Visa and work permit eligibility depends on individual qualifications, work history, and applicable German federal regulations. Information provided by GlobalFly is for general guidance and does not guarantee visa approval.
            </p>
          </div>

          {/* Sector Overview Grid */}
          <div className="bg-white rounded-3xl p-8 border border-[#E2E8F0] shadow-sm space-y-6">
            <h2 className="text-2xl font-bold font-display text-[#0F172A]">
              Key Employment Sectors in Germany
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sectors.map((sec, i) => (
                <div key={i} className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
                  <div className="flex items-center gap-2 text-base font-bold text-[#0F172A] font-display">
                    <Briefcase className="w-4 h-4 text-[#2563EB]" />
                    <span>{sec.title}</span>
                  </div>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {sec.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Journey Steps */}
          <div className="bg-white rounded-3xl p-8 border border-[#E2E8F0] shadow-sm space-y-6">
            <h2 className="text-2xl font-bold font-display text-[#0F172A]">
              The Skilled Placement Journey
            </h2>
            <div className="space-y-4">
              {steps.map((st, i) => (
                <div key={i} className="flex items-center gap-3 text-sm font-semibold text-[#0F172A]">
                  <div className="w-7 h-7 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    {i + 1}
                  </div>
                  <span>{st}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center pt-4">
            <Link to="/check-eligibility">
              <Button variant="gold" size="lg" icon={Compass}>
                Check Your Eligibility Now
              </Button>
            </Link>
          </div>

        </div>
      </div>
    </>
  );
};

export default WorkInGermany;
