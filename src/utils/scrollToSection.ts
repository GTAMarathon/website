// Updated scrollToSection function to center the bottom of the section
export const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    const sectionTop = section.getBoundingClientRect().top + window.scrollY;
    const sectionHeight = section.offsetHeight;

    const bottomPosition = sectionTop + sectionHeight - window.innerHeight / 1;

    window.scrollTo({
      top: bottomPosition,
      behavior: 'smooth',
    });
  }
};