import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Compass } from 'lucide-react';
import Button from '../ui/Button';
import InstagramIcon from '../ui/InstagramIcon';
import siteConfig from '../../config/site';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Jobs', path: '/jobs' },
    { label: 'Work in Germany', path: '/work-in-germany' },
    { label: 'Study in Germany', path: '/study-in-germany' },
    { label: 'Ausbildung', path: '/ausbildung' },
    { label: 'Services', path: '/services' },
    { label: 'About Us', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0F172A]/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-[#0F172A] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#2563EB] to-[#F59E0B] flex items-center justify-center text-white font-black text-xl shadow-md group-hover:scale-105 transition-transform">
              G
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-white font-display">
                GLOBAL<span className="text-[#F59E0B]">FLY</span>
              </span>
              <span className="text-[10px] uppercase font-semibold text-[#94A3B8] tracking-widest -mt-1">
                Consultancy Pvt Ltd
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 rounded-full text-xs xl:text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-[#2563EB] text-white shadow-sm'
                      : 'text-[#E2E8F0] hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/check-eligibility">
              <Button variant="gold" size="sm" icon={Compass}>
                Check Eligibility
              </Button>
            </Link>
            {/* Instagram placed in WhatsApp's previous position */}
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit GLOBALFLY on Instagram"
            >
              <Button variant="instagram" size="sm" icon={InstagramIcon}>
                Instagram
              </Button>
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link to="/check-eligibility" className="sm:hidden">
              <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-[#F59E0B] text-[#0F172A]">
                Eligibility
              </span>
            </Link>
            {/* Mobile Instagram Action */}
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit GLOBALFLY on Instagram"
              className="p-2 rounded-xl text-white bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] shadow-sm flex items-center justify-center"
              title="Follow GLOBALFLY on Instagram"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:bg-white/10 rounded-xl focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#0F172A] border-t border-[#1E293B] shadow-2xl p-6 transition-all animate-fadeIn">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                    isActive
                      ? 'bg-[#2563EB] text-white'
                      : 'text-[#E2E8F0] hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="pt-4 border-t border-[#1E293B] flex flex-col gap-3">
              <Link to="/check-eligibility" className="w-full">
                <Button variant="gold" size="md" className="w-full justify-center">
                  Check Your Eligibility
                </Button>
              </Link>
              {/* Instagram replacing WhatsApp in mobile menu */}
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button variant="instagram" size="md" icon={InstagramIcon} className="w-full justify-center">
                  Follow on Instagram
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
