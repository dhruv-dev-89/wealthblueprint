import { useEffect, useState } from "react";
import gsap from "gsap";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function CookiePolicy() {
  const sectionIds = [
    "what",
    "use",
    "types",
    "third-party",
    "control",
    "changes",
    "contact",
  ];

  const [activeSection, setActiveSection] = useState("what");

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cookie-hero-item", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
      });

      gsap.from(".cookie-section", {
        y: 25,
        opacity: 0,
        duration: 0.7,
        stagger: 0.06,
        delay: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".cookie-content",
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
    ["what", "What Are Cookies?"],
    ["use", "How We Use Cookies"],
    ["types", "Types of Cookies"],
    ["third-party", "Third-Party Services"],
    ["control", "Managing Cookies"],
    ["changes", "Policy Changes"],
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
              <p className="cookie-hero-item mb-8 text-[10px] font-semibold uppercase tracking-[0.34em] text-[#3157C8]">
                LEGAL
              </p>

              <h1 className="cookie-hero-item max-w-[900px] text-[clamp(4rem,8vw,8.5rem)] font-medium leading-[0.84] tracking-[-0.09em]">
                Cookie
                <br />
                <span className="text-[#3157C8]">Policy.</span>
              </h1>
            </div>

            <div className="cookie-hero-item border-t border-[#11110F]/10 pt-7">
              <p className="max-w-[430px] text-[15px] leading-7 text-[#11110F]/55">
                This policy explains how Wealth Blue Print may use
                cookies and similar technologies to improve your
                experience on our website.
              </p>

              <p className="mt-6 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#11110F]/30">
                LAST UPDATED — OCTOBER 2026
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="cookie-content px-6 pb-24 sm:px-10 lg:px-16 lg:pb-32">
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
              id="what"
              className="cookie-section scroll-mt-32"
            >
              <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#3157C8]">
                WHAT ARE COOKIES?
              </p>

              <h2 className="mt-5 text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[0.95] tracking-[-0.06em]">
                Small files that help websites work better.
              </h2>

              <p className="mt-7 text-[14px] leading-7 text-[#11110F]/60">
                Cookies are small text files that may be stored on your
                device when you visit a website. They can help websites
                remember certain information and understand how visitors
                interact with their pages.
              </p>
            </section>

            <section
              id="use"
              className="cookie-section scroll-mt-32 border-t border-[#11110F]/10 pt-14"
            >
              <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#3157C8]">
                HOW WE USE COOKIES
              </p>

              <h2 className="mt-5 text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[0.95] tracking-[-0.06em]">
                Used to improve your experience.
              </h2>

              <div className="mt-7 space-y-5 text-[14px] leading-7 text-[#11110F]/60">
                <p>
                  Cookies may be used to help the website function
                  correctly, remember preferences, understand website
                  traffic, and improve the overall user experience.
                </p>

                <p>
                  We may also use information generated through cookies
                  to identify technical issues and improve website
                  performance.
                </p>
              </div>
            </section>

            <section
              id="types"
              className="cookie-section scroll-mt-32 border-t border-[#11110F]/10 pt-14"
            >
              <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#3157C8]">
                TYPES OF COOKIES
              </p>

              <h2 className="mt-5 text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[0.95] tracking-[-0.06em]">
                Different cookies serve different purposes.
              </h2>

              <div className="mt-8 space-y-4">
                <div className="rounded-[22px] bg-[#EAF7EF] p-6">
                  <h3 className="text-[17px] font-semibold text-[#123B2A]">
                    Essential Cookies
                  </h3>

                  <p className="mt-3 text-[14px] leading-7 text-[#11110F]/55">
                    These may be required for basic website functionality,
                    security, navigation, and other essential features.
                  </p>
                </div>

                <div className="rounded-[22px] bg-[#EFECE4] p-6">
                  <h3 className="text-[17px] font-semibold text-[#123B2A]">
                    Preference Cookies
                  </h3>

                  <p className="mt-3 text-[14px] leading-7 text-[#11110F]/55">
                    These can help remember choices or preferences so
                    that the website experience can be more convenient.
                  </p>
                </div>

                <div className="rounded-[22px] bg-[#EAF7EF] p-6">
                  <h3 className="text-[17px] font-semibold text-[#123B2A]">
                    Analytics Cookies
                  </h3>

                  <p className="mt-3 text-[14px] leading-7 text-[#11110F]/55">
                    These may help us understand how visitors use the
                    website and identify areas where the experience can
                    be improved.
                  </p>
                </div>
              </div>
            </section>

            <section
              id="third-party"
              className="cookie-section scroll-mt-32 border-t border-[#11110F]/10 pt-14"
            >
              <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#3157C8]">
                THIRD-PARTY SERVICES
              </p>

              <h2 className="mt-5 text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[0.95] tracking-[-0.06em]">
                Some services may set their own cookies.
              </h2>

              <p className="mt-7 text-[14px] leading-7 text-[#11110F]/60">
                Certain third-party services or technologies integrated
                into a website may use their own cookies or similar
                technologies. Their use of information is governed by
                the respective third party's privacy policies.
              </p>
            </section>

            <section
              id="control"
              className="cookie-section scroll-mt-32 border-t border-[#11110F]/10 pt-14"
            >
              <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#3157C8]">
                MANAGING COOKIES
              </p>

              <h2 className="mt-5 text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[0.95] tracking-[-0.06em]">
                You can control cookies through your browser.
              </h2>

              <div className="mt-7 space-y-5 text-[14px] leading-7 text-[#11110F]/60">
                <p>
                  Most modern browsers allow you to view, delete, block,
                  or restrict cookies through their settings.
                </p>

                <p>
                  Disabling certain cookies may affect some website
                  functionality or prevent specific features from
                  working as intended.
                </p>
              </div>
            </section>

            <section
              id="changes"
              className="cookie-section scroll-mt-32 border-t border-[#11110F]/10 pt-14"
            >
              <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#3157C8]">
                POLICY CHANGES
              </p>

              <h2 className="mt-5 text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[0.95] tracking-[-0.06em]">
                This policy may be updated.
              </h2>

              <p className="mt-7 text-[14px] leading-7 text-[#11110F]/60">
                We may update this Cookie Policy from time to time to
                reflect changes in our website, technologies, services,
                or applicable requirements. Any updated version will be
                posted on this page.
              </p>
            </section>

            <section
              id="contact"
              className="cookie-section scroll-mt-32 border-t border-[#11110F]/10 pt-14"
            >
              <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#3157C8]">
                CONTACT US
              </p>

              <h2 className="mt-5 text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[0.95] tracking-[-0.06em]">
                Questions about cookies?
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