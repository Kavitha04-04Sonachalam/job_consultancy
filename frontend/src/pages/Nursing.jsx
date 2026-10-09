import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { HeartPulse, Compass, CheckCircle2, ShieldAlert, ArrowRight, BookOpen, FileCheck2, UserCheck, Languages, Building2, Plane } from 'lucide-react';
import Button from '../components/ui/Button';
import NursingForm from '../components/forms/NursingForm';

export const Nursing = () => {
  const processSteps = [
    { num: '01', title: 'Submit Your Profile', desc: 'Fill out our nursing application form with your qualifications and experience details.' },
    { num: '02', title: 'Initial Profile Assessment', desc: 'Our consultants review your nursing degree, clinical experience, and target timeline.' },
    { num: '03', title: 'German Language Guidance', desc: 'Structured learning roadmap to achieve B1/B2 German language proficiency required for nursing.' },
    { num: '04', title: 'Qualification Recognition Guidance', desc: 'Assistance with degree translation, apostille, and submission to German nursing recognition boards (Anerkennung).' },
    { num: '05', title: 'Employer Matching & Support', desc: 'Interview coordination with partner German hospitals, clinic networks, and care institutions.' },
    { num: '06', title: 'Documentation & Visa Guidance', desc: 'Step-by-step document checks and appointment preparation for German Embassy visa submission.' },
    { num: '07', title: 'Pre-Departure Guidance', desc: 'Orientation on accommodation search, German health insurance, tax registration, and airport arrival.' }
  ];

  const supportServices = [
    { icon: UserCheck, title: 'Career Consultation', desc: 'Personalized evaluation of your nursing credentials.' },
    { icon: FileCheck2, title: 'CV & Application Guidance', desc: 'European format CV optimization for hospital review.' },
    { icon: Building2, title: 'Interview Preparation', desc: 'Guidance for virtual interviews with German nursing directors.' },
    { icon: Languages, title: 'German Language Guidance', desc: 'Roadmaps for acquiring TELC or Goethe B1/B2 certification.' },
    { icon: BookOpen, title: 'Qualification Recognition Info', desc: 'Clear explanation of the regional Anerkennungsverfahren.' },
    { icon: FileCheck2, title: 'Documentation Guidance', desc: 'Assistance with transcript attestation and translation.' },
    { icon: FileCheck2, title: 'Visa Process Guidance', desc: 'Checklists for embassy work permit visa filing.' },
    { icon: Plane, title: 'Relocation Guidance', desc: 'Assistance with flight booking, housing search, and onboarding.' }
  ];

  const languageLevels = [
    { level: 'A1', title: 'Beginner', desc: 'Foundation vocabulary for daily communication.' },
    { level: 'A2', title: 'Elementary', desc: 'Basic sentence structure and medical terminology basics.' },
    { level: 'B1', title: 'Intermediate', desc: 'Standard requirement for entry-level nurse assistant placement.' },
    { level: 'B2', title: 'Upper Intermediate', desc: 'Full professional recognition as a licensed Registered Nurse in Germany.' }
  ];

  return (
    <>
      <Helmet>
        <title>Build Your Nursing Career in Germany | GlobalFly Consultancy</title>
        <meta
          name="description"
          content="Explore nursing opportunities in Germany with personalized career guidance and support throughout your recruitment journey."
        />
      </Helmet>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-[#0F172A] text-white py-16 lg:py-24 border-b border-[#1E293B]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#F59E0B] bg-[#F59E0B]/10 px-4 py-2 rounded-full border border-[#F59E0B]/20">
            <HeartPulse className="w-4 h-4 text-[#F59E0B]" /> Healthcare & Nursing Placement
          </span>
          <h1 className="text-4xl sm:text-6xl font-black font-display tracking-tight text-white leading-tight">
            Build Your Nursing Career in <span className="text-[#F59E0B]">Germany</span>
          </h1>
          <p className="text-base sm:text-xl text-[#94A3B8] max-w-3xl mx-auto leading-relaxed">
            Explore nursing opportunities in Germany with personalised career guidance and support throughout your recruitment journey.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a href="#nursing-form">
              <Button variant="gold" size="lg" icon={ArrowRight}>
                Apply for Nursing Opportunities
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
          
          {/* A. Nursing Opportunities */}
          <div className="bg-white rounded-3xl p-8 border border-[#E2E8F0] shadow-sm space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#0F172A]">
              A. Nursing Opportunities in Germany
            </h2>
            <p className="text-sm text-[#475569] leading-relaxed">
              GlobalFly supports registered nurses (GNM, B.Sc, M.Sc) seeking clinical placement in acute care hospitals, university medical centers, specialized clinics, and eldercare health networks throughout Germany.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
                <h4 className="text-base font-bold text-[#0F172A] font-display">Registered Nurse (RN)</h4>
                <p className="text-xs text-[#64748B] mt-1">Full clinical practice after B2 language & recognition exam.</p>
              </div>
              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
                <h4 className="text-base font-bold text-[#0F172A] font-display">Geriatric & Eldercare Nurse</h4>
                <p className="text-xs text-[#64748B] mt-1">Specialized nursing care in state-of-the-art eldercare centers.</p>
              </div>
              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
                <h4 className="text-base font-bold text-[#0F172A] font-display">Nurse Assistant (Pre-Recognition)</h4>
                <p className="text-xs text-[#64748B] mt-1">Entry position while completing official German recognition.</p>
              </div>
            </div>
          </div>

          {/* B. Who Can Apply? */}
          <div className="bg-white rounded-3xl p-8 border border-[#E2E8F0] shadow-sm space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#0F172A]">
              B. Who Can Apply?
            </h2>
            <p className="text-xs text-[#64748B]">
              Prepare the following information for your profile assessment (this assessment determines qualification match and does not promise automatic visa eligibility):
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
              <div className="flex items-start gap-3 text-sm text-[#0F172A] font-semibold">
                <CheckCircle2 className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
                <span>Nursing Qualification (GNM or B.Sc Nursing)</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-[#0F172A] font-semibold">
                <CheckCircle2 className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
                <span>Graduation Year & Transcript Records</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-[#0F172A] font-semibold">
                <CheckCircle2 className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
                <span>Relevant Clinical Work Experience</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-[#0F172A] font-semibold">
                <CheckCircle2 className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
                <span>German Language Level (A1 to B2)</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-[#0F172A] font-semibold">
                <CheckCircle2 className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
                <span>Valid Passport Availability</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-[#0F172A] font-semibold">
                <CheckCircle2 className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
                <span>Career Preferences & Target Start Date</span>
              </div>
            </div>
          </div>

          {/* C. Nursing Recruitment Process */}
          <div className="bg-white rounded-3xl p-8 border border-[#E2E8F0] shadow-sm space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#0F172A]">
              C. Nursing Recruitment Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {processSteps.map((step, i) => (
                <div key={i} className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
                  <span className="text-2xl font-black font-display text-[#2563EB]">{step.num}</span>
                  <h4 className="text-base font-bold text-[#0F172A] font-display">{step.title}</h4>
                  <p className="text-xs text-[#64748B] leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* D. Candidate Support Services */}
          <div className="bg-white rounded-3xl p-8 border border-[#E2E8F0] shadow-sm space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#0F172A]">
              D. Candidate Support Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportServices.map((srv, i) => {
                const IconComp = srv.icon;
                return (
                  <div key={i} className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
                    <div className="w-10 h-10 rounded-xl bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center mb-2">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-[#0F172A] font-display">{srv.title}</h4>
                    <p className="text-xs text-[#64748B] leading-relaxed">{srv.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* E. German Language Levels & Disclaimer */}
          <div className="bg-white rounded-3xl p-8 border border-[#E2E8F0] shadow-sm space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#0F172A]">
              E. German Language Prerequisites
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {languageLevels.map((lvl, i) => (
                <div key={i} className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
                  <span className="w-10 h-10 rounded-xl bg-[#2563EB] text-white font-bold flex items-center justify-center font-display text-lg">
                    {lvl.level}
                  </span>
                  <h4 className="text-base font-bold text-[#0F172A] font-display">{lvl.title}</h4>
                  <p className="text-xs text-[#64748B] leading-relaxed">{lvl.desc}</p>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-[#FFF7ED] border border-[#FFEDD5] text-xs text-[#C2410C] flex items-start gap-2.5">
              <ShieldAlert className="w-4 h-4 shrink-0 mt-0.5" />
              <p>
                <strong>Important Notice:</strong> Language prerequisites depend on the specific healthcare employer, qualification recognition track, and relevant German state health authorities. Completing any language level does not automatically guarantee job placement, document recognition, or visa approval.
              </p>
            </div>
          </div>

          {/* F. Nursing Application Form */}
          <div id="nursing-form" className="bg-white rounded-3xl p-8 border border-[#E2E8F0] shadow-sm space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#0F172A]">
              F. Submit Nursing Application
            </h2>
            <p className="text-xs text-[#64748B]">
              Fill out the application form below. Your credentials will be reviewed by our nursing recruitment team.
            </p>
            <NursingForm />
          </div>

        </div>
      </div>
    </>
  );
};

export default Nursing;
