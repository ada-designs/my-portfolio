import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const all = [
  {
    type: "Websites",
    image: "./images/Luna.webp",
    name: "Luna's Bakery - Cake Website",
    nameBG: "Luna's Bakery – Уебсайт за торти",
    description:
      "Luna's Bakery is a small website I built for a client. It uses vanilla HTML, JavaScript and CSS. The highlight is the order form with a wide range of options.",
    descriptionBG:
      "Luna's Bakery е малък уебсайт, който направих за клиент. Използвах обикновен HTML, JavaScript и CSS. Основният акцент е формата за поръчки с богат избор от опции.",
    languages: ["HTML", "CSS", "JavaScript"],
    link: "https://lunasbakery.org/",
    github: "https://github.com/ada-designs/Cake-Website",
  },
  {
    type: "Games",
    image: "./images/Bomb.webp",
    name: "Don't click on the bomb!",
    nameBG: "Не натискай бомбата!",
    description:
      "A small game inspired by Minesweeper. I practiced state management, game logic, and DOM manipulation.",
    descriptionBG:
      "Малка игра, вдъхновена от Minesweeper. Тук упражних управление на състоянието, игрова логика и манипулация на DOM.",
    languages: ["React", "Tailwind CSS"],
    link: "https://bomb-game-sigma.vercel.app/",
    github: "https://github.com/ada-designs/bomb-game",
  },
  {
    type: "Websites",
    image: "./images/Blooming.webp",
    name: "Always Blooming Events",
    nameBG: "Always Blooming Events – Декорации",
    description:
      "A decoration website for a Bulgarian florist who creates setups for weddings, birthdays, proms, and more.",
    descriptionBG:
      "Уебсайт за флорист в България, който създава красиви декорации за сватби, рождени дни, балове и други събития.",
    languages: ["React", "Vanilla CSS"],
    link: "https://www.alwaysbloomingevents.com/",
    github: "https://github.com/ada-designs/decoration-website",
  },
  {
    type: "Websites",
    image: "./images/Alex.webp",
    name: "German with Alex",
    nameBG: "Немски с Алекс",
    description:
      "A website for a German teacher in Bulgaria. It presents lesson info, teacher details, and the course structure.",
    descriptionBG:
      "Уебсайт за учител по немски език в България. Представя информация за уроците, учителя и структурата на курса.",
    languages: ["React", "Tailwind CSS"],
    link: "https://www.nemskisalex.com/",
    github: "https://github.com/ada-designs/german-with-alex",
  },
  {
    type: "Games",
    image: "./images/rock.webp",
    name: "Rock, Paper, Scissors",
    nameBG: "Камък, ножица, хартия",
    description:
      "An online version of the classic Rock, Paper, Scissors game. I explored animations, score tracking, and user choices.",
    descriptionBG:
      "Онлайн версия на класическата игра Камък, ножица, хартия. Тук експериментирах с анимации, проследяване на резултата и изборите на играча.",
    languages: ["HTML", "CSS", "JavaScript"],
    link: "https://rock-paper-scissors-rho-five-26.vercel.app/",
    github: "https://github.com/ada-designs/Rock-Paper-Scissors",
  },
  {
    type: "Apps",
    image: "./images/matchday.webp",
    name: "Matchday Packing List",
    nameBG: "Списък за мачов ден",
    description:
      "A small app recreating the feeling of preparing for football matches as a kid. It helps organize football gear easily.",
    descriptionBG:
      "Малко приложение, което пресъздава усещането за подготовка за футболни мачове от детството. Помага лесно да организирате екипировката си.",
    languages: ["React"],
    link: "https://matchday-aleksandrov.netlify.app/",
    github: "https://github.com/ada-designs/Matchday-packing-list",
  },
  {
    type: "Games",
    image: "./images/guess.webp",
    name: "Guess The Number",
    nameBG: "Познай числото",
    description:
      "A fun game with score tracking, random numbers, streaks, and guess limits. Simple but addictive.",
    descriptionBG:
      "Забавна игра с проследяване на резултата, случайни числа, серии и ограничен брой опити. Лесна, но пристрастяваща.",
    languages: ["HTML", "CSS", "JavaScript"],
    link: "https://guess-the-number-one-blush.vercel.app/",
    github: "https://github.com/ada-designs/Guess-The-Number",
  },
];

const websites = [
  {
    type: "Websites",
    image: "./images/Alex.webp",
    name: "German with Alex",
    nameBG: "Немски с Алекс",
    description:
      "A website for a German teacher in Bulgaria. It presents lesson info, teacher details, and the course structure.",
    descriptionBG:
      "Уебсайт за учител по немски език в България. Представя информация за уроците, учителя и структурата на курса.",
    languages: ["React", "Tailwind CSS"],
    link: "https://www.nemskisalex.com/",
    github: "https://github.com/ada-designs/german-with-alex",
  },
  {
    type: "Websites",
    image: "./images/Blooming.webp",
    name: "Always Blooming Events",
    nameBG: "Always Blooming Events – Декорации",
    description:
      "A decoration website for a Bulgarian florist who creates setups for weddings, birthdays, proms, and more.",
    descriptionBG:
      "Уебсайт за флорист в България, който създава красиви декорации за сватби, рождени дни, балове и други събития.",
    languages: ["React", "Vanilla CSS"],
    link: "https://www.alwaysbloomingevents.com/",
    github: "https://github.com/ada-designs/decoration-website",
  },
  {
    type: "Websites",
    image: "./images/Luna.webp",
    name: "Luna's Bakery - Cake Website",
    nameBG: "Luna's Bakery – Уебсайт за торти",
    description:
      "Luna's Bakery is a small website I built for a client. It uses vanilla HTML, JavaScript and CSS. The highlight is the order form with a wide range of options.",
    descriptionBG:
      "Luna's Bakery е малък уебсайт, който направих за клиент. Използвах обикновен HTML, JavaScript и CSS. Основният акцент е формата за поръчки с богат избор от опции.",
    languages: ["HTML", "CSS", "JavaScript"],
    link: "https://lunasbakery.org/",
    github: "https://github.com/ada-designs/Cake-Website",
  },
];

const games = [
  {
    type: "Games",
    image: "./images/Bomb.png",
    name: "Don't click on the bomb!",
    nameBG: "Не натискай бомбата!",
    description:
      "A small game inspired by Minesweeper. I practiced state management, game logic, and DOM manipulation.",
    descriptionBG:
      "Малка игра, вдъхновена от Minesweeper. Тук упражних управление на състоянието, игрова логика и манипулация на DOM.",
    languages: ["React", "Tailwind CSS"],
    link: "https://bomb-game-sigma.vercel.app/",
    github: "https://github.com/ada-designs/bomb-game",
  },
  {
    type: "Games",
    image: "./images/rock.png",
    name: "Rock, Paper, Scissors",
    nameBG: "Камък, ножица, хартия",
    description:
      "An online version of the classic Rock, Paper, Scissors game. I explored animations, score tracking, and user choices.",
    descriptionBG:
      "Онлайн версия на класическата игра Камък, ножица, хартия. Тук експериментирах с анимации, проследяване на резултата и изборите на играча.",
    languages: ["HTML", "CSS", "JavaScript"],
    link: "https://rock-paper-scissors-rho-five-26.vercel.app/",
    github: "https://github.com/ada-designs/Rock-Paper-Scissors",
  },
  {
    type: "Games",
    image: "./images/guess.png",
    name: "Guess The Number",
    nameBG: "Познай числото",
    description:
      "A fun game with score tracking, random numbers, streaks, and guess limits. Simple but addictive.",
    descriptionBG:
      "Забавна игра с проследяване на резултата, случайни числа, серии и ограничен брой опити. Лесна, но пристрастяваща.",
    languages: ["HTML", "CSS", "JavaScript"],
    link: "https://guess-the-number-one-blush.vercel.app/",
    github: "https://github.com/ada-designs/Guess-The-Number",
  },
];

const apps = [
  {
    type: "Apps",
    image: "./images/matchday.png",
    name: "Matchday Packing List",
    nameBG: "Списък за мачов ден",
    description:
      "A small app recreating the feeling of preparing for football matches as a kid. It helps organize football gear easily.",
    descriptionBG:
      "Малко приложение, което пресъздава усещането за подготовка за футболни мачове от детството. Помага лесно да организирате екипировката си.",
    languages: ["React"],
    link: "https://matchday-aleksandrov.netlify.app/",
    github: "https://github.com/ada-designs/Matchday-packing-list",
  },
];

const tabs = [
  { key: "websites", en: "Websites", bg: "Уебсайтове" },
  { key: "apps", en: "Apps", bg: "Приложения" },
  { key: "games", en: "Games", bg: "Игри" },
  { key: "all", en: "All", bg: "Всички" },
];

const dataMap = { all, websites, apps, games };

export default function ProjectsSection({ isEnglish }) {
  const [projectType, setProjectType] = useState(websites);
  const [activeTab, setActiveTab] = useState("websites");

  return (
    <section className="container-main gap-15" id="projects">
      <h2 className="self-center lg:self-start text-center lg:text-start">
        <span className="text-switching-accent text-2xl md:text-4xl lg:text-5xl font-extrabold">
          {isEnglish ? "Here's a sneak peek" : "Тук може да видите"}
        </span>
        <br />
        <span className="text-primary-text text-2xl md:text-4xl lg:text-5xl">
          {isEnglish
            ? "at some exciting projects"
            : "някои от вълнуващите проекти,"}
        </span>
        <br />
        <span className="text-switching-accent font-extrabold text-2xl md:text-4xl lg:text-5xl">
          {isEnglish ? "which I've built" : "които съм направил"}
        </span>
      </h2>
      <Tabs
        projectType={projectType}
        setProjectType={setProjectType}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isEnglish={isEnglish}
      />
      <Projects
        projectType={projectType}
        setProjectType={setProjectType}
        isEnglish={isEnglish}
      />
    </section>
  );
}

function Projects({ projectType, setProjectType, isEnglish }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
      {projectType.map((project) => (
        <SingleProject
          link={project.link}
          github={project.github}
          image={project.image}
          name={project.name}
          nameBG={project.nameBG}
          description={project.description}
          descriptionBG={project.descriptionBG}
          type={project.type}
          languages={project.languages}
          projectType={projectType}
          setProjectType={setProjectType}
          isEnglish={isEnglish}
        />
      ))}
    </div>
  );
}

function SingleProject({
  name,
  description,
  nameBG,
  descriptionBG,
  languages = [],
  image,
  link,
  github,
  isEnglish,
}) {
  return (
    <div className="rounded-2xl shadow-md shadow-shadow animate-[fade-left_0.4s_ease-out] overflow-hidden flex flex-col h-full">
      {/* Image */}
      <div
        className="relative group h-56 w-full bg-cover bg-center rounded-xl"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Body */}
      <div className="p-5 flex flex-col flex-grow justify-between">
        <div className="mb-4">
          <h4 className="text-primary-text mb-2">
            {isEnglish ? name : nameBG}
          </h4>
          <p className="text-primary-text">
            {isEnglish ? description : descriptionBG}
          </p>
        </div>

        {/* Bottom: Languages + Icons */}
        <div className="flex items-center justify-between mt-auto pt-4">
          {/* Languages */}
          <div className="flex flex-wrap gap-2">
            {languages.map((lang, i) => (
              <span
                key={i}
                className="bg-primary-accent text-white text-sm px-3.5 py-1 rounded-2xl"
              >
                {lang}
              </span>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center gap-2">
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="inline-grid place-items-center h-8 w-8 rounded-full border border-primary-accent text-primary-accent hover:bg-primary-accent hover:text-main-bg transition-colors"
            >
              <FontAwesomeIcon icon={faGithub} className="text-[13px]" />
            </a>
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              aria-label="Live site"
              className="inline-grid place-items-center h-8 w-8 rounded-full border border-primary-accent text-primary-accent hover:bg-primary-accent hover:text-main-bg transition-colors"
            >
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="text-[13px]"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Tabs({
  projectType,
  setProjectType,
  activeTab,
  setActiveTab,
  isEnglish,
}) {
  return (
    <div
      className="grid grid-flow-row
     grid-cols-2 lg:grid-cols-4 md:grid-cols-4
       gap-6 lg:gap-10  justify-center"
    >
      {tabs.map((tab) => (
        <SingleTab
          tabKey={tab.key}
          key={tab.key}
          projectType={projectType}
          setProjectType={setProjectType}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          label={isEnglish ? tab.en : tab.bg}
        />
      ))}
    </div>
  );
}

function SingleTab({ tabKey, setProjectType, setActiveTab, activeTab, label }) {
  function changeTabs() {
    setActiveTab(tabKey);
    setProjectType(dataMap[tabKey]);
  }

  return (
    <button
      className={`border-1 px-7 py-2 rounded-4xl text-center duration-300 ease-in-out capitalize
        ${
          activeTab === tabKey
            ? "bg-secondary-accent border-secondary-accent text-black"
            : "bg-main-bg border-primary-accent text-primary-text"
        }
     hover:bg-secondary-accent hover:border-secondary-accent hover:text-black hover:cursor-pointer`}
      onClick={changeTabs}
    >
      {label}
    </button>
  );
}
