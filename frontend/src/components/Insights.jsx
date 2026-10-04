import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const articles = [
  {
    category: "INVESTING",
    title: "How to Start Investing in 2025: A Beginner’s Guide",
    read: "5 min read",
    number: "01",
    image:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1200&q=85",
  },
  {
    category: "RETIREMENT",
    title: "The Complete Guide to Retirement Planning",
    read: "8 min read",
    number: "02",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
  },
  {
    category: "TAX PLANNING",
    title: "Tax Saving Strategies for High Income Earners",
    read: "6 min read",
    number: "03",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=85",
  },
];

export default function Insights() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter(Boolean);

      gsap.fromTo(
        ".insights-heading",
        {
          y: 45,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        cards,
        {
          y: 70,
          opacity: 0,
          scale: 0.96,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.85,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".insights-grid",
            start: "top 80%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        overflow-hidden
        bg-[#F7FBF8]
        px-6
        py-14
        sm:px-8
        lg:px-12
      "
    >
      <div className="mx-auto max-w-[1440px]">

        {/* ==========================================
            TOP
        ========================================== */}

        <div
          className="
            insights-heading
            grid
            gap-10
            lg:grid-cols-[0.85fr_1.15fr]
            lg:items-end
          "
        >
          {/* LEFT */}

          <div>
            <p
              className="
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.24em]
                text-[#16A34A]
              "
            >
              Insights
            </p>

            <h2
              className="
                mt-5
                max-w-[600px]
                text-[clamp(44px,5.5vw,76px)]
                font-medium
                leading-[0.96]
                tracking-[-0.055em]
                text-[#123B2A]
              "
            >
              Knowledge for
              <br />
              <span className="text-[#7C8981]">
                a wealthier tomorrow.
              </span>
            </h2>
          </div>

          {/* RIGHT */}

          <div className="flex flex-col items-start lg:items-end">

            <p
              className="
                max-w-[510px]
                text-[16px]
                leading-7
                text-[#58665E]
                lg:text-right
              "
            >
              Expert insights, market updates, and practical
              guides to help you make better financial decisions.
            </p>

            <a
              href="/blogs"
              className="
                group
                mt-7
                inline-flex
                items-center
                gap-3
                text-[13px]
                font-semibold
                text-[#123B2A]
              "
            >
              <span>View All Articles</span>

              <span
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#C9D9CD]
                  transition-all
                  duration-300
                  group-hover:translate-x-1
                  group-hover:bg-[#123B2A]
                  group-hover:text-white
                "
              >
                ↗
              </span>
            </a>

          </div>
        </div>

        {/* ==========================================
            ARTICLE GRID
        ========================================== */}

        <div
          className="
            insights-grid
            mt-16
            grid
            gap-6
            md:grid-cols-2
            lg:grid-cols-3
            lg:gap-7
          "
        >

          {articles.map((article, index) => (
            <article
              key={article.number}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[28px]
                border
                border-[#D7E5DA]
                bg-white
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-[0_30px_70px_rgba(18,59,42,0.12)]
              "
            >

              {/* ==================================
                  IMAGE
              ================================== */}

              <div
                className="
                  relative
                  h-[280px]
                  overflow-hidden
                  bg-[#EAF7EF]
                  sm:h-[320px]
                "
              >

                <img
                  src={article.image}
                  alt={article.title}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-[1.06]
                  "
                />

                {/* IMAGE OVERLAY */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#123B2A]/25
                    via-transparent
                    to-transparent
                    opacity-60
                  "
                />

                {/* NUMBER */}

                <div
                  className="
                    absolute
                    left-5
                    top-5
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/70
                    bg-white/80
                    text-[10px]
                    font-semibold
                    tracking-[0.12em]
                    text-[#123B2A]
                    backdrop-blur-md
                  "
                >
                  {/* {article.number} */}
                </div>

                {/* CATEGORY */}

                <div
                  className="
                    absolute
                    bottom-5
                    left-5
                    rounded-full
                    border
                    border-white/60
                    bg-white/85
                    px-3
                    py-2
                    text-[9px]
                    font-semibold
                    tracking-[0.16em]
                    text-[#123B2A]
                    backdrop-blur-md
                  "
                >
                  {article.category}
                </div>

              </div>

              {/* ==================================
                  CONTENT
              ================================== */}

              <div className="p-7 sm:p-8">

                <h3
                  className="
                    max-w-[440px]
                    text-[24px]
                    font-medium
                    leading-[1.18]
                    tracking-[-0.025em]
                    text-[#17201B]
                    transition-colors
                    duration-300
                    group-hover:text-[#123B2A]
                    sm:text-[27px]
                  "
                >
                  {article.title}
                </h3>

                {/* BOTTOM */}

                <div
                  className="
                    mt-9
                    flex
                    items-center
                    justify-between
                    border-t
                    border-[#E2EBE4]
                    pt-5
                  "
                >

                  <span
                    className="
                      text-[11px]
                      font-medium
                      tracking-[0.05em]
                      text-[#7A867F]
                    "
                  >
                    {article.read}
                  </span>

                  <span
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#D7E5DA]
                      text-[#123B2A]
                      transition-all
                      duration-300
                      group-hover:-translate-y-1
                      group-hover:bg-[#123B2A]
                      group-hover:text-white
                    "
                  >
                    ↗
                  </span>

                </div>

              </div>

              {/* GREEN BOTTOM LINE */}

              <div
                className="
                  absolute
                  bottom-0
                  left-1/2
                  h-[3px]
                  w-0
                  -translate-x-1/2
                  rounded-full
                  bg-[#16A34A]
                  transition-all
                  duration-500
                  group-hover:w-[35%]
                "
              />

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}