"use client";

import { useEffect, useState } from 'react';
import { scrollToSection } from '@/utils/scrollToSection';

interface NavbarProps {
  links: { id: string; label: string }[];
  logoSrc: string;
}

const Navbar = ({ links, logoSrc }: NavbarProps) => {
  const [activeId, setActiveId] = useState<string>(links[0]?.id || '');

  useEffect(() => {
    const sections = links.map(link => document.getElementById(link.id)).filter(Boolean);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            setActiveId(entry.target.id);
          }
        });
      },
      { threshold: 0.5, rootMargin: '-50px 0px -50px 0px' }
    );

    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [links]);

  const handleClick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setActiveId(id);
    scrollToSection(id);
  };

  return (
    <nav className="fixed top-0 w-full bg-white shadow-lg z-50">
      <div className="relative">
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#4fbafe] z-10" />
        <div className="flex items-center justify-between px-4 h-16 relative z-20">
          <img src={logoSrc} alt="Logo" className="h-full w-auto" />
          
          <div className="flex h-full">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={handleClick(link.id)}
                className={`relative px-6 h-full flex items-center text-sm font-medium transition-colors ${activeId === link.id ? 'bg-[#4fbafe]' : ''}`}
                style={{ marginRight: '-1px' }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
