export const handleCalendlyPopup = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/vhincebotalon/let-s-work-together-book-a-call",
      });
    }
  }; 