import Image from 'next/image';
import { scrollToSection } from '@/utils/scrollToSection';

interface NavbarMobileProps {
  logoSrc: string;
}

const NavbarMobile = ({ logoSrc }: NavbarMobileProps) => {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-lg z-50">
      <div className="relative">
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#4fbafe] z-10" />
        <div className="flex items-center justify-center px-4 h-16 relative z-20">
          <a href="#" onClick={() => scrollToSection('home')}>
            <Image 
              src={logoSrc} 
              alt="Logo" 
              className="h-[100px] w-auto cursor-pointer" 
              width={512} 
              height={512} 
            />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavbarMobile;