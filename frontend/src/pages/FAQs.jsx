import { useEffect, useMemo, useState } from "react";
import gsap from "gsap";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const faqs = [
  {
    id: 1,
    category: "Investment",
    question:
      "What are the best investment options offered by Wealth Blue Print?",
    answer:
      "We offer personalized portfolios including mutual funds, SIPs, retirement plans, and low-risk bonds designed to match your financial goals and risk appetite.",
  },
  {
    id: 2,
    category: "Insurance",
    question:
      "What types of insurance do you provide?",
    answer:
      "We provide term insurance, health insurance, ULIPs, and child protection plans through SEBI-registered advisors to safeguard your family's future.",
  },
  {
    id: 3,
    category: "Retirement",
    question:
      "When should I start retirement planning?",
    answer:
      "The best time is now. The earlier you start, the better you benefit from compounding and long-term growth stability.",
  },
  {
    id: 4,
    category: "Account",
    question:
      "How can I open an account with Wealth Blue Print?",
    answer:
      "You can start online by completing your KYC and setting up your portfolio within minutes, or book a free consultation with our advisor.",
  },
];

const categories = [
  "All",
  "Investment",
  "Insurance",
  "Retirement",
  "Account",
];

export default function FAQs() {
  const [activeCategory, setActiveCategory] =
    useState("All");

  const [openId, setOpenId] =
    useState(1);

  const [search, setSearch] =
    useState("");

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".faq-hero-item", {
        y: 35,
        opacity: 0,
        duration: 0.85,
        stagger: 0.08,
        ease: "power3.out",
      });

      gsap.from(".faq-list-item", {
        y: 25,
        opacity: 0,
        duration: 0.7,
        stagger: 0.07,
        delay: 0.15,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  const filteredFaqs = useMemo(() => {
    const query =
      search.trim().toLowerCase();

    return faqs.filter((faq) => {
      const matchesCategory =
        activeCategory === "All" ||
        faq.category === activeCategory;

      const matchesSearch =
        !query ||
        faq.question
          .toLowerCase()
          .includes(query) ||
        faq.answer
          .toLowerCase()
          .includes(query) ||
        faq.category
          .toLowerCase()
          .includes(query);

      return (
        matchesCategory &&
        matchesSearch
      );
    });
  }, [
    activeCategory,
    search,
  ]);

  return (
    <div className="min-h-screen overflow-hidden bg-[#F7FBF8] text-[#11110F]">
      <Navbar />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="px-6 pb-20 pt-12 sm:px-10 lg:px-16 lg:pb-28 lg:pt-16">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="faq-hero-item mb-8 text-[10px] font-semibold uppercase tracking-[0.34em] text-[#3157C8]">
                WEALTH BLUE PRINT
              </p>

              <h1 className="faq-hero-item max-w-[900px] text-[clamp(4.3rem,8.5vw,9rem)] font-medium leading-[0.82] tracking-[-0.085em]">
                How can
                <br />
                we
                <br />
                <span className="text-[#3157C8]">
                  help?
                </span>
              </h1>
            </div>

            <div className="faq-hero-item border-t border-[#11110F]/12 pt-7">
              <p className="max-w-[440px] text-[15px] leading-7 text-[#11110F]/55">
                Get answers to your questions about
                investment, insurance, and financial
                planning — fast and simple.
              </p>

              {/* SEARCH */}

              <div className="relative mt-9">
                <input
                  type="text"
                  value={search}
                  onChange={(e) =>
                    setSearch(
                      e.target.value
                    )
                  }
                  placeholder="Search your question..."
                  className="
                    h-[58px]
                    w-full
                    rounded-full
                    border
                    border-[#11110F]/10
                    bg-white
                    pl-6
                    pr-14
                    text-[13px]
                    outline-none
                    transition
                    placeholder:text-[#11110F]/25
                    focus:border-[#123B2A]/30
                  "
                />

                <span className="absolute right-5 top-1/2 -translate-y-1/2 text-[18px] text-[#11110F]/30">
                  ⌕
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ
      ===================================================== */}

      <section className="px-6 pb-24 sm:px-10 lg:px-16 lg:pb-32">
        <div className="mx-auto max-w-[1280px]">
          {/* FILTER */}

          <div className="mb-12 flex flex-wrap items-center gap-2 border-t border-[#11110F]/10 pt-5">
            {categories.map(
              (category) => {
                const active =
                  activeCategory ===
                  category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => {
                      setActiveCategory(
                        category
                      );

                      setOpenId(
                        filteredFaqs[0]
                          ?.id || null
                      );
                    }}
                    className={`
                      rounded-full
                      px-5
                      py-2.5
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.16em]
                      transition-all
                      duration-300
                      ${
                        active
                          ? "bg-[#123B2A] text-white"
                          : "bg-white text-[#11110F]/40 hover:text-[#123B2A]"
                      }
                    `}
                  >
                    {category}
                  </button>
                );
              }
            )}
          </div>

          {/* FAQ LIST */}

          <div className="max-w-[1050px]">
            {filteredFaqs.length >
            0 ? (
              filteredFaqs.map(
                (faq, index) => {
                  const isOpen =
                    openId === faq.id;

                  return (
                    <div
                      key={faq.id}
                      className="faq-list-item border-t border-[#11110F]/10 last:border-b"
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setOpenId(
                            isOpen
                              ? null
                              : faq.id
                          )
                        }
                        className="
                          flex
                          w-full
                          items-start
                          gap-6
                          py-7
                          text-left
                          sm:py-9
                        "
                      >
                        {/* NUMBER */}

                        <span
                          className={`
                            mt-1
                            shrink-0
                            text-[9px]
                            font-semibold
                            tracking-[0.18em]
                            ${
                              isOpen
                                ? "text-[#3157C8]"
                                : "text-[#11110F]/20"
                            }
                          `}
                        >
                          {String(
                            index + 1
                          ).padStart(
                            2,
                            "0"
                          )}
                        </span>

                        {/* QUESTION */}

                        <div className="min-w-0 flex-1">
                          <div className="flex items-start justify-between gap-8">
                            <div>
                              <span className="mb-3 block text-[8px] font-semibold uppercase tracking-[0.22em] text-[#11110F]/25">
                                {
                                  faq.category
                                }
                              </span>

                              <h2
                                className={`
                                  max-w-[780px]
                                  text-[clamp(1.35rem,2.3vw,2.1rem)]
                                  font-medium
                                  leading-[1.15]
                                  tracking-[-0.035em]
                                  transition-colors
                                  ${
                                    isOpen
                                      ? "text-[#123B2A]"
                                      : "text-[#11110F]"
                                  }
                                `}
                              >
                                {
                                  faq.question
                                }
                              </h2>
                            </div>

                            {/* ICON */}

                            <span
                              className={`
                                flex
                                h-9
                                w-9
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                border
                                text-[16px]
                                transition-all
                                duration-300
                                ${
                                  isOpen
                                    ? "rotate-45 border-[#123B2A] bg-[#123B2A] text-white"
                                    : "border-[#11110F]/10 bg-white text-[#11110F]/40"
                                }
                              `}
                            >
                              +
                            </span>
                          </div>

                          {/* ANSWER */}

                          <div
                            className={`
                              grid
                              transition-all
                              duration-500
                              ease-[cubic-bezier(.22,1,.36,1)]
                              ${
                                isOpen
                                  ? "grid-rows-[1fr] opacity-100"
                                  : "grid-rows-[0fr] opacity-0"
                              }
                            `}
                          >
                            <div className="min-h-0 overflow-hidden">
                              <p className="max-w-[720px] pb-2 pt-6 text-[14px] leading-7 text-[#11110F]/50">
                                {
                                  faq.answer
                                }
                              </p>
                            </div>
                          </div>
                        </div>
                      </button>
                    </div>
                  );
                }
              )
            ) : (
              <div className="border-t border-[#11110F]/10 py-16">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#11110F]/30">
                  NO QUESTIONS FOUND
                </p>

                <p className="mt-3 text-[15px] text-[#11110F]/50">
                  Try searching for another
                  financial topic.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          SUPPORT
      ===================================================== */}

      <section className="px-6 pb-24 sm:px-10 lg:px-16 lg:pb-32">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid overflow-hidden rounded-[30px] bg-[#123B2A] lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="px-7 py-12 sm:px-10 lg:px-14 lg:py-14">
              <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#C8FF3D]">
                STILL HAVE QUESTIONS?
              </p>

              <h2 className="mt-5 max-w-[700px] text-[clamp(2.8rem,5vw,5.5rem)] font-medium leading-[0.86] tracking-[-0.07em] text-white">
                We're here to
                <br />
                help.
              </h2>

              <p className="mt-6 max-w-[500px] text-[14px] leading-7 text-white/45">
                Our experts are ready to help you make confident
                financial decisions.
              </p>
            </div>

            <div className="px-7 pb-10 sm:px-10 lg:px-14 lg:pb-0">
              <a
                href="mailto:contactus@wealthblueprint.in"
                className="
                  inline-flex
                  h-[54px]
                  items-center
                  gap-4
                  rounded-full
                  bg-[#C8FF3D]
                  px-7
                  text-[12px]
                  font-semibold
                  text-[#123B2A]
                  transition
                  duration-300
                  hover:-translate-y-1
                "
              >
                Contact Support
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}