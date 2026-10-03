import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import Button from '../ui/Button';

export const GermanySection = () => {
  const sectors = [
    'Healthcare & Nursing',
    'Professional Chefs & Kitchen',
    'Heavy Vehicle & Logistics Drivers',
    'Industrial & CNC Manufacturing',
    'Skilled Electrical & Mechanical Trades',
    'IT & Software Engineering',
    'Dual Vocational Ausbildung'
  ];

  return (
    <section className="relative overflow-hidden bg-[#0F172A] text-white py-20 border-b border-[#1E293B]">
      {/* Background Graphic */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3B82F6_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#F59E0B] bg-[#F59E0B]/10 border border-[#F59E0B]/30 px-3.5 py-1.5 rounded-full">
              Primary Overseas Destination
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white leading-tight">
              Build Your Future in <span className="text-[#F59E0B]">Germany</span>
            </h2>

            <p className="text-base text-[#94A3B8] leading-relaxed max-w-2xl">
              Germany's Skilled Immigration Act (Fachkräfteeinwanderungsgesetz) creates structured avenues for qualified international professionals and trainees. GlobalFly guides candidates through profile evaluation, document recognition, and employer connections.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {sectors.map((sec, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#E2E8F0]">
                  <div className="w-5 h-5 rounded-full bg-[#2563EB] flex items-center justify-center text-white shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>{sec}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link to="/work-in-germany">
                <Button variant="gold" size="md" icon={ArrowRight}>
                  Explore Germany Pathways
                </Button>
              </Link>
              <Link to="/check-eligibility">
                <Button variant="outline" size="md" className="text-white border-white/20 hover:bg-white/10">
                  Check Eligibility
                </Button>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-[#334155] shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=800"
                alt="Germany City Skyline"
                className="w-full h-80 lg:h-[420px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/30 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-left">
                <span className="text-xs uppercase font-bold text-[#F59E0B] tracking-wider">Europe's Premier Economy</span>
                <h4 className="text-xl font-bold font-display text-white mt-1">High Standard of Living & Worker Protection</h4>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GermanySection;
