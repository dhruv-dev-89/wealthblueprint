import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

/* =========================================================
   FINANCIAL PLANNING
========================================================= */

const planningStages = [
  {
    number: "01",
    title: "Understand",
    text: "Start by understanding your current financial position, priorities and the goals that matter most to you.",
  },
  {
    number: "02",
    title: "Prioritise",
    text: "Bring short-term needs and long-term ambitions together so your money has a clearer direction.",
  },
  {
    number: "03",
    title: "Plan",
    text: "Create a structured financial plan connecting savings, investments, protection and future goals.",
  },
  {
    number: "04",
    title: "Review",
    text: "Your financial priorities evolve with life. Review the plan and make adjustments as circumstances change.",
  },
];

const lifeStages = [
  {
    number: "01",
    title: "20s",
    text: "Build strong financial habits, establish savings and start investing with long-term goals in mind.",
  },
  {
    number: "02",
    title: "30s",
    text: "Balance growing responsibilities with investments, protection and important life milestones.",
  },
  {
    number: "03",
    title: "40s",
    text: "Strengthen wealth creation while preparing for major goals and increasing financial responsibilities.",
  },
  {
    number: "04",
    title: "50s+",
    text: "Focus on financial security, retirement readiness and creating a sustainable future.",
  },
];

/* =========================================================
   PAGE
========================================================= */

