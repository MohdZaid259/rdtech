"use client";

import type React from "react";
import { SafeImage } from "../ui/safe-image";

export default function ContactSection() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const name = (document.getElementById("name") as HTMLInputElement)?.value;
    const email = (document.getElementById("email") as HTMLInputElement)?.value;
    const phone = (document.getElementById("phone") as HTMLInputElement)?.value;
    const company = (document.getElementById("company") as HTMLSelectElement)
      ?.value;
    const message = (document.getElementById("message") as HTMLTextAreaElement)
      ?.value;

    const subject = encodeURIComponent(
      "New Technical Support Request from " + name
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nCompany: ${company}\n\nMessage:\n${message}\n\n--\n`
    );

    const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=razvizaid259@gmail.com&su=${subject}&body=${body}`;
    window.open(gmailURL, "_blank");
  }

  return (
    <section id="contact" className="relative bg-gradient-to-tr from-blue-950 via-blue-900 to-blue-950 text-white mt-16 py-16">
      <div className="absolute -top-14 right-10 ">
        <h1 
          className="text-8xl font-bold uppercase tracking-wider inline-block"
          style={{
            background: 'linear-gradient(to top, white 0%, white 42%, #172554 42%, #172554 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          CONTACT US
        </h1>
      </div>
      <div className="max-w-7xl mx-auto px-6 pt-10 grid md:grid-cols-2 gap-12">
        {/* Left Side - Contact Info */}
        <div>
          <SafeImage
            src='/contact.png'
            width={400}
            height={400}
            alt="contact img"
            className=""
          />

        </div>

        {/* Right Side - Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 text-sm">NAME</label>
            <input
              type="text"
              className="w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-white py-2"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm">PHONE NUMBER</label>
            <input
              type="text"
              className="w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-white py-2"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm">EMAIL</label>
            <input
              type="email"
              className="w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-white py-2"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm">MESSAGE</label>
            <textarea
              className="w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-white py-2 resize-none"
            />
          </div>
          <button
            type="submit"
            className="bg-white text-black font-bold px-8 py-2 rounded-full hover:bg-gray-200"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </section>
  );
}