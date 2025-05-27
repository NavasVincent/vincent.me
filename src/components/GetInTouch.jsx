import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import FeatherIcon from "feather-icons-react";
import { Show } from "@bluelens/react-utils";
const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
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

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
  };

  const sendEmail = async (e) => {
    setIsLoading(true);
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
    try {
      const params = {
        to_email: "vhincebotalon@gmail.com",
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
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
      setFormData({ name: "", subject: "", email: "", message: "" });
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

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full gap-3 flex flex-col justify-between items-start max-w-[1150px] m-auto py-8 mt-5 gap-[50px]"
      id="contact-me"
    >
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="flex flex-col items-center gap-1 pt-[70px] md:mx-4"
      >
        <h2 className="text-[24px] font-medium mb-2">Get In Touch!</h2>
        <p className="text-[#94A3B8] font-light text-[12px] leading-relaxed text-center">
          Get in Touch! We’d love to hear from you! Whether you have a question,
          feedback, or just want to say hello, feel free to reach out. Fill out
          the form below, and our team will get back to you as soon as possible.
          We’re here to assist you with any inquiries and look forward to
          connecting with you!
        </p>
      </motion.div>

      <div className="flex flex-row gap-10 w-full font-[300] z-30 md:flex-col">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-[60%] flex flex-col gap-5 bg-[#fff] p-8 shadow rounded-[10px] md:w-auto md:mx-5 md:p-5"
        >
          <div className="flex flex-row gap-5 w-full">
            <div className="w-full">
              <input
                className="rounded-[5px] border-[1px] border-[#94A3B8] px-3 py-2 w-full"
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
            <div className="w-full">
              <input
                className="rounded-[5px] border-[1px] border-[#94A3B8] px-3 py-2 w-full"
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

          <input
            className="rounded-[5px] border-[1px] border-[#94A3B8] px-3 py-2 w-full"
            placeholder="Subject"
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
        <Show.When isTrue={touched.subject && errors.subject}>
            <p className="text-red-500 text-xs">{errors.subject}</p>
          </Show.When>

          <textarea
            className="rounded-[5px] border-[1px] border-[#94A3B8] px-3 py-2 min-h-[100px] w-full"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
          />
          <Show.When isTrue={touched.message && errors.message}>
            <p className="text-red-500 text-xs">{errors.message}</p>
          </Show.When>

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
            <p
              className={`text-sm text-left ${
                !status.success ? "text-[red]" : "text-[green]"
              }`}
            >
              {status.message && status.message}
            </p>
            <button
              className={`bg-brand-primary px-5 py-2 text-[#fff] rounded-[5px] items-end ${
                isButtonDisabled || isLoading
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              onClick={sendEmail}
              disabled={isButtonDisabled || isLoading}
            >
              <Show>
                <Show.When isTrue={isLoading}> Please wait...</Show.When>
                <Show.Else>Submit</Show.Else>
              </Show>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-5 p-6"
        >
          <div className="flex flex-row gap-3">
            <FeatherIcon
              icon={"phone"}
              size={18}
              fill="#fff"
              stroke="#000"
              strokeWidth={2}
            />{" "}
            <span className="flex flex-col">
              <label className="text-[black] font-medium">Phone: </label>
              <label className="text-[#94A3B8]">+63 916418 1136 </label>
              <label className="text-[#94A3B8]">+63 969114 4054</label>
            </span>
          </div>
          <div className="flex flex-row gap-3">
            <FeatherIcon
              icon={"mail"}
              size={18}
              fill="#fff"
              stroke="#000"
              strokeWidth={2}
            />{" "}
            <span className="flex flex-col">
              <label className="text-[black] font-medium">Email: </label>
              <label className="text-[#94A3B8]">
                vhiincebotalon@gmail.com{" "}
              </label>
              <label className="text-[#94A3B8]">navasvincent@gmail.com</label>
            </span>
          </div>
          <div className="flex flex-row gap-3">
            <FeatherIcon
              icon={"linkedin"}
              size={18}
              fill="#fff"
              stroke="#000"
              strokeWidth={2}
            />{" "}
            <span className="flex flex-col">
              <label className="text-[black] font-medium">Linkedin: </label>
              <a
                href="https://ph.linkedin.com/in/vincent-navas-8690b4125"
                target="_blank"
                rel="noopener noreferrer"
              >
                <label className="text-[#94A3B8] flex flex-row gap-3 hover:underline hover:text-[dodgerblue] cursor-pointer">
                  Vincent Botalon Navas{" "}
                  <FeatherIcon
                    icon={"external-link"}
                    size={16}
                    fill="#fff"
                    stroke="#94A3B8"
                    strokeWidth={1}
                  />
                </label>
              </a>
            </span>
          </div>
          <div className="flex flex-row gap-3">
            <FeatherIcon
              icon={"github"}
              size={18}
              fill="#fff"
              stroke="#000"
              strokeWidth={2}
            />{" "}
            <span className="flex flex-col">
              <label className="text-[black] font-medium">Github: </label>
              <a
                href="https://github.com/NavasVincent"
                target="_blank"
                rel="noopener noreferrer"
              >
                <label className="text-[#94A3B8] flex flex-row gap-3 hover:underline hover:text-[dodgerblue] cursor-pointer">
                  Vincent Botalon Navas{" "}
                  <FeatherIcon
                    icon={"external-link"}
                    size={16}
                    fill="#fff"
                    stroke="#94A3B8"
                    strokeWidth={1}
                  />
                </label>
              </a>
            </span>
          </div>
          <div className="flex flex-row gap-3">
            <FeatherIcon
              icon={"map-pin"}
              size={18}
              fill="#fff"
              stroke="#000"
              strokeWidth={2}
            />{" "}
            <span className="flex flex-col">
              <label className="text-[black] font-medium">Address: </label>
              <label className="text-[#94A3B8] flex flex-row gap-3">
                Zone 6 Salvacion Tabaco city , Albay 4511{" "}
              </label>
            </span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export { GetInTouch };
