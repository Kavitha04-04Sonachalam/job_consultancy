import React from 'react';
import { 
  GraduationCap, 
  FileText, 
  Languages, 
  BookOpenCheck, 
  Users, 
  FolderCheck, 
  ShieldAlert, 
  ArrowRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

export const GermanStandardsSection = () => {
  const preparationPillars = [
    {
      icon: GraduationCap,
      title: 'Professional Qualifications & Experience',
      desc: 'Evaluating formal diplomas, degrees, and verified clinical or industry experience against German labour market standards and regional occupation requirements.'
    },
    {
      icon: FileText,
      title: 'German-Style CV & Application Preparation',
      desc: 'Structuring application documents into a professional German tabular CV (Lebenslauf), complete with work certificates and transparent professional chronology.'
    },
    {
      icon: Languages,
      title: 'German Language Preparation Where Relevant',
      desc: 'Guiding candidates to appropriate CEFR language levels (A1 to B2), depending on role demands. Healthcare candidates focus on medical German terminology.'
    },
    {
      icon: BookOpenCheck,
      title: 'Qualification Recognition (Anerkennung)',
      desc: 'Providing accurate guidance on the official state-level Anerkennungsverfahren for regulated professions such as nursing, ensuring realistic expectation setting.'
    },
    {
      icon: Users,
      title: 'Employer Application & Interview Preparation',
      desc: 'Preparing candidates for structured virtual interviews with German hospital directors, head chefs, and technical hiring managers.'
    },
    {
      icon: FolderCheck,
      title: 'Documentation & Process Guidance',
      desc: 'Assistance with required sworn German translations, apostille verification, embassy checklist preparation, and work visa appointment scheduling.'
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#2563EB] bg-[#EFF6FF] px-3.5 py-1.5 rounded-full">
            German Standards & Compliance
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-[#0F172A] tracking-tight">
            Preparing for Professional Opportunities in Germany
          </h2>
          <p className="text-base text-[#64748B] max-w-2xl mx-auto leading-relaxed">
            Success in the German job market begins with thorough preparation, valid credential assessment, and understanding specific statutory requirements for your profession.
          </p>
        </div>

        {/* 6 Structured Guidance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {preparationPillars.map((item, index) => {
            const IconComp = item.icon;
            return (
              <div
                key={index}
                className="p-6 sm:p-7 rounded-3xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#2563EB]/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold font-display text-[#0F172A]">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Realistic Standards Notice */}
        <div className="mt-10 p-5 rounded-2xl bg-[#FFFBEB] border border-[#FDE68A] flex items-start gap-3.5 text-left text-xs sm:text-sm text-[#92400E]">
          <ShieldAlert className="w-5 h-5 text-[#D97706] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-bold">Important Statutory Information</p>
            <p className="leading-relaxed text-[#78350F]">
              Official recognition of qualifications is determined solely by the competent regional German authorities (ZAB, state nursing boards, or IHK FOSA). Language prerequisites differ between occupations and federal states. GLOBALFLY provides professional advisory and guidance throughout the process; we do not issue German government certificates or make guaranteed placement promises.
            </p>
          </div>
        </div>

        {/* Check Eligibility CTA */}
        <div className="mt-12 text-center">
          <Link to="/check-eligibility">
            <Button variant="outline" size="lg" icon={ArrowRight}>
              Check Your Eligibility for Germany
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default GermanStandardsSection;
