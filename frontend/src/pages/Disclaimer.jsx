import { useEffect, useState } from "react";
import gsap from "gsap";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Disclaimer() {
  const sectionIds = [
    "general",
    "investment",
    "calculators",
    "content",
    "professional",
    "third-party",
    "contact",
  ];

  const [activeSection, setActiveSection] = useState("general");

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".disclaimer-hero-item", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
      });

      gsap.from(".disclaimer-section", {
        y: 25,
        opacity: 0,
        duration: 0.7,
        stagger: 0.06,
        delay: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".disclaimer-content",
          start: "top 82%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top - b.boundingClientRect.top
          );

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-18% 0px -65% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleSectionClick = (e, id) => {
    e.preventDefault();

    const section = document.getElementById(id);

    if (!section) return;

    setActiveSection(id);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    window.history.replaceState(null, "", `#${id}`);
  };

  const navigation = [
    ["general", "General Information"],
    ["investment", "Investment Risk"],
    ["calculators", "Calculators"],
    ["content", "Website Content"],
    ["professional", "Professional Advice"],
    ["third-party", "Third-Party Information"],
    ["contact", "Contact Us"],
  ];

  return (
    <div className="min-h-screen bg-[#F7FBF8] text-[#11110F]">
      <Navbar />

      {/* HERO */}
      <section className="px-6 pb-20 pt-12 sm:px-10 lg:px-16 lg:pb-28 lg:pt-16">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid items-end gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="disclaimer-hero-item mb-8 text-[10px] font-semibold uppercase tracking-[0.34em] text-[#3157C8]">
                LEGAL
              </p>

              <h1 className="disclaimer-hero-item max-w-[900px] text-[clamp(4rem,8vw,8.5rem)] font-medium leading-[0.84] tracking-[-0.09em]">
                Important
                <br />
                <span className="text-[#3157C8]">
                  Disclaimer.
                </span>
              </h1>
            </div>

            <div className="disclaimer-hero-item border-t border-[#11110F]/10 pt-7">
              <p className="max-w-[430px] text-[15px] leading-7 text-[#11110F]/55">
                Please read this information carefully before relying
                on any content, tools, or information available through
                the Wealth Blue Print website.
              </p>

              <p className="mt-6 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#11110F]/30">
                LAST UPDATED — OCTOBER 2026
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="disclaimer-content px-6 pb-24 sm:px-10 lg:px-16 lg:pb-32">
        <div className="mx-auto grid max-w-[1280px] gap-16 lg:grid-cols-[0.3fr_0.7fr] lg:gap-24">

          {/* SIDEBAR */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 border-t border-[#11110F]/10 pt-5">
              <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#3157C8]">
                ON THIS PAGE
              </p>

              <nav className="mt-6 space-y-1">
                {navigation.map(([id, label]) => {
                  const isActive = activeSection === id;

                  return (
                    <a
                      key={id}
                      href={`#${id}`}
                      onClick={(e) => handleSectionClick(e, id)}
                      className={`
                        relative flex min-h-[34px] items-center
                        border-l-2 pl-4
                        text-[12px]
                        transition-all duration-300
                        ${
                          isActive
                            ? "border-[#3157C8] font-semibold text-[#3157C8]"
                            : "border-transparent text-[#11110F]/40 hover:text-[#11110F]/70"
                        }
                      `}
                    >
                      {label}
                    </a>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* MAIN */}
          <main className="max-w-[820px] space-y-14">

            <section
              id="general"
              className="disclaimer-section scroll-mt-32"
            >
              <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#3157C8]">
                GENERAL INFORMATION
              </p>

              <h2 className="mt-5 text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[0.95] tracking-[-0.06em]">
                Information on this website is for general purposes.
              </h2>

              <div className="mt-7 space-y-5 text-[14px] leading-7 text-[#11110F]/60">
                <p>
                  The information provided on the Wealth Blue Print
                  website is intended for general informational and
                  educational purposes.
                </p>

                <p>
                  Website content should not be interpreted as a
                  guarantee, recommendation, solicitation, or promise of
                  any particular financial outcome.
                </p>
              </div>
            </section>

            <section
              id="investment"
              className="disclaimer-section scroll-mt-32 border-t border-[#11110F]/10 pt-14"
            >
              <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#3157C8]">
                INVESTMENT RISK
              </p>

              <h2 className="mt-5 text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[0.95] tracking-[-0.06em]">
                Investments involve risk.
              </h2>

              <div className="mt-7 space-y-5 text-[14px] leading-7 text-[#11110F]/60">
                <p>
                  Investment values can rise or fall, and returns are
                  not guaranteed. Past performance is not indicative of
                  future performance.
                </p>

                <p>
                  Different investment products carry different levels
                  of risk. You should carefully consider your financial
                  objectives, investment horizon, risk tolerance, and
                  personal circumstances before making an investment
                  decision.
                </p>
              </div>
            </section>

            <section
              id="calculators"
              className="disclaimer-section scroll-mt-32 border-t border-[#11110F]/10 pt-14"
            >
              <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#3157C8]">
                CALCULATORS & PROJECTIONS
              </p>

              <h2 className="mt-5 text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[0.95] tracking-[-0.06em]">
                Calculations are indicative, not guaranteed.
              </h2>

              <p className="mt-7 text-[14px] leading-7 text-[#11110F]/60">
                Calculators, projections, examples, and estimates
                available on the website are based on the information
                and assumptions entered by the user. They are intended
                for illustrative purposes only and may not reflect
                actual future results.
              </p>
            </section>

            <section
              id="content"
              className="disclaimer-section scroll-mt-32 border-t border-[#11110F]/10 pt-14"
            >
              <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#3157C8]">
                WEBSITE CONTENT
              </p>

              <h2 className="mt-5 text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[0.95] tracking-[-0.06em]">
                We aim to keep information useful and current.
              </h2>

              <div className="mt-7 space-y-5 text-[14px] leading-7 text-[#11110F]/60">
                <p>
                  Reasonable efforts may be made to provide accurate and
                  current information. However, financial regulations,
                  products, market conditions, tax rules, and other
                  information may change over time.
                </p>

                <p>
                  Wealth Blue Print does not guarantee that all website
                  content will always be complete, accurate, or current.
                </p>
              </div>
            </section>

            <section
              id="professional"
              className="disclaimer-section scroll-mt-32 border-t border-[#11110F]/10 pt-14"
            >
              <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#3157C8]">
                PROFESSIONAL ADVICE
              </p>

              <h2 className="mt-5 text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[0.95] tracking-[-0.06em]">
                Your circumstances are unique.
              </h2>

              <div className="mt-7 space-y-5 text-[14px] leading-7 text-[#11110F]/60">
                <p>
                  Information available on this website should not be
                  considered a substitute for personalized financial,
                  investment, tax, legal, insurance, or other
                  professional advice.
                </p>

                <p>
                  Before making a financial decision, you should
                  consider obtaining advice appropriate to your
                  individual circumstances.
                </p>
              </div>
            </section>

            <section
              id="third-party"
              className="disclaimer-section scroll-mt-32 border-t border-[#11110F]/10 pt-14"
            >
              <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#3157C8]">
                THIRD-PARTY INFORMATION
              </p>

              <h2 className="mt-5 text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[0.95] tracking-[-0.06em]">
                External information may be outside our control.
              </h2>

              <p className="mt-7 text-[14px] leading-7 text-[#11110F]/60">
                The website may reference or link to information,
                products, services, or websites operated by third
                parties. Wealth Blue Print does not guarantee the
                accuracy, availability, or completeness of third-party
                information.
              </p>
            </section>

            <section
              id="contact"
              className="disclaimer-section scroll-mt-32 border-t border-[#11110F]/10 pt-14"
            >
              <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#3157C8]">
                CONTACT US
              </p>

              <h2 className="mt-5 text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[0.95] tracking-[-0.06em]">
                Need more information?
              </h2>

              <div className="mt-7 rounded-[24px] bg-[#EAF7EF] p-7 text-[14px] leading-7">
                <p className="font-semibold text-[#123B2A]">
                  Wealth Blue Print
                </p>

                <a
                  href="mailto:contactus@wealthblueprint.in"
                  className="mt-3 block text-[#3157C8] hover:underline"
                >
                  contactus@wealthblueprint.in
                </a>

                <a
                  href="tel:+917973053547"
                  className="mt-2 block text-[#123B2A]"
                >
                  +91 79730 53547
                </a>

                <p className="mt-2 text-[#11110F]/60">
                  Noida, Uttar Pradesh, India
                </p>
              </div>
            </section>

          </main>
        </div>
      </section>

      <Footer />
    </div>
  );
}