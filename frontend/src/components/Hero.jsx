import { useEffect, useState } from "react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 80);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className={`
        relative flex min-h-[calc(100vh-100px)]
        items-center justify-center
        overflow-hidden
        bg-[#F7FBF8]
        px-6 py-20
        sm:px-10
        lg:px-16
        lg:mt-10
      `}
    >
      {/* subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(18,59,42,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(18,59,42,0.045) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* subtle glow */}
      <div
        className="
          pointer-events-none absolute
          left-1/2 top-1/2
          h-[600px] w-[600px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          blur-[140px]
        "
        style={{
          background:
            "radial-gradient(circle, rgba(200,255,61,0.08), transparent 68%)",
        }}
      />

      {/* content */}
      <div className="relative z-10 mx-auto w-full max-w-[1100px] text-center">

        {/* eyebrow */}
        <div
          className={`
            flex items-center justify-center gap-3
            transition-all duration-700
            ${loaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}
          `}
        >
          <span className="h-[7px] w-[7px] rounded-full bg-[#43A85B]" />

          <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#3157C8]">
            WEALTHBLUEPRINT
          </span>
        </div>

        {/* heading */}
        <h1
          className={`
            mt-8
            text-[clamp(4rem,9vw,9.5rem)]
            font-medium
            leading-[0.82]
            tracking-[-0.078em]
            text-[#11110F]
          `}
        >
          <span
            className={`
              block
              transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]
              ${
                loaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-16 opacity-0"
              }
            `}
          >
            Build wealth.
          </span>

          <span
            className={`
              mt-2 block text-[#183D2C]
              transition-all delay-100 duration-1000
              ease-[cubic-bezier(0.22,1,0.36,1)]
              ${
                loaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-16 opacity-0"
              }
            `}
          >
            With intention.
          </span>
        </h1>

        {/* accent */}
        <div
          className={`
            mt-7 flex items-center justify-center gap-3
            transition-all delay-300 duration-700
            ${
              loaded
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }
          `}
        >
          <span className="h-[5px] w-[110px] rounded-full bg-[#C8FF3D]" />

          <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#969C97]">
            PLAN · INVEST · GROW
          </span>

          <span className="h-[5px] w-[30px] rounded-full bg-[#C8FF3D]" />
        </div>

        {/* description */}
        <p
          className={`
            mx-auto mt-8 max-w-[650px]
            text-[15px] leading-7 text-[#626B65]
            transition-all delay-300 duration-700
            sm:text-[16px]
            ${
              loaded
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }
          `}
        >
          A clearer way to plan, invest and grow your wealth —
          with every financial decision connected to the future
          you want.
        </p>

        {/* actions */}
        <div
          className={`
            mt-9 flex items-center justify-center gap-8
            transition-all delay-500 duration-700
            ${
              loaded
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }
          `}
        >
          <a
            href="/contact"
            className="
              inline-flex h-[54px]
              items-center gap-4
              rounded-full
              bg-[#183D2C]
              px-7
              text-[12px]
              font-semibold
              text-white
              transition-all duration-300
              hover:-translate-y-1
              hover:bg-[#102F21]
              hover:shadow-[0_15px_35px_rgba(18,59,42,0.16)]
            "
          >
            Start Your Blueprint
            <span className="text-[16px]">↗</span>
          </a>

          <a
            href="#services"
            className="
              text-[12px]
              font-semibold
              text-[#183D2C]
              transition-all duration-300
              hover:translate-x-1
            "
          >
            Explore solutions
            <span className="ml-3">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}