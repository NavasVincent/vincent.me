/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // Set Poppins as the default sans font
      },
      colors: {
        "base-white": "#fff",
        "base-grey": "#DDDDDD",
        "base-divider-grey": "#DEE2F1",
        "brand-secondary": "#F59E0B",
        "brand-secondary-100": "#f81d39",
        "brand-primary": "#EE7019",

        "brand-primary-5": "#F8F9FA",
        "brand-primary-60": "#858D99",
        "critical-100": "#E6D938",
        "critical-20": "#EAE065",
        "critical-10": "#ECE8B6",
        "success-100": "#3B56E3",
        "success-20": " #7C8BDB",
        "success-10": "#BBC1E4",
        "accent-red-100": "#D54436",
        "accent-blue-100": "#017EFA",
        "accent-blue-20": "#7C8BDB",
        "accent-blue-10": "#BBC1E4",
        "accent-blue-5": "#EFF0F3",
        "accent-green-100": "#39E8C8",
        "accent-green-20": "#84F2DE",
        "accent-green-10": "#BCF3E9",
        "accent-green-5": "#BEE8DA",
        "accent-pink-100": "#E83982",
        "accent-pink-20": "#EECDDB",
        "accent-pink-10": "#F4E6EC",
        "accent-pink-5": "#FCEFF4",
        "accent-purple-100": "#800080",
        "accent-purple-20": "#ECD9F3",
        "accent-purple-10": "#F5ECF9",
        "accent-purple-5": "#FAF6FC",
        "accent-dodgerblue": "#1877F2",
        default: "#000",
        sabdued: "#999DAC",
        disabled: "#CDD0DE",
      },
      fontWeight: {
        thin: "100",
        light: '300',
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extra: "800",
        black: "900",
      },
      boxShadow: {
        "inset-shadow": "inset 0px 2px 2px rgba(0, 0, 0, 0.25)",
        "card": "1px 0px 5px rgba(0, 0, 0, 0.1)",
      }
    },
  },
  plugins: [],
}