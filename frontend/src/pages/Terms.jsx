import { useEffect, useState } from "react";
import gsap from "gsap";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Terms() {
  const sectionIds = [
    "acceptance",
    "website",
    "information",
    "financial",
    "intellectual",
    "third-party",
    "liability",
    "changes",
    "contact",
  ];

  const [activeSection, setActiveSection] = useState("acceptance");

  /* -----------------------------------------
     HERO + CONTENT ANIMATION
  ----------------------------------------- */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".terms-hero-item", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
      });

      gsap.from(".terms-section", {
        y: 25,
        opacity: 0,
        duration: 0.7,
        stagger: 0.06,
        delay: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".terms-content",
          start: "top 82%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  /* -----------------------------------------
     SCROLLSPY
  ----------------------------------------- */
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

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  /* -----------------------------------------
     SIDEBAR CLICK
  ----------------------------------------- */
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

  return (
    <div className="min-h-screen bg-[#F7FBF8] text-[#11110F]">
      <Navbar />

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="px-6 pb-20 pt-12 sm:px-10 lg:px-16 lg:pb-28 lg:pt-16">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid items-end gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            {/* LEFT */}
            <div>
              <p className="terms-hero-item mb-8 text-[10px] font-semibold uppercase tracking-[0.34em] text-[#3157C8]">
                LEGAL
              </p>

              <h1 className="terms-hero-item max-w-[900px] text-[clamp(4rem,8vw,8.5rem)] font-medium leading-[0.84] tracking-[-0.09em]">
                Terms &
                <br />
                <span className="text-[#3157C8]">
                  Conditions.
                </span>
              </h1>
            </div>

            {/* RIGHT */}
            <div className="terms-hero-item border-t border-[#11110F]/10 pt-7">
              <p className="max-w-[430px] text-[15px] leading-7 text-[#11110F]/55">
                These terms explain the rules and conditions that apply
                when you access and use the Wealth Blue Print website.
              </p>

              <p className="mt-6 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#11110F]/30">
                LAST UPDATED — OCTOBER 2026
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTENT
      ===================================================== */}
      <section className="terms-content px-6 pb-24 sm:px-10 lg:px-16 lg:pb-32">
        <div className="mx-auto grid max-w-[1280px] gap-16 lg:grid-cols-[0.3fr_0.7fr] lg:gap-24">

          {/* =================================================
              SIDEBAR
          ================================================= */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 border-t border-[#11110F]/10 pt-5">

              <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#3157C8]">
                ON THIS PAGE
              </p>

              <nav className="mt-6 space-y-1">
                {[
                  ["acceptance", "Acceptance"],
                  ["website", "Website Use"],
                  ["information", "Information"],
                  ["financial", "Financial Information"],
                  ["intellectual", "Intellectual Property"],
                  ["third-party", "Third-Party Links"],
                  ["liability", "Liability"],
                  ["changes", "Changes"],
                  ["contact", "Contact"],
                ].map(([id, label]) => {
                  const isActive = activeSection === id;

                  return (
                    <a
                      key={id}
                      href={`#${id}`}
                      onClick={(e) =>
                        handleSectionClick(e, id)
                      }
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
                      <span
                        className={`
                          transition-all duration-300
                          ${
                            isActive
                              ? "translate-x-0"
                              : "translate-x-0"
                          }
                        `}
                      >
                        {label}
                      </span>
                    </a>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* =================================================
              MAIN CONTENT
          ================================================= */}
          <main className="max-w-[820px] space-y-14">

            {/* =================================================
                ACCEPTANCE
            ================================================= */}
            <section
              id="acceptance"
              className="terms-section scroll-mt-32"
            >
              <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#3157C8]">
                ACCEPTANCE
              </p>

              <h2 className="mt-5 text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[0.95] tracking-[-0.06em]">
                Using the website means accepting these terms.
              </h2>

              <p className="mt-7 text-[14px] leading-7 text-[#11110F]/60">
                By accessing or using the Wealth Blue Print website,
                you agree to comply with these Terms & Conditions and
                any applicable laws and regulations.
              </p>
            </section>

            {/* =================================================
                WEBSITE USE
            ================================================= */}
            <section
              id="website"
              className="terms-section scroll-mt-32 border-t border-[#11110F]/10 pt-14"
            >
              <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#3157C8]">
                WEBSITE USE
              </p>

              <h2 className="mt-5 text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[0.95] tracking-[-0.06em]">
                Use the website responsibly.
              </h2>

              <div className="mt-7 space-y-5 text-[14px] leading-7 text-[#11110F]/60">
                <p>
                  You agree to use this website only for lawful purposes
                  and in a manner that does not interfere with the
                  operation, security, or availability of the website.
                </p>

                <p>
                  You must not attempt to gain unauthorized access to
                  any part of the website, its systems, or information
                  belonging to another user.
                </p>
              </div>
            </section>

            {/* =================================================
                INFORMATION
            ================================================= */}
            <section
              id="information"
              className="terms-section scroll-mt-32 border-t border-[#11110F]/10 pt-14"
            >
              <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#3157C8]">
                INFORMATION
              </p>

              <h2 className="mt-5 text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[0.95] tracking-[-0.06em]">
                Information is provided for general purposes.
              </h2>

              <div className="mt-7 space-y-5 text-[14px] leading-7 text-[#11110F]/60">
                <p>
                  The content published on this website is intended to
                  provide general information about financial planning,
                  investment, insurance, and related topics.
                </p>

                <p>
                  Information may change over time and should not be
                  treated as a guarantee of any particular outcome.
                </p>
              </div>
            </section>

            {/* =================================================
                FINANCIAL INFORMATION
            ================================================= */}
            <section
              id="financial"
              className="terms-section scroll-mt-32 border-t border-[#11110F]/10 pt-14"
            >
              <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#3157C8]">
                FINANCIAL INFORMATION
              </p>

              <h2 className="mt-5 text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[0.95] tracking-[-0.06em]">
                Your financial decisions remain your responsibility.
              </h2>

              <div className="mt-7 space-y-5 text-[14px] leading-7 text-[#11110F]/60">
                <p>
                  Information available through this website should not
                  be considered a substitute for personalized financial,
                  investment, tax, legal, or other professional advice.
                </p>

                <p>
                  Investment products and financial markets involve
                  risks. Past performance does not guarantee future
                  results.
                </p>

                <p>
                  Before making an investment or financial decision,
                  consider your own objectives, financial circumstances,
                  risk tolerance, and applicable professional advice.
                </p>
              </div>
            </section>

            {/* =================================================
                INTELLECTUAL PROPERTY
            ================================================= */}
            <section
              id="intellectual"
              className="terms-section scroll-mt-32 border-t border-[#11110F]/10 pt-14"
            >
              <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#3157C8]">
                INTELLECTUAL PROPERTY
              </p>

              <h2 className="mt-5 text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[0.95] tracking-[-0.06em]">
                Our content belongs to us.
              </h2>

              <p className="mt-7 text-[14px] leading-7 text-[#11110F]/60">
                Unless otherwise stated, the website design, branding,
                text, graphics, logos, images, and other original
                materials are owned by or licensed to Wealth Blue Print.
                They may not be copied, reproduced, modified, or
                distributed without appropriate permission.
              </p>
            </section>

            {/* =================================================
                THIRD PARTY
            ================================================= */}
            <section
              id="third-party"
              className="terms-section scroll-mt-32 border-t border-[#11110F]/10 pt-14"
            >
              <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#3157C8]">
                THIRD-PARTY LINKS
              </p>

              <h2 className="mt-5 text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[0.95] tracking-[-0.06em]">
                External websites are outside our control.
              </h2>

              <p className="mt-7 text-[14px] leading-7 text-[#11110F]/60">
                The website may contain links to third-party websites or
                services. These links are provided for convenience.
                Wealth Blue Print is not responsible for the content,
                policies, availability, or practices of third-party
                websites.
              </p>
            </section>

            {/* =================================================
                LIABILITY
            ================================================= */}
            <section
              id="liability"
              className="terms-section scroll-mt-32 border-t border-[#11110F]/10 pt-14"
            >
              <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#3157C8]">
                LIABILITY
              </p>

              <h2 className="mt-5 text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[0.95] tracking-[-0.06em]">
                We aim for accuracy, but cannot guarantee everything.
              </h2>

              <p className="mt-7 text-[14px] leading-7 text-[#11110F]/60">
                While reasonable efforts may be made to keep website
                information accurate and current, Wealth Blue Print
                does not guarantee that all information will always be
                complete, accurate, current, or free from errors.
              </p>
            </section>

            {/* =================================================
                CHANGES
            ================================================= */}
            <section
              id="changes"
              className="terms-section scroll-mt-32 border-t border-[#11110F]/10 pt-14"
            >
              <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#3157C8]">
                CHANGES
              </p>

              <h2 className="mt-5 text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[0.95] tracking-[-0.06em]">
                Terms may change as the website evolves.
              </h2>

              <p className="mt-7 text-[14px] leading-7 text-[#11110F]/60">
                We may update these Terms & Conditions from time to
                time. Any updated version will be posted on this page
                with a revised update date.
              </p>
            </section>

            {/* =================================================
                CONTACT
            ================================================= */}
            <section
              id="contact"
              className="terms-section scroll-mt-32 border-t border-[#11110F]/10 pt-14"
            >
              <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#3157C8]">
                CONTACT
              </p>

              <h2 className="mt-5 text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[0.95] tracking-[-0.06em]">
                Need clarification?
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