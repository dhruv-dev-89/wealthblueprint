import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

/* =========================================================
   FAQ DATA
========================================================= */

const taxQuestions = [
  {
    question: "Why is tax planning important?",
    answer:
      "Tax planning helps you make more efficient financial decisions while keeping your investments and long-term goals in view.",
  },
  {
    question: "Is tax planning only about saving tax?",
    answer:
      "No. Good tax planning considers your income, investments, financial goals and overall financial structure rather than focusing only on deductions.",
  },
  {
    question: "When should I start tax planning?",
    answer:
      "Tax planning works best when it is considered throughout the financial year rather than being treated as a last-minute activity.",
  },
  {
    question: "Can investments be part of tax planning?",
    answer:
      "Yes. Depending on your financial situation, certain investment decisions can also form part of a tax-efficient financial strategy.",
  },
];

/* =========================================================
   FAQ ITEM
========================================================= */

function TaxQuestion({ question, answer, isOpen, onClick }) {
  return (
    <div className="border-b border-[#DCE8DF]">
      <button
        type="button"
        onClick={onClick}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <span className="text-[17px] font-medium tracking-[-0.02em] text-[#11110F]">
          {question}
        </span>

        <span
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#DCE8DF] text-xl text-[#123B2A] transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>

      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-400 ease-out ${
          isOpen
            ? "max-h-[180px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <p className="max-w-[720px] pb-7 pr-12 text-[15px] leading-7 text-[#737770]">
          {answer}
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   FLOW NODE
========================================================= */

function FlowNode({ number, label, dark = false }) {
  return (
    <div className="relative flex flex-col items-center">
      <div
        className={`flex h-[72px] w-[72px] items-center justify-center rounded-full border ${
          dark
            ? "border-[#123B2A] bg-[#123B2A] text-[#C8FF3D]"
            : "border-[#C9D6CD] bg-[#F7FBF8] text-[#123B2A]"
        }`}
      >
        <span className="text-[12px] font-semibold tracking-[0.12em]">
          {number}
        </span>
      </div>

      <span className="mt-4 whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.2em] text-[#6F746E]">
        {label}
      </span>
    </div>
  );
}

/* =========================================================
   TAX PLANNING
========================================================= */

export default function TaxPlanning() {
  const pageRef = useRef(null);
  const heroPathRef = useRef(null);
  const heroLineRef = useRef(null);

  const [openQuestion, setOpenQuestion] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* -----------------------------------------
         HERO TEXT
      ----------------------------------------- */

      gsap.fromTo(
        ".tax-hero-item",
        {
          y: 35,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.1,
          ease: "power3.out",
        }
      );

      /* -----------------------------------------
         HERO FLOW
      ----------------------------------------- */

      if (heroPathRef.current) {
        const length = heroPathRef.current.getTotalLength();

        gsap.set(heroPathRef.current, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });

        gsap.to(heroPathRef.current, {
          strokeDashoffset: 0,
          duration: 2,
          delay: 0.5,
          ease: "power2.inOut",
        });
      }

      gsap.fromTo(
        ".tax-flow-node",
        {
          scale: 0.75,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.7,
          delay: 0.7,
          stagger: 0.12,
          ease: "back.out(1.5)",
        }
      );

      /* -----------------------------------------
         HERO MOVEMENT
      ----------------------------------------- */

      if (heroLineRef.current) {
        gsap.to(heroLineRef.current, {
          y: -10,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      /* -----------------------------------------
         SCROLL REVEALS
      ----------------------------------------- */

      gsap.utils.toArray(".tax-reveal").forEach((element) => {
        gsap.fromTo(
          element,
          {
            y: 45,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 82%",
              once: true,
            },
          }
        );
      });

      /* -----------------------------------------
         STRATEGY NUMBERS
      ----------------------------------------- */

      gsap.utils.toArray(".tax-number").forEach((element, index) => {
        gsap.fromTo(
          element,
          {
            y: 30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            delay: index * 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              once: true,
            },
          }
        );
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={pageRef}
      className="min-h-screen overflow-hidden bg-[#F1EEE7] text-[#11110F]"
    >
      <Navbar />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden px-6 pb-24 pt-32 sm:px-10 lg:px-16 lg:pb-28 lg:pt-36">
        {/* subtle background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-[15%] top-[15%] h-[600px] w-[600px] rounded-full bg-[#C8FF3D]/10 blur-[120px]" />

          <div className="absolute right-[-15%] top-[30%] h-[650px] w-[650px] rounded-full bg-[#123B2A]/[0.05] blur-[140px]" />
        </div>

        <div className="relative mx-auto max-w-[1440px]">
          {/* eyebrow */}

          <div className="tax-hero-item flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#C8FF3D]" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#6E716C]">
              TAX PLANNING
            </span>
          </div>

          {/* heading */}

          <div className="mt-8">
            <h1 className="tax-hero-item max-w-[1150px] text-[clamp(4rem,9vw,9.5rem)] font-medium leading-[0.84] tracking-[-0.08em]">
              Keep more
              <br />
              of what{" "}
              <span className="text-[#123B2A]">you build.</span>
            </h1>
          </div>

          {/* description + CTA */}

          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <p className="tax-hero-item max-w-[620px] text-[16px] leading-7 text-[#6B706A]">
              Reduce your tax burden smartly and legally while building a more
              efficient and rewarding financial portfolio.
            </p>

            <div className="tax-hero-item flex flex-wrap gap-3">
              <a
                href="/contact"
                className="inline-flex h-[54px] items-center gap-3 rounded-full bg-[#123B2A] px-7 text-[13px] font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#0C2E20]"
              >
                Get Expert Guidance
                <span>↗</span>
              </a>

              <a
                href="#approach"
                className="inline-flex h-[54px] items-center gap-3 rounded-full border border-[#CBD6CE] bg-white/50 px-7 text-[13px] font-semibold text-[#123B2A] transition-all duration-300 hover:-translate-y-1 hover:bg-white"
              >
                Explore the approach
                <span>↓</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section
        id="approach"
        className="bg-[#F7FBF8] px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="tax-reveal grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#123B2A]">
                A BETTER WAY TO PLAN
              </p>

              <h2 className="mt-6 max-w-[560px] text-[clamp(3rem,5vw,5.8rem)] font-medium leading-[0.9] tracking-[-0.065em]">
                Tax planning
                <br />
                should fit
                <br />
                <span className="text-[#123B2A]">
                  the bigger picture.
                </span>
              </h2>
            </div>

            <div className="max-w-[750px]">
              <p className="text-[20px] leading-8 tracking-[-0.02em] text-[#343833]">
                Tax planning is not simply about finding deductions. It is
                about making thoughtful financial decisions that work together
                with your investments, income and long-term goals.
              </p>

              <div className="mt-14 grid gap-8 sm:grid-cols-3">
                <div className="border-t border-[#DCE8DF] pt-5">
                  <span className="text-[11px] font-semibold tracking-[0.2em] text-[#8B9089]">
                    01
                  </span>

                  <h3 className="mt-5 text-[19px] font-medium">
                    Understand
                  </h3>

                  <p className="mt-3 text-[14px] leading-6 text-[#777C76]">
                    Understand your income and financial position.
                  </p>
                </div>

                <div className="border-t border-[#DCE8DF] pt-5">
                  <span className="text-[11px] font-semibold tracking-[0.2em] text-[#8B9089]">
                    02
                  </span>

                  <h3 className="mt-5 text-[19px] font-medium">
                    Structure
                  </h3>

                  <p className="mt-3 text-[14px] leading-6 text-[#777C76]">
                    Align investments and financial decisions.
                  </p>
                </div>

                <div className="border-t border-[#DCE8DF] pt-5">
                  <span className="text-[11px] font-semibold tracking-[0.2em] text-[#8B9089]">
                    03
                  </span>

                  <h3 className="mt-5 text-[19px] font-medium">
                    Optimise
                  </h3>

                  <p className="mt-3 text-[14px] leading-6 text-[#777C76]">
                    Make your overall financial strategy more efficient.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          STRATEGY
      ===================================================== */}

      <section className="bg-[#F1EEE7] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="tax-reveal mb-16 max-w-[850px]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#123B2A]">
              THE STRATEGY
            </p>

            <h2 className="mt-5 text-[clamp(3rem,6vw,6.5rem)] font-medium leading-[0.88] tracking-[-0.07em]">
              Four decisions.
              <br />
              <span className="text-[#123B2A]">
                One financial direction.
              </span>
            </h2>
          </div>

          <div className="grid border-t border-[#D6DAD3] lg:grid-cols-4">
            <div className="tax-number border-b border-[#D6DAD3] py-9 lg:border-b-0 lg:border-r lg:pr-8">
              <span className="text-[11px] font-semibold tracking-[0.2em] text-[#8B9089]">
                01
              </span>

              <h3 className="mt-14 text-[25px] font-medium tracking-[-0.04em]">
                Income
              </h3>

              <p className="mt-4 max-w-[250px] text-[14px] leading-6 text-[#777C76]">
                Understand how your income and financial position affect your
                overall tax strategy.
              </p>
            </div>

            <div className="tax-number border-b border-[#D6DAD3] py-9 lg:border-b-0 lg:border-r lg:px-8">
              <span className="text-[11px] font-semibold tracking-[0.2em] text-[#8B9089]">
                02
              </span>

              <h3 className="mt-14 text-[25px] font-medium tracking-[-0.04em]">
                Investments
              </h3>

              <p className="mt-4 max-w-[250px] text-[14px] leading-6 text-[#777C76]">
                Consider how investment choices can fit into a broader
                tax-efficient financial strategy.
              </p>
            </div>

            <div className="tax-number border-b border-[#D6DAD3] py-9 lg:border-b-0 lg:border-r lg:px-8">
              <span className="text-[11px] font-semibold tracking-[0.2em] text-[#8B9089]">
                03
              </span>

              <h3 className="mt-14 text-[25px] font-medium tracking-[-0.04em]">
                Goals
              </h3>

              <p className="mt-4 max-w-[250px] text-[14px] leading-6 text-[#777C76]">
                Keep tax decisions connected to the goals your money is
                ultimately meant to support.
              </p>
            </div>

            <div className="tax-number py-9 lg:pl-8">
              <span className="text-[11px] font-semibold tracking-[0.2em] text-[#8B9089]">
                04
              </span>

              <h3 className="mt-14 text-[25px] font-medium tracking-[-0.04em]">
                Review
              </h3>

              <p className="mt-4 max-w-[250px] text-[14px] leading-6 text-[#777C76]">
                Financial circumstances change, so your strategy should be
                reviewed and refined over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINANCIAL BLUEPRINT
      ===================================================== */}

      <section className="bg-[#F7FBF8] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="tax-reveal relative overflow-hidden rounded-[36px] bg-[#123B2A] px-7 py-12 sm:px-10 lg:px-16 lg:py-16">
            <div className="pointer-events-none absolute right-[-10%] top-[-40%] h-[600px] w-[600px] rounded-full bg-[#C8FF3D]/10 blur-[100px]" />

            <div className="relative grid gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#C8FF3D]">
                  YOUR FINANCIAL BLUEPRINT
                </p>

                <h2 className="mt-6 max-w-[550px] text-[clamp(3rem,5vw,5.5rem)] font-medium leading-[0.88] tracking-[-0.065em] text-white">
                  Make every
                  <br />
                  decision work
                  <br />
                  <span className="text-[#C8FF3D]">together.</span>
                </h2>

                <p className="mt-7 max-w-[470px] text-[15px] leading-7 text-white/50">
                  Instead of looking at tax decisions in isolation, connect
                  them with your wider financial strategy.
                </p>
              </div>

              {/* blueprint */}

              <div className="relative min-h-[390px]">
                {/* horizontal line */}

                <div className="absolute left-0 right-0 top-[52%] h-px bg-white/10" />

                {/* path */}

                <svg
                  viewBox="0 0 800 300"
                  className="absolute inset-0 h-full w-full"
                  fill="none"
                >
                  <path
                    d="
                      M 20 160
                      C 130 160 145 160 240 160
                      C 330 160 340 80 420 80
                      C 500 80 515 220 590 220
                      C 660 220 690 135 780 135
                    "
                    stroke="#FFFFFF"
                    strokeOpacity="0.14"
                    strokeWidth="1.5"
                  />

                  <path
                    d="
                      M 20 160
                      C 130 160 145 160 240 160
                      C 330 160 340 80 420 80
                      C 500 80 515 220 590 220
                      C 660 220 690 135 780 135
                    "
                    stroke="#C8FF3D"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>

                {/* nodes */}

                <div className="absolute left-[0%] top-[46%]">
                  <div className="h-3 w-3 rounded-full bg-[#C8FF3D] shadow-[0_0_20px_rgba(200,255,61,0.5)]" />

                  <span className="absolute left-0 top-6 whitespace-nowrap text-[10px] uppercase tracking-[0.18em] text-white/40">
                    Income
                  </span>
                </div>

                <div className="absolute left-[30%] top-[20%]">
                  <div className="h-3 w-3 rounded-full bg-[#C8FF3D] shadow-[0_0_20px_rgba(200,255,61,0.5)]" />

                  <span className="absolute left-0 top-6 whitespace-nowrap text-[10px] uppercase tracking-[0.18em] text-white/40">
                    Tax
                  </span>
                </div>

                <div className="absolute left-[64%] top-[66%]">
                  <div className="h-3 w-3 rounded-full bg-[#C8FF3D] shadow-[0_0_20px_rgba(200,255,61,0.5)]" />

                  <span className="absolute left-0 top-6 whitespace-nowrap text-[10px] uppercase tracking-[0.18em] text-white/40">
                    Investment
                  </span>
                </div>

                <div className="absolute right-[0%] top-[37%]">
                  <div className="h-3 w-3 rounded-full bg-[#C8FF3D] shadow-[0_0_20px_rgba(200,255,61,0.5)]" />

                  <span className="absolute right-0 top-6 whitespace-nowrap text-[10px] uppercase tracking-[0.18em] text-[#C8FF3D]">
                    Wealth
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ
      ===================================================== */}

      <section className="bg-[#F1EEE7] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto grid max-w-[1200px] gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div className="tax-reveal">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#123B2A]">
              COMMON QUESTIONS
            </p>

            <h2 className="mt-5 text-[clamp(3rem,5vw,5.5rem)] font-medium leading-[0.9] tracking-[-0.06em]">
              Tax planning,
              <br />
              <span className="text-[#123B2A]">simplified.</span>
            </h2>

            <p className="mt-6 max-w-[420px] text-[15px] leading-7 text-[#737770]">
              A few common questions before you start building a more
              thoughtful financial strategy.
            </p>
          </div>

          <div className="tax-reveal">
            {taxQuestions.map((item, index) => (
              <TaxQuestion
                key={item.question}
                question={item.question}
                answer={item.answer}
                isOpen={openQuestion === index}
                onClick={() =>
                  setOpenQuestion(
                    openQuestion === index ? null : index
                  )
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#123B2A] px-6 py-24 text-white sm:px-10 lg:px-16 lg:py-32">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.04]" />

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.04]" />

        <div className="relative mx-auto max-w-[1100px] text-center">
          <span className="tax-reveal text-[11px] font-semibold uppercase tracking-[0.28em] text-[#C8FF3D]">
            PLAN WITH INTENTION
          </span>

          <h2 className="tax-reveal mx-auto mt-6 max-w-[900px] text-[clamp(3.2rem,6vw,6.5rem)] font-medium leading-[0.88] tracking-[-0.065em]">
            Give your money
            <br />
            a clearer direction.
          </h2>

          <p className="tax-reveal mx-auto mt-7 max-w-[600px] text-[15px] leading-7 text-white/50">
            Start with your financial picture. We can help you understand
            tax-efficient decisions that may fit your goals and priorities.
          </p>

          <div className="tax-reveal mt-9">
            <a
              href="/contact"
              className="inline-flex h-[54px] items-center gap-3 rounded-full bg-white px-8 text-[13px] font-semibold text-[#123B2A] transition-all duration-300 hover:-translate-y-1 hover:bg-[#EAF7EF]"
            >
              Talk to an Expert
              <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}