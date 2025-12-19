const Contact = () => {
  return (
    <section className="space-y-6 max-w-2xl">
      <header>
        <h1 className="text-4xl font-bold text-slate-900">
          Contact Us
        </h1>
        <p className="mt-2 text-slate-600">
          Reach out to ASTRA for collaborations or queries.
        </p>
      </header>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full rounded-lg border px-4 py-2"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full rounded-lg border px-4 py-2"
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          className="w-full rounded-lg border px-4 py-2"
        />
        <button
          type="submit"
          className="rounded-lg bg-purple-600 px-6 py-2 text-white hover:bg-purple-700"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
