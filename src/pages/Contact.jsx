import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSuccess("");
    setError("");

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setError("Please fill all the fields.");
      return;
    }

    setSuccess(
      "Thank you! Your message has been sent successfully."
    );

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <main className="min-h-screen bg-slate-950 px-4 pb-16 pt-24 text-white">

      <div className="mx-auto max-w-6xl">

        {/* ================= HEADER ================= */}

        <div className="mx-auto max-w-2xl text-center">

          <span className="inline-flex rounded-full bg-red-500/10 px-4 py-2 text-sm font-medium text-red-500">
            Get In Touch
          </span>

          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Contact Us
          </h1>

          <p className="mt-4 text-slate-400">
            Have a question, suggestion, or need help?
            Send us a message and we'll get back to you.
          </p>

        </div>

        {/* ================= CONTENT ================= */}

        <div className="mt-12 grid gap-8 lg:grid-cols-3">

          {/* ================= CONTACT INFO ================= */}

          <div className="space-y-5">

            {/* Email */}

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-500">

                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>

              </div>

              <h3 className="mt-5 text-lg font-semibold">
                Email Us
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                Send us an email anytime.
              </p>

              <a
                href="mailto:support@example.com"
                className="mt-3 inline-block text-sm font-medium text-red-500 hover:text-red-400"
              >
                support@example.com
              </a>

            </div>

            {/* Phone */}

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-500">

                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h2.28a2 2 0 011.79 1.11l1.1 2.2a2 2 0 01-.45 2.31L8.3 9.95a16 16 0 005.75 5.75l1.33-1.42a2 2 0 012.31-.45l2.2 1.1A2 2 0 0121 16.72V19a2 2 0 01-2 2C9.61 21 3 14.39 3 6V5z"
                  />
                </svg>

              </div>

              <h3 className="mt-5 text-lg font-semibold">
                Call Us
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                Monday to Friday, 9 AM - 6 PM
              </p>

              <a
                href="tel:+919999999999"
                className="mt-3 inline-block text-sm font-medium text-red-500 hover:text-red-400"
              >
                +91 99999 99999
              </a>

            </div>

            {/* Support */}

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-500">

                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M18 10c0 4.418-3.582 8-8 8H6l-3 3v-5.5A7.97 7.97 0 012 10a8 8 0 0116 0zM21 10a7 7 0 00-2.1-5.65"
                  />
                </svg>

              </div>

              <h3 className="mt-5 text-lg font-semibold">
                Support
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                Need help with movies or playback?
                We're here to help.
              </p>

              <p className="mt-3 text-sm font-medium text-red-500">
                24/7 Online Support
              </p>

            </div>

          </div>

          {/* ================= CONTACT FORM ================= */}

          <div className="lg:col-span-2">

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-2xl sm:p-8">

              <h2 className="text-2xl font-bold">
                Send us a message
              </h2>

              <p className="mt-2 text-sm text-slate-400">
                Fill out the form below and we'll respond
                as soon as possible.
              </p>

              {/* Success */}

              {success && (
                <div className="mt-6 rounded-lg border border-green-500/20 bg-green-500/10 px-4 py-3 text-sm text-green-400">
                  {success}
                </div>
              )}

              {/* Error */}

              {error && (
                <div className="mt-6 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                  {error}
                </div>
              )}

              <form
                onSubmit={handleSubmit}
                className="mt-6 space-y-5"
              >

                {/* Name + Email */}

                <div className="grid gap-5 sm:grid-cols-2">

                  <div>

                    <label className="mb-2 block text-sm font-medium text-slate-300">
                      Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 transition focus:border-red-500 focus:ring-1 focus:ring-red-500"
                    />

                  </div>

                  <div>

                    <label className="mb-2 block text-sm font-medium text-slate-300">
                      Email
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 transition focus:border-red-500 focus:ring-1 focus:ring-red-500"
                    />

                  </div>

                </div>

                {/* Subject */}

                <div>

                  <label className="mb-2 block text-sm font-medium text-slate-300">
                    Subject
                  </label>

                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 transition focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  />

                </div>

                {/* Message */}

                <div>

                  <label className="mb-2 block text-sm font-medium text-slate-300">
                    Message
                  </label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    placeholder="Write your message..."
                    className="w-full resize-none rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 transition focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  />

                </div>

                {/* Submit */}

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-slate-900 sm:w-auto"
                >

                  Send Message

                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 12h14m-6-6 6 6-6 6"
                    />
                  </svg>

                </button>

              </form>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
};

export default Contact;