import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "Your goals, priorities, and the life you want to build.",
  },
  {
    number: "02",
    title: "Create",
    description:
      "A financial plan designed around your unique situation.",
  },
  {
    number: "03",
    title: "Invest",
    description:
      "Put your money to work with a thoughtful long-term strategy.",
  },
  {
    number: "04",
    title: "Grow",
    description:
      "Stay focused, adapt when needed, and build with confidence.",
  },
];

export default function Journey() {
  const sectionRef = useRef(null);
  const pathRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const path = pathRef.current;

    if (!section || !path) return;

    const ctx = gsap.context(() => {
      const length = path.getTotalLength();

      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });

      gsap.to(path, {
        strokeDashoffset: 0,
        duration: 1.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          once: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#F7FBF8] px-4 py-14 sm:px-8 lg:px-2 lg:py-8"
    >
      <div className="mx-auto max-w-[1440px]">

        {/* ================= HEADER ================= */}

        <div className="mx-auto max-w-[680px] text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#16A34A]">
            Your Wealth Journey
          </p>

          <h2 className="mt-4 text-4xl font-normal leading-[1.05] tracking-[-0.045em] text-[#123B2A] sm:text-5xl lg:text-[58px]">
            A clear path
            <br />
            <span className="text-[#6B766F]">
              to a brighter future.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[570px] text-[15px] leading-7 text-[#66736B] sm:text-base">
            We simplify complex financial decisions and turn your goals
            into a clear, step-by-step plan that grows with you.
          </p>

          <a
            href="/financial-planning"
            className="mt-7 inline-flex items-center gap-3 text-sm font-medium text-[#123B2A]"
          >
            <span>How It Works</span>

            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#C9D8CD]">
              ↗
            </span>
          </a>
        </div>

        {/* ================= DESKTOP ================= */}

        <div className="relative   hidden h-[500px] w-320 lg:block">

          {/* ROADMAP */}

          <svg
            viewBox="0 0 1400 500"
            className="absolute inset-0 h-full w-full"
            preserveAspectRatio="none"
          >
            {/* Base line */}

            <path
              d="
                M 70 300
                C 230 300, 260 105, 470 105
                C 680 105, 690 325, 875 325
                C 1060 325, 1080 90, 1330 90
              "
              fill="none"
              stroke="#D7E5DA"
              strokeWidth="2"
              strokeLinecap="round"
            />

            {/* Animated green line */}

            <path
              ref={pathRef}
              d="
                M 70 300
                C 230 300, 260 105, 470 105
                C 680 105, 690 325, 875 325
                C 1060 325, 1080 90, 1330 90
              "
              fill="none"
              stroke="#16A34A"
              strokeWidth="1.5"
              strokeDasharray="4 11"
              strokeLinecap="round"
              opacity="0.65"
            />

            {/* ================= DOT 01 ================= */}

            <circle
              cx="70"
              cy="300"
              r="17"
              fill="#F7FBF8"
              stroke="#72B47F"
              strokeWidth="1"
            />

            <circle
              cx="70"
              cy="300"
              r="5.5"
              fill="#16A34A"
            />

            {/* ================= DOT 02 ================= */}

            <circle
              cx="470"
              cy="105"
              r="17"
              fill="#F7FBF8"
              stroke="#72B47F"
              strokeWidth="1"
            />

            <circle
              cx="470"
              cy="105"
              r="5.5"
              fill="#16A34A"
            />

            {/* ================= DOT 03 ================= */}

            <circle
              cx="875"
              cy="325"
              r="17"
              fill="#F7FBF8"
              stroke="#72B47F"
              strokeWidth="1"
            />

            <circle
              cx="875"
              cy="325"
              r="5.5"
              fill="#16A34A"
            />

            {/* ================= DOT 04 ================= */}

            <circle
              cx="1330"
              cy="90"
              r="20"
              fill="#F7FBF8"
              stroke="#72B47F"
              strokeWidth="1"
            />

            <circle
              cx="1330"
              cy="90"
              r="6.5"
              fill="#16A34A"
            />
          </svg>

          {/* ================= STEP 01 ================= */}

          <div className="absolute left-[4%] top-[330px] w-[250px]">
            <p className="text-[11px] font-medium tracking-[0.22em] text-[#87938B]">
              01
            </p>

            <h3 className="mt-3 text-[23px] font-medium tracking-[-0.03em] text-[#123B2A]">
              Understand
            </h3>

            <p className="mt-3 text-[14px] leading-6 text-[#6B766F]">
              Your goals, priorities, and the life you want to build.
            </p>
          </div>

          {/* ================= STEP 02 ================= */}

          <div className="absolute left-[32.6%] top-[125px] w-[270px]">
            <p className="text-[11px] font-medium tracking-[0.22em] text-[#87938B]">
              02
            </p>

            <h3 className="mt-3 text-[23px] font-medium tracking-[-0.03em] text-[#123B2A]">
              Create
            </h3>

            <p className="mt-3 text-[14px] leading-6 text-[#6B766F]">
              A financial plan designed <br />around your unique situation.
            </p>
          </div>

          {/* ================= STEP 03 ================= */}

          <div className="absolute left-[61.5%] top-[355px] w-[270px]">
            <p className="text-[11px] font-medium tracking-[0.22em] text-[#87938B]">
              03
            </p>

            <h3 className="mt-3 text-[23px] font-medium tracking-[-0.03em] text-[#123B2A]">
              Invest
            </h3>

            <p className="mt-3 text-[14px] leading-6 text-[#6B766F]">
              Put your money to work with a thoughtful long-term strategy.
            </p>
          </div>

          {/* ================= STEP 04 ================= */}

          <div className="absolute left-[92.2%] top-[110px] w-[230px]">
            <p className="text-[11px] font-medium tracking-[0.22em] text-[#87938B]">
              04
            </p>

            <h3 className="mt-3 text-[23px] font-medium tracking-[-0.03em] text-[#123B2A]">
              Grow
            </h3>

            <p className="mt-3 text-[14px] leading-6 text-[#6B766F]">
              Stay focused, adapt when needed, and build with confidence.
            </p>
          </div>
        </div>

        {/* ================= MOBILE ================= */}

        <div className="relative mt-16 lg:hidden">

          <div className="absolute bottom-8 left-[13px] top-8 w-px bg-[#D7E5DA]" />

          <div className="space-y-12">
            {steps.map((step) => (
              <div
                key={step.number}
                className="relative flex gap-6"
              >
                <div className="relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#72B47F] bg-[#F7FBF8]">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#16A34A]" />
                </div>

                <div className="-mt-1">
                  <p className="text-[10px] font-medium tracking-[0.22em] text-[#87938B]">
                    {step.number}
                  </p>

                  <h3 className="mt-2 text-[21px] font-medium tracking-[-0.03em] text-[#123B2A]">
                    {step.title}
                  </h3>

                  <p className="mt-2 max-w-[330px] text-[14px] leading-6 text-[#6B766F]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}