export default function FinancialPlanning() {
  const pageRef = useRef(null);
  const heroLineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* HERO */

      gsap.fromTo(
        ".financial-hero-item",
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

      /* HERO LINE */

      if (heroLineRef.current) {
        const length = heroLineRef.current.getTotalLength();

        gsap.set(heroLineRef.current, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });

        gsap.to(heroLineRef.current, {
          strokeDashoffset: 0,
          duration: 1.8,
          delay: 0.45,
          ease: "power2.inOut",
        });
      }

      /* REVEALS */

      gsap.utils.toArray(".financial-reveal").forEach((element) => {
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

      /* STAGE CARDS */

      gsap.utils.toArray(".planning-stage").forEach((element, index) => {
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
        <div className="pointer-events-none absolute right-[-15%] top-[15%] h-[600px] w-[600px] rounded-full bg-[#123B2A]/[0.04] blur-[120px]" />

        <div className="relative mx-auto max-w-[1440px]">
          <div className="financial-hero-item flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#C8FF3D]" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#6E716C]">
              FINANCIAL PLANNING
            </span>
          </div>

          <h1 className="financial-hero-item mt-8 max-w-[1200px] text-[clamp(4rem,9vw,9.5rem)] font-medium leading-[0.84] tracking-[-0.08em]">
            Your money.
            <br />
            <span className="text-[#123B2A]">
              Your bigger picture.
            </span>
          </h1>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <p className="financial-hero-item max-w-[650px] text-[16px] leading-7 text-[#6B706A]">
              Discover financial planning designed to connect your goals,
              savings, investments and future priorities into one clear
              direction.
            </p>

            <div className="financial-hero-item flex flex-wrap gap-3">
              <a
                href="/contact"
                className="inline-flex h-[54px] items-center gap-3 rounded-full bg-[#123B2A] px-7 text-[13px] font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#0D2D20]"
              >
                Start Your Plan
                <span>↗</span>
              </a>

              <a
                href="#process"
                className="inline-flex h-[54px] items-center gap-3 rounded-full border border-[#CBD6CE] bg-white/50 px-7 text-[13px] font-semibold text-[#123B2A] transition-all duration-300 hover:-translate-y-1 hover:bg-white"
              >
                How it works
                <span>↓</span>
              </a>
            </div>
          </div>

          {/* HERO VISUAL */}

          
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="bg-[#F7FBF8] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-28">
          <div className="financial-reveal">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#123B2A]">
              THE BIGGER PICTURE
            </p>

            <h2 className="mt-6 max-w-[560px] text-[clamp(3rem,5vw,5.8rem)] font-medium leading-[0.9] tracking-[-0.065em]">
              Financial planning
              <br />
              is more than
              <br />
              <span className="text-[#123B2A]">
                investing.
              </span>
            </h2>
          </div>

          <div className="financial-reveal">
            <p className="max-w-[750px] text-[20px] leading-8 tracking-[-0.02em] text-[#343833]">
              A financial plan brings the important parts of your financial
              life together. It helps you understand where you are today,
              define where you want to go and create a practical path between
              the two.
            </p>

            <div className="mt-14 grid gap-8 border-t border-[#DCE8DF] pt-8 sm:grid-cols-3">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8A8E88]">
                  Goals
                </p>

                <p className="mt-3 text-[16px] font-medium">
                  What matters to you
                </p>
              </div>

              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8A8E88]">
                  Money
                </p>

                <p className="mt-3 text-[16px] font-medium">
                  How it should work
                </p>
              </div>

              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8A8E88]">
                  Future
                </p>

                <p className="mt-3 text-[16px] font-medium">
                  Where you want to be
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
        id="process"
        className="bg-[#F1EEE7] px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="financial-reveal mb-16 max-w-[850px]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#123B2A]">
              THE PROCESS
            </p>

            <h2 className="mt-5 text-[clamp(3rem,6vw,6.5rem)] font-medium leading-[0.88] tracking-[-0.07em]">
              From financial
              <br />
              <span className="text-[#123B2A]">
                picture to plan.
              </span>
            </h2>
          </div>

          <div className="grid border-t border-[#D6DAD3] lg:grid-cols-4">
            {planningStages.map((stage) => (
              <div
                key={stage.number}
                className="planning-stage border-b border-[#D6DAD3] py-9 lg:border-b-0 lg:border-r lg:px-8 lg:py-10 first:lg:pl-0 last:lg:border-r-0"
              >
                <span className="text-[11px] font-semibold tracking-[0.2em] text-[#8B9089]">
                  {stage.number}
                </span>

                <h3 className="mt-14 text-[26px] font-medium tracking-[-0.04em]">
                  {stage.title}
                </h3>

                <p className="mt-4 max-w-[260px] text-[14px] leading-6 text-[#777C76]">
                  {stage.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          LIFE STAGES
      ===================================================== */}

      <section className="bg-[#F7FBF8] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="financial-reveal grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#123B2A]">
                THROUGH LIFE
              </p>

              <h2 className="mt-6 max-w-[550px] text-[clamp(3rem,5vw,5.8rem)] font-medium leading-[0.9] tracking-[-0.065em]">
                Your plan
                <br />
                changes as
                <br />
                <span className="text-[#123B2A]">
                  life changes.
                </span>
              </h2>

              <p className="mt-7 max-w-[480px] text-[15px] leading-7 text-[#777C76]">
                Financial priorities, savings and investment goals can evolve
                across different stages of life.
              </p>
            </div>

            <div className="grid border-t border-[#DCE8DF]">
              {lifeStages.map((stage) => (
                <div
                  key={stage.number}
                  className="grid gap-5 border-b border-[#DCE8DF] py-7 sm:grid-cols-[80px_180px_1fr] sm:items-start"
                >
                  <span className="text-[11px] font-semibold tracking-[0.2em] text-[#8B9089]">
                    {stage.number}
                  </span>

                  <h3 className="text-[22px] font-medium tracking-[-0.03em]">
                    {stage.title}
                  </h3>

                  <p className="max-w-[450px] text-[14px] leading-6 text-[#777C76]">
                    {stage.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          GOAL BASED
      ===================================================== */}

      <section className="bg-[#123B2A] px-6 py-24 text-white sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="financial-reveal">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#C8FF3D]">
              GOAL-BASED PLANNING
            </p>

            <h2 className="mt-6 max-w-[620px] text-[clamp(3rem,5.5vw,6rem)] font-medium leading-[0.88] tracking-[-0.065em]">
              Give every
              <br />
              rupee a
              <br />
              <span className="text-[#C8FF3D]">
                purpose.
              </span>
            </h2>

            <p className="mt-7 max-w-[500px] text-[15px] leading-7 text-white/50">
              Investment planning can connect your money with important goals
              such as education, home ownership, marriage and retirement.
            </p>
          </div>

          <div className="financial-reveal">
            <div className="grid grid-cols-2 border-l border-t border-white/10">
              {[
                ["01", "Education"],
                ["02", "Home"],
                ["03", "Family"],
                ["04", "Retirement"],
              ].map(([number, title]) => (
                <div
                  key={number}
                  className="min-h-[170px] border-b border-r border-white/10 p-6 sm:p-8"
                >
                  <span className="text-[10px] font-semibold tracking-[0.2em] text-white/30">
                    {number}
                  </span>

                  <h3 className="mt-12 text-[20px] font-medium">
                    {title}
                  </h3>

                  <span className="mt-3 block text-[#C8FF3D]">
                    ↗
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="bg-[#F1EEE7] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="financial-reveal mx-auto max-w-[1100px] text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#123B2A]">
            START WITH A PLAN
          </span>

          <h2 className="mx-auto mt-6 max-w-[900px] text-[clamp(3.2rem,6vw,6.5rem)] font-medium leading-[0.88] tracking-[-0.065em]">
            Bring your financial
            <br />
            picture together.
          </h2>

          <p className="mx-auto mt-7 max-w-[600px] text-[15px] leading-7 text-[#737770]">
            Explore a structured approach to financial planning and connect
            today's decisions with tomorrow's goals.
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