import { motion } from "framer-motion";  
const Journey = () => {
  return (
    <motion.section
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
className="py-16 px-4 bg-white"
  > 
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500">
          The Journey So Far
        </h2>
        <div className="relative">
          <div className="absolute md:mx-8 left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-300 to-pink-300 md:left-0"></div>
          <div className="space-y-12 px-8">
            {[
              {
                date: "December 29, 2024",
                title: "The Big News",
                description: "We found out we're expecting! 🎉",
                icon: "fa-heart",
              },
              {
                date: "January 15, 2025",
                title: "First Ultrasound",
                description:
                  "Baby's first photo shoot! Everything looks perfect. 📸",
                icon: "fa-camera",
              },
              {
                date: "May 14, 2025",
                title: "The Secret is Sealed",
                description:
                  "Doctor knows the gender, but we're keeping it a surprise! 🤫",
                icon: "fa-envelope",
              },
              {
                date: "May 30, 2025",
                title: "Gender Reveal & Mommy's Birthday",
                description:
                  "Celebrating the gender reveal and Mommy's birthday! 🎉 Bags are packed and we're ready for the big day. 🏥",
                icon: "fa-hospital",
              },
              {
                date: "June 15, 2025 (Adv)",
                title: "Baby Essentials",
                description:
                  "Preparing all necessities: diapers, clothes, feeding supplies, and more! 👶",
                icon: "fa-baby",
              },
              {
                date: "August 2025",
                title: "Expected Delivery Data",
                description:
                   "The big day is almost here! We're counting down the days to meet our little bundle of joy. 🍼❤️",
                icon: "fa-baby",
              },
            ].map((event, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "justify-start md:justify-end" : "justify-end"
                }`}
              >
                <div
                  className={`w-5/12 md:w-full ${
                    index % 2 === 0 ? "text-right pr-8 md:text-left md:pl-8" : "text-left pl-8"
                  }`}
                >
                  <div
                    className={`bg-gradient-to-br ${
                      index % 2 === 0
                        ? "from-blue-50 to-blue-100"
                        : "from-pink-50 to-pink-100"
                    } p-6 rounded-xl shadow-lg`}
                  >
                    <p className="text-sm font-semibold text-gray-500">
                      {event.date}
                    </p>
                    <h3
                      className={`text-xl font-bold mb-2 ${
                        index % 2 === 0 ? "text-blue-700" : "text-pink-700"
                      }`}
                    >
                      {event.title}
                    </h3>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </div>
                <div className="absolute md:left-0 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-gray-200 flex items-center justify-center">
                  <i
                    className={`fas ${event.icon} ${
                      index % 2 === 0 ? "text-blue-500" : "text-pink-500"
                    }`}
                  ></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};


export { Journey };
