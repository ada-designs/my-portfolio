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
  const [darkMode, setDarkMode] = useState(true);
  const [popup, setShowPopup] = useState(false);
  const [isEnglish, setIsEnglish] = useState(true);

  function togglePopup() {
    setShowPopup(!popup);
  }

  function toggleDarkMode() {
    setDarkMode((v) => !v);
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
