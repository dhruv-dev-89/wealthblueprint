import React from "react";

const Footer = () => {
  return (
    <footer id="site-footer" className="relative overflow-hidden bg-[#0B2A1D] text-white">
      {/* Blueprint background */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.12]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
            `,
            backgroundSize: "14px 14px",
          }}
        />
      </div>

      {/* Decorative blueprint elements */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full border border-white/10" />
      <div className="pointer-events-none absolute -right-16 -top-16 h-[280px] w-[280px] rounded-full border border-white/[0.07]" />

      <div className="pointer-events-none absolute bottom-20 left-[42%] h-2 w-2 rounded-full bg-[#16A34A]" />
      <div className="pointer-events-none absolute left-[58%] top-32 h-1.5 w-1.5 rounded-full bg-white/30" />
      <div className="pointer-events-none absolute bottom-28 right-[18%] h-1.5 w-1.5 rounded-full bg-[#16A34A]/70" />

      {/* Main footer */}
      <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-14 sm:px-10 lg:px-16">
        {/* Top brand label */}
        <div className="mb-12 flex items-center gap-4">
          <span className="h-px w-8 bg-[#16A34A]" />

          <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/55">
            WealthBluePrint
          </span>

          <span className="h-px w-8 bg-white/15" />
        </div>

        {/* Footer grid */}
        <div className="grid gap-12 lg:grid-cols-[1.5fr_0.8fr_0.8fr_1.2fr] lg:gap-16">
          {/* Brand */}
          <div>
            {/* Logo */}
            <a
              href="/"
              className="mb-6 inline-flex h-[60px] w-[120px] items-center justify-center overflow-hidden rounded-xl bg-[#F7FBF8]"
            >
              <img
                src="/images/Logo.png"
                alt="WealthBluePrint"
                className="h-[76px] w-auto max-w-none scale-[1.65] object-contain"
              />
            </a>

            <p className="max-w-[350px] text-[14px] leading-7 text-white/55">
              Thoughtful financial planning, practical investment guidance,
              and long-term strategies designed around your goals.
            </p>

            <a
              href="mailto:contactus@wealthblueprint.in"
              className="mt-5 inline-block text-[13px] font-medium text-white/75 transition-colors duration-300 hover:text-[#16A34A]"
            >
              contactus@wealthblueprint.in
            </a>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">
              Solutions
            </h3>

            <ul className="space-y-3">
              <li>
                <a
                  href="/investment-plans"
                  className="text-[14px] text-white/65 transition-colors duration-300 hover:text-white"
                >
                  Investment Planning
                </a>
              </li>

              <li>
                <a
                  href="/mutual-funds"
                  className="text-[14px] text-white/65 transition-colors duration-300 hover:text-white"
                >
                  Mutual Funds
                </a>
              </li>

              <li>
                <a
                  href="/sip"
                  className="text-[14px] text-white/65 transition-colors duration-300 hover:text-white"
                >
                  SIP
                </a>
              </li>

              <li>
                <a
                  href="/insurance"
                  className="text-[14px] text-white/65 transition-colors duration-300 hover:text-white"
                >
                  Insurance
                </a>
              </li>

              <li>
                <a
                  href="/tax-planning"
                  className="text-[14px] text-white/65 transition-colors duration-300 hover:text-white"
                >
                  Tax Planning
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">
              Company
            </h3>

            <ul className="space-y-3">
              <li>
                <a
                  href="/our-story"
                  className="text-[14px] text-white/65 transition-colors duration-300 hover:text-white"
                >
                  Our Story
                </a>
              </li>

              <li>
                <a
                  href="/careers"
                  className="text-[14px] text-white/65 transition-colors duration-300 hover:text-white"
                >
                  Careers
                </a>
              </li>

              <li>
                <a
                  href="/blogs"
                  className="text-[14px] text-white/65 transition-colors duration-300 hover:text-white"
                >
                  Insights
                </a>
              </li>

              <li>
                <a
                  href="/faqs"
                  className="text-[14px] text-white/65 transition-colors duration-300 hover:text-white"
                >
                  FAQs
                </a>
              </li>

              <li>
                <a
                  href="/contact"
                  className="text-[14px] text-white/65 transition-colors duration-300 hover:text-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Statement */}
          <div className="lg:pl-6">
            <div className="border-l border-white/10 pl-6">
              <p className="max-w-[300px] text-[20px] font-medium leading-[1.45] tracking-[-0.02em] text-white/85">
                Thoughtful planning today for a more confident tomorrow.
              </p>

              <div className="mt-7 flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#16A34A]/30 text-[#16A34A]">
                  ↗
                </span>

                <a
                  href="/contact"
                  className="text-[13px] font-medium text-white/65 transition-colors duration-300 hover:text-white"
                >
                  Start a conversation
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-14 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            {/* Copyright */}
            <p className="text-[12px] text-white/35">
              © {new Date().getFullYear()} WealthBluePrint. All rights reserved.
            </p>

            {/* Social */}
            <div className="flex items-center gap-5">
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-[12px] text-white/40 transition-colors duration-300 hover:text-white"
              >
                LinkedIn
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="text-[12px] text-white/40 transition-colors duration-300 hover:text-white"
              >
                Instagram
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="text-[12px] text-white/40 transition-colors duration-300 hover:text-white"
              >
                Facebook
              </a>
            </div>

            {/* Legal */}
            <div className="flex items-center gap-5">
              <a
                href="/privacy-policy.html"
                className="text-[12px] text-white/35 transition-colors duration-300 hover:text-white"
              >
                Privacy
              </a>

              <a
                href="/terms.html"
                className="text-[12px] text-white/35 transition-colors duration-300 hover:text-white"
              >
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;