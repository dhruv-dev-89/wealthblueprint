import { useEffect } from "react";
import gsap from "gsap";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".privacy-hero-item", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
      });

      gsap.from(".privacy-section", {
        y: 25,
        opacity: 0,
        duration: 0.7,
        stagger: 0.06,
        delay: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".privacy-content",
          start: "top 82%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-[#F7FBF8] text-[#11110F]">
      <Navbar />

      {/* HERO */}
      <section className="px-6 pb-20 pt-12 sm:px-10 lg:px-16 lg:pb-28 lg:pt-16">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid items-end gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="privacy-hero-item mb-8 text-[10px] font-semibold uppercase tracking-[0.34em] text-[#3157C8]">
                LEGAL
              </p>

              <h1 className="privacy-hero-item max-w-[900px] text-[clamp(4rem,8vw,8.5rem)] font-medium leading-[0.84] tracking-[-0.09em]">
                Privacy
                <br />
                <span className="text-[#3157C8]">Policy.</span>
              </h1>
            </div>

            <div className="privacy-hero-item border-t border-[#11110F]/10 pt-7">
              <p className="max-w-[430px] text-[15px] leading-7 text-[#11110F]/55">
                Your privacy matters to us. This policy explains how
                Wealth Blue Print collects, uses, and protects information
                when you use our website and services.
              </p>

              <p className="mt-6 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#11110F]/30">
                LAST UPDATED — OCTOBER 2026
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="privacy-content px-6 pb-24 sm:px-10 lg:px-16 lg:pb-32">
        <div className="mx-auto grid max-w-[1280px] gap-16 lg:grid-cols-[0.3fr_0.7fr] lg:gap-24">

          {/* SIDEBAR */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 border-t border-[#11110F]/10 pt-5">
              <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#3157C8]">
                ON THIS PAGE
              </p>

              <nav className="mt-6 space-y-3 text-[12px] text-[#11110F]/45">
                <a href="#information" className="block hover:text-[#123B2A]">
                  Information We Collect
                </a>

                <a href="#usage" className="block hover:text-[#123B2A]">
                  How We Use Information
                </a>

                <a href="#sharing" className="block hover:text-[#123B2A]">
                  Information Sharing
                </a>

                <a href="#security" className="block hover:text-[#123B2A]">
                  Data Security
                </a>

                <a href="#cookies" className="block hover:text-[#123B2A]">
                  Cookies
                </a>

                <a href="#rights" className="block hover:text-[#123B2A]">
                  Your Rights
                </a>

                <a href="#contact" className="block hover:text-[#123B2A]">
                  Contact Us
                </a>
              </nav>
            </div>
          </aside>

          {/* MAIN */}
          <main className="max-w-[820px] space-y-14">

            <section id="information" className="privacy-section">
              <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#3157C8]">
                01 — INFORMATION WE COLLECT
              </p>

              <h2 className="mt-5 text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[0.95] tracking-[-0.06em]">
                Information you choose to share.
              </h2>

              <div className="mt-7 space-y-5 text-[14px] leading-7 text-[#11110F]/60">
                <p>
                  When you contact us, request information, book a
                  consultation, or use our services, we may collect
                  information that you voluntarily provide.
                </p>

                <p>
                  This may include your name, email address, phone number,
                  location, financial preferences, and other information
                  necessary to respond to your enquiry or provide a
                  requested service.
                </p>

                <p>
                  We may also collect limited technical information such
                  as browser type, device information, IP address, and
                  website usage information.
                </p>
              </div>
            </section>

            <section id="usage" className="privacy-section border-t border-[#11110F]/10 pt-14">
              <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#3157C8]">
                02 — HOW WE USE INFORMATION
              </p>

              <h2 className="mt-5 text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[0.95] tracking-[-0.06em]">
                Information should have a purpose.
              </h2>

              <div className="mt-7 space-y-5 text-[14px] leading-7 text-[#11110F]/60">
                <p>
                  We may use the information we collect to respond to
                  enquiries, provide requested services, arrange
                  consultations, communicate with you, improve our
                  website, and maintain the security of our services.
                </p>

                <p>
                  We may also use information where necessary to comply
                  with applicable legal or regulatory requirements.
                </p>
              </div>
            </section>

            <section id="sharing" className="privacy-section border-t border-[#11110F]/10 pt-14">
              <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#3157C8]">
                03 — INFORMATION SHARING
              </p>

              <h2 className="mt-5 text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[0.95] tracking-[-0.06em]">
                We don't sell your personal information.
              </h2>

              <div className="mt-7 space-y-5 text-[14px] leading-7 text-[#11110F]/60">
                <p>
                  We do not sell or rent your personal information to
                  third parties.
                </p>

                <p>
                  Information may be shared with trusted service
                  providers or professional partners where reasonably
                  necessary to operate our website, respond to your
                  requests, provide services, or meet legal obligations.
                </p>
              </div>
            </section>

            <section id="security" className="privacy-section border-t border-[#11110F]/10 pt-14">
              <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#3157C8]">
                04 — DATA SECURITY
              </p>

              <h2 className="mt-5 text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[0.95] tracking-[-0.06em]">
                Protecting the information you trust us with.
              </h2>

              <div className="mt-7 space-y-5 text-[14px] leading-7 text-[#11110F]/60">
                <p>
                  We take reasonable administrative, technical, and
                  organizational measures to protect personal information
                  from unauthorized access, misuse, alteration, or
                  disclosure.
                </p>

                <p>
                  However, no method of transmission or electronic
                  storage can be guaranteed to be completely secure.
                </p>
              </div>
            </section>

            <section id="cookies" className="privacy-section border-t border-[#11110F]/10 pt-14">
              <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#3157C8]">
                05 — COOKIES
              </p>

              <h2 className="mt-5 text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[0.95] tracking-[-0.06em]">
                A better understanding of how the site is used.
              </h2>

              <div className="mt-7 space-y-5 text-[14px] leading-7 text-[#11110F]/60">
                <p>
                  Our website may use cookies or similar technologies to
                  support functionality, understand website usage, and
                  improve the user experience.
                </p>

                <p>
                  You can control or disable cookies through your browser
                  settings. Some website functionality may be affected
                  if cookies are disabled.
                </p>
              </div>
            </section>

            <section id="rights" className="privacy-section border-t border-[#11110F]/10 pt-14">
              <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#3157C8]">
                06 — YOUR RIGHTS
              </p>

              <h2 className="mt-5 text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[0.95] tracking-[-0.06em]">
                You have control over your information.
              </h2>

              <div className="mt-7 space-y-5 text-[14px] leading-7 text-[#11110F]/60">
                <p>
                  Depending on applicable law, you may have rights to
                  access, correct, update, or request deletion of certain
                  personal information held by us.
                </p>

                <p>
                  To make a privacy-related request, please contact us
                  using the details below.
                </p>
              </div>
            </section>

            <section id="contact" className="privacy-section border-t border-[#11110F]/10 pt-14">
              <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#3157C8]">
                07 — CONTACT US
              </p>

              <h2 className="mt-5 text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[0.95] tracking-[-0.06em]">
                Questions about privacy?
              </h2>

              <div className="mt-7 text-[14px] leading-7 text-[#11110F]/60">
                <p>
                  If you have questions about this Privacy Policy or
                  how your information is handled, contact us:
                </p>

                <div className="mt-7 rounded-[24px] bg-[#EAF7EF] p-7">
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

                  <p className="mt-2">
                    Noida, Uttar Pradesh, India
                  </p>
                </div>
              </div>
            </section>

          </main>
        </div>
      </section>

      <Footer />
    </div>
  );
}