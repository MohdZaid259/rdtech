"use client";

import type React from "react";
import { useTranslations } from "next-intl"; // i18n hook
import { SafeImage } from "../ui/safe-image";

export default function ContactSection() {
  const t = useTranslations("Home.Contact"); // namespace = "Contact"

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value;
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement)?.value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)
      ?.value;

    const subject = encodeURIComponent(
      `${t("emailSubject")} ${name}`
    );
    const body = encodeURIComponent(
      `${t("fields.name")}: ${name}\n${t("fields.email")}: ${email}\n${t("fields.phone")}: ${phone}\n\n${t("fields.message")}:\n${message}\n\n--\n`
    );

    const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=razvizaid259@gmail.com&su=${subject}&body=${body}`;
    window.open(gmailURL, "_blank");
  }

  return (
    <section
      id="contact"
      className="relative bg-gradient-to-tr from-blue-950 via-blue-900 to-blue-950 text-white mt-16 py-16"
    >
      {/* Title */}
      <div className="absolute -top-7 md:-top-14 right-10 ">
        <h1
          className="text-5xl md:text-8xl font-bold uppercase tracking-wider inline-block"
          style={{
            background:
              "linear-gradient(to top, white 0%, white 42%, #172554 42%, #172554 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {t("title")}
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-10 grid md:grid-cols-2 gap-12">
        {/* Left Side - Contact Info */}
        <div>
          <SafeImage
            src="/contact.png"
            width={400}
            height={400}
            alt="contact img"
          />
        </div>

        {/* Right Side - Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 text-sm">{t("fields.name")}</label>
            <input
              name="name"
              type="text"
              className="w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-white py-2"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm">{t("fields.phone")}</label>
            <input
              name="phone"
              type="text"
              className="w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-white py-2"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm">{t("fields.email")}</label>
            <input
              name="email"
              type="email"
              className="w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-white py-2"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm">{t("fields.message")}</label>
            <textarea
              name="message"
              className="w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-white py-2 resize-none"
            />
          </div>
          <button
            type="submit"
            className="bg-white text-black font-bold px-8 py-2 rounded-full hover:bg-gray-200"
          >
            {t("submit")}
          </button>
        </form>
      </div>
    </section>
  );
}
