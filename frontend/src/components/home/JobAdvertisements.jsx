import React from 'react';
import { Link } from 'react-router-dom';
import { HeartPulse, UtensilsCrossed, Wrench, ArrowRight, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';
import Button from '../ui/Button';

export const JobAdvertisements = () => {
  const advertisements = [
    {
      id: 'nursing',
      title: 'Nursing Opportunities',
      subCategory: 'Healthcare & Clinical Care',
      image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800',
      description: 'Openings for B.Sc. and GNM qualified nurses in German hospitals and medical centres with full qualification recognition (Anerkennung) and language preparation support.',
      points: [
        'GNM & B.Sc. Registered Nurses',
        'Hospital & clinic networks across Germany',
        'Structured B1/B2 German guidance',
        'Long-term EU career progression'
      ],
      badge: 'High Healthcare Demand',
      icon: HeartPulse,
      accentColor: 'blue',
      formRoute: '/jobs/nursing#nursing-form',
      ctaText: 'Enquire Now'
    },
    {
      id: 'chef',
      title: 'Chef Opportunities',
      subCategory: 'Hospitality & Culinary Arts',
      image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=800',
      description: 'Positions for professional specialty chefs and culinary specialists in established German restaurants, hotel dining rooms, and European hospitality establishments.',
      points: [
        'Indian, Continental & Multi-cuisine chefs',
        'Full-time German restaurant contracts',
        'Employer work permit support',
        'Competitive industry salary scale'
      ],
      badge: 'Active Culinary Placements',
      icon: UtensilsCrossed,
      accentColor: 'gold',
      formRoute: '/jobs/chef#chef-form',
      ctaText: 'Enquire Now'
    },
    {
      id: 'engineering',
      title: 'Other Opportunities',
      subCategory: 'Engineering & Technology',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800',
      description: 'Technical career pathways for Mechanical, Electrical, Mechatronics, Automotive, and IT Engineers seeking fast-track employment under the EU Blue Card.',
      points: [
        'Mechanical, Electrical & Mechatronics',
        'IT, DevOps & Software Engineering',
        'Fast-track EU Blue Card eligibility',
        'German industrial hubs & tech parks'
      ],
      badge: 'Skilled Tech Pathways',
      icon: Wrench,
      accentColor: 'indigo',
      formRoute: '/jobs/engineering#engineering-form',
      ctaText: 'Enquire Now'
    }
  ];

  return (
    <section className="relative overflow-hidden bg-[#0F172A] text-white pt-12 pb-20 lg:pt-16 lg:pb-24 border-b border-[#1E293B]">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#2563EB]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#F59E0B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Intro Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1E293B] border border-[#334155] text-xs font-semibold text-[#E2E8F0]">
            <ShieldCheck className="w-4 h-4 text-[#F59E0B]" />
            <span>GLOBALFLY Overseas Recruitment — Three Core Germany Pathways</span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-white leading-tight">
            Build Your Career in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-[#F59E0B]">Germany</span>
          </h1>

          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Select your professional sector below to open the dedicated contact form and connect directly with our German recruitment consultants.
          </p>
        </div>

        {/* 3 Large Advertisements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advertisements.map((ad) => {
            const IconComp = ad.icon;
            return (
              <div
                key={ad.id}
                className="group relative bg-[#1E293B]/80 backdrop-blur-sm rounded-3xl border border-[#334155] hover:border-[#2563EB] transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl hover:shadow-2xl hover:-translate-y-1"
              >
                <div>
                  {/* Image with overlay */}
                  <div className="relative h-56 sm:h-64 overflow-hidden">
                    <img
                      src={ad.image}
                      alt={ad.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B] via-[#1E293B]/40 to-transparent" />
                    
                    {/* Top badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-[#0F172A]/80 backdrop-blur-md text-white border border-white/20 flex items-center gap-1.5">
                        <IconComp className="w-3.5 h-3.5 text-[#F59E0B]" />
                        {ad.subCategory}
                      </span>
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#2563EB] text-white">
                        Germany
                      </span>
                    </div>

                    {/* Bottom pill */}
                    <div className="absolute bottom-3 left-4">
                      <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold tracking-wide uppercase bg-[#F59E0B] text-[#0F172A]">
                        {ad.badge}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 text-left space-y-4">
                    <div>
                      <h3 className="text-2xl font-black font-display text-white group-hover:text-[#F59E0B] transition-colors">
                        {ad.title}
                      </h3>
                      {ad.id === 'engineering' && (
                        <p className="text-xs font-semibold text-[#94A3B8]">
                          (Engineering & Technical Opportunities)
                        </p>
                      )}
                    </div>

                    <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
                      {ad.description}
                    </p>

                    {/* Bullet Highlights */}
                    <ul className="space-y-2 pt-2 border-t border-[#334155]/60 text-xs text-[#94A3B8]">
                      {ad.points.map((pt, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Direct CTA */}
                <div className="p-6 pt-0">
                  <Link to={ad.formRoute} className="block w-full">
                    <Button
                      variant={ad.id === 'nursing' ? 'primary' : ad.id === 'chef' ? 'gold' : 'primary'}
                      size="lg"
                      icon={ArrowRight}
                      className="w-full justify-center shadow-lg font-bold"
                    >
                      {ad.ctaText}
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default JobAdvertisements;
