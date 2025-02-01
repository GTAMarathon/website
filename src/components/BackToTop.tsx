"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { scrollToSection } from '@/utils/scrollToSection';

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    showButton && (
      <div
        className="mt-12 cursor-pointer text-lg text-white flex flex-col items-center justify-center font-bebasneue"
        onClick={() => scrollToSection('dates')}
      >
        <span>Back to top</span>
        <Image
          src="/images/logo.png"
          alt="Back to top"
          className="mt-[-30px] w-40 h-40"
          width={512} height={512}
        />
      </div>
    )
  );
};

export default BackToTop;
