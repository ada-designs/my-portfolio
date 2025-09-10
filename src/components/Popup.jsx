export default function Popup({ togglePopup }) {
  return (
    <>
      <div className="bg-black z-100 fixed h-full w-full opacity-80 " />
      <div className="fixed z-101 flex h-full w-full justify-center items-center">
        <div className="bg-[image:var(--hero-gradient)] fixed lg:w-[80%] lg:h-[80%] flex flex-col items-center justify-center gap-10 lg:py-20 py-15 lg:px-30 px-15 rounded-4xl">
          <img
            loading="lazy"
            src="./images/tick.webp"
            className="w-[100px] h-[100px]"
          />
          <h3 className="lg:text-5xl text-3xl font-extrabold text-center">
            Thank you for your message!
          </h3>
          <p className="text-center">
            I’ve received your request and I’m excited to learn more about your
            project. I’ll review your submission and get back to you shortly to
            discuss the next steps. Stay connected!
          </p>
          <button
            className="btn bg-white text-black hover:bg-black hover:text-white"
            onClick={togglePopup}
          >
            Got it
          </button>
        </div>
      </div>
    </>
  );
}
