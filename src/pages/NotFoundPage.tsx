import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Compass } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="w-full bg-white py-24 text-center text-[#151922]">
      <div className="mx-auto max-w-xl px-4">
        <div className="flex h-16 w-16 mx-auto items-center justify-center rounded-2xl bg-[#F7F9FC] border border-[#E5E9F0] text-[#2563EB] mb-6">
          <Compass className="h-8 w-8" />
        </div>
        <span className="text-xs font-mono font-bold text-[#2563EB] uppercase tracking-wider">
          Error 404
        </span>
        <h1 className="mt-2 text-3xl font-extrabold text-[#151922]">
          Page Not Found
        </h1>
        <p className="mt-3 text-sm text-[#626B78] leading-relaxed">
          The requested page does not exist or has been moved. Explore our technology programs or return
          to the homepage.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-md bg-[#2563EB] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#1D4ED8]"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Return Home</span>
          </Link>
          <Link
            to="/courses"
            className="inline-flex items-center rounded-md border border-[#E5E9F0] bg-white px-5 py-2.5 text-sm font-semibold text-[#151922] hover:bg-[#F7F9FC]"
          >
            Explore Courses
          </Link>
        </div>
      </div>
    </div>
  );
};

