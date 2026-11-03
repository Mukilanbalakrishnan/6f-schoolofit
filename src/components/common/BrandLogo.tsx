import React from 'react';

interface BrandLogoProps {
  variant?: 'navbar' | 'footer' | 'large';
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ variant = 'navbar', className = '' }) => {
  const isFooter = variant === 'footer';
  const isLarge = variant === 'large';

  // Responsive logo heights calibrated for 1.67:1 aspect ratio
  // Perfectly matches the reference composition:
  // - Left: Tall 6F Student Emblem (torch flame + 6F + student)
  // - Right: "6F SCHOOL OF IT" aligned alongside top bar of F, with script tagline "— Transform Through Experience —"
  const logoHeight = isLarge
    ? 'h-22 sm:h-26 lg:h-28'
    : isFooter
    ? 'h-16 sm:h-20 lg:h-24'
    : 'h-10 sm:h-11 lg:h-12';

  return (
    <div className={`inline-flex items-center group select-none ${className}`}>
      <img
        src="/6f-school-logo-hd.png"
        srcSet="/6f-school-logo.png 1x, /6f-school-logo-hd.png 2x"
        alt="6F School of IT - Transform Through Experience"
        className={`${logoHeight} w-auto object-contain shrink-0 transition-transform duration-200 group-hover:scale-[1.02]`}
        loading="eager"
        decoding="async"
      />
    </div>
  );
};
