import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer({ isEnglish }) {
  return (
    <footer className="flex flex-col gap-10">
      <div className="flex flex-col bg-main-bg items-center text-primary-text">
        <span className="text-2xl font-extrabold">{`Aleksandrov </>`}</span>
        <span className="text-xl">
          {isEnglish
            ? "Turning ideas into reality."
            : "Превръщайки идеите в реалност."}
        </span>
      </div>
      <div className=" w-full h-[200px] flex items-center justify-center bg-switching-accent rounded-t-[100%] bg-[image:var(--footer-gradient)]">
        <ul className="bg-white px-20 py-3 rounded-2xl flex flex-row justify-around gap-10 text-2xl shadow-2xl">
          <li className="cursor-pointer transition-transform duration-500 ease-out hover:scale-110 text-primary-text">
            <a
              href="https://github.com/ada-designs"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li className="cursor-pointer transition-transform duration-500 ease-out hover:scale-110 text-primary-text">
            <a
              href="https://www.linkedin.com/in/aleksandar-aleksandrov-833ba8233/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li className="cursor-pointer transition-transform duration-500 ease-out hover:scale-110 text-primary-text">
            <a href="mailto:alex.adadesigns@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
