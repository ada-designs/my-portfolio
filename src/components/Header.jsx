import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

export default function Header({
  toggleDarkMode,
  darkMode,
  switchLanguage,
  isEnglish,
}) {
  return (
    <header className="grid grid-cols-2 lg:grid-cols-3  w-[90%] self-center py-5 px-1 items-center">
      <span>
        <a
          className="font-extrabold text-primary-text lg:text-xl md:text-xs text-[12px] cursor-pointer"
          href="#"
        >{`ALEKSANDROV </>`}</a>
      </span>
      <ul className="uppercase lg:flex hidden justify-between font-bold text-primary-text cursor-pointer">
        <li>
          <a
            className=" hover:text-switching-accent text-[16px] font-bold"
            href="#projects"
          >
            {isEnglish ? "Projects" : "Проекти"}
          </a>
        </li>
        <li>
          <a
            className=" hover:text-switching-accent text-[16px] font-bold"
            href="#about"
          >
            {isEnglish ? "About Me" : "За Мен"}
          </a>
        </li>
        <li>
          <a
            className=" hover:text-switching-accent text-[16px] font-bold"
            href="#contact"
          >
            {" "}
            {isEnglish ? "Contact" : "Контакт"}
          </a>
        </li>
      </ul>
      <div className="flex justify-end gap-5">
        <img
          loading="lazy"
          src={isEnglish ? "./images/bg.webp" : "./images/en.webp"}
          className="lg:w-[40px] lg:h-[20px] w-[35px] h-[18px] rounded-sm cursor-pointer lg:mt-2 mt-0.5"
          onClick={switchLanguage}
        />
        <button
          onClick={toggleDarkMode}
          className={`bg-primary-text text-main-bg w-[70px] lg:w-[100px] lg:h-[33px] h-[23px] py-1 px-3 rounded-4xl cursor-pointer flex items-center relative`}
        >
          <span
            className={`absolute lg:${darkMode ? "left-3" : "right-3"} ${
              darkMode ? "left-2" : "right-2"
            }`}
          >
            {darkMode ? (
              <span className="lg:text-2xl text-xl">☀</span>
            ) : (
              <FontAwesomeIcon icon={faMoon} className="text-yellow-300" />
            )}
          </span>
        </button>
      </div>
    </header>
  );
}
