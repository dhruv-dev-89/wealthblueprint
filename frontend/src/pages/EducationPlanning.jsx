import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

const buildingBlocks = [
  {
    number: "01",
    title: "Goal",
    text: "Know what the education goal is and when the money may be required.",
    tone: "blue",
  },
  {
    number: "02",
    title: "Time",
    text: "Use the available time horizon to structure a long-term savings strategy.",
    tone: "paper",
  },
  {
    number: "03",
    title: "Growth",
    text: "Regular investing can help your education goal benefit from long-term growth.",
    tone: "lime",
  },
  {
    number: "04",
    title: "Review",
    text: "Revisit the plan as education choices, timelines and financial priorities evolve.",
    tone: "green",
  },
];

const journey = [
  {
    number: "01",
    title: "Today",
    text: "Understand the education goal and the time available to prepare.",
  },
  {
    number: "02",
    title: "School years",
    text: "Keep the plan aligned as your child's needs and your financial priorities change.",
  },
  {
    number: "03",
    title: "Higher education",
    text: "Move closer to the point where the education corpus may be required.",
  },
  {
    number: "04",
    title: "The opportunity",
    text: "Be better prepared when an important education decision arrives.",
  },
];

const questions = [
  {
    label: "GOAL",
    title: "What are we planning for?",
    text: "Start with the education objective rather than simply choosing an investment product.",
  },
  {
    label: "TIMELINE",
    title: "When may the money be needed?",
    text: "The time available influences how the education plan can be structured.",
  },
  {
    label: "CONTRIBUTION",
    title: "What can we invest consistently?",
    text: "A practical plan should fit within the broader financial priorities of the family.",
  },
  {
    label: "REVIEW",
    title: "What needs to change over time?",
    text: "Education choices and financial circumstances can evolve, so the plan should be revisited.",
  },
];

function EducationHeroVisual() {
  return (
    <div className="relative h-[500px] w-full overflow-hidden rounded-[30px] bg-[#EAF7EF] sm:h-[560px]">
      {/* subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(#123B2A12 1px, transparent 1px), linear-gradient(90deg, #123B2A12 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* top label */}
      <div className="absolute left-7 top-7 sm:left-9 sm:top-9">
        <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#123B2A]/45">
          EDUCATION FUND
        </p>
      </div>

      {/* main editorial typography */}
      <div className="absolute left-7 top-[105px] sm:left-9 sm:top-[115px]">
        <p className="text-[clamp(3.2rem,6vw,6.2rem)] font-medium leading-[0.82] tracking-[-0.075em] text-[#123B2A]">
          Start
          <br />
          <span className="text-[#3157C8]">early.</span>
        </p>

        <p className="mt-7 max-w-[220px] text-[11px] uppercase leading-5 tracking-[0.18em] text-[#123B2A]/40">
          More time can give
          <br />
          the goal more room
          <br />
          to grow.
        </p>
      </div>

      {/* architectural composition */}
      <div className="absolute bottom-0 right-0 h-[300px] w-[62%] sm:h-[335px]">
        {/* back structure */}
        <div className="absolute bottom-0 right-[24%] h-[240px] w-[100px] bg-[#123B2A] sm:h-[270px] sm:w-[115px]" />

        {/* middle structure */}
        <div className="absolute bottom-0 right-[7%] h-[180px] w-[115px] bg-[#3157C8] sm:h-[205px] sm:w-[135px]" />

        {/* front lime structure */}
        <div className="absolute bottom-0 right-[-3%] h-[115px] w-[105px] bg-[#C8FF3D] sm:h-[135px] sm:w-[125px]" />

        {/* connecting line */}
        <div className="absolute bottom-[245px] right-[33%] h-px w-[150px] rotate-[-32deg] origin-right bg-[#123B2A]/30 sm:bottom-[275px] sm:w-[180px]" />

        {/* small goal point */}
        <div className="absolute bottom-[294px] right-[58%] h-3 w-3 rounded-full bg-[#3157C8] sm:bottom-[326px]" />

        {/* labels */}
        <div className="absolute bottom-[255px] right-[53%] text-right sm:bottom-[285px]">
          <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#123B2A]/40">
            GOAL
          </p>
        </div>

        <div className="absolute bottom-[195px] right-[24%] text-[8px] font-semibold uppercase tracking-[0.2em] text-white/55">
          PLAN
        </div>

        <div className="absolute bottom-[138px] right-[7%] text-[8px] font-semibold uppercase tracking-[0.2em] text-white/55">
          GROW
        </div>

        <div className="absolute bottom-[72px] right-[2%] text-[8px] font-semibold uppercase tracking-[0.2em] text-[#123B2A]/55">
          FUTURE
        </div>
      </div>

      {/* bottom caption */}
      <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between border-t border-[#123B2A]/12 pt-4 sm:left-9 sm:right-9">
        <span className="text-[9px] font-semibold uppercase tracking-[0.24em] text-[#123B2A]/40">
          PLAN · INVEST · REVIEW
        </span>

        <span className="text-[9px] font-semibold uppercase tracking-[0.24em] text-[#123B2A]/30">
          01 — 04
        </span>
      </div>
    </div>
  );
}


function EducationPlanning() {
  const pageRef = useRef(null);
  const blocksRef = useRef(null);
  const journeyRef = useRef(null);
  const questionsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /*
        IMPORTANT:
        Hero is intentionally NOT animated.
        No floating / rotating / moving hero elements.
      */

      gsap.from(".edu-block", {
        y: 35,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: blocksRef.current,
          start: "top 78%",
        },
      });

      gsap.from(".edu-journey-item", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: journeyRef.current,
          start: "top 78%",
        },
      });

      gsap.from(".edu-question", {
        y: 25,
        opacity: 0,
        duration: 0.65,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: questionsRef.current,
          start: "top 80%",
        },
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={pageRef}
      className="min-h-screen overflow-hidden bg-[#F7FBF8] text-[#11110F]"
    >
      <Navbar />

      {/* =====================================================
          HERO
      ===================================================== */}
      
{/* =====================================================
    HERO
===================================================== */}
<section className="px-6 pb-24 pt-10 sm:px-10 lg:px-16 lg:pb-32 lg:pt-28">
  <div className="mx-auto max-w-[1440px]">
    <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.95fr] lg:gap-20">

      {/* LEFT */}
      <div>
        <p className="mb-8 text-[10px] font-semibold uppercase tracking-[0.32em] text-[#3157C8]">
          EDUCATION PLANNING
        </p>

        <h1 className="max-w-[850px] text-[clamp(4.3rem,8.5vw,9rem)] font-medium leading-[0.84] tracking-[-0.085em]">
          Give their
          <br />
          <span className="text-[#3157C8]">
            future room
          </span>
          <br />
          to grow.
        </h1>

        <div className="mt-11 flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-[480px] text-[15px] leading-7 text-[#11110F]/55">
            Ensure your child's academic dreams are never limited by
            finances through focused education savings strategies.
          </p>

          <Link
            to="/contact"
            className="inline-flex h-[52px] shrink-0 items-center justify-center gap-3 rounded-full bg-[#123B2A] px-7 text-[12px] font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#0D3022]"
          >
            Discover Education Planning
            <span>↗</span>
          </Link>
        </div>
      </div>

      {/* RIGHT */}
      <div>
        <EducationHeroVisual />
      </div>
    </div>

    {/* bottom information row */}
    <div className="mt-14 grid border-t border-[#11110F]/12 pt-5 sm:grid-cols-3">
      <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#11110F]/30">
        START EARLY
      </span>

      <span className="hidden text-center text-[9px] font-semibold uppercase tracking-[0.25em] text-[#11110F]/30 sm:block">
        INVEST CONSISTENTLY
      </span>

      <span className="text-right text-[9px] font-semibold uppercase tracking-[0.25em] text-[#11110F]/30">
        STAY THE COURSE
      </span>
    </div>
  </div>
