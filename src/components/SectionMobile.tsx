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
  contentAlign?: 'left' | 'center' | 'right';
  verticalOffset?: number;
}

const SectionMobile: React.FC<SectionMobileProps> = ({ id, imageSrc, backgroundColor, children, top, bottom, backgroundOffset, contentAlign = 'center', verticalOffset = 0 }) => {
  
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
        className="absolute inset-0 responsive-bg"
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
        }}
      >
        <div className={`absolute left-0 right-0 flex flex-col ${alignClass} px-6`}
        style={{
          top: `calc(${centerPercent}% + ${verticalOffset}vh)`,
          pointerEvents: 'auto',
          zIndex: 20,
          transform: 'translateY(-50%)'
        }}>
          {children}
        </div>
      </div>
    </section>
  );
};

export default SectionMobile;