"use client";

import { useRef, useState } from "react";
import { IconArrowRight, IconPin } from "./Icons";
import { MAPS_DIRECTIONS_HREF, MAPS_EMBED_SRC, SITE } from "../../lib/site";

const subjects = [
  "General Enquiry",
  "Buying a Property",
  "Selling a Property",
  "Construction Services",
  "Interior Designing",
  "Other",
];

export default function ContactFormMap() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    // Wire this up to a real API route / email service (e.g. Resend, Formspree).
    await new Promise((resolve) => setTimeout(resolve, 600));
    setStatus("sent");
    formRef.current?.reset();
  };

  return (
    <section id="form" className="bg-white py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-2 lg:gap-12 lg:px-12">
        {/* Form */}
        <div>
          <p className="mb-3 flex items-center gap-3 text-[13px] font-medium tracking-[0.15em] text-[#c8974a]">
            SEND US A MESSAGE
            <span className="h-px w-8 bg-[#c8974a]" />
          </p>
          <h2 className="font-serif text-4xl leading-tight text-[#151a2d] sm:text-5xl">
            We&apos;re Here to Help
          </h2>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-[#151a2d]/70">
            Fill out the form and our team will get back to you as soon as
            possible.
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="border border-black/10 px-4 py-3.5 text-[14px] text-[#151a2d] placeholder:text-[#151a2d]/40 focus:border-[#c8974a] focus:outline-none"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Your Email"
                className="border border-black/10 px-4 py-3.5 text-[14px] text-[#151a2d] placeholder:text-[#151a2d]/40 focus:border-[#c8974a] focus:outline-none"
              />
            </div>

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="w-full border border-black/10 px-4 py-3.5 text-[14px] text-[#151a2d] placeholder:text-[#151a2d]/40 focus:border-[#c8974a] focus:outline-none"
            />

            <select
              name="subject"
              required
              defaultValue=""
              className="w-full border border-black/10 px-4 py-3.5 text-[14px] text-[#151a2d]/80 focus:border-[#c8974a] focus:outline-none"
            >
              <option value="" disabled>
                Select Subject
              </option>
              {subjects.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>

            <textarea
              name="message"
              required
              rows={5}
              placeholder="Your Message"
              className="w-full resize-none border border-black/10 px-4 py-3.5 text-[14px] text-[#151a2d] placeholder:text-[#151a2d]/40 focus:border-[#c8974a] focus:outline-none"
            />

            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex items-center gap-2 bg-[#151a2d] px-7 py-4 text-[12px] font-semibold tracking-[0.1em] text-[#c8974a] transition hover:bg-[#1f2540] disabled:opacity-60"
            >
              {status === "submitting" ? "SENDING..." : "SEND MESSAGE"}
              <IconArrowRight className="h-4 w-4" />
            </button>

            {status === "sent" && (
              <p className="text-[13px] text-[#c8974a]">
                Thanks — your message has been sent. We&apos;ll be in touch soon.
              </p>
            )}
          </form>
        </div>

        {/* Map */}
        <div className="relative min-h-[420px] w-full overflow-hidden border border-black/5 lg:min-h-full">
          <iframe
            title="Kalaivani Real Estate office location"
            src={MAPS_EMBED_SRC}
            className="h-full min-h-[420px] w-full grayscale"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          <div className="absolute left-8 top-1/2 w-64 -translate-y-1/2">
            <IconPin className="h-9 w-9 text-[#c8974a]" />
            <div className="mt-3 bg-white p-5 shadow-lg">
              <p className="text-[14px] font-semibold text-[#151a2d]">
                Kalaivani Real Estate
              </p>
              <p className="mt-2 text-[12px] leading-relaxed text-[#151a2d]/60">
                {SITE.addressLines.map((line, i) => (
                  <span key={line}>
                    {i > 0 && <br />}
                    {line}
                  </span>
                ))}
              </p>
              <a
                href={MAPS_DIRECTIONS_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.06em] text-[#c8974a] hover:underline"
              >
                GET DIRECTIONS
                <IconArrowRight className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
