import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CountDown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [showGender, setShowGender] = useState(false);

  const targetDate = new Date("2025-05-30T16:00:00");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setShowGender(true);
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-16 px-4 bg-gradient-to-r from-blue-50 to-pink-50 relative"
    >
      <div className="max-w-4xl mx-auto text-center">
        {showGender ? (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700">
              🎉 It's a Boy! 🚀💙
            </h2>
            <p className="text-xl text-gray-600">Thank you for waiting!</p>
          </motion.div>
        ) : (
          <>
            <h2 className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500">
              The Big Reveal In
            </h2>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {["Days", "Hours", "Minutes", "Seconds"].map((label, idx) => {
                const values = [
                  timeLeft.days,
                  timeLeft.hours,
                  timeLeft.minutes,
                  timeLeft.seconds,
                ];
                const colors = [
                  "text-blue-500",
                  "text-pink-500",
                  "text-blue-500",
                  "text-pink-500",
                ];
                return (
                  <div
                    key={label}
                    className="w-20 h-24 md:w-32 md:h-40 bg-white rounded-xl shadow-lg flex flex-col items-center justify-center"
                  >
                    <span
                      className={`text-3xl md:text-6xl font-bold ${colors[idx]}`}
                    >
                      {values[idx]}
                    </span>
                    <span className="text-gray-500 mt-2">{label}</span>
                  </div>
                );
              })}
            </div>
            <p className="mt-12 text-xl text-gray-600">
              Mark your calendar for May 30, 2025 at 4:00 PM
            </p>
          </>
        )}
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-10 left-10 text-3xl text-blue-300 animate-pulse">
        <i className="fas fa-star"></i>
      </div>
      <div className="absolute top-20 right-20 text-3xl text-pink-300 animate-bounce">
        <i className="fas fa-heart"></i>
      </div>
      <div className="absolute bottom-10 left-1/4 text-3xl text-blue-300 animate-bounce">
        <i className="fas fa-star"></i>
      </div>
      <div className="absolute bottom-20 right-1/4 text-3xl text-pink-300 animate-pulse">
        <i className="fas fa-heart"></i>
      </div>
    </motion.section>
  );
};

export { CountDown };
