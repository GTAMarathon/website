"use client";

import { useEffect, useState, useRef } from 'react';
import { scrollToSection } from '@/utils/scrollToSection';

interface NavbarProps {
  links: { id: string; label: string }[];
  logoSrc: string;
}

const Navbar = ({ links, logoSrc }: NavbarProps) => {
  const [activeId, setActiveId] = useState<string>(links[0]?.id || '');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCooldown, setIsCooldown] = useState(false); // Cooldown for navbar interaction
  const lastScrollY = useRef(0); // Track last scroll position
  const [scrollingManually, setScrollingManually] = useState(false); // Track manual scrolling

  useEffect(() => {
    const sections = links.map(link => document.getElementById(link.id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        if (isCooldown || scrollingManually) return; // Skip if in cooldown or manual scrolling

        let activeSection: string | null = null;
        let maxVisibleArea = 0;

        entries.forEach(entry => {
          // Calculate visible area of the section
          const rect = entry.target.getBoundingClientRect();
          const visibleHeight = Math.max(0, Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0));

          if (visibleHeight > maxVisibleArea) {
            maxVisibleArea = visibleHeight;
            activeSection = entry.target.id;
          }
        });

        // Update active section
        if (activeSection) {
          setActiveId(activeSection);
        }
      },
      { threshold: [0, 0.5, 1] } // Track multiple threshold values
    );

    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [links, isCooldown, scrollingManually]); // Depend on cooldown and manual scroll state

  const handleClick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setActiveId(id);

    // Trigger cooldown to prevent section updates from the observer
    setIsCooldown(true);
    scrollToSection(id);

    // Reset the cooldown after 2 seconds
    setTimeout(() => {
      setIsCooldown(false);
    }, 2000);
  };

  const handleScroll = () => {
    // Detect manual scroll
    if (Math.abs(window.scrollY - lastScrollY.current) > 5) {
      if (!scrollingManually) {
        setScrollingManually(true); // Start manual scroll detection
      }
      setIsCooldown(false); // Reset cooldown during manual scrolling
    }

    lastScrollY.current = window.scrollY;
  };

  // Handle scroll stop (after manual scroll has ended)
  useEffect(() => {
    if (scrollingManually) {
      const timeout = setTimeout(() => {
        setScrollingManually(false); // Stop manual scrolling detection after a short delay
      }, 150); // Set timeout for detecting scroll stop
      return () => clearTimeout(timeout);
    }
  }, [scrollingManually]);

  useEffect(() => {
    // Add scroll event listener to detect manual scrolling
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollingManually]);

  return (
    <nav className="fixed top-0 w-full bg-white shadow-lg z-50">
      <div className="relative">
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#4fbafe] z-10" />
        <div className="flex items-center justify-between px-4 h-16 relative z-20">
          <a href="#" onClick={() => scrollToSection('home')}>
            <img src={logoSrc} alt="Logo" className="h-[100px] w-auto cursor-pointer" />
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