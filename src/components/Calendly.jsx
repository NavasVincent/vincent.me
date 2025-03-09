import React from "react";
import {handleCalendlyPopup} from "../Functions/tools"

const Calendly = () => {
 
  return (
    <>
         <div  
data-url="https://calendly.com/d/cnsy-g4b-m5z?hide_gdpr_banner=1&text_color=000000" className="min-w-[320px] h-[700px] calendly-inline-widget"   >

</div>

 
<button
      onClick={handleCalendlyPopup}
      className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
    >
      Schedule time with me
    </button>
 
 
 </>
    // <button
    //   onClick={handleOpenCalendly}
    //   className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
    // >
    //   Schedule Time with Me
    // </button>
  );
};

export {Calendly};
