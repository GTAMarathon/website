"use client";

import { useEffect, useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import { scrollToSection } from '@/utils/scrollToSection';

interface NavbarProps {
  links: { id: string; label: string }[];
  logoSrc: string;
}

const Navbar = ({ links, logoSrc }: NavbarProps) => {
  const [activeId, setActiveId] = useState<string>(links[0]?.id || '');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCooldown, setIsCooldown] = useState(false);
  const lastScrollY = useRef(0);
  const [scrollingManually, setScrollingManually] = useState(false);

  useEffect(() => {
    const sections = links.map(link => document.getElementById(link.id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        if (isCooldown || scrollingManually) return;

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
      { threshold: [0, 0.5, 1] }
    );

    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [links, isCooldown, scrollingManually]);

  const handleClick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setActiveId(id);

    setIsCooldown(true);
    scrollToSection(id);

    setTimeout(() => {
      setIsCooldown(false);
    }, 2000);
  };

  const handleScroll = useCallback(() => {
    if (Math.abs(window.scrollY - lastScrollY.current) > 5) {
      if (!scrollingManually) {
        setScrollingManually(true);
      }
      setIsCooldown(false);
    }

    lastScrollY.current = window.scrollY;
  }, [scrollingManually]);

  useEffect(() => {
    if (scrollingManually) {
      const timeout = setTimeout(() => {
        setScrollingManually(false);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [scrollingManually]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollingManually, handleScroll]);

  return (
    <nav className="fixed top-0 w-full bg-white shadow-lg z-50">
      <div className="relative">
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#4fbafe] z-10" />
        <div className="flex items-center justify-between px-4 h-16 relative z-20">
          <a href="#" onClick={() => scrollToSection('home')}>
            <Image src={logoSrc} alt="Logo" className="h-[100px] w-auto cursor-pointer" width={512} height={512}/>
          </a>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <div className="hidden md:flex h-full">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={handleClick(link.id)}
                className={`relative px-6 h-full font-bebasneue items-center text-[30px] transition-colors hidden md:flex ${activeId === link.id ? 'bg-[#4fbafe]' : ''}`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white md:hidden">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={handleClick(link.id)}
                className={`block px-6 py-3 text-sm ${activeId === link.id ? 'bg-[#4fbafe]' : ''}`}
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

export default Navbar;