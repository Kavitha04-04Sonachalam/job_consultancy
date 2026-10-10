import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, HeartPulse, UtensilsCrossed, Wrench, ChevronDown, CheckCircle } from 'lucide-react';
import Button from '../ui/Button';

export const OpportunitySelector = () => {
  const [selectedOpportunity, setSelectedOpportunity] = useState('Nursing');
  const navigate = useNavigate();

  const opportunityConfig = {
    'Nursing': {
      title: 'Nursing Professional Pathway',
      desc: 'Registered nurse opportunities across German hospitals, clinics, and eldercare facilities with B1/B2 training and Anerkennung qualification recognition.',
      route: '/jobs/nursing#nursing-form',
      icon: HeartPulse,
      badge: 'Healthcare Sector',
      cta: 'Continue to Nursing Form'
    },
    'Chef': {
      title: 'Chef & Culinary Pathway',
      desc: 'Culinary opportunities for Indian, Continental, and fine-dining chefs in verified German restaurant and hotel kitchen environments.',
      route: '/jobs/chef#chef-form',
      icon: UtensilsCrossed,
      badge: 'Hospitality Sector',
      cta: 'Continue to Chef Form'
    },
    'Engineering / Other Opportunities': {
      title: 'Engineering & Technology Pathway',
      desc: 'Technical opportunities for Mechanical, Electrical, Mechatronics, Automotive, and IT Engineers under the German EU Blue Card framework.',
      route: '/jobs/engineering#engineering-form',
      icon: Wrench,
      badge: 'Technology Sector',
      cta: 'Continue to Engineering Form'
    }
  };

  const current = opportunityConfig[selectedOpportunity] || opportunityConfig['Nursing'];
  const IconComp = current.icon;

  const handleContinue = (e) => {
    e.preventDefault();
    navigate(current.route);
  };

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Section Heading */}
        <div className="space-y-3">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#2563EB] bg-[#EFF6FF] px-3.5 py-1.5 rounded-full">
            Fast Candidate Intake
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-display text-[#0F172A] tracking-tight">
            Which Opportunity Are You Interested In?
          </h2>
          <p className="text-sm sm:text-base text-[#64748B] max-w-xl mx-auto">
            Choose your professional category below. You will be taken straight to the dedicated enquiry and application form for your field.
          </p>
        </div>

        {/* Dropdown & Continue Card */}
        <div className="bg-[#F8FAFC] rounded-3xl border border-[#E2E8F0] p-6 sm:p-10 shadow-sm text-left space-y-6">
          
          <div className="space-y-2">
            <label htmlFor="opportunitySelect" className="block text-sm font-bold text-[#0F172A]">
              Select Your Target Opportunity <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                id="opportunitySelect"
                value={selectedOpportunity}
                onChange={(e) => setSelectedOpportunity(e.target.value)}
                className="w-full appearance-none px-4 py-3.5 pr-10 rounded-2xl bg-white border border-[#CBD5E1] text-[#0F172A] text-base font-semibold focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] shadow-sm cursor-pointer transition-all"
              >
                <option value="Nursing">Nursing</option>
                <option value="Chef">Chef</option>
                <option value="Engineering / Other Opportunities">Engineering / Other Opportunities</option>
              </select>
              <ChevronDown className="w-5 h-5 text-[#64748B] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Dynamic Preview of Selected Opportunity */}
          <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center shrink-0">
              <IconComp className="w-6 h-6" />
            </div>
            <div className="space-y-1 flex-grow">
              <div className="flex items-center gap-2">
                <h4 className="text-base font-bold text-[#0F172A]">{current.title}</h4>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#FEF3C7] text-[#92400E]">
                  {current.badge}
                </span>
              </div>
              <p className="text-xs text-[#64748B] leading-relaxed">
                {current.desc}
              </p>
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-2">
            <Button
              type="button"
              onClick={handleContinue}
              variant="primary"
              size="lg"
              icon={ArrowRight}
              className="w-full justify-center text-base py-3.5 font-bold shadow-md hover:shadow-lg transition-all"
            >
              Continue to Contact Form
            </Button>
          </div>

          <p className="text-center text-xs text-[#94A3B8]">
            Directly opens the {selectedOpportunity === 'Nursing' ? 'Nursing' : selectedOpportunity === 'Chef' ? 'Chef' : 'Engineering'} contact form with zero intermediary steps.
          </p>

        </div>

      </div>
    </section>
  );
};

export default OpportunitySelector;
