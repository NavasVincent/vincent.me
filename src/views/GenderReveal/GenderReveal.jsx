import { useEffect, useRef, useState } from "react"; 
import { MessageForm } from "./MessageForm";
import {Journey} from "./Journey"
import { GiftRegistry } from "./GiftRegistry";
import {CountDown} from "./CountDown"
import { CastYourVote } from "./CastYourVote";
const GenderReveal = () => {
   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 }); 
  const [showConfetti, setShowConfetti] = useState(false);
  const [confettiTeam, setConfettiTeam] = useState(""); 

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);


  const Confetti = ({ team }) => {
    return (
      <div
        className={`fixed inset-0 pointer-events-none z-50 ${
          showConfetti ? "block" : "hidden"
        }`}
      >
        {Array.from({ length: 100 }).map((_, i) => {
          const size = Math.random() * 10 + 5;
          const left = Math.random() * 100;
          const animationDuration = Math.random() * 10+ 4;
          const delay = Math.random() * 0.5;
  
          return (
            <div
              key={i}
              className={`absolute rounded-full ${
                team === "boy" ? "bg-blue-400" : "bg-pink-400"
              }`}
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${left}%`,
                top: "-10px",
                animation: `fall ${animationDuration}s ease-in ${delay}s forwards`, 
              }}
            />
          );
        })}
      </div>
    );
  };

  const FloatingBalloon = ({ color, position }) => { 
    const offsetX = mousePosition.x * 0.02;
    const offsetY = mousePosition.y * 0.02;
  
    return (
      <div
        className={`absolute ${position} transition-transform duration-1000 ease-in-out md:mt-[90px] md:z-20`}
        style={{ transform: `translate(${offsetX}px, ${offsetY}px)` }}
      >
        <div className={`w-16 h-20 rounded-full ${color} relative`}>
 
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-10 bg-gray-400"></div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 overflow-hidden">
      {showConfetti && <Confetti team={confettiTeam} />}
      {/* Header Section */}
      <header className="relative py-8 text-center">
        <FloatingBalloon color="bg-blue-400" position="top-10 left-20" />
        <FloatingBalloon color="bg-pink-400" position="top-10 right-20" />
        <h1 className="text-5xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500 font-['Comic_Sans_MS'] tracking-wide">
          Boy or Girl?
        </h1>
        <p className="mt-4 text-xl text-gray-600">
          The most exciting reveal of 2025!
        </p>
      </header>
      {/* Main Hero Section */}
      <section className="flex flex-row md:flex-col w-full md:mt-6 ">
        <div className="w-full   bg-blue-50 p-8 md:p-12 transition-all duration-300 hover:bg-blue-100 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-blue-700 mb-4">Team Boy</h2>
            <p className="text-blue-600 text-lg mb-6">
              Trucks, dinosaurs, and lots of noise! Are you ready for a little
              boy?
            </p>
            <div className="flex space-x-4">
              <i className="fas fa-car text-blue-400 text-3xl animate-bounce"></i>
              <i className="fas fa-rocket text-blue-500 text-3xl animate-pulse"></i>
              <i className="fas fa-dragon text-blue-600 text-3xl"></i>
            </div>
          </div>
          {/* Background floating elements */}
          <div className="absolute top-10 right-10 text-4xl text-blue-200 animate-pulse">
            <i className="fas fa-baseball"></i>
          </div>
          <div className="absolute bottom-10 left-10 text-4xl text-blue-200 animate-bounce">
            <i className="fas fa-truck"></i>
          </div>
          <div className="absolute top-1/2 left-1/4 text-5xl text-blue-200 animate-pulse">
            <i className="fas fa-robot"></i>
          </div>
        </div>
        <div className="w-full   bg-pink-50 p-8 md:p-12 transition-all duration-300 hover:bg-pink-100 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-pink-600 mb-4">Team Girl</h2>
            <p className="text-pink-500 text-lg mb-6">
              Sugar, spice, and everything nice! Could it be a little princess?
            </p>
            <div className="flex space-x-4">
              <i className="fas fa-crown text-pink-400 text-3xl animate-bounce"></i>
              <i className="fas fa-heart text-pink-500 text-3xl animate-pulse"></i>
              <i className="fas fa-magic text-pink-600 text-3xl"></i>
            </div>
          </div>
          {/* Background floating elements */}
          <div className="absolute top-10 right-10 text-4xl text-pink-200 animate-pulse">
            <i className="fas fa-butterfly"></i>
          </div>
          <div className="absolute bottom-10 left-10 text-4xl text-pink-200 animate-bounce">
            <i className="fas fa-wand-magic-sparkles"></i>
          </div>
          <div className="absolute top-1/2 right-1/4 text-5xl text-pink-200 animate-pulse">
            <i className="fas fa-unicorn"></i>
          </div>
        </div>
      </section>
     <CastYourVote setConfettiTeam={setConfettiTeam} setShowConfetti={setShowConfetti}/> 
      <CountDown/>
      <GiftRegistry/>
      <MessageForm/>  
      <Journey/>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <p className="mb-4">
            <span className="text-blue-500">May 30, 2025</span> •
            <span className="text-pink-500"> 4:00 PM</span> •
            <span className="text-blue-500"> Blk 55 Lot 03 ,Navas Residence, Purok 3 Hiraya Manawari Phase 2 Brgy. San Vicente, Tabaco City, Albay</span>,
             
          </p>
          <p className="text-gray-500 text-sm">
            Hosted with love by the Daddy Vincent • © 2025
          </p>
        </div>
      </footer>
      {/* Custom animation keyframes */}
      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-10px) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
          
      `}</style>
    </div>
  );
};
export default GenderReveal;
