import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe, ShieldAlert } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-white pt-16 pb-12 border-t border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#1E293B]">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#2563EB] to-[#F59E0B] flex items-center justify-center text-white font-black text-xl">
                G
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tight text-white font-display">
                  GLOBAL<span className="text-[#F59E0B]">FLY</span>
                </span>
                <span className="text-[10px] uppercase font-semibold text-[#94A3B8] tracking-widest -mt-1">
                  Consultancy Pvt. Ltd.
                </span>
              </div>
            </Link>
            <p className="text-sm text-[#94A3B8] leading-relaxed max-w-sm">
              GlobalFly is a premier India-based overseas recruitment consultancy specializing in career placement, nursing, skilled trades, study programs, and Ausbildung in Germany.
            </p>
            <div className="space-y-2 text-xs text-[#CBD5E1] pt-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#F59E0B] shrink-0" />
                <span>India Head Office & Representation across Germany</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#F59E0B] shrink-0" />
                <span>info@GlobalFlyrecruiters.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#F59E0B] shrink-0" />
                <span>+91 (0) 900 000 0000 / +49 (0) 30 0000 0000</span>
              </div>
            </div>
          </div>

          {/* Column 2: Explore Pathways */}
          <div>
            <h4 className="text-base font-bold text-white mb-4 font-display text-[#F59E0B]">
              Germany Pathways
            </h4>
            <ul className="space-y-2.5 text-sm text-[#CBD5E1]">
              <li><Link to="/jobs" className="hover:text-white transition-colors">Jobs in Germany</Link></li>
              <li><Link to="/work-in-germany" className="hover:text-white transition-colors">Work in Germany</Link></li>
              <li><Link to="/study-in-germany" className="hover:text-white transition-colors">Study in Germany</Link></li>
              <li><Link to="/ausbildung" className="hover:text-white transition-colors">Ausbildung Programs</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Consultancy Services</Link></li>
            </ul>
          </div>

          {/* Column 3: For Candidates & Employers */}
          <div>
            <h4 className="text-base font-bold text-white mb-4 font-display text-[#F59E0B]">
              Quick Access
            </h4>
            <ul className="space-y-2.5 text-sm text-[#CBD5E1]">
              <li><Link to="/check-eligibility" className="hover:text-white transition-colors">Check Eligibility</Link></li>
              <li><Link to="/candidate/register" className="hover:text-white transition-colors">Candidate Registration</Link></li>
              <li><Link to="/employer" className="hover:text-white transition-colors">Employer Recruitment</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About GlobalFly</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Consultants</Link></li>
            </ul>
          </div>

          {/* Column 4: Legal Pages */}
          <div>
            <h4 className="text-base font-bold text-white mb-4 font-display text-[#F59E0B]">
              Legal & Policies
            </h4>
            <ul className="space-y-2.5 text-sm text-[#CBD5E1]">
              <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link></li>
              <li><Link to="/visa-disclaimer" className="hover:text-white transition-colors">Visa Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        {/* Disclaimer Notice */}
        <div className="mt-8 p-4 rounded-xl bg-[#1E293B]/70 border border-[#334155] flex gap-3 items-start text-xs text-[#94A3B8]">
          <ShieldAlert className="w-5 h-5 text-[#F59E0B] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-white">Important Legal Disclaimer:</strong> GlobalFly provides structured recruitment guidance, document assistance, and career consultancy. Visa, immigration, admission, and work permit decisions are strictly governed by statutory German federal authorities (such as BAMF, ZAB, and the German Embassy/Consulate). GlobalFly does not guarantee visa approval, job placement, or entry outcomes.
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#64748B] pt-4 border-t border-[#1E293B]">
          <p>© {new Date().getFullYear()} GlobalFly Overseas Recruitment & Consultancy. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Designed for Premium European Career Guidance</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
