import { useState } from "react";

export default function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    setResult("Sending...");

    const formData = new FormData(event.target);

    formData.append("access_key", "c0c2e8e1-d4a5-46d0-9fda-884942c7fe1e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message sent successfully!");

      event.target.reset();
    } else {
      setResult("Something went wrong.");
    }
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3">
      {/* NAME */}
      <div className="flex flex-col gap-1">
        <label className="text-xs font-medium text-gray-700 dark:text-gray-300">
          Name
        </label>

        <input
          type="text"
          name="name"
          placeholder="Your name"
          required
          className="bg-gray-300 dark:bg-gray-900 text-gray-800 dark:text-gray-100 border border-gray-400 dark:border-gray-700 rounded-lg p-3 text-sm outline-none focus:border-sky-500 transition"
        />
      </div>

      {/* EMAIL */}
      <div className="flex flex-col gap-1">
        <label className="text-xs font-medium text-gray-700 dark:text-gray-300">
          Email
        </label>

        <input
          type="email"
          name="email"
          placeholder="your@email.com"
          required
          className="bg-gray-300 dark:bg-gray-900 text-gray-800 dark:text-gray-100 border border-gray-400 dark:border-gray-700 rounded-lg p-3 text-sm outline-none focus:border-sky-500 transition"
        />
      </div>

      {/* MESSAGE */}
      <div className="flex flex-col gap-1">
        <label className="text-xs font-medium text-gray-700 dark:text-gray-300">
          Message
        </label>

        <textarea
          name="message"
          placeholder="Write your message..."
          required
          rows="5"
          className="bg-gray-300 dark:bg-gray-900 text-gray-800 dark:text-gray-100 border border-gray-400 dark:border-gray-700 rounded-lg p-3 text-sm outline-none resize-none focus:border-sky-500 transition"
        ></textarea>
      </div>

      {/* BUTTON */}
      <button
        type="submit"
        className="bg-sky-500 dark:bg-sky-400 hover:opacity-90 text-white font-medium rounded-lg p-3 text-sm transition cursor-pointer"
      >
        Submit Form
      </button>

      {/* STATUS */}
      <span className="text-xs text-gray-700 dark:text-gray-300">{result}</span>
    </form>
  );
}
