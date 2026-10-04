import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      /* ==========================================
         CONTENT ENTRANCE
      ========================================== */

      gsap.fromTo(
        ".cta-content",
        {
          y: 60,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        }
      );

      /* ==========================================
         ARCH ENTRANCE
      ========================================== */

      gsap.fromTo(
        ".cta-arch",
        {
          scale: 0.88,
          opacity: 0,
          y: 40,
        },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            once: true,
          },
        }
      );

      /* ==========================================
         SUBTLE ORBIT
      ========================================== */

      gsap.to(".cta-orbit", {
        rotate: 360,
        duration: 45,
        repeat: -1,
        ease: "none",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        overflow-hidden
        bg-[#123B2A]
        px-6
        py-20
        sm:px-8
        lg:px-12
        lg:py-24
      "
    >
      {/* ==========================================
          BACKGROUND CIRCLES
      ========================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.06]
        "
      >
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[800px]
            w-[800px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-white
          "
        />

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[580px]
            w-[580px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-white
          "
        />

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[360px]
            w-[360px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-white
          "
        />
      </div>

      {/* ==========================================
          SUBTLE ORBIT
      ========================================== */}

      <div
        className="
          cta-orbit
          pointer-events-none
          absolute
          -right-[180px]
          -top-[180px]
          hidden
          h-[520px]
          w-[520px]
          rounded-full
          border
          border-white/10
          lg:block
        "
      >
        <div
          className="
            absolute
            left-1/2
            top-0
            h-2
            w-2
            -translate-x-1/2
            rounded-full
            bg-[#8BD6A7]
          "
        />
      </div>

      {/* ==========================================
          MAIN CONTENT
      ========================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1440px]
        "
      >
        <div
          className="
            grid
            items-center
            gap-14
            lg:grid-cols-[1.05fr_0.95fr]
            lg:gap-16
          "
        >

          {/* ======================================
              LEFT CONTENT
          ====================================== */}

          <div className="cta-content">

            <p
              className="
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.25em]
                text-[#8BD6A7]
              "
            >
              Ready to build your blueprint?
            </p>

            <h2
              className="
                mt-6
                max-w-[850px]
                text-[clamp(48px,6.5vw,88px)]
                font-medium
                leading-[0.94]
                tracking-[-0.06em]
                text-white
              "
            >
              Let’s create your
              <br />

              <span className="text-[#AFC8B8]">
                financial future.
              </span>
            </h2>

            <p
              className="
                mt-8
                max-w-[540px]
                text-[16px]
                leading-7
                text-white/65
              "
            >
              Book a free consultation with our experts
              and take the first step towards a secure
              financial future.
            </p>

            {/* ==================================
                BUTTONS
            ================================== */}

            <div
              className="
                mt-10
                flex
                flex-col
                items-start
                gap-4
                sm:flex-row
                sm:items-center
              "
            >

              {/* PRIMARY */}

              <Link
                to="/contact"
                className="
                  group
                  inline-flex
                  items-center
                  gap-4
                  rounded-full
                  bg-white
                  px-6
                  py-3.5
                  text-[13px]
                  font-semibold
                  text-[#123B2A]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#EAF7EF]
                  hover:shadow-[0_15px_40px_rgba(0,0,0,0.18)]
                "
              >
                <span>
                  Book a Consultation
                </span>

                <span
                  className="
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-full
                    bg-[#123B2A]
                    text-white
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  ↗
                </span>
              </a>

              {/* SECONDARY */}

              <Link
                to="/contact"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  px-2
                  py-2
                  text-[13px]
                  font-medium
                  text-white/75
                  transition-colors
                  duration-300
                  hover:text-white
                "
              >
                Talk to an Expert

                <span
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  →
                </span>
              </a>

            </div>
          </div>

          {/* ======================================
              RIGHT ARCHITECTURAL VISUAL
          ====================================== */}

          <div
            className="
              cta-arch
              relative
              mx-auto
              h-[400px]
              w-full
              max-w-[560px]
            "
          >

            {/* ==================================
                MAIN ARCH
            ================================== */}

            <div
              className="
                absolute
                bottom-0
                left-1/2
                h-[370px]
                w-[300px]
                -translate-x-1/2
                overflow-hidden
                rounded-t-[170px]
                border
                border-white/15
                bg-gradient-to-b
                from-[#315943]
                via-[#234936]
                to-[#102E21]
                shadow-[0_30px_100px_rgba(0,0,0,0.28)]
              "
            >

              {/* INNER GLOW */}

              <div
                className="
                  absolute
                  left-1/2
                  top-[18%]
                  h-[220px]
                  w-[220px]
                  -translate-x-1/2
                  rounded-full
                  bg-[#8BD6A7]/10
                  blur-3xl
                "
              />

              {/* ==================================
                  LANDSCAPE LINES
              ================================== */}

              <svg
                viewBox="0 0 300 370"
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                "
                fill="none"
              >
                <path
                  d="
                    M0 295
                    C45 250 72 265 108 228
                    C143 195 162 210 190 173
                    C220 140 255 154 300 105
                  "
                  stroke="rgba(139,214,167,0.5)"
                  strokeWidth="1.5"
                />

                <path
                  d="
                    M0 328
                    C52 292 82 304 122 263
                    C160 225 182 242 211 205
                    C243 170 272 184 300 150
                  "
                  stroke="rgba(255,255,255,0.12)"
                  strokeWidth="1"
                />

                <path
                  d="
                    M0 350
                    C58 326 90 331 128 302
                    C168 272 190 280 226 248
                    C260 218 282 225 300 207
                  "
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth="1"
                />
              </svg>

              {/* ==================================
                  FLAG
              ================================== */}

              <div
                className="
                  absolute
                  right-[58px]
                  top-[105px]
                  h-[52px]
                  w-px
                  bg-[#8BD6A7]/70
                "
              />

              <div
                className="
                  absolute
                  right-[58px]
                  top-[105px]
                  h-5
                  w-7
                  -translate-y-px
                  bg-[#8BD6A7]
                  [clip-path:polygon(0_0,100%_25%,0_50%)]
                "
              />

              {/* ==================================
                  CENTER MESSAGE
              ================================== */}

              <div
                className="
                  absolute
                  left-1/2
                  top-[48%]
                  w-[220px]
                  -translate-x-1/2
                  -translate-y-1/2
                  text-center
                "
              >

                <p
                  className="
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.3em]
                    text-[#8BD6A7]
                  "
                >
                  WealthBluePrint
                </p>

                <p
                  className="
                    mt-3
                    text-[25px]
                    font-medium
                    leading-[1.05]
                    tracking-[-0.04em]
                    text-white
                  "
                >
                  Plan with
                  <br />
                  intention.
                </p>

              </div>
            </div>

            {/* ==================================
                FLOATING WORDS
            ================================== */}

            <div
              className="
                absolute
                bottom-[25px]
                right-0
                hidden
                text-right
                lg:block
              "
            >
              <p
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-white/35
                "
              >
                Plans
              </p>

              <p
                className="
                  mt-2
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-white/35
                "
              >
                People
              </p>

              <p
                className="
                  mt-2
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-white/35
                "
              >
                Progress
              </p>

              <p
                className="
                  mt-2
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-[#8BD6A7]
                "
              >
                Possibilities
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}