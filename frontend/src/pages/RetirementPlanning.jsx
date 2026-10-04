import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

const retirementSteps = [
  {
    number: "01",
    title: "Know your number",
    text: "Understand the retirement corpus you may need to support the lifestyle you want in the future.",
  },
  {
    number: "02",
    title: "Start building",
    text: "Turn today's savings and investments into a disciplined long-term retirement strategy.",
  },
  {
    number: "03",
    title: "Keep growing",
    text: "Give your retirement corpus time to grow while keeping the strategy aligned with your future needs.",
  },
  {
    number: "04",
    title: "Retire with clarity",
    text: "Build a financial foundation designed to give you greater confidence and freedom after your working years.",
  },
];

const retirementFactors = [
  {
    number: "01",
    title: "Current lifestyle",
    text: "The lifestyle you want to maintain can influence the amount you may need after retirement.",
  },
  {
    number: "02",
    title: "Time horizon",
    text: "The number of years before retirement can affect how much time your investments have to grow.",
  },
  {
    number: "03",
    title: "Future needs",
    text: "Your expected expenses and changing priorities form an important part of retirement planning.",
  },
  {
    number: "04",
    title: "Inflation",
    text: "The cost of living can change over time, making today's retirement target different from tomorrow's.",
  },
];

export default function RetirementPlanning() {
  const pageRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".retirement-hero-item",
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

      if (lineRef.current) {
        const length = lineRef.current.getTotalLength();

        gsap.set(lineRef.current, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });

        gsap.to(lineRef.current, {
          strokeDashoffset: 0,
          duration: 1.8,
          delay: 0.4,
          ease: "power2.inOut",
        });
      }

      gsap.utils.toArray(".retirement-reveal").forEach((element) => {
        gsap.fromTo(
          element,
          {
            y: 45,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 82%",
              once: true,
            },
          }
        );
      });

      gsap.utils.toArray(".retirement-step").forEach((element, index) => {
        gsap.fromTo(
          element,
          {
            y: 35,
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

      <section className="relative px-6 pb-24 pt-32 sm:px-10 lg:px-16 lg:pb-32 lg:pt-40">
        <div className="pointer-events-none absolute right-[-12%] top-[15%] h-[620px] w-[620px] rounded-full bg-[#123B2A]/[0.045] blur-[130px]" />

        <div className="relative mx-auto max-w-[1440px]">
          <div className="retirement-hero-item flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#C8FF3D]" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#6E716C]">
              RETIREMENT PLANNING
            </span>
          </div>

          <h1 className="retirement-hero-item mt-8 max-w-[1250px] text-[clamp(4rem,9vw,9.5rem)] font-medium leading-[0.84] tracking-[-0.08em]">
            Build for
            <br />
            <span className="text-[#123B2A]">
              the life after.
            </span>
          </h1>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <p className="retirement-hero-item max-w-[650px] text-[16px] leading-7 text-[#6B706A]">
              Build a retirement corpus that gives you the freedom to live
              life on your own terms without financial worries.
            </p>

            <div className="retirement-hero-item flex flex-wrap gap-3">
              <a
                href="/contact"
                className="inline-flex h-[54px] items-center gap-3 rounded-full bg-[#123B2A] px-7 text-[13px] font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#0D2D20]"
              >
                Plan My Retirement
                <span>↗</span>
              </a>

              <a
                href="#retirement-process"
                className="inline-flex h-[54px] items-center gap-3 rounded-full border border-[#CBD6CE] bg-white/50 px-7 text-[13px] font-semibold text-[#123B2A] transition-all duration-300 hover:-translate-y-1 hover:bg-white"
              >
                Explore the approach
                <span>↓</span>
              </a>
            </div>
          </div>

          {/* RETIREMENT TIMELINE */}

          <div className="retirement-hero-item relative mt-24 overflow-hidden border-y border-[#D7DDD6] py-10 lg:mt-32">
            <div className="mb-8 flex items-center justify-between">
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8A8E88]">
                RETIREMENT JOURNEY
              </span>

              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8A8E88]">
                TODAY → FUTURE
              </span>
            </div>

            <div className="relative h-[200px] sm:h-[230px]">
              <svg
                viewBox="0 0 1400 230"
                className="absolute inset-0 h-full w-full"
                fill="none"
              >
                <path
                  d="
                    M 30 165
                    C 180 165, 210 150, 320 145
                    C 430 140, 470 125, 570 125
                    C 670 125, 720 90, 815 92
                    C 910 94, 950 115, 1040 95
                    C 1130 75, 1170 55, 1260 62
                    C 1320 66, 1350 48, 1370 35
                  "
                  stroke="#D4DDD6"
                  strokeWidth="2"
                  strokeLinecap="round"
                />

                <path
                  ref={lineRef}
                  d="
                    M 30 165
                    C 180 165, 210 150, 320 145
                    C 430 140, 470 125, 570 125
                    C 670 125, 720 90, 815 92
                    C 910 94, 950 115, 1040 95
                    C 1130 75, 1170 55, 1260 62
                    C 1320 66, 1350 48, 1370 35
                  "
                  stroke="#123B2A"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>

              <div className="absolute left-[2%] top-[68%]">
                <div className="h-3 w-3 rounded-full bg-[#123B2A]" />

                <span className="mt-3 block text-[10px] font-semibold uppercase tracking-[0.18em] text-[#737872]">
                  Today
                </span>
              </div>

              <div className="absolute left-[40%] top-[50%]">
                <div className="h-3 w-3 rounded-full bg-[#C8FF3D]" />

                <span className="mt-3 block text-[10px] font-semibold uppercase tracking-[0.18em] text-[#737872]">
                  Build
                </span>
              </div>

              <div className="absolute left-[69%] top-[34%]">
                <div className="h-3 w-3 rounded-full bg-[#123B2A]" />

                <span className="mt-3 block text-[10px] font-semibold uppercase tracking-[0.18em] text-[#737872]">
                  Corpus
                </span>
              </div>

              <div className="absolute right-[1%] top-[5%]">
                <div className="h-3 w-3 rounded-full bg-[#C8FF3D]" />

                <span className="mt-3 block text-[10px] font-semibold uppercase tracking-[0.18em] text-[#737872]">
                  Freedom
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="bg-[#F7FBF8] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-28">
          <div className="retirement-reveal">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#123B2A]">
              WHY PLAN EARLY
            </p>

            <h2 className="mt-6 max-w-[600px] text-[clamp(3rem,5vw,5.8rem)] font-medium leading-[0.9] tracking-[-0.065em]">
              Retirement
              <br />
              should feel
              <br />
              <span className="text-[#123B2A]">
                intentional.
              </span>
            </h2>
          </div>

          <div className="retirement-reveal">
            <p className="max-w-[750px] text-[20px] leading-8 tracking-[-0.02em] text-[#343833]">
              A financially planned retirement starts long before the last
              working day. The objective is to create a corpus that can
              support the lifestyle you want without making your future
              dependent on guesswork.
            </p>

            <div className="mt-14 grid gap-8 border-t border-[#DCE8DF] pt-8 sm:grid-cols-3">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8A8E88]">
                  Build
                </p>

                <p className="mt-3 text-[16px] font-medium">
                  While you earn
                </p>
              </div>

              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8A8E88]">
                  Grow
                </p>

                <p className="mt-3 text-[16px] font-medium">
                  Over the years
                </p>
              </div>

              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8A8E88]">
                  Live
                </p>

                <p className="mt-3 text-[16px] font-medium">
                  On your terms
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section
        id="retirement-process"
        className="bg-[#F1EEE7] px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="retirement-reveal mb-16 max-w-[900px]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#123B2A]">
              THE RETIREMENT APPROACH
            </p>

            <h2 className="mt-5 text-[clamp(3rem,6vw,6.5rem)] font-medium leading-[0.88] tracking-[-0.07em]">
              Build today.
              <br />
              <span className="text-[#123B2A]">
                Live tomorrow.
              </span>
            </h2>
          </div>

          <div className="grid border-t border-[#D6DAD3] lg:grid-cols-4">
            {retirementSteps.map((step) => (
              <div
                key={step.number}
                className="retirement-step border-b border-[#D6DAD3] py-9 lg:border-b-0 lg:border-r lg:px-8 lg:py-10 first:lg:pl-0 last:lg:border-r-0"
              >
                <span className="text-[11px] font-semibold tracking-[0.2em] text-[#8B9089]">
                  {step.number}
                </span>

                <h3 className="mt-14 text-[26px] font-medium tracking-[-0.04em]">
                  {step.title}
                </h3>

                <p className="mt-4 max-w-[270px] text-[14px] leading-6 text-[#777C76]">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CORPUS FACTORS
      ===================================================== */}

      <section className="bg-[#F7FBF8] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-24">
          <div className="retirement-reveal">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#123B2A]">
              YOUR RETIREMENT CORPUS
            </p>

            <h2 className="mt-6 max-w-[600px] text-[clamp(3rem,5vw,5.8rem)] font-medium leading-[0.9] tracking-[-0.065em]">
              Know what
              <br />
              your future
              <br />
              <span className="text-[#123B2A]">
                may need.
              </span>
            </h2>

            <p className="mt-7 max-w-[500px] text-[15px] leading-7 text-[#777C76]">
              The amount you may need for retirement can depend on several
              factors. Understanding them helps create a more meaningful
              retirement strategy.
            </p>
          </div>

          <div className="retirement-reveal grid border-l border-t border-[#DCE8DF] sm:grid-cols-2">
            {retirementFactors.map((factor) => (
              <div
                key={factor.number}
                className="min-h-[210px] border-b border-r border-[#DCE8DF] p-7 sm:p-9"
              >
                <span className="text-[10px] font-semibold tracking-[0.2em] text-[#8B9089]">
                  {factor.number}
                </span>

                <h3 className="mt-12 text-[21px] font-medium tracking-[-0.03em]">
                  {factor.title}
                </h3>

                <p className="mt-3 max-w-[270px] text-[14px] leading-6 text-[#777C76]">
                  {factor.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          DARK FEATURE
      ===================================================== */}

      <section className="bg-[#123B2A] px-6 py-24 text-white sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="retirement-reveal">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#C8FF3D]">
              FINANCIAL FREEDOM
            </p>

            <h2 className="mt-6 max-w-[700px] text-[clamp(3.2rem,6vw,6.5rem)] font-medium leading-[0.86] tracking-[-0.07em]">
              The goal isn't
              <br />
              just to retire.
              <br />
              <span className="text-[#C8FF3D]">
                It's to live.
              </span>
            </h2>

            <p className="mt-7 max-w-[550px] text-[15px] leading-7 text-white/50">
              A well-planned retirement can give you greater freedom to spend
              your time and money on the things that matter to you.
            </p>
          </div>

          <div className="retirement-reveal">
            <div className="relative min-h-[430px] overflow-hidden rounded-[32px] border border-white/10 bg-[#0D3022] p-8 sm:p-10">
              <div className="absolute right-[-100px] top-[-100px] h-[320px] w-[320px] rounded-full border border-[#C8FF3D]/10" />

              <div className="absolute right-[-40px] top-[25%] h-[250px] w-[250px] rounded-full border border-[#C8FF3D]/10" />

              <div className="relative">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/35">
                  THE IDEA
                </p>

                <p className="mt-8 max-w-[390px] text-[32px] font-medium leading-[1] tracking-[-0.04em] sm:text-[42px]">
                  Your working years can fund the freedom of your later
                  years.
                </p>

                <div className="mt-20 border-t border-white/10 pt-6">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                      BUILD
                    </span>

                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                      GROW
                    </span>

                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#C8FF3D]">
                      LIVE
                    </span>
                  </div>

                  <div className="relative mt-6 h-[2px] bg-white/10">
                    <div className="absolute left-0 top-0 h-full w-[76%] bg-[#C8FF3D]" />

                    <span className="absolute left-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-white" />

                    <span className="absolute left-[76%] top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C8FF3D]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="bg-[#F1EEE7] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="retirement-reveal mx-auto max-w-[1100px] text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#123B2A]">
            PLAN FOR WHAT COMES NEXT
          </span>

          <h2 className="mx-auto mt-6 max-w-[950px] text-[clamp(3.2rem,6vw,6.5rem)] font-medium leading-[0.88] tracking-[-0.065em]">
            Give your future
            <br />
            a stronger foundation.
          </h2>

          <p className="mx-auto mt-7 max-w-[600px] text-[15px] leading-7 text-[#737770]">
            Start understanding your retirement needs and explore a strategy
            built around the life you want after work.
          </p>

          <div className="mt-9">
            <a
              href="/contact"
              className="inline-flex h-[54px] items-center gap-3 rounded-full bg-[#123B2A] px-8 text-[13px] font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#0D2D20]"
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