import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Wrench, Compass, CheckCircle2, MessageSquare, ArrowRight, Cpu, Factory, Code, ShieldCheck } from 'lucide-react';
import Button from '../components/ui/Button';
import EngineeringForm from '../components/forms/EngineeringForm';

export const Engineering = () => {
  const location = useLocation();

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
      }
    }
  }, [location]);

  const engineeringDisciplines = [
    { icon: Cpu, title: 'Mechanical & Mechatronics', desc: 'Industrial machinery, robotics, automation systems, and CAD design engineering.' },
    { icon: Factory, title: 'Electrical & Automation', desc: 'PLC programming, power grid systems, and manufacturing plant automation.' },
    { icon: Code, title: 'IT & Software Engineering', desc: 'DevOps, cloud architecture, backend systems, and embedded firmware engineering.' },
    { icon: Wrench, title: 'Automotive & Quality Tech', desc: 'Vehicle component testing, QA management, and DIN standard compliance.' }
  ];

  return (
    <>
      <Helmet>
        <title>Engineering Opportunities in Germany | GlobalFly Consultancy</title>
        <meta
          name="description"
          content="Explore engineering career pathways in Germany for Mechanical, Electrical, Mechatronics, Automotive, and IT Software Engineers under the EU Blue Card."
        />
      </Helmet>

      {/* Hero */}
      <div className="relative overflow-hidden bg-[#0F172A] text-white py-16 lg:py-24 border-b border-[#1E293B]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#2563EB] bg-[#2563EB]/20 px-4 py-2 rounded-full border border-[#2563EB]/40">
            <Wrench className="w-4 h-4 text-[#2563EB]" /> Technology & Engineering
          </span>
          <h1 className="text-4xl sm:text-6xl font-black font-display tracking-tight text-white leading-tight">
            Engineering Opportunities in <span className="text-[#F59E0B]">Germany</span>
          </h1>
          <p className="text-base sm:text-xl text-[#94A3B8] max-w-3xl mx-auto leading-relaxed">
            Connect with leading German manufacturing, industrial automation, and technology firms seeking qualified international engineers under the EU Blue Card framework.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a href="#engineering-form">
              <Button variant="gold" size="lg" icon={ArrowRight}>
                Apply for Engineering Opportunities
              </Button>
            </a>
            <Link to="/check-eligibility">
              <Button variant="outline" size="lg" icon={Compass} className="text-white border-white/20 hover:bg-white/10">
                Check Eligibility
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="py-16 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 text-left">
          
          {/* Disciplines Grid */}
          <div className="bg-white rounded-3xl p-8 border border-[#E2E8F0] shadow-sm space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#0F172A]">
              Key Engineering Disciplines in Demand
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {engineeringDisciplines.map((disc, i) => {
                const IconComp = disc.icon;
                return (
                  <div key={i} className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
                    <div className="w-10 h-10 rounded-xl bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center mb-2">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-[#0F172A] font-display">{disc.title}</h4>
                    <p className="text-xs text-[#64748B] leading-relaxed">{disc.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Candidate Skills & Requirements */}
          <div className="bg-white rounded-3xl p-8 border border-[#E2E8F0] shadow-sm space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#0F172A]">
              Candidate Qualifications & Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 text-sm text-[#0F172A] font-semibold">
                <CheckCircle2 className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
                <span>B.E / B.Tech / M.Tech in an Accredited Engineering Discipline</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-[#0F172A] font-semibold">
                <CheckCircle2 className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
                <span>Minimum 2 Years Professional Industry Experience</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-[#0F172A] font-semibold">
                <CheckCircle2 className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
                <span>Fluent English (German A2/B1 is a strong advantage)</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-[#0F172A] font-semibold">
                <CheckCircle2 className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
                <span>EU Blue Card Degree Recognition (Anabin Database Verification)</span>
              </div>
            </div>
          </div>

          {/* Engineering Application Form */}
          <div id="engineering-form" className="bg-white rounded-3xl p-8 border border-[#E2E8F0] shadow-sm space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#0F172A]">
              Submit Engineering Enquiry
            </h2>
            <p className="text-xs text-[#64748B]">
              Fill out the form below. Our technical recruitment consultants will evaluate your profile against current German industrial vacancies.
            </p>
            <EngineeringForm />
          </div>

        </div>
      </div>
    </>
  );
};

export default Engineering;
