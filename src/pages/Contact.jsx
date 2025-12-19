import { useState } from "react";
import { Linkedin, Instagram } from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `Feedback from ${name}`;
    const body = `Name: ${name}%0AEmail: ${email}%0A%0AFeedback:%0A${message}`;

    window.location.href = `mailto:wce.astra@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6 py-24 bg-gray-50 text-gray-900"
    >
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT: CONTACT DETAILS */}
          <div className="space-y-10">
            <header>
              <h1 className="text-5xl font-extrabold mb-4 text-blue-900">
                Contact Us
              </h1>
              <p className="text-xl text-gray-600 max-w-md leading-relaxed">
                For queries, collaborations, or club activities, reach out to the{" "}
                <strong>ASTRA</strong> team.
              </p>
            </header>

            <div className="space-y-6">
              <div className="flex flex-col border-l-4 border-blue-600 pl-4">
                <span className="text-xs font-bold text-blue-500 uppercase tracking-tight">
                  Email
                </span>
                <a
                  href="mailto:wce.astra@gmail.com"
                  className="text-lg font-medium hover:text-blue-700 transition-colors"
                >
                  wce.astra@gmail.com
                </a>
              </div>

              <div className="flex flex-col border-l-4 border-gray-300 pl-4">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-tight">
                  Department
                </span>
                <span className="text-lg">
                  Artificial Intelligence & Machine Learning
                </span>
              </div>

              <div className="flex flex-col border-l-4 border-gray-300 pl-4">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-tight">
                  Institution
                </span>
                <span className="text-lg">
                  Walchand College of Engineering, Sangli
                </span>
              </div>
            </div>

            {/* SOCIAL LINKS */}
            <div>
              <h2 className="text-lg font-bold mb-4 text-gray-800">
                Connect With Us
              </h2>

              <div className="flex items-center gap-8">
                <a
                  href="https://www.linkedin.com/company/astra2025/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="ASTRA LinkedIn"
                  className="flex items-center gap-2 text-blue-700 hover:scale-110 transition-transform font-semibold"
                >
                  <Linkedin size={24} />
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://www.instagram.com/wce_astra?igsh=cjhodHlldnowZHZq"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="ASTRA Instagram"
                  className="flex items-center gap-2 text-pink-600 hover:scale-110 transition-transform font-semibold"
                >
                  <Instagram size={24} />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: FEEDBACK FORM */}
          <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
            <h2 className="text-2xl font-bold mb-8 text-gray-800">
              Send Feedback
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="group">
                <label className="block mb-2 text-sm font-semibold text-gray-600">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-gray-50 px-4 py-4 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Your name"
                />
              </div>

              <div className="group">
                <label className="block mb-2 text-sm font-semibold text-gray-600">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-gray-50 px-4 py-4 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Your email"
                />
              </div>

              <div className="group">
                <label className="block mb-2 text-sm font-semibold text-gray-600">
                  Message
                </label>
                <textarea
                  required
                  rows="4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-gray-50 px-4 py-4 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                  placeholder="Tell us what you think..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-bold py-4 rounded-2xl hover:bg-blue-700 hover:shadow-lg active:scale-[0.97] transition-all"
              >
                Submit Feedback
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
