import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Button from '../components/ui/Button';

export const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found | GlobalFly</title>
      </Helmet>
      <div className="py-24 bg-[#F8FAFC] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-7xl font-black font-display text-[#2563EB] mb-2">404</h1>
        <h2 className="text-2xl font-bold font-display text-[#0F172A] mb-3">Page Not Found</h2>
        <p className="text-sm text-[#64748B] max-w-md mb-6">
          The page you are looking for might have been moved, renamed, or is temporarily unavailable.
        </p>
        <Link to="/">
          <Button variant="primary" size="md">
            Return to Homepage
          </Button>
        </Link>
      </div>
    </>
  );
};

export default NotFound;
