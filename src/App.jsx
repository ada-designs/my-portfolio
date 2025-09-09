import { useState } from "react";
import { useEffect } from "react";

import ProjectsSection from "./components/ProjectsSection";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import About from "./components/About";
import ContactForm from "./components/ContactForm";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Popup from "./components/Popup";
import "./App.css";

export default function App() {
  const [popup, setShowPopup] = useState(false);
  const [isEnglish, setIsEnglish] = useState(true);
  const [darkMode, setDarkMode] = useState(() => {
    // check if user already picked something before
    const saved = localStorage.getItem("darkMode");
    if (saved !== null) {
      return saved === "true";
    }

    // if no saved value → follow system preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
    }

    // save preference
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  function toggleDarkMode() {
    setDarkMode((prev) => !prev);
  }

  function togglePopup() {
    setShowPopup(!popup);
  }

  function switchLanguage() {
    setIsEnglish(!isEnglish);
  }

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div
      className={`${
        darkMode ? "dark" : "light"
      } min-h-screen bg-main-bg flex flex-col`}
    >
      <Header
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
        switchLanguage={switchLanguage}
        isEnglish={isEnglish}
      />
      <Hero isEnglish={isEnglish} />
      <Experience isEnglish={isEnglish} />
      <ProjectsSection isEnglish={isEnglish} />
      <About isEnglish={isEnglish} />
      <ContactForm togglePopup={togglePopup} isEnglish={isEnglish} />
      {popup && <Popup togglePopup={togglePopup} isEnglish={isEnglish} />}
      <Footer isEnglish={isEnglish} />
    </div>
  );
}
