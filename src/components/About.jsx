const info = [
  {
    heading: "Who am I?",
    headingBG: "Кой съм аз?",
    text: "I'm a 24-year-old Bulgarian web developer from Varna, Bulgaria. I love challenges, stepping out of my comfort zone, and going on adventures. I enjoy working in teams and constantly learning new things. I'm positive and like to approach life with a lighthearted attitude.",
    textBG:
      "Аз съм 24-годишен уеб програмист от Варна, България. Обичам предизвикателствата, излизането от зоната на комфорт и приключенията. Обичам да работя в екип и да уча нови неща. Позитивен съм и гледам на живота с лекота.",
    color: "white",
    align: "left",
  },
  {
    heading: "How did I start?",
    headingBG: "Как започнах?",
    text: "As a kid, I loved math and playing video games. I got into digital marketing to find a way to work on a computer. When I discovered how important websites are in marketing, I got hooked — and I haven’t stopped since.",
    textBG:
      "Като дете обичах математиката и видеоигрите. Започнах да уча дигитален маркетинг, за да мога да работя на компютър. Когато разбрах колко важни са уебсайтовете в маркетинга, се запалих — и оттогава не съм спирал.",
    color: "secondary-accent",
    align: "right",
  },
  {
    heading: "Experience",
    headingBG: "Опит",
    text: "With almost 2 years of experience, I've built websites for multiple clients and developed small apps on my own. I’ve worked as a freelancer and delivered projects in team settings too.",
    textBG:
      "С близо 2 години опит, създавал съм уебсайтове за различни клиенти и съм разработвал малки приложения самостоятелно. Работил съм като фрийлансър и съм участвал в екипни проекти.",
    color: "primary-accent",
    align: "left",
  },
  {
    heading: "Education",
    headingBG: "Образование",
    text: "I'm currently a first-year 'Computer Systems and Technologies' student at TU Varna. I rely a lot on self-learning and staying up to date with the latest technologies. I love learning through Udemy!",
    textBG:
      "В момента съм студент първа година в специалност 'Компютърни Системи и Технологии' в Технически университет - Варна. Разчитам много на самообучение и следя най-новите технологии. Обожавам да уча чрез Udemy!",
    color: "white",
    align: "right",
  },
  {
    heading: "My hobbies",
    headingBG: "Моите хобита",
    text: "I love playing and watching football. I'm very active and try to stay in great shape. I also enjoy reading books, deep conversations, and having fun with friends.",
    textBG:
      "Обичам да играя и да гледам футбол. Много съм активен и се старая да бъда в отлична форма. Също така обичам да чета книги, да водя дълбоки разговори и да се забавлявам с приятели.",
    color: "secondary-accent",
    align: "start",
  },
];

export default function About({ isEnglish }) {
  return (
    <section className="container-main w-[90%] gap-20" id="about">
      <div className="flex flex-col items-center">
        <h2 className="text-primary-text text-center capitalize relative mb-10 z-10 text-3xl md:text-4xl lg:text-5xl">
          {`${isEnglish ? "Behind the codes" : "Зад кодовете"}`}
          <br />
          <span className="text-switching-accent">{`${
            isEnglish ? "CTRL + About Me" : "CTRL + За Мен"
          }`}</span>
          <span className="absolute lg:left-0 -left-2 lg:-bottom-5 -bottom-2 -rotate-12 lg:w-[128px] lg:h-[84px] w-[70px] h-[44px] border-1 border-switching-accent rounded-lg z-1"></span>
        </h2>

        <div className="flex items-center justify-center relative w-ful">
          <span
            className="text-primary-text font-extrabold absolute -rotate-20 lg:blur-md blur-sm
                             text-4xl md:text-6xl lg:text-8xl
                             lg:left-25 md:left-15 left-0"
          >
            {"</>"}
          </span>
          <span className="relative w-[55%] md:w-[45%] lg:w-[33%]">
            <img
              loading="lazy"
              src="/images/about_image.JPG"
              alt="About"
              className=" aspect-square object-cover rounded-4xl border-5 md:border-10 border-primary-text"
            />
            <span
              className="
              absolute md:-right-30 md:-bottom-15 -right-5 -bottom-5
              w-[75px] md:w-[125px] lg:w-[250px]
              aspect-square rounded-full
              bg-[image:var(--hero-gradient)]
              blur-lg md:blur-2xl lg:blur-xl
            "
            />
          </span>
          <span
            className="text-primary-text  font-extrabold absolute rotate-30 lg:blur-sm blur-xs
                             text-xl md:text-4xl lg:text-5xl
                             lg:right-30 md:right-20 right-0"
          >
            {"</>"}
          </span>
        </div>
      </div>

      <div className="w-full flex flex-col lg:-space-y-15 -space-y-5 relative">
        {info.map((box, i) => (
          <Box
            isEnglish={isEnglish}
            key={i}
            heading={box.heading}
            headingBG={box.headingBG}
            text={box.text}
            textBG={box.textBG}
            color={box.color}
            side={i % 2 === 0 ? "left" : "right"}
            textColor={i === 2 ? "white" : "black"}
          />
        ))}
      </div>
    </section>
  );
}

function Box({
  heading,
  headingBG,
  text,
  textBG,
  color,
  side,
  textColor,
  isEnglish,
}) {
  const sideClass = side === "left" ? "self-start" : "self-end";
  const margin = side === "right" ? "mr-10" : "ml-10";
  const zIndex = side === "right" ? "lg:z-20" : "lg:z-10";

  return (
    <div
      className={`bg-${color} ${sideClass} ${margin}  text-${textColor} ${zIndex} lg:w-[50%] p-10 rounded-[50px]`}
    >
      <h3 className="text-2xl mb-[3%]">{isEnglish ? heading : headingBG}</h3>
      <p>{isEnglish ? text : textBG}</p>
    </div>
  );
}
