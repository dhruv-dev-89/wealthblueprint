import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  {
    number: "01",
    title: "Start early",
    text: "Give your investments more time to grow by starting your child's future planning early.",
    mark: "TIME",
  },
  {
    number: "02",
    title: "Define the goal",
    text: "Connect your savings and investments with the education or future milestone you want to prepare for.",
    mark: "GOAL",
  },
  {
    number: "03",
    title: "Invest consistently",
    text: "Regular investing can help you build towards future education expenses without depending on one large contribution.",
    mark: "DISCIPLINE",
  },
  {
    number: "04",
    title: "Review as they grow",
    text: "Your child's age, education plans and financial requirements change over time. Your strategy should too.",
    mark: "REVIEW",
  },
];

const planningPoints = [
  {
    id: "A",
    title: "Education",
    text: "Prepare financially for future education expenses and important academic milestones.",
  },
  {
    id: "B",
    title: "Time",
    text: "The earlier you begin, the longer your investments have to work towards the goal.",
  },
  {
    id: "C",
    title: "Consistency",
    text: "Regular contributions can make a long-term goal easier to manage.",
  },
  {
    id: "D",
    title: "Flexibility",
    text: "Keep reviewing the strategy as your child's plans and your financial situation evolve.",
  },
];

function ChildBlueprint() {
  return (
    <div className="relative h-[460px] w-full overflow-hidden rounded-[36px] bg-[#123B2A] p-7 text-white shadow-[0_30px_80px_rgba(18,59,42,0.16)] sm:h-[540px] sm:p-9">
      {/* grid */}
      <div
        className="absolute inset-0 opacity-[0.10]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />

      <div className="relative z-10 flex items-start justify-between">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#C8FF3D]">
            FUTURE BLUEPRINT
          </p>

          <p className="mt-3 max-w-[220px] text-sm leading-6 text-white/55">
            Build today around the future you want to create.
          </p>
        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-sm text-white/70">
          ↗
        </div>
      </div>

      {/* central path */}
      <div className="absolute left-[15%] right-[15%] top-[52%]">
        <div className="relative h-[2px] bg-white/20">
          <div className="absolute inset-y-0 left-0 w-[76%] bg-[#C8FF3D]" />

          {[0, 1, 2, 3].map((item, index) => (
            <div
              key={item}
              className="absolute top-1/2 flex -translate-y-1/2 items-center justify-center"
              style={{ left: `${index * 33}%` }}
            >
              <div
                className={`h-4 w-4 rounded-full border-4 ${
                  index === 0
                    ? "border-[#C8FF3D] bg-[#123B2A]"
                    : "border-[#123B2A] bg-white"
                }`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* milestone labels */}
      <div className="absolute bottom-[25%] left-[10%] right-[10%] flex justify-between">
        <div>
          <span className="text-[9px] uppercase tracking-[0.2em] text-white/35">
            NOW
          </span>
          <p className="mt-2 text-sm font-medium">Start</p>
        </div>

        <div className="text-center">
          <span className="text-[9px] uppercase tracking-[0.2em] text-white/35">
            GROW
          </span>
          <p className="mt-2 text-sm font-medium">Invest</p>
        </div>

        <div className="text-right">
          <span className="text-[9px] uppercase tracking-[0.2em] text-white/35">
            FUTURE
          </span>
          <p className="mt-2 text-sm font-medium">Education</p>
        </div>
      </div>

      {/* floating tag */}
      <div className="absolute right-5 top-[43%] rounded-full bg-[#C8FF3D] px-4 py-2 text-[9px] font-bold uppercase tracking-[0.18em] text-[#123B2A] sm:right-10">
        Goal → Future
      </div>

      <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between border-t border-white/10 pt-5 sm:left-9 sm:right-9">
        <div>
          <p className="text-[9px] uppercase tracking-[0.22em] text-white/35">
            APPROACH
          </p>
          <p className="mt-2 text-sm font-medium">Goal first</p>
        </div>

        <div className="text-right">
          <p className="text-[9px] uppercase tracking-[0.22em] text-white/35">
            FOCUS
          </p>
          <p className="mt-2 text-sm font-medium">Long term</p>
        </div>
      </div>
    </div>
  );
}

function ChildPlanning() {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".child-hero-item", {
        y: 35,
        opacity: 0,
        duration: 0.9,
        stagger: 0.08,
        ease: "power3.out",
      });

      gsap.utils.toArray(".child-reveal").forEach((element) => {
        gsap.from(element, {
          y: 45,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 82%",
            once: true,
          },
        });
      });

      gsap.utils.toArray(".milestone-card").forEach((card, index) => {
        gsap.from(card, {
          y: 55,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.05,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            once: true,
          },
        });
      });

      gsap.to(".child-blueprint-line", {
        scaleX: 1,
        duration: 1.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".child-blueprint-line",
          start: "top 85%",
          once: true,
        },
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={pageRef}
      className="min-h-screen overflow-hidden bg-[#F4F1EA] text-[#11110F]"
    >
      <Navbar />

      {/* =========================================================
          HERO — DIFFERENT COMPOSITION
      ========================================================== */}
      <section className="relative min-h-[780px] px-6 pb-20 pt-36 sm:px-10 lg:min-h-[820px] lg:px-16 lg:pt-44">
        {/* subtle background */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.22]"
          style={{
            backgroundImage:
              "linear-gradient(#C8C4BA 1px, transparent 1px), linear-gradient(90deg, #C8C4BA 1px, transparent 1px)",
            backgroundSize: "86px 86px",
          }}
        />

        <div className="relative mx-auto max-w-[1440px]">
          <div className="grid items-end gap-16 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
            {/* left */}
            <div>
              <div className="child-hero-item mb-8 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#C8FF3D]" />

                <span className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#68665F]">
                  CHILD PLANNING
                </span>
              </div>

              <h1 className="child-hero-item max-w-[820px] text-[clamp(4.3rem,8vw,8.5rem)] font-medium leading-[0.83] tracking-[-0.075em]">
                Their future
                <br />
                starts
                <br />
                <span className="text-[#123B2A]">today.</span>
              </h1>

              <div className="child-hero-item mt-10 flex flex-col gap-8 sm:flex-row sm:items-end">
                <p className="max-w-[520px] text-[16px] leading-7 text-[#66645E]">
                  Understand how early planning and regular investing can help
                  you prepare financially for your child's future education
                  expenses.
                </p>

                <a
                  href="/contact"
                  className="inline-flex h-14 shrink-0 items-center justify-center gap-3 rounded-full bg-[#123B2A] px-7 text-[13px] font-semibold text-white transition duration-300 hover:-translate-y-1"
                >
                  Plan Their Future
                  <span>↗</span>
                </a>
              </div>
            </div>

            {/* right visual */}
            <div className="child-hero-item relative">
              <ChildBlueprint />

              <div className="absolute -bottom-5 left-5 rounded-full border border-[#D7D4CB] bg-[#F4F1EA] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#123B2A] shadow-sm">
                TIME · GOAL · GROWTH
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 01 — BIG STATEMENT
      ========================================================== */}
      <section className="child-reveal bg-[#F7FBF8] px-6 py-28 sm:px-10 lg:px-16 lg:py-36">
        <div className="mx-auto grid max-w-[1440px] gap-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8A8881]">
              WHY START EARLY
            </p>

            <div className="mt-7 h-px w-24 bg-[#123B2A]" />

            <p className="mt-6 max-w-[270px] text-sm leading-6 text-[#73716B]">
              A child's future is a long-term goal. Your planning should have
              the same horizon.
            </p>
          </div>

          <div>
            <h2 className="max-w-[1000px] text-[clamp(3rem,6.5vw,7rem)] font-medium leading-[0.9] tracking-[-0.065em]">
              More time can give your money{" "}
              <span className="text-[#3157C8]">more room to grow.</span>
            </h2>

            <div className="mt-12 grid gap-8 border-t border-[#DDE5DF] pt-8 sm:grid-cols-2">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#8A8881]">
                  01 / TIME
                </p>
                <p className="mt-3 max-w-[340px] text-sm leading-6 text-[#65635D]">
                  Starting earlier can give a long-term investment goal more
                  time to develop.
                </p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#8A8881]">
                  02 / CONSISTENCY
                </p>
                <p className="mt-3 max-w-[340px] text-sm leading-6 text-[#65635D]">
                  Regular investing can help turn a future requirement into a
                  structured financial goal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 02 — CONNECTED MILESTONES
      ========================================================== */}
      <section className="bg-[#F4F1EA] px-6 py-28 sm:px-10 lg:px-16 lg:py-36">
        <div className="mx-auto max-w-[1440px]">
          <div className="child-reveal mb-16 flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8A8881]">
                THE PLANNING PATH
              </p>

              <h2 className="mt-5 max-w-[750px] text-[clamp(3rem,5vw,5.8rem)] font-medium leading-[0.9] tracking-[-0.06em]">
                One goal.
                <br />
                <span className="text-[#123B2A]">Four decisions.</span>
              </h2>
            </div>

            <p className="max-w-[360px] text-sm leading-6 text-[#6D6B65]">
              A simple framework for connecting today's decisions with your
              child's tomorrow.
            </p>
          </div>

          <div className="relative">
            {/* connector */}
            <div className="absolute left-[28px] top-10 hidden h-[calc(100%-80px)] w-px bg-[#D6D2C8] lg:block">
              <div className="child-blueprint-line h-full origin-top scale-y-0 bg-[#123B2A]" />
            </div>

            <div className="grid gap-4">
              {milestones.map((item, index) => (
                <div
                  key={item.number}
                  className="milestone-card group relative grid gap-6 rounded-[28px] border border-[#DCD8CF] bg-[#F8F6F1] p-7 transition duration-500 hover:-translate-y-1 hover:border-[#123B2A]/20 hover:shadow-[0_25px_60px_rgba(17,17,15,.06)] lg:grid-cols-[90px_1fr_180px] lg:items-center lg:p-9"
                >
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-[#CFCBC1] bg-[#F4F1EA] text-[11px] font-semibold text-[#123B2A] group-hover:bg-[#123B2A] group-hover:text-white">
                    {item.number}
                  </div>

                  <div>
                    <h3 className="text-2xl font-medium tracking-[-0.03em] sm:text-3xl">
                      {item.title}
                    </h3>

                    <p className="mt-3 max-w-[620px] text-sm leading-6 text-[#6D6B65]">
                      {item.text}
                    </p>
                  </div>

                  <div className="lg:text-right">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#A09D95]">
                      {item.mark}
                    </span>

                    <div className="mt-3 text-xl text-[#123B2A]">
                      {index === 0 && "↗"}
                      {index === 1 && "◎"}
                      {index === 2 && "＋"}
                      {index === 3 && "↻"}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 03 — ASYMMETRIC GOAL GRID
      ========================================================== */}
      <section className="bg-[#EAF7EF] px-6 py-28 sm:px-10 lg:px-16 lg:py-36">
        <div className="mx-auto max-w-[1440px]">
          <div className="child-reveal grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div className="lg:sticky lg:top-32">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#52705F]">
                WHAT THE PLAN SHOULD CONSIDER
              </p>

              <h2 className="mt-6 text-[clamp(3rem,5vw,5.5rem)] font-medium leading-[0.9] tracking-[-0.06em]">
                Build around
                <br />
                <span className="text-[#123B2A]">their life.</span>
              </h2>

              <p className="mt-7 max-w-[380px] text-sm leading-6 text-[#5F7166]">
                Child planning is not only about an investment product. It is
                about connecting money with the milestones that matter.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {planningPoints.map((item, index) => (
                <div
                  key={item.id}
                  className={`min-h-[250px] rounded-[28px] p-7 transition duration-500 hover:-translate-y-1 ${
                    index === 0
                      ? "bg-[#123B2A] text-white"
                      : index === 1
                      ? "bg-[#C8FF3D] text-[#123B2A]"
                      : index === 2
                      ? "bg-white text-[#11110F]"
                      : "bg-[#3A1720] text-white"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <span className="text-[11px] font-semibold tracking-[0.2em] opacity-60">
                      {item.id}
                    </span>

                    <span className="text-xl">↗</span>
                  </div>

                  <div className="mt-20">
                    <h3 className="text-2xl font-medium tracking-[-0.03em]">
                      {item.title}
                    </h3>

                    <p className="mt-3 max-w-[300px] text-sm leading-6 opacity-65">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 04 — BIG NUMBER / EDUCATION GOAL
      ========================================================== */}
      <section className="bg-[#F7FBF8] px-6 py-28 sm:px-10 lg:px-16 lg:py-40">
        <div className="mx-auto max-w-[1440px]">
          <div className="child-reveal grid items-end gap-12 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8A8881]">
                A LONG-TERM GOAL
              </p>

              <div className="mt-8 flex items-start">
                <span className="mr-4 mt-5 text-2xl text-[#3157C8]">₹</span>

                <span className="text-[clamp(7rem,18vw,17rem)] font-medium leading-[0.72] tracking-[-0.09em] text-[#11110F]">
                  01
                </span>
              </div>

              <p className="mt-12 max-w-[560px] text-[clamp(1.5rem,2.5vw,2.4rem)] leading-tight tracking-[-0.035em]">
                Start with the goal. Then work backwards to the investment
                strategy.
              </p>
            </div>

            <div className="border-t border-[#DCE8DF] pt-8 lg:pb-3">
              <p className="max-w-[470px] text-sm leading-7 text-[#696761]">
                Future education expenses can become a significant financial
                milestone. Goal-based investing helps connect the amount,
                timeline and investment approach instead of treating the goal
                as a number in isolation.
              </p>

              <div className="mt-10 flex items-center gap-4">
                <div className="h-2 w-2 rounded-full bg-[#3157C8]" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#77756F]">
                  GOAL → TIME → STRATEGY
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 05 — DARK IMMERSIVE
      ========================================================== */}
      <section className="relative overflow-hidden bg-[#123B2A] px-6 py-28 text-white sm:px-10 lg:px-16 lg:py-36">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />

        <div className="relative mx-auto max-w-[1440px]">
          <div className="child-reveal grid gap-16 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C8FF3D]">
                THE BIGGER PICTURE
              </p>

              <h2 className="mt-7 max-w-[1000px] text-[clamp(3.5rem,7vw,8rem)] font-medium leading-[0.84] tracking-[-0.07em]">
                Give them
                <br />
                more choices
                <br />
                <span className="text-[#C8FF3D]">tomorrow.</span>
              </h2>
            </div>

            <div className="border-l border-white/15 pl-7 lg:pb-3">
              <p className="max-w-[390px] text-sm leading-7 text-white/55">
                The purpose of planning is not to predict the future. It is to
                prepare financially for the possibilities it may bring.
              </p>

              <a
                href="/contact"
                className="mt-8 inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-white transition hover:text-[#C8FF3D]"
              >
                Start the conversation
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA — WIDE HORIZONTAL COMPOSITION
      ========================================================== */}
      <section className="bg-[#F4F1EA] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="child-reveal rounded-[32px] bg-[#C8FF3D] px-7 py-10 sm:px-10 lg:flex lg:items-center lg:justify-between lg:px-14 lg:py-12">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#123B2A]/55">
                PLAN WITH PURPOSE
              </p>

              <h2 className="mt-4 max-w-[700px] text-[clamp(2.5rem,4.5vw,5rem)] font-medium leading-[0.9] tracking-[-0.06em] text-[#123B2A]">
                Their future deserves a plan.
              </h2>
            </div>

            <a
              href="/contact"
              className="mt-9 inline-flex h-14 shrink-0 items-center justify-center gap-3 rounded-full bg-[#123B2A] px-7 text-[13px] font-semibold text-white transition duration-300 hover:-translate-y-1 lg:mt-0"
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

export default ChildPlanning;