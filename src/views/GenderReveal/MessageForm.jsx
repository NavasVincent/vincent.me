import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import FeatherIcon from "feather-icons-react";
import { Show } from "@bluelens/react-utils";
import { voteState } from "../../recoil/voteStore";
import { isNameAlreadyInList } from "../../Functions/tools";
import { atom, useRecoilState, useRecoilValue } from "recoil";
const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
const basic_auth = import.meta.env.VITE_BASIC_AUTH;

const MessageForm = () => {
  const { boys, girls } = useRecoilValue(voteState);
  const [voteList, setVoteList] = useRecoilState(voteState);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    message: "",
    website: window.location.origin,
  });

  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [recaptchaToken, setRecaptchaToken] = useState("");
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (document.querySelector(".g-recaptcha div")) {
        setRecaptchaLoaded(true);
      } else {
        setRecaptchaLoaded(false);
      }
    }, 1000);
  }, []);
  const refreshRecaptcha = () => {
    window.grecaptcha.render("recaptcha-container", {
      sitekey: "6LfhDu8qAAAAAFzHlqFtTiSBg1d4-3_ifUyV4gdt",
    });
    if (window.grecaptcha && Object.keys(window.grecaptcha).length > 0) {
      window.grecaptcha.reset();
      setRecaptchaLoaded(true);
    } else {
      console.error("No reCAPTCHA clients exist. Initializing now...");
    }
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.message.trim() || formData.message.length < 10)
      newErrors.message = "Message must be at least 10 characters";
    // if (!recaptchaToken) newErrors.recaptcha = "Please complete the reCAPTCHA";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
  };

  const sendEmail = async (e) => {
    // setIsLoading(true);
    e.preventDefault();
    if (!validateForm()) return;
    const token = grecaptcha.getResponse();
    if (!token) {
      setStatus({
        success: false,
        message: "Please complete the reCAPTCHA.",
      });
      setIsLoading(false);
      return;
    }
    handleVote(formData.gender);
    try {
      const params = {
        to_email: "vhincebotalon@gmail.com",
        from_name: formData.name,
        from_email: formData.email,
        gender: formData.gender,
        message: formData.message,
        website: formData.website || window.location.origin,
        to_name: "Vincent Navas",
        "g-recaptcha-response": token,
      };
      await emailjs.send(
        "service_qlvxr0q",
        "template_zrlzozs",
        params,
        "ZZF_718EtFLBgmwkn"
      );
      setStatus({ success: true, message: "Message sent successfully!" });
      setFormData({ name: "", email: "", gender: "", message: "" });
      window.grecaptcha.reset();
      setRecaptchaToken("");
      setTouched({});
      setIsLoading(false);

      setTimeout(() => {
        setStatus("");
      }, 3000);
    } catch (error) {
      setStatus({
        success: false,
        message: "Failed to send message. Try again.",
      });
    }
  };

  useEffect(() => {
    setIsButtonDisabled(!validateForm());
  }, [formData, recaptchaToken]);

  const handleVote = (team) => {
    let guestName = formData.name;
    if (isNameAlreadyInList(guestName, voteList)) return;
    if (!guestName) return;
    setIsLoading(true);
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
          setVoteList((prev) => ({
            ...prev,
            boys: [newVote, ...prev.boys],
          }));
        } else {
          setVoteList((prev) => ({
            ...prev,
            boys: [newVote, ...prev.girls],
          }));
        }
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

useEffect(()=>{
  if(!recaptchaLoaded) refreshRecaptcha()
},[recaptchaLoaded])

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-16 px-4 bg-gradient-to-r from-blue-50 to-pink-50"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500">
          Message
        </h2>
        <form className="bg-white p-8 rounded-xl shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="name">
                Your Name
              </label>
              <input
                className="w-full px-4 py-3 rounded-lg border-2 border-blue-200 focus:border-blue-500 focus:outline-none"
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />
              {touched.name && errors.name && (
                <p className="text-red-500 text-xs">{errors.name}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                className="w-full px-4 py-3 rounded-lg border-2 border-pink-200 focus:border-pink-500 focus:outline-none"
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
              />
              <Show.When isTrue={touched.email && errors.email}>
                <p className="text-red-500 text-xs">{errors.email}</p>
              </Show.When>
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Your Guess</label>
            <div className="flex space-x-4">
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="boy"
                  checked={formData.gender === "boy"}
                  onChange={handleChange}
                  className="form-radio text-blue-500 h-5 w-5"
                />
                <span className="ml-2 text-blue-600">Boy</span>
              </label>

              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="girl"
                  checked={formData.gender === "girl"}
                  onChange={handleChange}
                  className="form-radio text-pink-500 h-5 w-5"
                />
                <span className="ml-2 text-pink-500">Girl</span>
              </label>
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-purple-500 focus:outline-none"
              placeholder="Leave a message for the parents-to-be"
              value={formData.message}
              onChange={handleChange}
            />
            <Show.When isTrue={touched.message && errors.message}>
              <p className="text-red-500 text-xs mb-4">{errors.message}</p>
            </Show.When>
            <p className="text-[#6E809A]">
              Your message will be sent to our email, and we'll read it as soon
              as possible
            </p>
          </div>

          <div
            id="recaptcha-container"
            className="g-recaptcha scale-75  mt-[-20px] w-[0px]"
            data-sitekey={siteKey}
          ></div>
          <Show.When isTrue={!recaptchaLoaded}>
            <div className="flex items-center gap-2 text-red-500">
              <p>reCAPTCHA failed to load.</p>
              <button onClick={refreshRecaptcha}>
                <FeatherIcon
                  icon="refresh-ccw"
                  className="text-red-500 cursor-pointer"
                />
              </button>
            </div>
          </Show.When>

          <div className="flex flex-row items-center justify-between ">
         
            <button
              type="submit"
              className={`mt-3 bg-gradient-to-r from-blue-500 to-pink-500 text-white py-3 px-8 rounded-full font-bold hover:opacity-90 transition-opacity cursor-pointer whitespace-nowrap !rounded-button ${
                isButtonDisabled || isLoading
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              onClick={sendEmail}
              disabled={isButtonDisabled || isLoading}
            >
              <Show>
                <Show.When isTrue={isLoading}> Please wait...</Show.When>
                <Show.Else>Submit Meesage</Show.Else>
              </Show>
            </button>
            <p
              className={`text-sm text-left ml-4 ${
                !status.success ? "text-[red]" : "text-[green]"
              }`}
            >
              {status.message && status.message}
            </p>
          </div>
        </form>
      </div>
    </motion.section>
  );
};

export { MessageForm };
