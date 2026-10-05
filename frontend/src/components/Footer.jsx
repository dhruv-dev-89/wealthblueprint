import { useEffect, useRef } from "react";

export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    const items = footer.querySelectorAll(".footer-reveal");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          items.forEach((item, index) => {
            item.style.opacity = "1";
            item.style.transform = "translateY(0)";
            item.style.transitionDelay = `${index * 70}ms`;
          });

          observer.disconnect();
        }
      },
      {
        threshold: 0.12,
      }
    );

    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      id="site-footer"
      className="relative overflow-hidden bg-[#0B2A1D] text-white"
    >
      {/* Blueprint Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.09]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Decorative circles */}
      <div className="pointer-events-none absolute -right-24 top-24 h-[340px] w-[340px] rounded-full border border-white/[0.08]" />

      <div className="pointer-events-none absolute -right-5 top-32 h-[230px] w-[230px] rounded-full border border-white/[0.06]" />

      <div className="pointer-events-none absolute bottom-[-160px] left-[42%] h-[400px] w-[400px] rounded-full border border-white/[0.05]" />

      <div className="relative mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
        {/* Small heading */}
        <div className="footer-reveal flex items-center gap-4 opacity-0 translate-y-5">
          <span className="h-px w-8 bg-[#4DBA68]" />

          <span className="text-[9px] font-semibold uppercase tracking-[0.32em] text-white/45">
            WEALTHBLUEPRINT
          </span>

          <span className="h-px w-8 bg-white/10" />
        </div>

        {/* Main footer grid */}
        <div className="mt-12 grid gap-12 lg:grid-cols-[1.45fr_0.8fr_0.8fr_0.8fr] lg:gap-16">
          {/* Brand */}
          <div className="footer-reveal opacity-0 translate-y-5">
            <a
              href="/"
              className="mb-6 inline-flex h-[58px] w-[175px] items-center justify-center overflow-hidden rounded-xl bg-[#F7FBF8]"
            >
              <img
                src="/images/Logo.png"
                alt="WealthBluePrint"
                className="h-[76px] w-auto max-w-none scale-[1.65] object-contain"
              />
            </a>

            <p className="max-w-[330px] text-[13px] leading-7 text-white/45">
              Thoughtful financial planning, practical investment
              guidance, and long-term strategies designed around your
              goals.
            </p>

            <a
              href="mailto:contactus@wealthblueprint.in"
              className="mt-6 inline-block text-[12px] font-semibold text-white/70 transition hover:text-white"
            >
              contactus@wealthblueprint.in
            </a>
          </div>

          {/* Solutions */}
          <div className="footer-reveal opacity-0 translate-y-5">
            <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#C8FF3D]">
              SOLUTIONS
            </p>

            <div className="mt-6 space-y-4">
              <a
                href="/investment-plans"
                className="block text-[13px] text-white/55 transition hover:text-white"
              >
                Investment Planning
              </a>

              <a
                href="/mutual-funds"
                className="block text-[13px] text-white/55 transition hover:text-white"
              >
                Mutual Funds
              </a>

              <a
                href="/sip"
                className="block text-[13px] text-white/55 transition hover:text-white"
              >
                SIP
              </a>

              <a
                href="/insurance"
                className="block text-[13px] text-white/55 transition hover:text-white"
              >
                Insurance
              </a>

              <a
                href="/tax-planning"
                className="block text-[13px] text-white/55 transition hover:text-white"
              >
                Tax Planning
              </a>
            </div>
          </div>

          {/* Company */}
          <div className="footer-reveal opacity-0 translate-y-5">
            <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#C8FF3D]">
              COMPANY
            </p>

            <div className="mt-6 space-y-4">
              <a
                href="/our-story"
                className="block text-[13px] text-white/55 transition hover:text-white"
              >
                Our Story
              </a>

              <a
                href="/careers"
                className="block text-[13px] text-white/55 transition hover:text-white"
              >
                Careers
              </a>

              <a
                href="/blogs"
                className="block text-[13px] text-white/55 transition hover:text-white"
              >
                Insights
              </a>

              <a
                href="/faqs"
                className="block text-[13px] text-white/55 transition hover:text-white"
              >
                FAQs
              </a>

              <a
                href="/contact"
                className="block text-[13px] text-white/55 transition hover:text-white"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Resources */}
          <div className="footer-reveal opacity-0 translate-y-5">
            <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#C8FF3D]">
              RESOURCES
            </p>

            <div className="mt-6 space-y-4">
              <a
                href="/advisor"
                className="block text-[13px] text-white/55 transition hover:text-white"
              >
                Advisor
              </a>

              <a
                href="/calculators"
                className="block text-[13px] text-white/55 transition hover:text-white"
              >
                Financial Calculators
              </a>

              <a
                href="/faqs"
                className="block text-[13px] text-white/55 transition hover:text-white"
              >
                FAQs
              </a>

              <a
                href="/contact"
                className="block text-[13px] text-white/55 transition hover:text-white"
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        
        {/* Bottom */}
        <div className="footer-reveal mt-12 flex flex-col gap-5 border-t border-white/[0.08] pt-6 opacity-0 translate-y-5 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-[10px] text-white/35">
            © 2026 WealthBluePrint. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-5 text-[10px] text-white/35">
            <a
              href="#"
              className="transition hover:text-white"
            >
              LinkedIn
            </a>

            <a
              href="#"
              className="transition hover:text-white"
            >
              Instagram
            </a>

            <a
              href="#"
              className="transition hover:text-white"
            >
              Facebook
            </a>
          </div>

          <div className="flex flex-wrap gap-5 text-[10px] text-white/35">
            <a
              href="/privacy-policy"
              className="transition hover:text-white"
            >
              Privacy
            </a>

            <a
              href="/cookie-policy"
              className="transition hover:text-white"
            >
              Cookie Policy
            </a>

            <a
              href="/disclaimer"
              className="transition hover:text-white"
            >
              Disclaimer
            </a>

            <a
              href="/terms"
              className="transition hover:text-white"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}