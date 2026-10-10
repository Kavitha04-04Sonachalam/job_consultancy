import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, ArrowUp } from 'lucide-react';
import InstagramIcon from '../ui/InstagramIcon';
import siteConfig from '../../config/site';

const FacebookIcon = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

export const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white pt-20 pb-12 border-t border-[#1E293B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Three Columns: ABOUT US | QUICK LINKS | FOLLOW US (NaviVisa Screenshot Inspired) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 pb-16 border-b border-[#1E293B] text-left">
          
          {/* Column 1: ABOUT US */}
          <div className="space-y-5">
            <h3 className="text-xl sm:text-2xl font-black tracking-wider uppercase text-white font-display">
              ABOUT US
            </h3>
            <p className="text-sm sm:text-base font-medium text-[#EA580C] sm:text-[#F59E0B] leading-relaxed max-w-sm">
              We are an overseas recruitment & career consultancy bridging ambitious candidates and students with verified employers across Germany. We guide qualified candidates in nursing, culinary arts, and engineering to realize their professional careers in Germany with full regulatory compliance.
            </p>
          </div>

          {/* Column 2: QUICK LINKS */}
          <div className="space-y-5 md:pl-8">
            <h3 className="text-xl sm:text-2xl font-black tracking-wider uppercase text-white font-display">
              QUICK LINKS
            </h3>
            <ul className="space-y-3 text-sm sm:text-base font-semibold text-[#EA580C] sm:text-[#F59E0B]">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/jobs" className="hover:text-white transition-colors">
                  Looking for Job?
                </Link>
              </li>
              <li>
                <Link to="/employer" className="hover:text-white transition-colors">
                  Looking for Employees?
                </Link>
              </li>
              <li>
                <Link to="/check-eligibility" className="hover:text-white transition-colors">
                  Check Eligibility
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: FOLLOW US */}
          <div className="space-y-5 md:pl-8">
            <h3 className="text-xl sm:text-2xl font-black tracking-wider uppercase text-white font-display">
              FOLLOW US
            </h3>
            <div className="flex items-center gap-5 pt-1 text-[#EA580C] sm:text-[#F59E0B]">
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow GLOBALFLY on Facebook"
                className="hover:text-white transition-colors"
                title="Facebook"
              >
                <FacebookIcon className="w-6 h-6" />
              </a>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow GLOBALFLY on Instagram"
                className="hover:text-white transition-colors"
                title="Instagram"
              >
                <InstagramIcon className="w-6 h-6" />
              </a>
            </div>
            <p className="text-xs text-[#94A3B8] pt-2">
              Stay connected with verified Germany vacancy notices and candidate roadmaps.
            </p>
          </div>

        </div>

        {/* Legal Disclaimer Notice */}
        <div className="mt-10 p-5 rounded-2xl bg-[#0F172A] border border-[#1E293B] flex gap-3.5 items-start text-xs text-[#94A3B8] text-left">
          <ShieldAlert className="w-5 h-5 text-[#F59E0B] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-white">Statutory Regulatory Notice:</strong> GLOBALFLY Consultancy Pvt Ltd provides overseas career advisory, document assistance, and candidate representation. Official visa, immigration, and professional recognition decisions rest solely with statutory German authorities (BAMF, ZAB, regional health and commerce boards). We do not guarantee visa issuance or automatic placement outcomes.
          </p>
        </div>

        {/* Bottom Policy Links & Copyright */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#64748B] pt-6 border-t border-[#1E293B] gap-4">
          <p>© {new Date().getFullYear()} GLOBALFLY Consultancy Pvt Ltd. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 text-[#94A3B8]">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
            <Link to="/visa-disclaimer" className="hover:text-white transition-colors">Visa Disclaimer</Link>
          </div>
        </div>

      </div>

      {/* Floating Scroll-to-Top Button (Screenshot Feature) */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-[#6366F1] hover:bg-[#4F46E5] text-white flex items-center justify-center shadow-2xl transition-all duration-300 z-50 hover:scale-110 active:scale-95 animate-fadeIn"
          title="Back to Top"
        >
          <ArrowUp className="w-5 h-5 stroke-[2.5]" />
        </button>
      )}
    </footer>
  );
};

export default Footer;
