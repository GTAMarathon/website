import React from 'react';

interface SectionProps {
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
}

const Section: React.FC<SectionProps> = ({ id, imageSrc, backgroundColor, children, top, bottom }) => {
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
        className="relative h-full flex items-center justify-center"
        style={{
          backgroundColor: backgroundColor,
          backgroundImage: `url(${imageSrc})`,
          clipPath: `polygon(
            0 ${toPercent(top.left)}%,
            100% ${toPercent(top.right)}%,
            100% ${toPercent(top.right + bottom.right)}%,
            0 ${toPercent(top.left + bottom.left)}%
          )`,
          overflow: "visible",
        }}
      >
        <div 
        className="relative h-full flex items-center p-8"
        style = {{pointerEvents: 'auto', zIndex: 20, transform: 'translateZ(0)'}}
        >
          <div className="max-w-4xl mx-auto w-full relative">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;