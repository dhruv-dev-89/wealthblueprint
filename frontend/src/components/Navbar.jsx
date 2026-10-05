import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

/* =========================================================
   NAVIGATION DATA
========================================================= */

const navItems = [
  {
    label: "Solutions",
    type: "standard",
    items: [
      {
        label: "Investment Planning",
        href: "/investment-plans",
      },
      {
        label: "Mutual Funds",
        href: "/mutual-funds",
      },
      {
        label: "SIP",
        href: "/sip",
      },
      {
        label: "Insurance",
        href: "/insurance",
      },
      {
        label: "Tax Planning",
        href: "/tax-planning",
      },
    ],
  },

  {
    label: "Planning",
    type: "standard",
    items: [
      {
        label: "Financial Planning",
        href: "/financial-planning",
      },
      {
        label: "Retirement Planning",
        href: "/retirement-planning",
      },
      {
        label: "Child Planning",
        href: "/child-planning",
      },
      {
        label: "Education Planning",
        href: "/education-planning",
      },
    ],
  },

  {
    label: "Policy & Claims",
    type: "policyClaims",
    sections: [
      {
        title: "Policy",
        items: [
          {
            label: "Renew Policy",
            href: "/renew-policy",
          },
          {
            label: "Check Status",
            href: "/check-status",
          },
        ],
      },
      {
        title: "Claims",
        items: [
          {
            label: "File a Claim",
            href: "/file-claim",
          },
          {
            label: "Track Claim",
            href: "/track-claim",
          },
        ],
      },
    ],
  },

  {
    label: "Insights",
    type: "standard",
    items: [
      {
        label: "Blogs",
        href: "/blogs",
      },
      {
        label: "Calculators",
        href: "/calculators",
      },
      {
        label: "FAQs",
        href: "/faqs",
      },
    ],
  },

  {
    label: "About",
    type: "standard",
    items: [
      {
        label: "Our Story",
        href: "/our-story",
      },
      {
        label: "Advisor",
        href: "/advisor",
      },
      {
        label: "Careers",
        href: "/careers",
      },
    ],
  },
];

/* =========================================================
   ICONS
========================================================= */

function ArrowIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      className={`h-3.5 w-3.5 ${className}`}
      aria-hidden="true"
    >
      <path
        d="M3.5 12.5L12.5 3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      <path
        d="M6 3.5H12.5V10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronIcon({ open = false }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      className={`
        h-3.5
        w-3.5
        transition-transform
        duration-300
        ${open ? "rotate-180" : ""}
      `}
      aria-hidden="true"
    >
      <path
        d="M4 6L8 10L12 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* =========================================================
   DROPDOWN SECTION LABEL
========================================================= */

function SectionLabel({ children }) {
  return (
    <p
      className="
        mb-3
        px-3
        text-[9px]
        font-medium
        uppercase
        tracking-[0.2em]
        text-[#11110F]/35
      "
    >
      {children}
    </p>
  );
}

/* =========================================================
   DROPDOWN LINK
========================================================= */

function MenuLink({ item, onClick }) {
  return (
    <Link
      to={item.href}
      onClick={onClick}
      className="
        group
        flex
        min-h-[42px]
        items-center
        justify-between
        rounded-xl
        px-3
        text-[12px]
        font-medium
        text-[#123B2A]/70
        transition-all
        duration-200
        hover:bg-white
        hover:text-[#123B2A]
      "
    >
      <span>{item.label}</span>

      <ArrowIcon
        className="
          translate-x-[-4px]
          text-[#3157C8]
          opacity-0
          transition-all
          duration-200
          group-hover:translate-x-0
          group-hover:opacity-100
        "
      />
    </Link>
  );
}

/* =========================================================
   POLICY & CLAIMS DROPDOWN
========================================================= */

function PolicyClaimsMenu({ sections, onClose }) {
  return (
    <div
      className="
        absolute
        left-1/2
        top-[calc(100%+12px)]
        z-[100]
        w-[430px]
        -translate-x-1/2
      "
    >
      <div
        className="
          overflow-hidden
          rounded-[24px]
          border
          border-[#DCE8DF]
          bg-[#F8FBF8]/[0.97]
          p-3
          shadow-[0_25px_80px_rgba(18,59,42,0.14)]
          backdrop-blur-2xl
        "
      >
        <div className="grid grid-cols-2 gap-2">
          {sections.map((section) => (
            <div
              key={section.title}
              className="
                rounded-[18px]
                bg-white/75
                p-3
                sm:p-4
              "
            >
              <SectionLabel>
                {section.title}
              </SectionLabel>

              <div className="space-y-0.5">
                {section.items.map((item) => (
                  <MenuLink
                    key={item.href}
                    item={item}
                    onClick={onClose}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          className="
            mt-2
            flex
            items-center
            justify-between
            border-t
            border-[#123B2A]/[0.08]
            px-4
            py-3
          "
        >
          <span
            className="
              text-[8px]
              font-medium
              uppercase
              tracking-[0.22em]
              text-[#11110F]/25
            "
          >
            POLICY · CLAIMS
          </span>

          <Link
            to="/contact"
            onClick={onClose}
            className="
              text-[11px]
              font-semibold
              text-[#3157C8]
              transition-colors
              hover:text-[#123B2A]
            "
          >
            Need help? →
          </Link>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   STANDARD DROPDOWN
========================================================= */

function StandardDropdown({ items, onClose }) {
  return (
    <div
      className="
        absolute
        left-1/2
        top-[calc(100%+12px)]
        z-[100]
        w-[245px]
        -translate-x-1/2
      "
    >
      <div
        className="
          overflow-hidden
          rounded-[22px]
          border
          border-[#DCE8DF]
          bg-[#F8FBF8]/[0.97]
          p-3
          shadow-[0_25px_70px_rgba(18,59,42,0.13)]
          backdrop-blur-2xl
        "
      >
        <div className="space-y-0.5">
          {items.map((item) => (
            <MenuLink
              key={item.href}
              item={item}
              onClick={onClose}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   NAVBAR
========================================================= */

export default function Navbar() {
  const location = useLocation();

  const menuRef = useRef(null);

  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);

  /* =======================================================
     CLOSE WHEN ROUTE CHANGES
  ======================================================= */

  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
  }, [location.pathname]);

  /* =======================================================
     SCROLL STATE
  ======================================================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  /* =======================================================
     FOOTER VISIBILITY
  ======================================================= */

  useEffect(() => {
    const footer =
      document.getElementById("site-footer");

    if (!footer) {
      setFooterVisible(false);
      return;
    }

    const observer =
      new IntersectionObserver(
        ([entry]) => {
          setFooterVisible(
            entry.isIntersecting
          );
        },
        {
          threshold: 0.05,
        }
      );

    observer.observe(footer);

    return () => {
      observer.disconnect();
    };
  }, [location.pathname]);

  /* =======================================================
     OUTSIDE CLICK
  ======================================================= */

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (!menuRef.current) return;

      if (
        !menuRef.current.contains(
          event.target
        )
      ) {
        setOpenMenu(null);
      }
    };

    document.addEventListener(
      "pointerdown",
      handlePointerDown
    );

    return () => {
      document.removeEventListener(
        "pointerdown",
        handlePointerDown
      );
    };
  }, []);

  /* =======================================================
     ESCAPE
  ======================================================= */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, []);

  /* =======================================================
     MOBILE BODY LOCK
  ======================================================= */

  useEffect(() => {
    document.body.style.overflow =
      mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  /* =======================================================
     MENU TOGGLE
  ======================================================= */

  const toggleMenu = (label) => {
    setOpenMenu((current) =>
      current === label
        ? null
        : label
    );
  };

  /* =======================================================
     CLOSE EVERYTHING
  ======================================================= */

  const closeAll = () => {
    setOpenMenu(null);
    setMobileOpen(false);
  };

  return (
    <>
      {/* ==================================================
          DESKTOP NAVBAR
      ================================================== */}

      <header
        className={`
          fixed
          left-0
          right-0
          top-0
          z-[90]
          px-4
          transition-all
          duration-500
          sm:px-6
          lg:px-8

          ${
            footerVisible
              ? `
                pointer-events-none
                -translate-y-[130%]
                opacity-0
              `
              : `
                translate-y-0
                opacity-100
              `
          }
        `}
      >
        <div
          ref={menuRef}
          className={`
            mx-auto
            mt-3
            max-w-[1440px]
            rounded-[24px]
            border
            transition-all
            duration-500

            ${
              scrolled
                ? `
                  border-[#DCE8DF]
                  bg-[#F8FBF8]/90
                  shadow-[0_15px_50px_rgba(18,59,42,0.08)]
                  backdrop-blur-xl
                `
                : `
                  border-[#DCE8DF]/80
                  bg-[#F8FBF8]/85
                  shadow-[0_10px_40px_rgba(18,59,42,0.05)]
                  backdrop-blur-xl
                `
            }
          `}
        >
          <div
            className="
              flex
              h-[72px]
              items-center
              justify-between
              px-3
              sm:px-4
            "
          >
            {/* ==========================================
                LOGO
            =========================================== */}

            <Link
              to="/"
              onClick={closeAll}
              aria-label="WealthBluePrint Home"
              className="
                relative
                z-10
                flex
                h-[62px]
                w-[190px]
                shrink-0
                items-center
                overflow-hidden
                rounded-xl
              "
            >
              <img
                src="/images/Logo.png"
                alt="WealthBluePrint"
                className="
                  h-[96px]
                  w-auto
                  max-w-none
                  scale-[1.22]
                  object-contain
                "
              />
            </Link>

            {/* ==========================================
                DESKTOP MENU
            =========================================== */}

            <nav
              className="
                hidden
                items-center
                gap-0.5
                lg:flex
              "
            >
              {navItems.map((item) => {
                const isOpen =
                  openMenu === item.label;

                return (
                  <div
                    key={item.label}
                    className="relative"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        toggleMenu(
                          item.label
                        )
                      }
                      aria-expanded={isOpen}
                      className={`
                        flex
                        h-[52px]
                        items-center
                        gap-1.5
                        rounded-full
                        px-4
                        text-[12px]
                        font-medium
                        transition-all
                        duration-300

                        ${
                          isOpen
                            ? `
                              bg-white
                              text-[#123B2A]
                              shadow-[0_5px_20px_rgba(18,59,42,0.06)]
                            `
                            : `
                              text-[#11110F]/60
                              hover:bg-white/75
                              hover:text-[#123B2A]
                            `
                        }
                      `}
                    >
                      <span>
                        {item.label}
                      </span>

                      <ChevronIcon
                        open={isOpen}
                      />
                    </button>

                    {/* STANDARD */}

                    {isOpen &&
                      item.type ===
                        "standard" &&
                      item.items && (
                        <StandardDropdown
                          items={
                            item.items
                          }
                          onClose={
                            closeAll
                          }
                        />
                      )}

                    {/* POLICY & CLAIMS */}

                    {isOpen &&
                      item.type ===
                        "policyClaims" && (
                        <PolicyClaimsMenu
                          sections={
                            item.sections
                          }
                          onClose={
                            closeAll
                          }
                        />
                      )}
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
                h-[52px]
                items-center
                gap-3
                rounded-full
                bg-[#123B2A]
                px-5
                text-[12px]
                font-semibold
                text-white
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#0D3022]
                lg:flex
              "
            >
              Let's Talk

              <ArrowIcon />
            </Link>

            {/* ==========================================
                MOBILE BUTTON
            =========================================== */}

            <button
              type="button"
              onClick={() =>
                setMobileOpen(true)
              }
              aria-label="Open navigation"
              className="
                flex
                h-[48px]
                w-[48px]
                items-center
                justify-center
                rounded-full
                bg-[#123B2A]
                text-white
                lg:hidden
              "
            >
              <div
                className="
                  flex
                  w-[18px]
                  flex-col
                  gap-[5px]
                "
              >
                <span className="h-[1.5px] w-full bg-white" />
                <span className="h-[1.5px] w-full bg-white" />
                <span className="h-[1.5px] w-[12px] bg-white" />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* ==================================================
          MOBILE MENU
      ================================================== */}

      <div
        className={`
          fixed
          inset-0
          z-[200]
          lg:hidden

          ${
            mobileOpen
              ? "pointer-events-auto visible"
              : "pointer-events-none invisible"
          }
        `}
      >
        {/* BACKDROP */}

        <button
          type="button"
          aria-label="Close navigation"
          onClick={() =>
            setMobileOpen(false)
          }
          className={`
            absolute
            inset-0
            bg-[#123B2A]/20
            backdrop-blur-sm
            transition-opacity
            duration-300

            ${
              mobileOpen
                ? "opacity-100"
                : "opacity-0"
            }
          `}
        />

        {/* MOBILE PANEL */}

        <div
          className={`
            absolute
            bottom-3
            right-3
            top-3
            w-[calc(100%-24px)]
            max-w-[430px]
            overflow-y-auto
            rounded-[28px]
            border
            border-[#DCE8DF]
            bg-[#F8FBF8]
            shadow-[0_25px_80px_rgba(18,59,42,0.2)]
            transition-transform
            duration-500

            ${
              mobileOpen
                ? "translate-x-0"
                : "translate-x-[110%]"
            }
          `}
        >
          {/* MOBILE HEADER */}

          <div
            className="
              flex
              h-[76px]
              items-center
              justify-between
              border-b
              border-[#123B2A]/[0.08]
              px-5
            "
          >
            <Link
              to="/"
              onClick={closeAll}
              className="
                flex
                h-[52px]
                w-[155px]
                items-center
                overflow-hidden
                rounded-xl
              "
            >
              <img
                src="/images/Logo.png"
                alt="WealthBluePrint"
                className="
                  h-[78px]
                  w-auto
                  max-w-none
                  scale-[1.2]
                  object-contain
                "
              />
            </Link>

            <button
              type="button"
              onClick={() =>
                setMobileOpen(false)
              }
              aria-label="Close navigation"
              className="
                flex
                h-[42px]
                w-[42px]
                items-center
                justify-center
                rounded-full
                bg-[#123B2A]
                text-xl
                text-white
              "
            >
              ×
            </button>
          </div>

          {/* MOBILE CONTENT */}

          <div className="px-5 py-6">
            {/* ==========================================
                MOBILE STANDARD + POLICY/CLAIMS
            =========================================== */}

            {navItems.map((item) => {
              const mobileKey =
                `mobile-${item.label}`;

              const isOpen =
                openMenu === mobileKey;

              return (
                <div
                  key={item.label}
                  className="
                    border-b
                    border-[#123B2A]/[0.08]
                    pb-4
                  "
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenMenu(
                        (current) =>
                          current ===
                          mobileKey
                            ? null
                            : mobileKey
                      )
                    }
                    className="
                      flex
                      w-full
                      items-center
                      justify-between
                      py-3
                      text-left
                      text-xl
                      font-medium
                      tracking-[-0.04em]
                      text-[#123B2A]
                    "
                  >
                    <span>
                      {item.label}
                    </span>

                    <ChevronIcon
                      open={isOpen}
                    />
                  </button>

                  <div
                    className={`
                      overflow-hidden
                      transition-all
                      duration-400

                      ${
                        isOpen
                          ? "mt-2 max-h-[700px] opacity-100"
                          : "max-h-0 opacity-0"
                      }
                    `}
                  >
                    <div
                      className="
                        rounded-2xl
                        bg-white
                        p-2
                      "
                    >
                      {/* STANDARD MENU */}

                      {item.type ===
                        "standard" &&
                        item.items?.map(
                          (subItem) => (
                            <Link
                              key={
                                subItem.href
                              }
                              to={
                                subItem.href
                              }
                              onClick={
                                closeAll
                              }
                              className="
                                flex
                                min-h-[46px]
                                items-center
                                justify-between
                                rounded-xl
                                px-3
                                text-sm
                                text-[#123B2A]/70
                                hover:bg-[#EAF7EF]
                              "
                            >
                              {
                                subItem.label
                              }

                              <ArrowIcon className="text-[#3157C8]" />
                            </Link>
                          )
                        )}

                      {/* POLICY & CLAIMS */}

                      {item.type ===
                        "policyClaims" &&
                        item.sections?.map(
                          (
                            section,
                            sectionIndex
                          ) => (
                            <div
                              key={
                                section.title
                              }
                            >
                              {sectionIndex >
                                0 && (
                                <div className="my-2 border-t border-[#123B2A]/[0.08]" />
                              )}

                              <p
                                className="
                                  px-3
                                  pb-2
                                  pt-2
                                  text-[9px]
                                  font-medium
                                  uppercase
                                  tracking-[0.2em]
                                  text-[#11110F]/35
                                "
                              >
                                {
                                  section.title
                                }
                              </p>

                              {section.items.map(
                                (subItem) => (
                                  <Link
                                    key={
                                      subItem.href
                                    }
                                    to={
                                      subItem.href
                                    }
                                    onClick={
                                      closeAll
                                    }
                                    className="
                                      flex
                                      min-h-[46px]
                                      items-center
                                      justify-between
                                      rounded-xl
                                      px-3
                                      text-sm
                                      text-[#123B2A]/70
                                      hover:bg-[#EAF7EF]
                                    "
                                  >
                                    {
                                      subItem.label
                                    }

                                    <ArrowIcon className="text-[#3157C8]" />
                                  </Link>
                                )
                              )}
                            </div>
                          )
                        )}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* ==========================================
                MOBILE CTA
            =========================================== */}

            <div className="pt-6">
              <Link
                to="/contact"
                onClick={closeAll}
                className="
                  flex
                  h-[56px]
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-[#123B2A]
                  text-sm
                  font-semibold
                  text-white
                  transition
                  hover:bg-[#0D3022]
                "
              >
                Let's Talk

                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}