</section>

      {/* =====================================================
          JOURNEY
      ===================================================== */}
      <section
        ref={journeyRef}
        className="bg-[#EAF7EF] px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr]">
            {/* LEFT */}
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#123B2A]/50">
                THE EDUCATION JOURNEY
              </p>

              <h2 className="mt-7 max-w-[470px] text-[clamp(3rem,5vw,5.7rem)] font-medium leading-[0.9] tracking-[-0.065em]">
                The plan
                <br />
                grows with
                <br />
                <span className="text-[#123B2A]">the journey.</span>
              </h2>
            </div>

            {/* RIGHT */}
            <div>
              {journey.map((item) => (
                <article
                  key={item.number}
                  className="edu-journey-item grid gap-6 border-b border-[#123B2A]/15 py-9 sm:grid-cols-[70px_180px_1fr] sm:items-start"
                >
                  <span className="text-[11px] font-semibold tracking-[0.2em] text-[#123B2A]/40">
                    {item.number}
                  </span>

                  <h3 className="text-[27px] font-medium tracking-[-0.045em]">
                    {item.title}
                  </h3>

                  <p className="max-w-[470px] text-[14px] leading-6 text-[#11110F]/50">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          QUESTIONS
      ===================================================== */}
      <section
        ref={questionsRef}
        className="px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="border-t border-[#11110F]/15 pt-8">
            <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
              {/* LEFT */}
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#11110F]/40">
                  BEFORE YOU INVEST
                </p>

                <h2 className="mt-7 max-w-[430px] text-[clamp(3rem,5vw,5.8rem)] font-medium leading-[0.9] tracking-[-0.065em]">
                  Four
                  <br />
                  questions
                  <br />
                  <span className="text-[#3157C8]">matter.</span>
                </h2>
              </div>

              {/* RIGHT */}
              <div>
                {questions.map((item) => (
                  <article
                    key={item.label}
                    className="edu-question grid gap-5 border-b border-[#11110F]/12 py-7 sm:grid-cols-[120px_1fr_1.2fr] sm:items-start"
                  >
                    <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#3157C8]">
                      {item.label}
                    </span>

                    <h3 className="text-[21px] font-medium leading-tight tracking-[-0.035em]">
                      {item.title}
                    </h3>

                    <p className="max-w-[390px] text-[14px] leading-6 text-[#11110F]/50">
                      {item.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="px-6 pb-8 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1440px] overflow-hidden rounded-[30px] bg-[#123B2A] px-7 py-20 text-white sm:px-12 lg:px-20 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C8FF3D]">
                PLAN FOR THEIR FUTURE
              </p>

              <h2 className="mt-8 max-w-[900px] text-[clamp(3.5rem,7vw,7rem)] font-medium leading-[0.86] tracking-[-0.07em]">
                Give their
                <br />
                education a
                <br />
                <span className="text-[#C8FF3D]">head start.</span>
              </h2>
            </div>

            <div>
              <p className="max-w-[400px] text-[15px] leading-7 text-white/55">
                Discover dedicated child education savings plans and build a
                strategy around the goal, timeline and priorities that matter
                to your family.
              </p>

              <Link
                to="/contact"
                className="mt-8 inline-flex h-[54px] items-center gap-3 rounded-full bg-[#C8FF3D] px-7 text-[12px] font-semibold text-[#123B2A] transition duration-300 hover:-translate-y-1"
              >
                Start Planning
                <span>↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default EducationPlanning;