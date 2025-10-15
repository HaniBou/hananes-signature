import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  titleColor?: string;
  subtitleColor?: string;
  underlineColor?: string;
}

const SectionTitle = ({ 
  title, 
  subtitle, 
  centered = true,
  className = '',
  titleColor = 'text-brown-dark',
  subtitleColor = 'text-black',
  underlineColor = 'bg-gold-light'
}: SectionTitleProps) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className={`font-serif text-3xl md:text-4xl ${titleColor} mb-3 relative inline-block`}>
        {title}
        <span className={`absolute -bottom-2 left-0 right-0 h-1 ${underlineColor}`}></span>
      </h2>
      {subtitle && (
        <p className={`${subtitleColor} mt-3 max-w-2xl mx-auto`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;