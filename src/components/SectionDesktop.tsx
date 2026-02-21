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
  backgroundOffset?: string;
  backgroundScale?: number;
  contentAlign?: 'left' | 'center' | 'right';
  verticalOffset?: number;
}

const SectionDesktop: React.FC<SectionProps> = ({ id, imageSrc, backgroundColor, children, top, bottom, backgroundOffset, contentAlign = 'center', verticalOffset }) => {
  const sectionHeight = Math.max(top.left + bottom.left, top.right + bottom.right);
  const overlap = Math.max(top.left, top.right);
  const toPercent = (value: number) => (value / sectionHeight) * 100;

  const leftMid = top.left + bottom.left / 2;
  const rightMid = top.right + bottom.right / 2;
  const centerPercent = toPercent((leftMid + rightMid) / 2);
  const alignClass = contentAlign === 'left' ? 'items-start' : contentAlign === 'right' ? 'items-end' : 'items-center';

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
        className="absolute inset-0 responsive-bg no-trapezoid"
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
      />
        <div className={`absolute left-0 right-0 flex flex-col ${alignClass} px-16`}
        style={{
          top: `calc(${centerPercent}% + ${verticalOffset ?? 0}vh)`,
          transform: 'translateY(-50%)',
          pointerEvents: 'auto',
          zIndex: 20,
        }}
        >
        {children}
      </div>
    </section>
  );
};

export default SectionDesktop;