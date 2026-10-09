import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { UtensilsCrossed, MessageSquare, CheckCircle2, ShieldAlert, ArrowRight, BookOpen, FileCheck2, UserCheck, Languages, Building2, Plane } from 'lucide-react';
import Button from '../components/ui/Button';
import ChefForm from '../components/forms/ChefForm';

export const Chef = () => {
  const processSteps = [
    { num: '01', title: 'Submit Your Details', desc: 'Fill out our culinary application form with your cuisine specializations and experience.' },
    { num: '02', title: 'Profile Review', desc: 'Our hospitality consultants evaluate your culinary credentials and kitchen history.' },
    { num: '03', title: 'Opportunity Matching', desc: 'Matching your culinary profile with German restaurant, hotel, and catering group openings.' },
    { num: '04', title: 'Employer Interview & Selection', desc: 'Interview coordination and, where required, trade skill verification with German chefs.' },
    { num: '05', title: 'Documentation & Visa Guidance', desc: 'Document attestation, labour approval paperwork, and German Embassy visa assistance.' },
    { num: '06', title: 'Pre-Departure Guidance', desc: 'Briefing on accommodation search, German health insurance, tax registration, and airport arrival.' }
  ];

  return (
    <>
      <Helmet>
        <title>Explore Chef Opportunities in Germany | GlobalFly Consultancy</title>
        <meta
          name="description"
          content="Take the next step in your culinary career with guidance on chef opportunities, candidate assessment, applications, and the recruitment process in Germany."
        />
      </Helmet>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-[#0F172A] text-white py-16 lg:py-24 border-b border-[#1E293B]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#F59E0B] bg-[#F59E0B]/10 px-4 py-2 rounded-full border border-[#F59E0B]/20">
            <UtensilsCrossed className="w-4 h-4 text-[#F59E0B]" /> Hospitality & Culinary Placement
          </span>
          <h1 className="text-4xl sm:text-6xl font-black font-display tracking-tight text-white leading-tight">
            Explore Chef Opportunities in <span className="text-[#F59E0B]">Germany</span>
          </h1>
          <p className="text-base sm:text-xl text-[#94A3B8] max-w-3xl mx-auto leading-relaxed">
            Take the next step in your culinary career with guidance on chef opportunities, candidate assessment, applications, and the recruitment process.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a href="#chef-form">
              <Button variant="gold" size="lg" icon={ArrowRight}>
                Apply as a Chef
              </Button>
            </a>
            <Link to="/contact">
              <Button variant="outline" size="lg" icon={MessageSquare} className="text-white border-white/20 hover:bg-white/10">
                Contact Our Team
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="py-16 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 text-left">
          
          {/* A. Chef Opportunities */}
          <div className="bg-white rounded-3xl p-8 border border-[#E2E8F0] shadow-sm space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#0F172A]">
              A. Chef Opportunities in Germany
            </h2>
            <p className="text-sm text-[#475569] leading-relaxed">
              Germany's gastronomy and hotel sectors actively seek experienced culinary professionals across specialty kitchens. GlobalFly connects qualified chefs with verified German restaurant groups and hotel chains.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
                <h4 className="text-base font-bold text-[#0F172A] font-display">Specialty Indian & Asian Chefs</h4>
                <p className="text-xs text-[#64748B] mt-1">Authentic specialty cooks for established regional restaurant groups.</p>
              </div>
              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
                <h4 className="text-base font-bold text-[#0F172A] font-display">Continental & Italian Chefs</h4>
                <p className="text-xs text-[#64748B] mt-1">Sous chefs and line cooks for fine dining and hotel resort kitchens.</p>
              </div>
              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
                <h4 className="text-base font-bold text-[#0F172A] font-display">Pastry & Bakery Specialists</h4>
                <p className="text-xs text-[#64748B] mt-1">Pastry chefs for commercial bakeries and luxury hotel confectioneries.</p>
              </div>
            </div>
          </div>

          {/* B. Candidate Profile */}
          <div className="bg-white rounded-3xl p-8 border border-[#E2E8F0] shadow-sm space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#0F172A]">
              B. Candidate Profile Preparation
            </h2>
            <p className="text-xs text-[#64748B]">
              Please prepare the following details when submitting your culinary profile:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
              <div className="flex items-start gap-3 text-sm text-[#0F172A] font-semibold">
                <CheckCircle2 className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
                <span>Culinary Degree, Diploma, or Craft Certificate</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-[#0F172A] font-semibold">
                <CheckCircle2 className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
                <span>Cuisine Specialisation (Indian, Italian, Pastry, etc.)</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-[#0F172A] font-semibold">
                <CheckCircle2 className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
                <span>Total Verifiable Kitchen Work Experience</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-[#0F172A] font-semibold">
                <CheckCircle2 className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
                <span>Current & Previous Role / Station Responsibilities</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-[#0F172A] font-semibold">
                <CheckCircle2 className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
                <span>German or English Language Proficiency Level</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-[#0F172A] font-semibold">
                <CheckCircle2 className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
                <span>Updated Culinary Resume / CV with References</span>
              </div>
            </div>
          </div>

          {/* C. Recruitment Process */}
          <div className="bg-white rounded-3xl p-8 border border-[#E2E8F0] shadow-sm space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#0F172A]">
              C. Chef Recruitment Process
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

          {/* D. Chef Contact & Application Form */}
          <div id="chef-form" className="bg-white rounded-3xl p-8 border border-[#E2E8F0] shadow-sm space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#0F172A]">
              D. Submit Chef Details
            </h2>
            <p className="text-xs text-[#64748B]">
              Complete the form below to allow our recruitment team to evaluate your culinary background for Germany employer vacancies.
            </p>
            <ChefForm />
          </div>

        </div>
      </div>
    </>
  );
};

export default Chef;
