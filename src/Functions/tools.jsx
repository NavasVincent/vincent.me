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

  export const separateVotesByGender = (votes) => {
    const boys = [];
    const girls = [];
  
    votes?.forEach((vote) => {
      if (vote.gender.toLowerCase() === "boy") {
        boys.push(vote);
      } else if (vote.gender.toLowerCase() === "girl") {
        girls.push(vote);
      }
    });
  
    return {
      boys,
      girls,
    };
  };


  export const isNameAlreadyInList = (name, list) => { 
    const allGuests = [...list.boys, ...list.girls];
    return allGuests.some(guest => guest.name.trim().toLowerCase() === name.trim().toLowerCase());
  };