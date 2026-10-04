import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

const InvestmentPlanning = () => {
  const pageRef = useRef(null);

  const processSectionRef = useRef(null);
  const processStepsRef = useRef([]);
  const processVisualsRef = useRef([]);

  const investmentSteps = [
    {
      number: "01",
      eyebrow: "UNDERSTAND",
      title: "Your goals.",
      description:
        "We start with what actually matters to you — your goals, priorities, current finances, and the life you want your money to support.",
      visual: "goal",
    },
    {
      number: "02",
      eyebrow: "PLAN",
      title: "Your strategy.",
      description:
        "Your goals, risk comfort, and time horizon come together to create an investment strategy with a clear direction.",
      visual: "plan",
    },
    {
      number: "03",
      eyebrow: "INVEST",
      title: "Put it to work.",
      description:
        "The strategy becomes action through disciplined investing across the right mix of opportunities for your plan.",
      visual: "invest",
    },
    {
      number: "04",
      eyebrow: "REVIEW",
      title: "Refine over time.",
      description:
        "Markets change. Priorities change. We review your strategy and refine it as your financial journey evolves.",
      visual: "review",
    },
  ];

  /* =========================================================
     PROCESS VISUAL
  ========================================================== */

  const ProcessVisual = ({ type }) => {
    if (type === "goal") {
      return (
        <div className="relative h-[300px] w-[300px]">
          <div className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#DCE8DF]" />

          <div className="absolute left-1/2 top-1/2 h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#DCE8DF]" />

          <div className="absolute left-1/2 top-1/2 h-[100px] w-[100px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#123B2A] shadow-[0_20px_60px_rgba(18,59,42,0.18)]">
            <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C8FF3D]" />
          </div>

          <span className="absolute left-[18px] top-[75px] text-[9px] font-semibold uppercase tracking-[0.25em] text-[#123B2A]/35">
            Goal
          </span>

          <span className="absolute right-[8px] top-[110px] text-[9px] font-semibold uppercase tracking-[0.25em] text-[#123B2A]/35">
            You
          </span>

          <span className="absolute bottom-[45px] left-[75px] text-[9px] font-semibold uppercase tracking-[0.25em] text-[#123B2A]/35">
            Priorities
          </span>

          <span className="absolute right-[42px] bottom-[70px] h-2 w-2 rounded-full bg-[#16A34A]" />

          <span className="absolute left-[42px] top-[145px] h-2 w-2 rounded-full bg-[#3157C8]" />

          <span className="absolute right-[70px] top-[42px] h-1.5 w-1.5 rounded-full bg-[#16A34A]" />
        </div>
      );
    }

    if (type === "plan") {
      return (
        <div className="relative h-[300px] w-[330px]">
          <div className="absolute bottom-[55px] left-[25px] h-px w-[280px] bg-[#DCE8DF]" />

          <div className="absolute bottom-[56px] left-[40px] h-[65px] w-[42px] rounded-t-[4px] bg-[#EAF7EF]" />

          <div className="absolute bottom-[56px] left-[94px] h-[105px] w-[42px] rounded-t-[4px] bg-[#D8EDE0]" />

          <div className="absolute bottom-[56px] left-[148px] h-[150px] w-[42px] rounded-t-[4px] bg-[#123B2A]" />

          <div className="absolute bottom-[56px] left-[202px] h-[125px] w-[42px] rounded-t-[4px] bg-[#C8FF3D]" />

          <div className="absolute left-[35px] top-[48px]">
            <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#123B2A]/35">
              Strategy
            </p>

            <p className="mt-2 text-[22px] font-medium tracking-[-0.04em] text-[#123B2A]">
              Built around you.
            </p>
          </div>
        </div>
      );
    }

    if (type === "invest") {
      return (
        <div className="relative h-[300px] w-[330px]">
          <svg
            viewBox="0 0 330 300"
            className="h-full w-full overflow-visible"
          >
            <path
              d="M30 235 C78 230 85 190 125 200 C165 210 175 145 215 158 C255 170 265 105 305 58"
              fill="none"
              stroke="#DCE8DF"
              strokeWidth="18"
              strokeLinecap="round"
            />

            <path
              d="M30 235 C78 230 85 190 125 200 C165 210 175 145 215 158 C255 170 265 105 305 58"
              fill="none"
              stroke="#16A34A"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            <circle cx="30" cy="235" r="6" fill="#123B2A" />

            <circle cx="125" cy="200" r="5" fill="#3157C8" />

            <circle cx="215" cy="158" r="5" fill="#16A34A" />

            <circle cx="305" cy="58" r="7" fill="#123B2A" />
          </svg>

          <div className="absolute bottom-[12px] left-[28px]">
            <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#123B2A]/35">
              Invest
            </p>

            <p className="mt-1 text-[14px] font-medium text-[#123B2A]">
              Put the strategy to work.
            </p>
          </div>
        </div>
      );
    }

    return (
      <div className="relative h-[300px] w-[330px]">
        <div className="absolute left-[40px] top-[48px]">
          <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#123B2A]/35">
            Review
          </p>

          <p className="mt-2 text-[24px] font-medium tracking-[-0.04em] text-[#123B2A]">
            Refine as life changes.
          </p>
        </div>

        <div className="absolute bottom-[55px] left-[35px] right-[35px] h-[115px]">
          <svg
            viewBox="0 0 300 115"
            className="h-full w-full"
          >
            <path
              d="M5 88 C45 82 52 55 92 63 C125 70 130 35 164 43 C195 50 205 26 245 32 C265 35 280 18 295 8"
              fill="none"
              stroke="#DCE8DF"
              strokeWidth="10"
              strokeLinecap="round"
            />

            <path
              d="M5 88 C45 82 52 55 92 63 C125 70 130 35 164 43 C195 50 205 26 245 32 C265 35 280 18 295 8"
              fill="none"
              stroke="#16A34A"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className="absolute bottom-[35px] right-[30px] rounded-full bg-[#EAF7EF] px-4 py-2">
          <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#123B2A]">
            Evolve
          </span>
        </div>
      </div>
    );
  };

  /* =========================================================
     EFFECTS
  ========================================================== */

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* HERO */

      gsap.from(".investment-hero-item", {
        y: 35,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
      });

      gsap.from(".hero-art", {
        scale: 0.9,
        opacity: 0,
        rotate: -4,
        duration: 1.4,
        ease: "power3.out",
      });

      gsap.to(".hero-floating-dot", {
        y: -12,
        duration: 2.3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.2,
      });

      /* INTRO */

      gsap.from(".investment-intro-item", {
        scrollTrigger: {
          trigger: ".investment-intro",
          start: "top 75%",
        },
        y: 45,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
      });

      /* PLANNING CARDS */

      gsap.from(".planning-card", {
        scrollTrigger: {
          trigger: ".planning-grid",
          start: "top 78%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      });

      /* PROCESS */

      const processSteps = processStepsRef.current;
      const processVisuals = processVisualsRef.current;

      gsap.set(processSteps, {
        opacity: 0,
        y: 30,
        visibility: "hidden",
      });

      gsap.set(processVisuals, {
        opacity: 0,
        scale: 0.92,
        visibility: "hidden",
      });

      const showStep = (index) => {
        processSteps.forEach((step, i) => {
          if (!step) return;

          if (i === index) {
            gsap.set(step, {
              visibility: "visible",
            });

            gsap.to(step, {
              opacity: 1,
              y: 0,
              duration: 0.45,
              ease: "power3.out",
              overwrite: true,
            });
          } else {
            gsap.to(step, {
              opacity: 0,
              y: -20,
              duration: 0.25,
              ease: "power2.out",
              overwrite: true,
              onComplete: () => {
                if (i !== index) {
                  gsap.set(step, {
                    visibility: "hidden",
                  });
                }
              },
            });
          }
        });

        processVisuals.forEach((visual, i) => {
          if (!visual) return;

          if (i === index) {
            gsap.set(visual, {
              visibility: "visible",
            });

            gsap.to(visual, {
              opacity: 1,
              scale: 1,
              duration: 0.55,
              ease: "power3.out",
              overwrite: true,
            });
          } else {
            gsap.to(visual, {
              opacity: 0,
              scale: 0.94,
              duration: 0.25,
              ease: "power2.out",
              overwrite: true,
              onComplete: () => {
                if (i !== index) {
                  gsap.set(visual, {
                    visibility: "hidden",
                  });
                }
              },
            });
          }
        });
      };

      showStep(0);

      const processTrigger = ScrollTrigger.create({
        trigger: processSectionRef.current,
        start: "top top",
        end: () => `+=${window.innerHeight * 3.2}`,
        pin: true,
        pinSpacing: true,
        scrub: 0.7,
        anticipatePin: 1,

        onUpdate: (self) => {
          const progress = self.progress;

          let index = 0;

          if (progress >= 0.75) {
            index = 3;
          } else if (progress >= 0.5) {
            index = 2;
          } else if (progress >= 0.25) {
            index = 1;
          }

          showStep(index);
        },
      });

      /* CATEGORIES */

      gsap.from(".category-card", {
        scrollTrigger: {
          trigger: ".investment-categories",
          start: "top 78%",
        },
        y: 45,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      });

      /* WHO IT IS FOR */

      gsap.from(".audience-card", {
        scrollTrigger: {
          trigger: ".audience-grid",
          start: "top 78%",
        },
        y: 35,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
      });

      /* CTA */

      gsap.from(".investment-cta-item", {
        scrollTrigger: {
          trigger: ".investment-cta",
          start: "top 78%",
        },
        y: 35,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      });

      return () => {
        processTrigger.kill();
      };
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={pageRef}
      className="
        min-h-screen
        overflow-hidden
        bg-[#F7FBF8]
        text-[#17201B]
      "
    >
      <Navbar />

      {/* =====================================================
          HERO
      ====================================================== */}

      <section
        className="
          relative
          min-h-[calc(100vh-72px)]
          overflow-hidden
          bg-[#F1EEE7]
          px-6
          text-[#11110F]
          sm:px-10
          lg:px-16
          lg:pt-15
        "
      >
        {/* subtle grid */}

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(17,17,15,0.09) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(17,17,15,0.09) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "120px 120px",
          }}
        />

        {/* atmosphere */}

        <div
          className="
            pointer-events-none
            absolute
            -right-[180px]
            -top-[240px]
            h-[700px]
            w-[700px]
            rounded-full
            bg-[#D8D0C1]
            opacity-[0.28]
            blur-[160px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -bottom-[250px]
            left-[30%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#C8FF3D]
            opacity-[0.045]
            blur-[140px]
          "
        />

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-72px)] max-w-[1480px] items-center">
          <div className="grid w-full items-center gap-6 lg:grid-cols-[0.92fr_1.08fr]">

            {/* =================================================
                LEFT
            ================================================== */}

            <div className="relative z-40 pt-10 lg:pt-0">

              <div className="investment-hero-item mb-8 flex items-center gap-4">
                <span className="h-[2px] w-11 bg-[#11110F]" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#11110F]/45">
                  Investment Planning
                </span>
              </div>

              <h1
                className="
                  investment-hero-item
                  max-w-[780px]
                  text-[clamp(4rem,7.4vw,8.2rem)]
                  font-medium
                  leading-[0.78]
                  tracking-[-0.095em]
                  text-[#11110F]
                "
              >
                <span className="block">
                  Build
                </span>

                <span className="relative block w-fit">
                  your wealth.

                  <span
                    className="
                      absolute
                      -bottom-[13px]
                      left-[4px]
                      h-[5px]
                      w-[56%]
                      -rotate-[1deg]
                      bg-[#C8FF3D]
                    "
                  />
                </span>
              </h1>

              <p
                className="
                  investment-hero-item
                  mt-11
                  max-w-[500px]
                  text-[15px]
                  leading-[1.8]
                  text-[#11110F]/55
                  sm:text-[16px]
                "
              >
                An investment strategy shaped around your goals,
                your timeline and the life you want your money
                to create.
              </p>

              <div className="investment-hero-item mt-8 flex flex-wrap gap-3">

                <a
                  href="/contact"
                  className="
                    group
                    inline-flex
                    h-[54px]
                    items-center
                    gap-5
                    rounded-full
                    bg-[#11110F]
                    px-7
                    text-[13px]
                    font-semibold
                    text-[#F1EEE7]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-[#292923]
                  "
                >
                  Start your blueprint

                  <span className="text-[17px] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </a>

                <a
                  href="#approach"
                  className="
                    group
                    inline-flex
                    h-[54px]
                    items-center
                    gap-3
                    rounded-full
                    border
                    border-[#11110F]/15
                    px-7
                    text-[13px]
                    font-medium
                    text-[#11110F]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-white/50
                  "
                >
                  Explore the approach

                  <span className="text-[#11110F]/40 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>

              </div>

              <div className="investment-hero-item mt-10 flex items-center gap-6">

                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#11110F]/30">
                    Approach
                  </p>

                  <p className="mt-1.5 text-[12px] font-medium text-[#11110F]/70">
                    Goal first
                  </p>
                </div>

                <span className="h-7 w-px bg-[#11110F]/10" />

                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#11110F]/30">
                    Horizon
                  </p>

                  <p className="mt-1.5 text-[12px] font-medium text-[#11110F]/70">
                    Long term
                  </p>
                </div>

                <span className="h-7 w-px bg-[#11110F]/10" />

                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#11110F]/30">
                    Focus
                  </p>

                  <p className="mt-1.5 text-[12px] font-medium text-[#11110F]/70">
                    Intentional
                  </p>
                </div>

              </div>

            </div>


            {/* =================================================
                RIGHT — CLEAR INVESTMENT BLUEPRINT
            ================================================== */}

            <div className="relative h-[570px] w-full lg:h-[680px]">

              <div className="hero-art absolute inset-0">

                {/* Ground shadow */}

                <div
                  className="
                    absolute
                    bottom-[11%]
                    right-[6%]
                    h-[90px]
                    w-[560px]
                    rotate-[-7deg]
                    rounded-[50%]
                    bg-black/10
                    blur-[38px]
                  "
                />

                {/* Burgundy back plane */}

                <div
                  className="
                    absolute
                    right-[5%]
                    top-[18%]
                    h-[430px]
                    w-[290px]
                    rotate-[23deg]
                    rounded-[46%]
                    bg-[#3A1720]
                    shadow-[30px_40px_80px_rgba(17,17,15,0.15)]
                  "
                >
                  <div className="absolute inset-[28px] rounded-[46%] border border-[#C8FF3D]/10" />
                </div>


                {/* =================================================
                    MAIN GLASS BLUEPRINT
                ================================================== */}

                <div
                  className="
                    absolute
                    right-[22%]
                    top-[17%]
                    z-20
                    h-[390px]
                    w-[315px]
                    rotate-[-8deg]
                    overflow-hidden
                    rounded-[38px]
                    border
                    border-white/75
                    bg-gradient-to-br
                    from-white/80
                    via-white/35
                    to-[#B8B2A8]/30
                    shadow-[25px_35px_80px_rgba(17,17,15,0.18)]
                    backdrop-blur-[12px]
                  "
                >

                  {/* glass shine */}

                  <div
                    className="
                      absolute
                      -left-[35px]
                      top-[-50px]
                      h-[300px]
                      w-[80px]
                      rotate-[18deg]
                      rounded-full
                      bg-white/50
                      blur-[18px]
                    "
                  />

                  {/* top label */}

                  <div className="absolute left-7 right-7 top-7 flex items-center justify-between">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#11110F]/45">
                      Investment Blueprint
                    </span>

                    <span className="font-mono text-[9px] text-[#11110F]/30">
                      01
                    </span>
                  </div>

                  {/* center title */}

                  <div className="absolute left-7 top-[92px]">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#11110F]/35">
                      Direction
                    </p>

                    <p className="mt-2 text-[29px] font-medium leading-none tracking-[-0.055em] text-[#11110F]">
                      Your money.
                      <br />
                      Your direction.
                    </p>
                  </div>

                  {/* trajectory */}

                  <svg
                    viewBox="0 0 300 150"
                    className="absolute bottom-[88px] left-0 h-[150px] w-full"
                  >
                    <path
                      d="M10 125 C48 120 58 93 88 100 C120 108 128 65 158 75 C190 86 198 48 225 52 C252 56 267 29 292 12"
                      fill="none"
                      stroke="#11110F"
                      strokeOpacity="0.08"
                      strokeWidth="13"
                      strokeLinecap="round"
                    />

                    <path
                      d="M10 125 C48 120 58 93 88 100 C120 108 128 65 158 75 C190 86 198 48 225 52 C252 56 267 29 292 12"
                      fill="none"
                      stroke="#C8FF3D"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />

                    <circle cx="10" cy="125" r="4" fill="#11110F" />

                    <circle cx="88" cy="100" r="4" fill="#C8FF3D" />

                    <circle cx="158" cy="75" r="4" fill="#C8FF3D" />

                    <circle cx="225" cy="52" r="4" fill="#C8FF3D" />

                    <circle cx="292" cy="12" r="6" fill="#C8FF3D" />
                  </svg>

                  {/* bottom metrics */}

                  <div className="absolute bottom-6 left-7 right-7 grid grid-cols-3 gap-2 border-t border-[#11110F]/10 pt-4">

                    <div>
                      <p className="text-[8px] uppercase tracking-[0.18em] text-[#11110F]/30">
                        Goal
                      </p>

                      <p className="mt-1 text-[10px] font-medium text-[#11110F]/70">
                        Defined
                      </p>
                    </div>

                    <div>
                      <p className="text-[8px] uppercase tracking-[0.18em] text-[#11110F]/30">
                        Time
                      </p>

                      <p className="mt-1 text-[10px] font-medium text-[#11110F]/70">
                        Long term
                      </p>
                    </div>

                    <div>
                      <p className="text-[8px] uppercase tracking-[0.18em] text-[#11110F]/30">
                        Risk
                      </p>

                      <p className="mt-1 text-[10px] font-medium text-[#11110F]/70">
                        Considered
                      </p>
                    </div>

                  </div>

                </div>


                {/* =================================================
                    FLOATING LABELS
                ================================================== */}

                <div
                  className="
                    hero-floating-dot
                    absolute
                    left-[3%]
                    top-[39%]
                    z-40
                    flex
                    items-center
                    gap-3
                  "
                >
                  <span className="h-px w-9 bg-[#11110F]/20" />

                  <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#11110F]/35">
                    Goal
                  </span>
                </div>


                <div
                  className="
                    hero-floating-dot
                    absolute
                    right-[3%]
                    top-[25%]
                    z-40
                    rounded-full
                    border
                    border-[#11110F]/10
                    bg-[#F1EEE7]/70
                    px-4
                    py-2
                    backdrop-blur-md
                  "
                >
                  <span className="text-[9px] font-semibold uppercase tracking-[0.24em] text-[#11110F]/45">
                    Long horizon
                  </span>
                </div>


                <div
                  className="
                    hero-floating-dot
                    absolute
                    bottom-[18%]
                    left-[13%]
                    z-40
                    rounded-full
                    bg-[#C8FF3D]
                    px-5
                    py-2.5
                    shadow-[0_14px_35px_rgba(17,17,15,0.10)]
                  "
                >
                  <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-[#11110F]">
                    Goal → Strategy
                  </span>
                </div>


               

                {/* minimal nodes */}

                <span className="absolute left-[30%] top-[14%] h-[7px] w-[7px] rounded-full bg-[#3A1720]" />

                <span className="absolute right-[18%] top-[12%] h-[6px] w-[6px] rounded-full bg-[#C8FF3D]" />

                <span className="absolute bottom-[14%] right-[22%] h-[7px] w-[7px] rounded-full bg-[#11110F]/25" />

              </div>

            </div>

          </div>
        </div>


        {/* bottom metadata */}

        
      </section>


      {/* =====================================================
          INTRO
      ====================================================== */}

      <section className="investment-intro border-t border-[#DCE8DF] bg-white px-6 py-28 sm:px-10 lg:px-16">

        <div className="mx-auto max-w-[1100px] text-center">

          <span className="investment-intro-item text-[11px] font-semibold uppercase tracking-[0.28em] text-[#16A34A]">
            WHY INVESTMENT PLANNING
          </span>

          <h2 className="investment-intro-item mx-auto mt-5 max-w-[900px] text-[clamp(2.5rem,5vw,5rem)] font-medium leading-[0.97] tracking-[-0.055em] text-[#123B2A]">
            Your money should know
            <br />
            <span className="text-[#16A34A]">
              where it is going.
            </span>
          </h2>

          <p className="investment-intro-item mx-auto mt-7 max-w-[720px] text-[16px] leading-7 text-[#17201B]/60">
            Investment planning connects your savings to the
            things that matter to you — whether that means
            building wealth, creating financial independence,
            funding a future goal or simply putting your money
            to work with greater structure.
          </p>

        </div>

      </section>


      {/* =====================================================
          APPROACH
      ====================================================== */}

      


      {/* =====================================================
          PROCESS
      ====================================================== */}

      <section
        ref={processSectionRef}
        className="relative min-h-screen overflow-hidden bg-[#F7FBF8]"
      >

        <div className="flex min-h-screen items-center px-6 py-16 sm:px-10 lg:px-16">

          <div className="mx-auto w-full max-w-[1440px]">

            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">

              <div>

                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#16A34A]">
                  OUR APPROACH
                </span>

                <h2 className="mt-5 max-w-[800px] text-[clamp(3rem,6vw,6.8rem)] font-medium leading-[0.84] tracking-[-0.075em] text-[#123B2A]">
                  A plan built
                  <br />
                  <span className="text-[#3157C8]">
                    around you.
                  </span>
                </h2>

              </div>

              <p className="max-w-[420px] text-[14px] leading-7 text-[#17201B]/50 lg:justify-self-end">
                Investment planning starts with understanding
                where you are, where you want to go, and how
                your strategy should evolve along the way.
              </p>

            </div>


            <div className="relative mt-14 grid min-h-[430px] lg:mt-16 lg:grid-cols-[1fr_0.8fr]">

              {/* LEFT */}

              <div className="relative flex items-center">

                <div className="absolute left-[7px] top-[30px] hidden h-[330px] w-px bg-[#DCE8DF] sm:block" />

                <div className="absolute left-[7px] top-[30px] hidden h-[80px] w-px bg-[#16A34A] sm:block" />

                <div className="relative h-[330px] w-full">

                  {investmentSteps.map((step, index) => (
                    <div
                      key={step.number}
                      ref={(el) => {
                        processStepsRef.current[index] = el;
                      }}
                      className="absolute left-0 top-0 w-full sm:pl-[42px]"
                    >

                      <div className="absolute left-0 top-[3px] hidden h-[15px] w-[15px] items-center justify-center rounded-full border border-[#DCE8DF] bg-[#F7FBF8] sm:flex">

                        <span className="h-[5px] w-[5px] rounded-full bg-[#16A34A]" />

                      </div>

                      <div className="flex items-start gap-5">

                        <span className="w-[28px] pt-1 font-mono text-[10px] tracking-[0.15em] text-[#3157C8]">
                          {step.number}
                        </span>

                        <div className="max-w-[570px]">

                          <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#123B2A]/35">
                            {step.eyebrow}
                          </p>

                          <h3 className="mt-2 text-[clamp(2rem,3.4vw,3.4rem)] font-medium leading-none tracking-[-0.06em] text-[#123B2A]">
                            {step.title}
                          </h3>

                          <p className="mt-4 max-w-[510px] text-[13px] leading-6 text-[#17201B]/50">
                            {step.description}
                          </p>

                        </div>

                      </div>

                    </div>
                  ))}

                </div>

              </div>


              {/* RIGHT */}

              <div className="relative hidden items-center justify-center lg:flex">

                <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#DCE8DF]" />

                <div className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#DCE8DF]/70" />

                <div className="absolute left-1/2 top-1/2 h-[160px] w-[160px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#DCE8DF]/50" />

                {investmentSteps.map((step, index) => (
                  <div
                    key={step.number}
                    ref={(el) => {
                      processVisualsRef.current[index] = el;
                    }}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  >
                    <ProcessVisual type={step.visual} />
                  </div>
                ))}

                <div className="absolute bottom-0 right-0 text-right">

                  <span className="text-[9px] uppercase tracking-[0.25em] text-[#123B2A]/25">
                    WealthBluePrint
                  </span>

                  <p className="mt-1 text-[11px] text-[#123B2A]/35">
                    Plan with intention.
                  </p>

                </div>

              </div>

            </div>


            <div className="mt-5 flex flex-col gap-2 border-t border-[#DCE8DF] pt-4 sm:flex-row sm:items-center sm:justify-between">

              <span className="text-[9px] uppercase tracking-[0.22em] text-[#123B2A]/30">
                Understand → Plan → Invest → Review
              </span>

              <span className="text-[11px] text-[#123B2A]/35">
                A strategy designed to evolve with you.
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          INVESTMENT OPTIONS
      ====================================================== */}

      <section className="investment-categories px-6 py-28 sm:px-10 lg:px-16">

        <div className="mx-auto max-w-[1440px]">

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

            <div>

              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#16A34A]">
                INVESTMENT OPTIONS
              </span>

              <h2 className="mt-5 max-w-[800px] text-[clamp(2.5rem,5vw,5rem)] font-medium leading-[0.95] tracking-[-0.055em] text-[#123B2A]">
                Different tools.
                <br />
                <span className="text-[#3157C8]">
                  One bigger picture.
                </span>
              </h2>

            </div>

            <p className="max-w-[390px] text-[14px] leading-6 text-[#17201B]/55">
              The right mix depends on your goals, time horizon,
              risk profile and broader financial situation.
            </p>

          </div>


          <div className="mt-14 grid gap-4 md:grid-cols-2">

            <article className="category-card group min-h-[300px] rounded-[30px] border border-[#DCE8DF] bg-[#123B2A] p-8 text-white shadow-[0_20px_60px_rgba(18,59,42,0.10)] transition-transform duration-500 hover:-translate-y-1">

              <div className="flex justify-between">

                <span className="text-[11px] uppercase tracking-[0.2em] text-white/45">
                  Growth
                </span>

                <span className="text-white/30">
                  01
                </span>

              </div>

              <h3 className="mt-20 text-[32px] font-medium tracking-[-0.04em]">
                Equity
              </h3>

              <p className="mt-4 max-w-[480px] text-[14px] leading-6 text-white/55">
                Growth-oriented investments that may suit
                long-term goals where market fluctuations can
                be accommodated.
              </p>

            </article>


            <article className="category-card group min-h-[300px] rounded-[30px] border border-[#DCE8DF] bg-white p-8 transition-transform duration-500 hover:-translate-y-1">

              <div className="flex justify-between">

                <span className="text-[11px] uppercase tracking-[0.2em] text-[#16A34A]">
                  Stability
                </span>

                <span className="text-[#123B2A]/25">
                  02
                </span>

              </div>

              <h3 className="mt-20 text-[32px] font-medium tracking-[-0.04em] text-[#123B2A]">
                Debt
              </h3>

              <p className="mt-4 max-w-[480px] text-[14px] leading-6 text-[#17201B]/55">
                Instruments generally considered for stability,
                income requirements and goals where lower
                volatility may be important.
              </p>

            </article>


            <article className="category-card group min-h-[300px] rounded-[30px] border border-[#DCE8DF] bg-white p-8 transition-transform duration-500 hover:-translate-y-1">

              <div className="flex justify-between">

                <span className="text-[11px] uppercase tracking-[0.2em] text-[#16A34A]">
                  Balance
                </span>

                <span className="text-[#123B2A]/25">
                  03
                </span>

              </div>

              <h3 className="mt-20 text-[32px] font-medium tracking-[-0.04em] text-[#123B2A]">
                Hybrid
              </h3>

              <p className="mt-4 max-w-[480px] text-[14px] leading-6 text-[#17201B]/55">
                A combination of asset types designed to balance
                different investment characteristics within one
                portfolio.
              </p>

            </article>


            <article className="category-card group min-h-[300px] rounded-[30px] border border-[#DCE8DF] bg-[#EAF7EF] p-8 transition-transform duration-500 hover:-translate-y-1">

              <div className="flex justify-between">

                <span className="text-[11px] uppercase tracking-[0.2em] text-[#16A34A]">
                  Discipline
                </span>

                <span className="text-[#123B2A]/25">
                  04
                </span>

              </div>

              <h3 className="mt-20 text-[32px] font-medium tracking-[-0.04em] text-[#123B2A]">
                SIP
              </h3>

              <p className="mt-4 max-w-[480px] text-[14px] leading-6 text-[#17201B]/55">
                A systematic way to invest regularly, helping
                create consistency while building towards
                long-term financial goals.
              </p>

            </article>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHO IT IS FOR
      ====================================================== */}

      {/* <section className="bg-white px-6 py-28 sm:px-10 lg:px-16">

        <div className="mx-auto max-w-[1200px]">

          <div className="text-center">

            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#16A34A]">
              WHO IT'S FOR
            </span>

            <h2 className="mx-auto mt-5 max-w-[850px] text-[clamp(2.5rem,5vw,5rem)] font-medium leading-[0.95] tracking-[-0.055em] text-[#123B2A]">
              Wherever you are,
              <br />
              <span className="text-[#3157C8]">
                start with clarity.
              </span>
            </h2>

          </div>


          <div className="audience-grid mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

            {[
              {
                title: "Starting Out",
                text: "Building your first investment habit.",
              },
              {
                title: "Growing Wealth",
                text: "Structuring investments around bigger goals.",
              },
              {
                title: "Protecting Progress",
                text: "Reviewing and refining an existing portfolio.",
              },
              {
                title: "Planning Ahead",
                text: "Connecting investments with future milestones.",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="audience-card rounded-[24px] border border-[#DCE8DF] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(18,59,42,0.06)]"
              >

                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#16A34A]">
                  0{index + 1}
                </span>

                <h3 className="mt-12 text-[21px] font-medium tracking-[-0.03em] text-[#123B2A]">
                  {item.title}
                </h3>

                <p className="mt-3 text-[13px] leading-6 text-[#17201B]/55">
                  {item.text}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section> */}


      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="investment-cta relative overflow-hidden bg-[#123B2A] px-6 py-28 text-white sm:px-10 lg:px-16">

        {/* decorative rings */}

        <div className="pointer-events-none absolute -right-[160px] -top-[180px] h-[500px] w-[500px] rounded-full border border-white/[0.06]" />

        <div className="pointer-events-none absolute -right-[100px] -top-[120px] h-[380px] w-[380px] rounded-full border border-[#C8FF3D]/[0.08]" />

        <div className="pointer-events-none absolute -bottom-[200px] left-[10%] h-[400px] w-[400px] rounded-full bg-[#16A34A]/10 blur-[100px]" />


        <div className="relative z-10 mx-auto max-w-[1100px] text-center">

          <span className="investment-cta-item text-[11px] font-semibold uppercase tracking-[0.28em] text-[#C8FF3D]">
            START WITH A PLAN
          </span>

          <h2 className="investment-cta-item mx-auto mt-6 max-w-[900px] text-[clamp(3rem,6vw,6rem)] font-medium leading-[0.92] tracking-[-0.06em]">
            Give your money
            <br />
            a clearer direction.
          </h2>

          <p className="investment-cta-item mx-auto mt-7 max-w-[600px] text-[15px] leading-7 text-white/55">
            Start with your goals. We can help you understand
            the investment path that may fit your financial
            situation and priorities.
          </p>

          <div className="investment-cta-item mt-9">

            <a
              href="/contact"
              className="
                inline-flex
                h-[54px]
                items-center
                gap-3
                rounded-full
                bg-[#C8FF3D]
                px-8
                text-[13px]
                font-semibold
                text-[#11110F]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#D8FF70]
              "
            >
              Talk to an Expert

              <span>
                ↗
              </span>

            </a>

          </div>

        </div>

      </section>


      <Footer />

    </main>
  );
};

export default InvestmentPlanning;