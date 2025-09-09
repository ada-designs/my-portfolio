import { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm({ togglePopup, isEnglish }) {
  // Local state for controlled inputs
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  // Formspree state + submit handler
  const [state, handleSubmit] = useForm("xqadnkry"); // <-- your real Formspree ID

  // Reset + popup on success
  useEffect(() => {
    if (state.succeeded) {
      if (togglePopup) togglePopup(true);
      setForm({ name: "", email: "", message: "" });
    }
  }, [state.succeeded]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <section className="container-main relative" id="contact">
      {/* heading */}
      <h2 className="text-primary-text capitalize relative mb-5 z-10 text-center">
        {isEnglish ? "Let's" : "Нека"}
        <span className="ml-[3%] text-switching-accent">
          {isEnglish ? "Build" : "Направим"}
        </span>
        <br /> {isEnglish ? "Something together" : "Нещо заедно"}
      </h2>
      <p className="text-primary-text">
        {isEnglish
          ? "</ You can reach me = anytime />"
          : "</ Можеш да се свържеш с мен = по всяко време />"}
      </p>

      <div className="w-full border-2 border-gray-300 flex lg:flex-row flex-col justify-between items-center rounded-3xl mt-20 relative gap-10 lg:gap-0 p-5 lg:p-10">
        {/* info block */}
        <div className="text-primary-text flex flex-col gap-2 lg:w-[45%] w-full">
          <h4 className="lg:text-4xl font-extrabold lg:mb-10 mb-4 lg:self-start self-center">
            {isEnglish ? "Let's" : "Свържи се"}{" "}
            <span className="text-switching-accent">
              {isEnglish ? "Connect!" : "с мен!"}
            </span>
          </h4>
          <p className="border-b-1 border-secondary-accent pb-2">
            {isEnglish
              ? "Whether you're in search of a developer, have a question, or just want to share your ideas, I’d love to hear from you."
              : "Ако ви трябва програмист, имате въпрос, или просто искате да споделите вашите идеи - бих се радвал да се свържете с мен."}
          </p>
          <p>
            alex.adadesigns@gmail.com <br />{" "}
            {isEnglish ? "Varna, Bulgaria" : "Варна, България"}
          </p>
        </div>

        {/* form */}
        <form
          className="lg:w-[45%] w-full"
          onSubmit={handleSubmit}
          method="POST"
        >
          <label htmlFor="name" className="text-switching-accent">
            {isEnglish ? "Name" : "Име"}
          </label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email" className="text-switching-accent">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <label htmlFor="message" className="text-switching-accent">
            {isEnglish ? "Message" : "Съобщение"}
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />

          <button
            type="submit"
            disabled={state.submitting}
            className="btn bg-secondary-accent text-black hover:bg-primary-accent hover:text-white mt-5"
          >
            {isEnglish ? "Send" : "Изпрати"}
          </button>
        </form>
      </div>
    </section>
  );
}
