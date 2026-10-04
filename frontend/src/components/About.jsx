import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-eyebrow", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".about-title", {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".about-copy", {
        y: 25,
        opacity: 0,
        duration: 0.9,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      gsap.from(".about-visual", {
        x: 40,
        opacity: 0,
        duration: 1,
        delay: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      gsap.to(".about-chart-line", {
        strokeDashoffset: 0,
        duration: 1.8,
        delay: 0.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      gsap.to(".about-stat-card", {
        y: -8,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        stagger: 0.25,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-[#F7FBF8] py-28 sm:py-36"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        <div className="grid min-h-[650px] items-center gap-20 lg:grid-cols-[1fr_0.9fr]">

          {/* =====================================
              LEFT
          ===================================== */}

          <div className="relative z-10">

            <div className="about-eyebrow mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-[#16A34A]" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#16A34A]">
                About WealthBluePrint
              </span>
            </div>

            <h2 className="about-title max-w-[720px] text-[clamp(3rem,6vw,6.2rem)] font-medium leading-[0.94] tracking-[-0.055em] text-[#123B2A]">
              Wealth is not
              <br />
              just a number.
            </h2>

            <div className="about-copy mt-10 max-w-[570px]">
              <p className="text-lg leading-8 text-[#46554C]">
                It is the freedom to make choices, the confidence to plan
                ahead, and the clarity to know where you are going.
              </p>

              <p className="mt-6 text-base leading-7 text-[#66736C]">
                WealthBluePrint brings financial planning, investments,
                protection, and long-term goals together into one clear
                picture — helping you make informed decisions at every stage
                of your financial journey.
              </p>

              <Link
                href="/our-story"
                className="group mt-10 inline-flex items-center gap-3 rounded-full bg-[#123B2A] px-6 py-3.5 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#0D3022]"
              >
                Discover our story

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* =====================================
              RIGHT — EDITORIAL VISUAL
          ===================================== */}

          <div className="about-visual relative">

            {/* Main card */}
            <div
              className="
                relative
                mx-auto
                w-full
                max-w-[600px]
                overflow-hidden
                rounded-[36px]
                border
                border-[#D7E5DC]
                bg-white
                p-7
                shadow-[0_40px_90px_rgba(18,59,42,0.10)]
                sm:p-9
              "
            >

              {/* subtle top glow */}
              <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-[#EAF7EF] blur-3xl" />

              {/* Header */}
              <div className="relative flex items-start justify-between">

                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#7A8780]">
                    Your financial picture
                  </div>

                  <div className="mt-2 text-2xl font-medium tracking-[-0.04em] text-[#123B2A]">
                    Built with intention.
                  </div>
                </div>

                <div className="rounded-full border border-[#DCE8DF] px-3 py-1.5 text-[10px] font-medium text-[#16A34A]">
                  Long term
                </div>
              </div>

              {/* =================================
                  CHART
              ================================= */}

              <div className="relative mt-12 h-[250px]">

                {/* horizontal guides */}
                <div className="absolute inset-x-0 top-0 border-t border-[#E8EFEB]" />
                <div className="absolute inset-x-0 top-1/3 border-t border-[#E8EFEB]" />
                <div className="absolute inset-x-0 top-2/3 border-t border-[#E8EFEB]" />
                <div className="absolute inset-x-0 bottom-0 border-t border-[#E8EFEB]" />

                {/* SVG graph */}
                <svg
                  viewBox="0 0 600 250"
                  className="absolute inset-0 h-full w-full overflow-visible"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient
                      id="wealthArea"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="#16A34A"
                        stopOpacity="0.16"
                      />

                      <stop
                        offset="100%"
                        stopColor="#16A34A"
                        stopOpacity="0"
                      />
                    </linearGradient>
                  </defs>

                  {/* area */}
                  <path
                    d="
                      M0 220
                      C60 205 75 210 120 185
                      C165 160 185 175 225 145
                      C270 110 295 135 330 105
                      C370 72 395 92 430 65
                      C470 38 500 60 540 28
                      C565 10 585 18 600 5
                      L600 250
                      L0 250
                      Z
                    "
                    fill="url(#wealthArea)"
                  />

                  {/* main line */}
                  <path
                    className="about-chart-line"
                    d="
                      M0 220
                      C60 205 75 210 120 185
                      C165 160 185 175 225 145
                      C270 110 295 135 330 105
                      C370 72 395 92 430 65
                      C470 38 500 60 540 28
                      C565 10 585 18 600 5
                    "
                    fill="none"
                    stroke="#123B2A"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray="1000"
                    strokeDashoffset="1000"
                  />

                  {/* accent line */}
                  <path
                    d="
                      M0 220
                      C60 205 75 210 120 185
                      C165 160 185 175 225 145
                    "
                    fill="none"
                    stroke="#16A34A"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />

                  {/* final point */}
                  <circle
                    cx="600"
                    cy="5"
                    r="6"
                    fill="#16A34A"
                  />

                  <circle
                    cx="600"
                    cy="5"
                    r="12"
                    fill="#16A34A"
                    fillOpacity="0.12"
                  />
                </svg>

                {/* labels */}
                <div className="absolute bottom-0 left-0 text-[10px] text-[#89948E]">
                  Today
                </div>

                <div className="absolute bottom-0 right-0 text-[10px] text-[#89948E]">
                  Future
                </div>
              </div>

              {/* =================================
                  BOTTOM STATS
              ================================= */}

              <div className="mt-8 grid grid-cols-2 gap-4">

                <div
                  className="
                    about-stat-card
                    rounded-2xl
                    border
                    border-[#DCE8DF]
                    bg-[#F7FBF8]
                    p-5
                  "
                >
                  <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7A8780]">
                    Approach
                  </div>

                  <div className="mt-2 text-lg font-medium text-[#123B2A]">
                    Goal first
                  </div>

                  <p className="mt-1 text-xs leading-5 text-[#718078]">
                    Strategy built around what matters to you.
                  </p>
                </div>

                <div
                  className="
                    about-stat-card
                    rounded-2xl
                    border
                    border-[#DCE8DF]
                    bg-[#F7FBF8]
                    p-5
                  "
                >
                  <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7A8780]">
                    Perspective
                  </div>

                  <div className="mt-2 text-lg font-medium text-[#123B2A]">
                    Long term
                  </div>

                  <p className="mt-1 text-xs leading-5 text-[#718078]">
                    Decisions designed beyond the next market cycle.
                  </p>
                </div>

              </div>
            </div>

            {/* Small floating label */}
            <div
              className="
                absolute
                -bottom-5
                left-5
                rounded-2xl
                border
                border-[#DCE8DF]
                bg-white
                px-5
                py-3
                shadow-[0_18px_40px_rgba(18,59,42,0.08)]
                sm:left-0
              "
            >
              <div className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#7A8780]">
                WealthBluePrint
              </div>

              <div className="mt-1 text-sm font-medium text-[#123B2A]">
                Plan with clarity.
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-px w-full bg-[#DCE8DF]" />
    </section>
  );
}