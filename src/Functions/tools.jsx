import { animate } from "framer-motion";

export const handleCalendlyPopup = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/vhincebotalon/let-s-work-together-book-a-call-1",
      });
    }
  }; 

export const scrollToSection = (id) => { 
  const element = document.getElementById(id);
  if (element) { 
    const topOffset = element.getBoundingClientRect().top + window.scrollY;
     
    animate(window.scrollY, topOffset, {
      type: "spring",
      stiffness: 100,
      damping: 30,
      duration: 0.6,
      onUpdate: (value) => window.scrollTo(0, value),
    });

    // Update the URL hash
    window.history.pushState(null, "", `#${id}`);
  }
  };