export default function Hero({ isEnglish }) {
  return (
    <section className="container-main flex flex-col mb-0 pb-0">
      <div className="flex flex-col items-center justify-center py-10 md:py-14 lg:py-16">
        {/* heading */}
        <div className="z-10 text-center space-y-2 lg:w-[1200px] md:w-[700px] w-[300px]">
          <h1 className="text-primary-text flex flex-wrap justify-center text-center font-light text-3xl md:text-5xl lg:text-6xl">
            {isEnglish ? "I'm" : "Аз съм"}{" "}
            <span className="text-switching-accent font-bold mr-2 md:mr-3 px-3 md:px-5 ml-1 border rounded-3xl">
              {isEnglish ? "Aleksandar" : "Александър"}
            </span>
            <span className="text-switching-accent font-bold">
              {isEnglish ? "Aleksandrov" : "Александров"}
            </span>
          </h1>
          <h1 className="text-primary-text font-light -rotate-2 text-xl md:text-2xl lg:text-3xl">
            {isEnglish ? "Web Developer" : "Уеб Програмист"}
          </h1>
        </div>

        {/* orb + photo */}
        <div className="flex w-full justify-center">
          <div
            className="
              relative -mt-[40%] md:-mt-[20%] lg:-mt-[20%]
              w-[420px] md:w-[560px] lg:w-[900px]
              aspect-square rounded-full
              flex justify-center items-end
            "
          >
            <div className="absolute inset-0 rounded-full bg-[image:var(--hero-gradient)] blur-md" />
            {/* little code glyphs */}
            <span
              className="text-primary-text absolute font-extrabold blur-xs
                             text-2xl md:text-4xl lg:text-5xl
                             right-3 md:right-5 top-1/3 rotate-15 "
            >
              {"</>"}
            </span>
            <span
              className="text-primary-text absolute font-extrabold blur-xs
                             text-2xl md:text-4xl lg:text-5xl
                             left-2 md:left-3 bottom-1/4 -rotate-10"
            >
              {"</>"}
            </span>

            <img
              loading="lazy"
              src="/images/me.png"
              alt="Me"
              className="z-20 object-contain pointer-events-none
                         w-60 h-60 md:w-90 md:h-90 lg:w-140 lg:h-140 mb-2 md:mb-4 lg:mb-[5%]"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="bg-main-bg w-[90%] relative z-30 -translate-y-2 md:-translate-y-8 lg:-translate-y-15 flex justify-center pb-15">
          <a
            href="#contact"
            className="btn bg-primary-accent hover:bg-secondary-accent  text-white text-xs lg:text-xl hover:text-black -mt-2 md:-mt-3 lg:-mt-10"
          >
            {`${isEnglish ? "Let's talk" : "Свържи се с мен"}`}
          </a>
        </div>
      </div>
    </section>
  );
}
