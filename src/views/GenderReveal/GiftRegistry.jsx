import Essentials from "../../assets/gender-reveal/Baby-Eseentials.jpg";
import Clothing from "../../assets/gender-reveal/clothing&Accessories.jpg";
import Toys from "../../assets/gender-reveal/Toys&Books.jpg";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react"; 
const GiftRegistry = () => {
  const [showRegistryModal, setShowRegistryModal] = useState(false);
  const [selectedRegistry, setSelectedRegistry] = useState(""); 

  const registryItems = {
    essentials: [
      { name: "Modern Convertible Crib", status: "Sponsored By: TITA LEE" },
      { name: "Stroller", status: "Available" },
      { name: "Baby Monitor", status: "Available" },
      { name: "Diaper Bag", status: "Purchased" },
    ],
    clothing: [
      { name: "Organic Cotton Onesies (5-pack)", status: "Available" },
      { name: "Baby Sleepwear Set", status: "Available" },
      { name: "First Shoes Collection", status: "Purchased" },
      { name: "Seasonal Outfit Set", status: "Available" },
      { name: "Accessories Bundle", status: "Available" },
    ],
    toys: [
      { name: "Educational Play Mat", status: "Available" },
      { name: "Soft Plush Collection", status: "Available" },
      { name: "First Books Set", status: "Available" },
      { name: "Musical Toys Bundle", status: "Available" },
      { name: "Developmental Toys Set", status: "Available" },
    ],
  };
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-16 px-4 bg-white"
    >
      {showRegistryModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold text-gray-800">
                  {selectedRegistry === "essentials"
                    ? "Baby Essentials Registry"
                    : selectedRegistry === "clothing"
                    ? "Clothing & Accessories Registry"
                    : "Toys & Books Registry"}
                </h3>
                <button
                  onClick={() => setShowRegistryModal(false)}
                  className="text-gray-500 hover:text-gray-700 text-xl"
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
            </div>
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              <div className="space-y-4">
                {registryItems[selectedRegistry]?.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                  >
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {item.name}
                      </h4>
                      <p className="text-gray-600">{item.price}</p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        item.status === "Available"
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 bg-gray-50">
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-600">
                  Items can be purchased in store or online
                </p>
                <button
                  onClick={() => setShowRegistryModal(false)}
                  className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors whitespace-nowrap !rounded-button"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500">
          Gift Registry
        </h2>
        <div className="flex flex-row gap-8  md:flex-col">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-lg p-6 transform transition-transform hover:scale-105 flex flex-col justify-between">
          <div className="flex flex-col">
            <div className="h-48 mb-4 rounded-xl overflow-hidden">
              <img
                src={Essentials}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <h3 className="text-xl font-bold text-blue-700 mb-2">
              Baby Essentials
            </h3>
            <p className="text-gray-600 mb-4">
              Cribs, strollers, car seats, and everything needed for baby's
              arrival.
            </p>
            </div>
            <button
              onClick={() => {
                setSelectedRegistry("essentials");
                setShowRegistryModal(true);
              }}
              className="bg-blue-500 text-white py-2 px-4 rounded-full text-sm font-semibold hover:bg-blue-600 transition-colors whitespace-nowrap !rounded-button cursor-pointer"
            >
              View Registry
            </button>
          </div>
          <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl shadow-lg p-6 transform transition-transform hover:scale-105 flex flex-col justify-between">
          <div className="flex flex-col">
            <div className="h-48 mb-4 rounded-xl overflow-hidden">
              <img
                src={Clothing}
                alt="Baby Clothes"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <h3 className="text-xl font-bold text-pink-600 mb-2">
              Clothing & Accessories
            </h3>
            <p className="text-gray-600 mb-4">
              Adorable outfits, cozy sleepwear, and cute accessories for the
              little one.
            </p>
            </div>
            <button 
                onClick={() => {
                  setSelectedRegistry("clothing");
                  setShowRegistryModal(true);
                }}
            className="bg-pink-500 text-white py-2 px-4 rounded-full text-sm font-semibold hover:bg-pink-600 transition-colors whitespace-nowrap !rounded-button cursor-pointer">
              View Registry
            </button>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl shadow-lg p-6 transform transition-transform hover:scale-105 flex flex-col justify-between">
          <div className="flex flex-col">
            <div className="h-48 mb-4 rounded-xl overflow-hidden">
              <img
                src={Toys}
                alt="Baby Toys"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <h3 className="text-xl font-bold text-purple-600 mb-2">
              Toys & Books
            </h3>
            <p className="text-gray-600 mb-4">
              Educational toys, soft plushies, and first books for development
              and fun.
            </p>
            </div>
           
            <button
                onClick={() => {
                  setSelectedRegistry("toys");
                  setShowRegistryModal(true);
                }}
            className="bg-purple-500 text-white py-2 px-4 rounded-full text-sm font-semibold hover:bg-purple-600 transition-colors whitespace-nowrap !rounded-button cursor-pointer">
              View Registry
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export { GiftRegistry };
