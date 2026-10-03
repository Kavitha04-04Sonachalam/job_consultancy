import React from 'react';
import { Link } from 'react-router-dom';
import { Languages, MessageSquare, CheckCircle2 } from 'lucide-react';
import Button from '../ui/Button';

export const LanguageSection = () => {
  const levels = [
    {
      level: 'A1',
      title: 'Beginner German',
      desc: 'Basic phrases and everyday expressions required for basic hospitality and general entry roles.'
    },
    {
      level: 'A2',
      title: 'Elementary German',
      desc: 'Simple routine communication for chefs, warehouse, logistics, and technical trade candidates.'
    },
    {
      level: 'B1',
      title: 'Intermediate German',
      desc: 'Independent language use required for most Ausbildung programs and healthcare assistant roles.'
    },
    {
      level: 'B2',
      title: 'Upper Intermediate',
      desc: 'Professional fluency required for registered nurses, clinical doctors, and university study.'
    }
  ];

  return (
    <section className="py-20 bg-white border-y border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#2563EB] bg-[#EFF6FF] px-3.5 py-1.5 rounded-full mb-3">
            Language Skills
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] font-display tracking-tight">
            Prepare for Your Journey with German Language Skills
          </h2>
          <p className="mt-3 text-base text-[#64748B] leading-relaxed">
            Proficiency in German greatly increases your visa eligibility, job selection, and integration success in Germany.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left mb-12">
          {levels.map((lvl, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#2563EB] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#2563EB] text-white font-black text-xl flex items-center justify-center font-display mb-4 shadow-sm">
                  {lvl.level}
                </div>
                <h3 className="text-lg font-bold text-[#0F172A] font-display mb-2">
                  {lvl.title}
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  {lvl.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div>
          <a
            href="https://wa.me/919000000000?text=Hello%20GlobalFly%2C%20I%20want%20to%20know%20more%20about%20German%20Language%20Preparation."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="whatsapp" size="lg" icon={MessageSquare}>
              Ask About Language Preparation
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default LanguageSection;
