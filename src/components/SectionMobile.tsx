import React from 'react';

interface SectionMobileProps {
  id: string;
  backgroundColor: string;
  imageSrc?: string;
  children: React.ReactNode;
  top: {
    left: number;
    right: number;
  };
  bottom: {
    left: number;
    right: number;
  };
  backgroundOffset?: string;
}

const SectionMobile: React.FC<SectionMobileProps> = ({ id, imageSrc, backgroundColor, children, top, bottom, backgroundOffset }) => {
  
  const sectionHeight = Math.max(top.left + bottom.left, top.right + bottom.right);
  const overlap = Math.max(top.left, top.right);
  const toPercent = (value: number) => (value / sectionHeight) * 100;

  return (
    <section
      id={id}
      className="relative isolate"
      style={{
        height: `${sectionHeight}vh`,
        marginTop: `-${overlap}vh`,
        zIndex: 10,
        pointerEvents: 'none'
      }}
    >
      <div 
        className="relative h-full flex items-center justify-center responsive-bg"
        style={{
          backgroundColor: backgroundColor,
          backgroundImage: `url(${imageSrc})`,
          backgroundPosition: backgroundOffset || "center",
          backgroundRepeat: "no-repeat",
          clipPath: `polygon(
            0 ${toPercent(top.left)}%,
            100% ${toPercent(top.right)}%,
            100% ${toPercent(top.right + bottom.right)}%,
            0 ${toPercent(top.left + bottom.left)}%
          )`,
          overflow: "visible",
        }}
      >
        <div className="relative h-full flex items-center p-8"
        style={{
          pointerEvents: 'auto',
          zIndex: 20,
          transform: 'translateZ(0)'
        }}>
          <div className="max-w-4xl mx-auto w-full relative">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionMobile;