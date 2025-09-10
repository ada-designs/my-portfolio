const languages = [
  { lang: "html", image: "./images/html.webp" },
  { lang: "css", image: "./images/css.webp" },
  { lang: "javascript", image: "./images/javascript.webp" },
  { lang: "react", image: "./images/react.webp" },
];

export default function Experience({ isEnglish }) {
  return (
    <section className="container-main -mt-[7%]">
      {/* base (phone = tablet): stack; desktop: side-by-side */}
      <div className="flex flex-col lg:flex-row w-full justify-between items-center lg:items-stretch">
        {/* left block */}
        <div className="flex w-full lg:w-[60%] justify-center items-center lg:justify-start lg:items-end relative">
          <span
            className="text-primary-text font-extrabold absolute hidden lg:flex -rotate-20 blur-sm
                             text-4xl md:text-6xl lg:text-8xl
                             -top-20
                             lg:-left-25 md:left-15 left-0"
          >
            {"</>"}
          </span>
          <span
            className={`absolute uppercase text-bg-effects
             text-4xl  lg:${isEnglish ? "-top-10" : "-top-15"}
             ${isEnglish ? "-top-10" : "-top-25"}
             left-15           
             sm:text-5xl
             md:text-6xl md:-top-12 md:left-24
             lg:text-7xl lg:top-24 lg:left-[-40px]
             -rotate-5 font-extrabold z-40`}
          >
            {`${isEnglish ? "Experience" : "Опит & Проекти"}`}
          </span>

          <div className="flex gap-20 z-2">
            <span className="flex flex-col">
              <p className="text-switching-accent text-6xl font-extrabold -mb-5 ml-3">
                2+
              </p>
              <h4 className="text-primary-text text-center lg:text-start">
                {`${isEnglish ? "Years of" : "Години"}`}
                <br /> {`${isEnglish ? "Experience" : "Опит"}`}
              </h4>
            </span>
            <span className="flex flex-col">
              <p className="text-switching-accent text-6xl font-extrabold -mb-5 ml-3">
                15+
              </p>
              <h4 className="text-primary-text text-center lg:text-start">
                {`${isEnglish ? "Fulfilled" : "Изпълнени"}`}
                <br /> {`${isEnglish ? "Projects" : "Проекти"}`}
              </h4>
            </span>
          </div>
        </div>

        {/* right block: fixed 2x2 grid; base width = tablet */}
        <div className="grid grid-cols-2 items-center justify-center gap-7 lg:w-[30%] md:w-[70%] sm:w-[100%]  mt-10 lg:mt-0">
          {languages.map((lang) => (
            <Language image={lang.image} key={lang.lang} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Language({ image }) {
  return (
    <span className="bg-white p-5 rounded-2xl flex justify-center items-center">
      <img loading="lazy" src={image} className="w-25 h-25" />
    </span>
  );
}
