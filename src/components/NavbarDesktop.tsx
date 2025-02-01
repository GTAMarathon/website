"use client";

import { useEffect, useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import { scrollToSection } from '@/utils/scrollToSection';

interface NavbarDesktopProps {
  links: { id: string; label: string }[];
  logoSrc: string;
}

const NavbarDesktop = ({ links, logoSrc }: NavbarDesktopProps) => {
  const [activeId, setActiveId] = useState<string>(links[0]?.id || '');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const sections = links.map(link => document.getElementById(link.id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrolling) return;

        let activeSection: string | null = null;
        let maxVisibleArea = 0;

        entries.forEach(entry => {
          const rect = entry.target.getBoundingClientRect();
          const visibleHeight = Math.max(0, Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0));

          if (visibleHeight > maxVisibleArea) {
            maxVisibleArea = visibleHeight;
            activeSection = entry.target.id;
          }
        });

        if (activeSection) {
          setActiveId(activeSection);
        }
      },
      { threshold: [0.5] }
    );

    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [links, isScrolling]);

  const handleClick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setActiveId(id);
    scrollToSection(id);
  };

  const handleScroll = useCallback(() => {
    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    
    setIsScrolling(true);

    scrollTimeout.current = setTimeout(() => {
      setIsScrolling(false);
    }, 200);

    lastScrollY.current = window.scrollY;
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, [handleScroll]);

  return (
    <nav className="fixed top-0 w-full bg-white shadow-lg z-50">
      <div className="relative">
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#4fbafe] z-10" />
        <div className={`flex items-center justify-between px-4 h-16 relative z-20 ${isMobileMenuOpen ? 'justify-center' : ''}`}>
          {/* Logo */}
          <a href="#" onClick={() => scrollToSection('home')} className={`${isMobileMenuOpen ? 'mx-auto' : ''}`}>
            <Image src={logoSrc} alt="Logo" className="h-[100px] w-auto cursor-pointer" width={512} height={512} />
          </a>
          <button
            className="xl:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div className="hidden xl:flex h-full">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={handleClick(link.id)}
                className={`relative px-6 h-full font-bebasneue items-center text-[30px] transition-colors hidden xl:flex ${activeId === link.id ? 'bg-[#4fbafe]' : ''}`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white xl:hidden">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={handleClick(link.id)}
                className={`block px-6 py-3 text-sm font-bebasneue ${activeId === link.id ? 'bg-[#4fbafe]' : ''}`}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavbarDesktop;