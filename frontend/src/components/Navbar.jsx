import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

const navItems = [
  {
    label: "Solutions",
    items: [
      { label: "Investment Planning", href: "/investment-plans" },
      { label: "Mutual Funds", href: "/mutual-funds" },
      { label: "SIP", href: "/sip" },
      { label: "Insurance", href: "/insurance" },
      { label: "Tax Planning", href: "/tax-planning" },
    ],
  },
  {
    label: "Planning",
    items: [
      { label: "Financial Planning", href: "/financial-planning" },
      { label: "Retirement Planning", href: "/retirement-planning" },
      { label: "Child Planning", href: "/child-planning" },
      { label: "Education Planning", href: "/education-planning" },
    ],
  },
  {
    label: "Insights",
    items: [
      { label: "Blogs", href: "/blogs" },
      { label: "Calculators", href: "/calculators" },
      { label: "FAQs", href: "/faqs" },
    ],
  },
  {
    label: "About",
    items: [
      { label: "Our Story", href: "/our-story" },
      { label: "Careers", href: "/careers" },
    ],
  },
];

const Navbar = () => {
  const navRef = useRef(null);
  const navInnerRef = useRef(null);
  const shadowRef = useRef(null);

  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const nav = navRef.current;
    const inner = navInnerRef.current;
    const shadow = shadowRef.current;

    if (!nav || !inner) return;

    const ctx = gsap.context(() => {
      gsap.set(nav, {
        y: 0,
        opacity: 1,
      });

      gsap.set(inner, {
        y: 0,
        rotateX: 0,
        scale: 1,
      });

      // ==========================================
      // SCROLL 3D EFFECT
      // ==========================================

      const handleScroll = () => {
        const scrollY = window.scrollY;

        const progress = gsap.utils.clamp(
          0,
          1,
          scrollY / 180
        );

        gsap.to(inner, {
          y: -2 * progress,
          rotateX: 1.8 * progress,
          scale: 1 - 0.018 * progress,
          duration: 0.35,
          ease: "power3.out",
          overwrite: true,
        });

        if (shadow) {
          gsap.to(shadow, {
            opacity: 0.18 + progress * 0.12,
            scale: 1 + progress * 0.015,
            duration: 0.35,
            ease: "power3.out",
            overwrite: true,
          });
        }

        nav.classList.toggle(
          "nav-scrolled",
          scrollY > 24
        );
      };

      window.addEventListener(
        "scroll",
        handleScroll,
        { passive: true }
      );

      handleScroll();

      // ==========================================
      // HIDE NAVBAR WHEN FOOTER APPEARS
      // ==========================================

      const footer =
        document.getElementById("site-footer");

      let footerObserver = null;

      if (footer) {
        footerObserver =
          new IntersectionObserver(
            ([entry]) => {
              if (entry.isIntersecting) {
                // Footer visible
                gsap.to(nav, {
                  y: -120,
                  opacity: 0,
                  duration: 0.45,
                  ease: "power3.inOut",
                  overwrite: true,
                });

                setOpenMenu(null);
                setMobileOpen(false);
              } else {
                // Footer not visible
                gsap.to(nav, {
                  y: 0,
                  opacity: 1,
                  duration: 0.45,
                  ease: "power3.inOut",
                  overwrite: true,
                });
              }
            },
            {
              root: null,
              rootMargin: "0px 0px -80px 0px",
              threshold: 0,
            }
          );

        footerObserver.observe(footer);
      }

      return () => {
        window.removeEventListener(
          "scroll",
          handleScroll
        );

        if (footerObserver) {
          footerObserver.disconnect();
        }
      };
    }, navRef);

    return () => ctx.revert();
  }, []);

  // ==========================================
  // CLOSE DROPDOWN OUTSIDE NAV
  // ==========================================

  useEffect(() => {
    const close = (event) => {
      if (!navRef.current?.contains(event.target)) {
        setOpenMenu(null);
      }
    };

    document.addEventListener(
      "mousedown",
      close
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        close
      );
    };
  }, []);

  const toggleMenu = (label) => {
    setOpenMenu((current) =>
      current === label ? null : label
    );
  };

  return (
    <>
      {/* =====================================================
          MAIN NAVBAR
      ====================================================== */}

      <header
        ref={navRef}
        className="
          fixed
          left-0
          right-0
          top-0
          z-[100]
          px-4
          pt-4
          sm:px-6
          lg:px-8
        "
        style={{
          perspective: "1400px",
        }}
      >
        {/* ==========================================
            SOFT SHADOW
        =========================================== */}

        <div
          ref={shadowRef}
          className="
            pointer-events-none
            absolute
            left-1/2
            top-[76px]
            h-12
            w-[82%]
            -translate-x-1/2
            rounded-full
            bg-[#123B2A]
            opacity-[0.16]
            blur-2xl
          "
        />

        {/* ==========================================
            NAV INNER
        =========================================== */}

        <div
          ref={navInnerRef}
          className="
            nav-inner
            relative
            mx-auto
            flex
            h-[72px]
            max-w-[1440px]
            items-center
            justify-between
            rounded-[22px]
            border
            border-[#DCE8DF]
            bg-[#F7FBF8]/[0.78]
            px-3
            shadow-[0_12px_40px_rgba(18,59,42,0.06)]
            backdrop-blur-[18px]
            transition-[background-color,border-color,box-shadow]
            duration-500
          "
          style={{
            transformStyle: "preserve-3d",
            transformOrigin: "center top",
          }}
        >
          {/* ==========================================
              BIGGER LOGO
          =========================================== */}

          <a
            href="/"
            className="
              relative
              z-10
              flex
              h-[70px]
              w-[215px]
              items-center
              overflow-hidden
              rounded-xl
            "
          >
            <img
              src="/images/Logo.png"
              alt="WealthBluePrint"
              className="
                h-[90px]
                w-auto
                max-w-none
                scale-[1.18]
                object-contain
              "
            />
          </a>

          {/* ==========================================
              DESKTOP NAV
          =========================================== */}

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const isOpen =
                openMenu === item.label;

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() =>
                    setOpenMenu(item.label)
                  }
                  onMouseLeave={() =>
                    setOpenMenu(null)
                  }
                >
                  {/* NAV BUTTON */}

                  <button
                    type="button"
                    onClick={() =>
                      toggleMenu(item.label)
                    }
                    className={`
                      group
                      flex
                      h-[48px]
                      items-center
                      gap-2
                      rounded-full
                      px-5
                      text-[13px]
                      font-medium
                      tracking-[-0.01em]
                      transition-all
                      duration-300

                      ${
                        isOpen
                          ? `
                            bg-white
                            text-[#123B2A]
                            shadow-[0_8px_24px_rgba(18,59,42,0.08)]
                          `
                          : `
                            text-[#17201B]/70
                            hover:bg-white/75
                            hover:text-[#123B2A]
                          `
                      }
                    `}
                  >
                    {item.label}

                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      className={`
                        transition-transform
                        duration-300
                        ${
                          isOpen
                            ? "rotate-180"
                            : ""
                        }
                      `}
                    >
                      <path
                        d="M3 4.5L6 7.5L9 4.5"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  {/* ======================================
                      DROPDOWN
                  ======================================= */}

                  <div
                    className={`
                      absolute
                      left-1/2
                      top-[50px]
                      w-[250px]
                      -translate-x-1/2
                      origin-top
                      transition-all
                      duration-300

                      ${
                        isOpen
                          ? `
                            pointer-events-auto
                            translate-y-0
                            scale-100
                            opacity-100
                          `
                          : `
                            pointer-events-none
                            -translate-y-2
                            scale-[0.97]
                            opacity-0
                          `
                      }
                    `}
                  >
                    <div
                      className="
                        overflow-hidden
                        rounded-[20px]
                        border
                        border-[#DCE8DF]
                        bg-[#F7FBF8]/95
                        p-2
                        shadow-[0_24px_60px_rgba(18,59,42,0.14)]
                        backdrop-blur-xl
                      "
                    >
                      {item.items.map(
                        (subItem) => (
                          <a
                            key={subItem.label}
                            href={subItem.href}
                            className="
                              group
                              flex
                              items-center
                              justify-between
                              rounded-[14px]
                              px-4
                              py-3
                              text-[13px]
                              text-[#17201B]/70
                              transition-all
                              duration-200
                              hover:bg-white
                              hover:text-[#123B2A]
                            "
                          >
                            <span>
                              {subItem.label}
                            </span>

                            <span
                              className="
                                translate-x-[-4px]
                                opacity-0
                                transition-all
                                duration-200
                                group-hover:translate-x-0
                                group-hover:opacity-100
                              "
                            >
                              ↗
                            </span>
                          </a>
                        )
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </nav>

          {/* ==========================================
              LET'S TALK
          =========================================== */}

          <Link
            to="/contact"
            className="
              hidden
              h-[48px]
              items-center
              gap-2
              rounded-full
              bg-[#123B2A]
              px-6
              text-[13px]
              font-semibold
              text-white
              shadow-[0_8px_24px_rgba(18,59,42,0.16)]
              transition-all
              duration-300
              hover:-translate-y-[1px]
              hover:bg-[#0D3022]
              hover:shadow-[0_12px_30px_rgba(18,59,42,0.22)]
              lg:flex
            "
          >
            Let's Talk

            <span className="text-[14px]">
              ↗
            </span>
          </Link>

          {/* ==========================================
              MOBILE MENU BUTTON
          =========================================== */}

          <button
            type="button"
            onClick={() =>
              setMobileOpen(!mobileOpen)
            }
            aria-label="Toggle navigation"
            className="
              flex
              h-[48px]
              w-[48px]
              items-center
              justify-center
              rounded-full
              bg-white
              text-[#123B2A]
              shadow-sm
              lg:hidden
            "
          >
            <div className="flex w-[18px] flex-col gap-[5px]">
              <span
                className={`
                  h-[1.5px]
                  w-full
                  bg-current
                  transition-transform
                  duration-300
                  ${
                    mobileOpen
                      ? "translate-y-[3.25px] rotate-45"
                      : ""
                  }
                `}
              />

              <span
                className={`
                  h-[1.5px]
                  w-full
                  bg-current
                  transition-opacity
                  duration-300
                  ${
                    mobileOpen
                      ? "opacity-0"
                      : ""
                  }
                `}
              />

              <span
                className={`
                  h-[1.5px]
                  w-full
                  bg-current
                  transition-transform
                  duration-300
                  ${
                    mobileOpen
                      ? "-translate-y-[3.25px] -rotate-45"
                      : ""
                  }
                `}
              />
            </div>
          </button>
        </div>

        {/* ==========================================
            MOBILE MENU
        =========================================== */}

        <div
          className={`
            mx-auto
            mt-3
            max-w-[1440px]
            overflow-hidden
            rounded-[22px]
            border
            border-[#DCE8DF]
            bg-[#F7FBF8]/95
            shadow-[0_24px_60px_rgba(18,59,42,0.12)]
            backdrop-blur-xl
            transition-all
            duration-500
            lg:hidden

            ${
              mobileOpen
                ? `
                  max-h-[700px]
                  translate-y-0
                  opacity-100
                `
                : `
                  pointer-events-none
                  max-h-0
                  -translate-y-3
                  opacity-0
                `
            }
          `}
        >
          <div className="p-3">
            {navItems.map((item) => {
              const isOpen =
                openMenu === item.label;

              return (
                <div
                  key={item.label}
                  className="
                    border-b
                    border-[#DCE8DF]
                    last:border-0
                  "
                >
                  <button
                    type="button"
                    onClick={() =>
                      toggleMenu(item.label)
                    }
                    className="
                      flex
                      w-full
                      items-center
                      justify-between
                      px-4
                      py-4
                      text-left
                      text-[14px]
                      font-medium
                      text-[#123B2A]
                    "
                  >
                    {item.label}

                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 13 13"
                      fill="none"
                      className={`
                        transition-transform
                        duration-300
                        ${
                          isOpen
                            ? "rotate-180"
                            : ""
                        }
                      `}
                    >
                      <path
                        d="M3.2 4.8L6.5 8L9.8 4.8"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  <div
                    className={`
                      grid
                      transition-all
                      duration-300

                      ${
                        isOpen
                          ? `
                            grid-rows-[1fr]
                            opacity-100
                          `
                          : `
                            grid-rows-[0fr]
                            opacity-0
                          `
                      }
                    `}
                  >
                    <div className="overflow-hidden">
                      <div className="pb-3 pl-4 pr-2">
                        {item.items.map(
                          (subItem) => (
                            <a
                              key={subItem.label}
                              href={subItem.href}
                              className="
                                flex
                                items-center
                                justify-between
                                rounded-xl
                                px-3
                                py-3
                                text-[13px]
                                text-[#17201B]/65
                                hover:bg-white
                                hover:text-[#123B2A]
                              "
                            >
                              {subItem.label}

                              <span>↗</span>
                            </a>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* MOBILE CTA */}

            <a
              href="/contact"
              className="
                mt-3
                flex
                h-[50px]
                items-center
                justify-center
                rounded-full
                bg-[#123B2A]
                text-[13px]
                font-semibold
                text-white
              "
            >
              Let's Talk ↗
            </a>
          </div>
        </div>
      </header>

      {/* =====================================================
          3D GLASS CSS
      ====================================================== */}

      <style>{`
        .nav-inner {
          isolation: isolate;
        }

        .nav-inner::before {
          content: "";
          position: absolute;
          inset: 1px;
          border-radius: 21px;
          pointer-events: none;

          background:
            linear-gradient(
              135deg,
              rgba(255,255,255,0.62),
              rgba(255,255,255,0.12) 48%,
              rgba(255,255,255,0.28)
            );

          opacity: 0.7;
          z-index: -1;
        }

        .nav-inner::after {
          content: "";
          position: absolute;
          left: 8%;
          right: 8%;
          bottom: -10px;
          height: 18px;

          border-radius: 999px;

          background: rgba(18,59,42,0.08);

          filter: blur(14px);

          z-index: -2;

          pointer-events: none;
        }

        .nav-scrolled .nav-inner {
          border-color: rgba(220,232,223,0.92);

          background: rgba(247,251,248,0.68);

          box-shadow:
            0 18px 50px rgba(18,59,42,0.10),
            0 4px 14px rgba(18,59,42,0.05),
            inset 0 1px 0 rgba(255,255,255,0.85);
        }

        @media (max-width: 1023px) {
          .nav-inner::after {
            bottom: -8px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .nav-inner {
            transform: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;