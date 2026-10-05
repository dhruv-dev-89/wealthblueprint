import { Link } from "react-router-dom";
import LiquidChrome from "./LiquidChrome";

export default function Hero() {
  return (
    <section
      className="
        relative
        min-h-[calc(100vh-72px)]
        overflow-hidden
        bg-[#7C3AED]
      "
    >
      {/* =====================================================
          LIQUID CHROME
      ===================================================== */}

      <div
        className="
          absolute
          inset-0
          z-0
        "
      >
        <LiquidChrome
          baseColor={[
            0.48627450980392156,
            0.22745098039215686,
            0.9294117647058824,
          ]}
          speed={0.3}
          amplitude={0.3}
          interactive
        />
      </div>

      {/* =====================================================
          SOFT OVERLAY
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[1]
          bg-black/[0.04]
        "
      />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[calc(100vh-72px)]
          max-w-[1500px]
          flex-col
          px-6
          sm:px-10
          lg:px-14
        "
      >
        {/* ===================================================
            TOP META
        =================================================== */}

        <div
          className="
            flex
            items-center
            justify-between
            border-b
            border-white/20
            py-5
          "
        >
          <div
            className="
              flex
              items-center
              gap-3
            "
          >
            <span
              className="
                h-[7px]
                w-[7px]
                rounded-full
                bg-white
              "
            />

            <span
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.32em]
                text-white/80
              "
            >
              WEALTHBLUEPRINT
            </span>
          </div>

          <div
            className="
              hidden
              items-center
              gap-5
              text-[8px]
              font-medium
              uppercase
              tracking-[0.25em]
              text-white/60
              sm:flex
            "
          >
            <span>PLAN</span>
            <span>INVEST</span>
            <span>GROW</span>
          </div>

          <span
            className="
              text-[8px]
              font-medium
              uppercase
              tracking-[0.25em]
              text-white/55
            "
          >
            01 / 06
          </span>
        </div>

        {/* ===================================================
            MAIN HERO
        =================================================== */}

        <div
          className="
            flex
            flex-1
            flex-col
            items-center
            justify-center
            py-12
            text-center
            lg:py-16
          "
        >
          {/* Eyebrow */}

          <div
            className="
              flex
              items-center
              gap-3
            "
          >
            <span
              className="
                h-px
                w-10
                bg-white/50
              "
            />

            <span
              className="
                text-[9px]
                font-medium
                uppercase
                tracking-[0.34em]
                text-white/80
              "
            >
              PLAN · INVEST · GROW
            </span>

            <span
              className="
                h-px
                w-10
                bg-white/50
              "
            />
          </div>

          {/* Heading */}

          <h1
            className="
              mt-8
              max-w-[1200px]
              text-[clamp(4rem,10vw,10.5rem)]
              font-medium
              leading-[0.78]
              tracking-[-0.085em]
            "
          >
            <span
              className="
                block
                text-white
              "
            >
              Build wealth.
            </span>

            <span
              className="
                mt-2
                block
                text-white/85
              "
            >
              With intention.
            </span>
          </h1>

          {/* Description */}

          <p
            className="
              mt-9
              max-w-[570px]
              text-[14px]
              leading-7
              text-white/70
              sm:text-[15px]
            "
          >
            A clearer way to plan, invest and grow your
            wealth — with every financial decision connected
            to the future you want.
          </p>

          {/* =================================================
              CTA
          ================================================= */}

          <div
            className="
              mt-9
              flex
              flex-col
              items-center
              gap-5
              sm:flex-row
            "
          >
            <Link
              to="/contact"
              className="
                group
                flex
                h-14
                items-center
                gap-5
                rounded-full
                bg-white
                px-7
                text-[11px]
                font-semibold
                text-[#171514]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-white/90
                hover:shadow-[0_15px_40px_rgba(0,0,0,0.18)]
              "
            >
              <span>
                Start Your Blueprint
              </span>

              <span
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  bg-[#171514]
                  text-white
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                ↗
              </span>
            </Link>

            <a
              href="#services"
              className="
                group
                flex
                items-center
                gap-3
                text-[11px]
                font-medium
                text-white/80
              "
            >
              <span>
                Explore solutions
              </span>

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

        {/* ===================================================
            BOTTOM META
        =================================================== */}

        <div
          className="
            flex
            items-center
            justify-between
            border-t
            border-white/20
            py-5
          "
        >
          <div
            className="
              flex
              items-center
              gap-4
            "
          >
            <span
              className="
                text-[8px]
                font-medium
                uppercase
                tracking-[0.28em]
                text-white/55
              "
            >
              MONEY
            </span>

            <span
              className="
                h-px
                w-6
                bg-white/25
              "
            />

            <span
              className="
                text-[8px]
                font-medium
                uppercase
                tracking-[0.28em]
                text-white/55
              "
            >
              PURPOSE
            </span>

            <span
              className="
                h-px
                w-6
                bg-white/25
              "
            />

            <span
              className="
                text-[8px]
                font-medium
                uppercase
                tracking-[0.28em]
                text-white/55
              "
            >
              FUTURE
            </span>
          </div>

          <span
            className="
              hidden
              text-[8px]
              font-medium
              uppercase
              tracking-[0.25em]
              text-white/45
              sm:block
            "
          >
            MOVE WITH PURPOSE
          </span>
        </div>
      </div>
    </section>
  );
}