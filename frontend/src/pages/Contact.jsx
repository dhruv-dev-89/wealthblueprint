import { useEffect, useState } from "react";
import gsap from "gsap";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-hero-item", {
        y: 35,
        opacity: 0,
        duration: 0.85,
        stagger: 0.08,
        ease: "power3.out",
      });

      gsap.from(".contact-reveal", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.08,
        delay: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-content",
          start: "top 82%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#F7FBF8] text-[#11110F]">
      <Navbar />

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="px-6 pb-20 pt-12 sm:px-10 lg:px-16 lg:pb-24 lg:pt-16">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid items-end gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">

            <div>
              <p className="contact-hero-item mb-8 text-[10px] font-semibold uppercase tracking-[0.34em] text-[#3157C8]">
                GET IN TOUCH
              </p>

              <h1 className="contact-hero-item max-w-[900px] text-[clamp(4.2rem,8.5vw,9rem)] font-medium leading-[0.82] tracking-[-0.09em]">
                Let's talk
                <br />
                about your
                <br />
                <span className="text-[#3157C8]">
                  future.
                </span>
              </h1>
            </div>

            <div className="contact-hero-item border-t border-[#11110F]/10 pt-7">
              <p className="max-w-[450px] text-[15px] leading-7 text-[#11110F]/55">
                Connect with our financial experts to plan your secure
                future. Tell us what you're working towards and we'll
                help you understand the next step.
              </p>

              <div className="mt-8 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#C8FF3D]" />
                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#11110F]/35">
                  WE'RE HERE TO HELP
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT CONTENT
      ===================================================== */}
      <section className="contact-content px-6 pb-24 sm:px-10 lg:px-16 lg:pb-32">
        <div className="mx-auto grid max-w-[1280px] gap-5 lg:grid-cols-[1.15fr_0.85fr]">

          {/* FORM */}
          <div className="contact-reveal rounded-[30px] bg-[#EFECE4] p-7 sm:p-10 lg:p-14">

            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#3157C8]">
                  SEND US A MESSAGE
                </p>

                <h2 className="mt-5 text-[clamp(2.3rem,4vw,4.5rem)] font-medium leading-[0.88] tracking-[-0.07em]">
                  Start a
                  <br />
                  conversation.
                </h2>
              </div>

              <span className="hidden text-[9px] font-semibold uppercase tracking-[0.2em] text-[#11110F]/25 sm:block">
                WB — 01
              </span>
            </div>

            {submitted ? (
              <div className="mt-16 border-t border-[#11110F]/10 pt-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#123B2A] text-lg text-[#C8FF3D]">
                  ✓
                </div>

                <h3 className="mt-6 text-[28px] font-medium tracking-[-0.04em]">
                  Message ready.
                </h3>

                <p className="mt-3 max-w-[460px] text-[14px] leading-7 text-[#11110F]/50">
                  Thanks for reaching out. Our team will get back to you
                  with the next steps.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-7 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#3157C8]"
                >
                  Send another message →
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mt-12 space-y-7"
              >

                <div className="grid gap-7 sm:grid-cols-2">

                  <div>
                    <label className="mb-3 block text-[9px] font-semibold uppercase tracking-[0.2em] text-[#11110F]/35">
                      FULL NAME *
                    </label>

                    <input
                      required
                      type="text"
                      placeholder="Enter your full name"
                      className="
                        h-[54px]
                        w-full
                        rounded-xl
                        border
                        border-[#11110F]/10
                        bg-white/70
                        px-5
                        text-[13px]
                        outline-none
                        transition
                        placeholder:text-[#11110F]/25
                        focus:border-[#123B2A]/35
                      "
                    />
                  </div>

                  <div>
                    <label className="mb-3 block text-[9px] font-semibold uppercase tracking-[0.2em] text-[#11110F]/35">
                      EMAIL ADDRESS *
                    </label>

                    <input
                      required
                      type="email"
                      placeholder="Enter your email address"
                      className="
                        h-[54px]
                        w-full
                        rounded-xl
                        border
                        border-[#11110F]/10
                        bg-white/70
                        px-5
                        text-[13px]
                        outline-none
                        transition
                        placeholder:text-[#11110F]/25
                        focus:border-[#123B2A]/35
                      "
                    />
                  </div>

                </div>

                <div className="grid gap-7 sm:grid-cols-2">

                  <div>
                    <label className="mb-3 block text-[9px] font-semibold uppercase tracking-[0.2em] text-[#11110F]/35">
                      PHONE NUMBER
                    </label>

                    <input
                      type="tel"
                      placeholder="Enter your phone number"
                      className="
                        h-[54px]
                        w-full
                        rounded-xl
                        border
                        border-[#11110F]/10
                        bg-white/70
                        px-5
                        text-[13px]
                        outline-none
                        transition
                        placeholder:text-[#11110F]/25
                        focus:border-[#123B2A]/35
                      "
                    />
                  </div>

                  <div>
                    <label className="mb-3 block text-[9px] font-semibold uppercase tracking-[0.2em] text-[#11110F]/35">
                      SUBJECT *
                    </label>

                    <select
                      required
                      defaultValue=""
                      className="
                        h-[54px]
                        w-full
                        rounded-xl
                        border
                        border-[#11110F]/10
                        bg-white/70
                        px-5
                        text-[13px]
                        text-[#11110F]/70
                        outline-none
                        focus:border-[#123B2A]/35
                      "
                    >
                      <option value="" disabled>
                        Select a subject
                      </option>
                      <option>Investment Planning</option>
                      <option>Insurance</option>
                      <option>Retirement Planning</option>
                      <option>Financial Planning</option>
                      <option>General Enquiry</option>
                    </select>
                  </div>

                </div>

                <div>
                  <label className="mb-3 block text-[9px] font-semibold uppercase tracking-[0.2em] text-[#11110F]/35">
                    MESSAGE *
                  </label>

                  <textarea
                    required
                    rows={6}
                    placeholder="Tell us how we can help..."
                    className="
                      w-full
                      resize-none
                      rounded-xl
                      border
                      border-[#11110F]/10
                      bg-white/70
                      px-5
                      py-4
                      text-[13px]
                      leading-6
                      outline-none
                      transition
                      placeholder:text-[#11110F]/25
                      focus:border-[#123B2A]/35
                    "
                  />
                </div>

                <button
                  type="submit"
                  className="
                    inline-flex
                    h-[54px]
                    items-center
                    gap-4
                    rounded-full
                    bg-[#123B2A]
                    px-8
                    text-[12px]
                    font-semibold
                    text-white
                    transition
                    duration-300
                    hover:-translate-y-1
                  "
                >
                  Send Message
                  <span>↗</span>
                </button>

              </form>
            )}

          </div>

          {/* RIGHT INFO */}
          <div className="contact-reveal flex flex-col gap-5">

            {/* Contact information */}
            <div className="rounded-[30px] bg-[#123B2A] p-7 text-white sm:p-10">

              <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#C8FF3D]">
                CONTACT INFORMATION
              </p>

              <div className="mt-12 space-y-9">

                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/30">
                    CALL US
                  </p>

                  <a
                    href="tel:+917973053547"
                    className="mt-3 block text-[22px] font-medium tracking-[-0.03em] transition hover:text-[#C8FF3D]"
                  >
                    +91 79730 53547
                  </a>
                </div>

                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/30">
                    EMAIL US
                  </p>

                  <a
                    href="mailto:contactus@wealthblueprint.in"
                    className="mt-3 block break-all text-[18px] font-medium tracking-[-0.025em] transition hover:text-[#C8FF3D]"
                  >
                    contactus@wealthblueprint.in
                  </a>
                </div>

                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/30">
                    LOCATION
                  </p>

                  <p className="mt-3 text-[16px] font-medium text-white/75">
                    Noida, Uttar Pradesh, India
                  </p>
                </div>

              </div>

            </div>

            {/* Working hours */}
            <div className="rounded-[30px] bg-[#EAF7EF] p-7 sm:p-10">

              <div className="flex items-start justify-between">
                <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#3157C8]">
                  WORKING HOURS
                </p>

                <span className="h-2 w-2 rounded-full bg-[#C8FF3D]" />
              </div>

              <div className="mt-10 space-y-5">

                <div className="flex items-center justify-between border-b border-[#123B2A]/10 pb-4">
                  <span className="text-[13px] text-[#123B2A]/50">
                    Monday – Friday
                  </span>

                  <span className="text-[12px] font-semibold text-[#123B2A]">
                    9:00 AM – 6:00 PM
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[13px] text-[#123B2A]/50">
                    Saturday
                  </span>

                  <span className="text-[12px] font-semibold text-[#123B2A]">
                    10:00 AM – 2:00 PM
                  </span>
                </div>

              </div>

            </div>

            {/* Small visual */}
            <div className="relative min-h-[220px] overflow-hidden rounded-[30px] bg-[#EFECE4] p-7 sm:p-10">

              <div className="absolute right-[-45px] top-[-45px] h-[190px] w-[190px] rounded-full border border-[#123B2A]/10" />

              <div className="absolute right-[20px] top-[20px] h-[105px] w-[105px] rounded-full border border-[#3157C8]/15" />

              <div className="relative z-10">
                <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#3157C8]">
                  WEALTH BLUE PRINT
                </p>

                <h3 className="mt-10 max-w-[300px] text-[clamp(2rem,4vw,3.3rem)] font-medium leading-[0.88] tracking-[-0.06em]">
                  One conversation
                  <br />
                  can change
                  <br />
                  the direction.
                </h3>
              </div>

            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}