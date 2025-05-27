import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { separateVotesByGender } from "../../Functions/tools";
import { voteState } from "../../recoil/voteStore";
import { isNameAlreadyInList } from "../../Functions/tools";
import { atom, useRecoilState, useRecoilValue } from "recoil";
const basic_auth = import.meta.env.VITE_BASIC_AUTH;
const CastYourVote = ({ setConfettiTeam, setShowConfetti }) => {
  const { boys, girls } = useRecoilValue(voteState);
  const [voteList, setVoteList] = useRecoilState(voteState);
  const [teamBoyVotes, setTeamBoyVotes] = useState();
  const [teamGirlVotes, setTeamGirlVotes] = useState();

  const [modalData, setModalData] = useState({
    visible: false,
    type: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  // const [voteGuestName, setVoteGuestName] = useState("");
  const [voteGuestNameBoy, setVoteGuestNameBoy] = useState("");
  const [voteGuestNameGirl, setVoteGuestNameGirl] = useState("");

  const getVotes = async () => {
    try {
      const response = await fetch("https://sheetdb.io/api/v1/znykdh0itd6gu", {
        method: "GET",
        headers: {
          Authorization: "Basic " + btoa(`${basic_auth}`),
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch votes");
      }

      const data = await response.json();
      let list = separateVotesByGender(data);

      setVoteList(list);
    //   console.log("Fetched votes:", data);
      return data; // returns an array of votes
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  };

  const handleVote = (team) => {
   
    let guestName =
      team === "boy" ? voteGuestNameBoy.trim() : voteGuestNameGirl.trim(); 
    if (!guestName || guestName.length === 0) {
      alert("Please enter your name before voting.");
      return;
    }

    // Optional: Validate length (at least 2 characters)
    if (guestName.length < 2) {
      alert("Name must be at least 2 characters long.");
      return;
    }

    // Optional: Validate allowed characters (letters, spaces, hyphen, apostrophe)
    const nameRegex = /^[a-zA-Z\s'-]+$/;
    if (!nameRegex.test(guestName)) {
      alert("Name can only contain letters, spaces, hyphens, and apostrophes.");
      return;
    }

    if (isNameAlreadyInList(guestName, voteList)) {
      alert("This name has already been used to vote.");
      return;
    }
 
    setIsLoading(true);
    // Submit vote to SheetDB
    fetch("https://sheetdb.io/api/v1/znykdh0itd6gu", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + btoa(`${basic_auth}`),
      },
      body: JSON.stringify({
        data: [
          {
            name: guestName,
            gender: team,
            date: new Date().toLocaleString(),
          },
        ],
      }),
    })
      .then((res) => res.json())
      .then(() => {
        setModalData({
          visible: true,
          type: "success",
          message: `🎉 Thank you, ${guestName}, for voting for the ${
            team === "boy" ? "Boy 👦" : "Girl 👧"
          }! Your support means a lot to us. 💖`,
        });

        const newVote = {
          id: "",
          name: guestName,
          gender: team,
          email: "",
          message: "",
          date: new Date().toISOString(),
        };
        setIsLoading(false);
        if (team === "boy") {
          setTeamBoyVotes((prev) => prev + 1);
          setConfettiTeam("boy");
          setVoteGuestNameBoy("");
          setVoteList((prev) => ({
            ...prev,
            boys: [newVote, ...prev.boys],
          }));
        } else {
          setTeamGirlVotes((prev) => prev + 1);
          setConfettiTeam("girl");

          setVoteGuestNameGirl("");
          setVoteList((prev) => ({
            ...prev,
            girls: [newVote, ...prev.girls],
          }));
        }

        setShowConfetti(true);
        setModalData({ ...modalData, visible: false });
        setTimeout(() => setShowConfetti(false), 5000);
      })
      .catch(() => {
        setModalData({
          visible: true,
          type: "error",
          message: `Sorry ${guestName}, your vote could not be submitted. Please try again.`,
        });
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getVotes()
    // let voter = [
    //   {
    //     id: "",
    //     name: "vincent",
    //     gender: "girl",
    //     email: "",
    //     message: "",
    //   },
    //   {
    //     id: "",
    //     name: "vincent navas",
    //     gender: "boy",
    //     email: "",
    //     message: "",
    //   },
    //   {
    //     id: "",
    //     name: "Juan Dela cruz",
    //     gender: "boy",
    //     email: "",
    //     message: "",
    //   },
    // ];
    // let list = separateVotesByGender(voter); 
    // setVoteList(list);
  }, []);

  useEffect(() => {
    setTeamBoyVotes(boys?.length || 0);
    setTeamGirlVotes(girls?.length || 0);
  }, [voteList]);

  const Modal = ({ type, message, onClose }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white rounded-3xl shadow-2xl max-w-sm w-full p-8 transform transition-transform scale-100 animate-fadeIn">
        <div className="flex flex-col items-center">
          <div
            className={`flex items-center justify-center w-16 h-16 rounded-full mb-6 ${
              type === "RT" ? "bg-green-100" : "bg-red-100"
            }`}
          >
            {type === "success" ? (
              <svg
                className="w-10 h-10 text-green-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-10 h-10 text-red-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            )}
          </div>

          <h2
            className={`text-2xl font-extrabold mb-3 ${
              type === "success" ? "text-green-700" : "text-red-700"
            }`}
          >
            {type === "success" ? "Thank You!" : "Oops!"}
          </h2>
          <p className="text-gray-600 mb-6 text-center">{message}</p>

          <button
            onClick={onClose}
            className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            OK
          </button>
        </div>
      </div>
    </motion.div>
  );
  const totalVotes = teamBoyVotes + teamGirlVotes;
  const boyPercentage = totalVotes > 0 ? (teamBoyVotes / totalVotes) * 100 : 50;
  const girlPercentage =
    totalVotes > 0 ? (teamGirlVotes / totalVotes) * 100 : 50;

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-16 px-4 bg-white"
    >
      {modalData.visible && (
        <Modal
          type={modalData.visible}
          message={modalData.message}
          onClose={() => setModalData({ ...modalData, visible: false })}
        />
      )}
      {/* Voting Section */}

      <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500">
        Cast Your Vote!
      </h2>
      <div className="max-w-4xl mx-auto">
        <div className="  rounded-2xl   mb-2">
          <div className="mb-8">
            <div className="relative h-10 w-full rounded-full shadow-inner overflow-hidden bg-gray-200">
              <div
                className="absolute top-0 left-0 h-full transition-all duration-700 ease-in-out"
                style={{
                  width: `${boyPercentage}%`,
                  background: "linear-gradient(to right, #60a5fa, #3b82f6)", // blue gradient
                }}
              />
              <div
                className="absolute top-0 right-0 h-full transition-all duration-700 ease-in-out"
                style={{
                  width: `${100 - boyPercentage}%`,
                  background: "linear-gradient(to right, #f472b6, #db2777)", // pink gradient
                }}
              />
              <div className="relative flex justify-between items-center px-4 h-full text-white font-bold select-none">
                <span>
                  {boyPercentage.toFixed(1)}%{" "}
                  <label className="font-[300]"> ( {teamBoyVotes} )</label>
                </span>
                <span>
                  <label className="font-[300]"> ( {teamGirlVotes} ) </label>{" "}
                  {girlPercentage.toFixed(1)}%{" "}
                </span>
              </div>
            </div>
            <div className="flex justify-between mt-1">
              <span className="text-blue-600">Team Boy</span>
              <span className="text-pink-600">Team Girl</span>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-8 md:flex-col">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-lg overflow-hidden">
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-3xl font-bold text-blue-700">
                  Team Boy
                  <p className="text-sm font-[300] text-blue-700">
                    {" "}
                    Vote for a bouncing baby boy!
                  </p>
                </h3>
                <div className="bg-blue-200 rounded-full px-4 py-1">
                  <span className="text-blue-800 font-semibold">
                    {teamBoyVotes} votes
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-6 mb-8">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <i className="fas fa-mars text-blue-500 text-4xl"></i>
                </div>
                <div className="flex-1">
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border-2 border-blue-200 focus:border-blue-500 focus:outline-none mb-3"
                    placeholder="Enter your name"
                    value={voteGuestNameBoy}
                    onChange={(e) => setVoteGuestNameBoy(e.target.value)}
                  />
                  <button 
                    onClick={() => handleVote("boy")}
                    className="bg-blue-500 text-white py-2 px-6 rounded-full font-bold hover:bg-blue-600 transition-colors w-full whitespace-nowrap !rounded-button cursor-pointer"
                  >
                    {voteGuestNameBoy && isLoading ? "Please wait..." : "Vote Boy" }
            
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="text-blue-700 font-semibold mb-3">
                  Recent Voters
                </h4>
                <div className="max-h-40 overflow-y-auto">
                  <div className="space-y-2">
                    {boys?.map((voter, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-gray-600"
                      >
                        <i className="fas fa-user-circle"></i>
                        <span>{voter.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl shadow-lg overflow-hidden">
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-3xl font-bold text-pink-600">
                  Team Girl
                  <p className="text-sm font-[300] text-pink-700">
                    {" "}
                    Vote for a sweet baby girl!
                  </p>
                </h3>
                <div className="bg-pink-200 rounded-full px-4 py-1">
                  <span className="text-pink-800 font-semibold">
                    {teamGirlVotes} votes
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-6 mb-8">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <i className="fas fa-venus text-pink-500 text-4xl"></i>
                </div>
                <div className="flex-1">
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border-2 border-pink-200 focus:border-pink-500 focus:outline-none mb-3"
                    placeholder="Enter your name"
                    value={voteGuestNameGirl}
                    onChange={(e) => setVoteGuestNameGirl(e.target.value)}
                  />
                  <button
                    onClick={() => handleVote("girl")}
                    
                    className="bg-pink-500 text-white py-2 px-6 rounded-full font-bold hover:bg-pink-600 transition-colors w-full whitespace-nowrap !rounded-button cursor-pointer"
                  >
                      {voteGuestNameGirl && isLoading ? "Please wait..." : "Vote Girl" }
         
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="text-pink-600 font-semibold mb-3">
                  Recent Voters
                </h4>
                <div className="max-h-40 overflow-y-auto">
                  <div className="space-y-2">
                    {girls?.map((voter, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-gray-600"
                      >
                        <i className="fas fa-user-circle"></i>
                        <span>{voter.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export { CastYourVote };
