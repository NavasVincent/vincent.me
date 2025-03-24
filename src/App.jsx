import { useState } from "react";
import { Home } from "./views/Home";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer"; 

function App() {
  return (
    <div className="font-sans bg-gray-50 font-regular text-[12px] z-30">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
