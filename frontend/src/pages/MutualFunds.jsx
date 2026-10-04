import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

/* =========================================================
   DATA — ORIGINAL MUTUAL FUNDS CONTENT
========================================================= */

const categories = [
  {
    number: "01",
    title: "Equity Funds",
    label: "GROWTH",
    text:
      "Primarily invest in shares for long-term capital appreciation. Expect higher ups and downs but also the potential for stronger growth.",
    points: [
      "Large-cap funds",
      "Mid/small-cap funds",
      "Sector / thematic funds",
    ],
  },
  {
    number: "02",
    title: "Debt Funds",
    label: "STABILITY",
    text:
      "Focus on bonds, corporate debt and government securities. Typically aim for lower volatility and relatively stable returns.",
  },
  {
    number: "03",
    title: "Hybrid Funds",
    label: "BALANCE",
    text:
      "Mix equity and debt in varying proportions, offering a balance between growth potential and downside protection.",
  },
  {
    number: "04",
    title: "Index / Passive Funds",
    label: "MARKET-LINKED",
    text:
      "Replicate a market index like Nifty or Sensex. Simple and usually low-cost, ideal for those seeking market-linked returns with minimal active decisions.",
  },
  {
    number: "05",
    title: "Liquid & Money Market",
    label: "SHORT TERM",
    text:
      "Designed for short-term cash parking with easy access and relatively low risk compared to long-duration products.",
  },
  {
    number: "06",
    title: "Target-Date / Goal Funds",
    label: "GOAL BASED",
    text:
      "Start with higher equity exposure and gradually shift to safer assets as the target year or life goal approaches.",
  },
];

const benefits = [
  {
    number: "01",
    title: "Diversification",
    text:
      "Spreads your money across many securities, helping reduce the impact of any one investment going wrong.",
  },
  {
    number: "02",
    title: "Professional Management",
    text:
      "Dedicated fund managers track markets, rebalance and make decisions on your behalf.",
  },
  {
    number: "03",
    title: "Low Entry Barrier",
    text:
      "Begin with small SIP amounts and steadily build your corpus without needing large lump sums.",
  },
  {
    number: "04",
    title: "Liquidity & Clarity",
    text:
      "Buy or redeem based on daily NAV, with regular disclosures on portfolio and performance.",
  },
  {
    number: "05",
    title: "Cost-Effective Options",
    text:
      "Passive and index funds generally charge lower fees, making them efficient for long horizons.",
  },
  {
    number: "06",
    title: "Goal-Based Choices",
    text:
      "Choose schemes aligned with specific needs — retirement, child education, or short-term savings.",
  },
];

const faqs = [
  {
    question: "How safe are mutual funds?",
    answer:
      "Risk depends on the category of fund. Equity funds are exposed to market volatility, whereas debt funds face interest-rate and credit risk. Matching the fund type to your time horizon and diversifying across schemes can help manage overall risk.",
  },
  {
    question: "What exactly is a SIP?",
    answer:
      "A SIP (Systematic Investment Plan) is a method of investing a fixed amount at regular intervals (usually monthly) into a mutual fund. It builds investing discipline and averages out purchase cost over different market levels.",
  },
  {
    question: "How should I go about selecting a mutual fund?",
    answer:
      "Start by clarifying your financial goal and time frame. Then compare funds within the same category, look at their expense ratios, consistency of past performance, portfolio quality and fund manager track record. Ensure the chosen fund's risk profile aligns with your comfort level.",
  },
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function MutualFunds() {
  const pageRef = useRef(null);

  const [scenario, setScenario] = useState("balanced");
  const [openFaq, setOpenFaq] = useState(null);

  /*
   * -------------------------------------------------------
   * SCENARIO DATA
   * -------------------------------------------------------
   */

  const scenarioData = {
    conservative: {
      label: "Conservative case",
      rate: 6,
      description:
        "A lower average annual return assumption showing a more conservative growth path.",
    },

    balanced: {
      label: "Balanced case",
      rate: 9,
      description:
        "A moderate return assumption used to illustrate how compounding can build value over time.",
    },

    aggressive: {
      label: "Aggressive case",
      rate: 12,
      description:
        "A higher average annual return assumption illustrating stronger long-term compounding.",
    },
  };

  const activeScenario = scenarioData[scenario];

  /*
   * -------------------------------------------------------
   * GROWTH CALCULATION
   * -------------------------------------------------------
   */

  const growthYears = [1, 3, 5, 7, 10];

  const growthValues = growthYears.map((year) => {
    return 10000 * Math.pow(1 + activeScenario.rate / 100, year);
  });

  const maxGrowth = Math.max(...growthValues);

  /*
   * -------------------------------------------------------
   * HERO / SECTION ANIMATION
   * -------------------------------------------------------
   */

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".mf-hero-item", {
        y: 45,
        opacity: 0,
        duration: 0.9,
        stagger: 0.08,
        ease: "power3.out",
      });

      gsap.from(".mf-hero-visual", {
        x: 40,
        opacity: 0,
        duration: 1,
        delay: 0.25,
        ease: "power3.out",
      });

      gsap.utils.toArray(".mf-reveal").forEach((element) => {
        gsap.from(element, {
          y: 35,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 86%",
            once: true,
          },
        });
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  /*
   * -------------------------------------------------------
   * FORMAT MONEY
   * -------------------------------------------------------
   */

  const formatMoney = (value) => {
    return `₹${Math.round(value).toLocaleString("en-IN")}`;
  };

  return (
    <>
      <Navbar />

      <main
        ref={pageRef}
        className="overflow-hidden bg-[#F7FBF8] text-[#11110F]"
      >
        {/* =====================================================
            HERO
        ====================================================== */}

        <section
          className="
            relative
            overflow-hidden
            bg-[#F1EEE7]
            px-6
            pb-24
            pt-40
            sm:px-10
            lg:px-16
            lg:pb-32
            lg:pt-44
          "
        >
          {/* Background grid */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              opacity-[0.24]
            "
            style={{
              backgroundImage: `
                linear-gradient(
                  rgba(17,17,15,0.045) 1px,
                  transparent 1px
                ),
                linear-gradient(
                  90deg,
                  rgba(17,17,15,0.045) 1px,
                  transparent 1px
                )
              `,
              backgroundSize: "72px 72px",
            }}
          />

          <div className="relative mx-auto max-w-[1440px]">
            <div
              className="
                grid
                items-center
                gap-16
                lg:grid-cols-[1.05fr_0.95fr]
                lg:gap-20
              "
            >
              {/* LEFT */}

              <div>
                <div
                  className="
                    mf-hero-item
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
                      bg-[#123B2A]
                    "
                  />

                  <span
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.3em]
                      text-[#315C48]
                    "
                  >
                    FROM BASICS → ADVANCED
                  </span>
                </div>

                <h1
                  className="
                    mf-hero-item
                    mt-7
                    max-w-[900px]
                    text-[clamp(3.4rem,7vw,7.4rem)]
                    font-medium
                    leading-[0.86]
                    tracking-[-0.065em]
                    text-[#11110F]
                  "
                >
                  Mutual Funds —
                  <br />
                  <span className="text-[#7F887F]">
                    Learn.
                  </span>{" "}
                  Compare.
                  <br />
                  Invest Confidently.
                </h1>

                <p
                  className="
                    mf-hero-item
                    mt-8
                    max-w-[620px]
                    text-[15px]
                    leading-7
                    text-[#686C67]
                  "
                >
                  Mutual funds let you participate in markets
                  by pooling your money with other investors
                  into a professionally managed, diversified
                  portfolio. Understand how to evaluate options,
                  pick suitable funds, and build wealth in a
                  structured way.
                </p>

                <div className="mf-hero-item mt-9">
                  <a
                    href="#mutual-funds-info"
                    className="
                      inline-flex
                      h-[52px]
                      items-center
                      gap-3
                      rounded-full
                      bg-[#123B2A]
                      px-7
                      text-[13px]
                      font-semibold
                      text-white
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:bg-[#0D3022]
                    "
                  >
                    Begin Learning
                    <span>↗</span>
                  </a>
                </div>
              </div>

              {/* RIGHT VISUAL */}

              <div
                className="
                  mf-hero-visual
                  relative
                  mx-auto
                  h-[430px]
                  w-full
                  max-w-[560px]
                "
              >
                {/* Main blueprint panel */}

                <div
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    h-[315px]
                    w-[450px]
                    -translate-x-1/2
                    -translate-y-1/2
                    rotate-[-5deg]
                    border
                    border-[#123B2A]/15
                    bg-white/35
                    backdrop-blur-[2px]
                  "
                />

                <div
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    h-[315px]
                    w-[450px]
                    -translate-x-1/2
                    -translate-y-1/2
                    rotate-[4deg]
                    border
                    border-[#3157C8]/10
                  "
                />

                {/* Growth line */}

                <div
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    h-[300px]
                    w-[460px]
                    -translate-x-1/2
                    -translate-y-1/2
                  "
                >
                  <svg
                    viewBox="0 0 460 300"
                    className="h-full w-full"
                    fill="none"
                  >
                    <path
                      d="
                        M25 245
                        C90 235 105 215 155 222
                        C210 230 230 145 280 158
                        C330 170 340 85 435 48
                      "
                      stroke="#123B2A"
                      strokeWidth="2"
                    />

                    <path
                      d="
                        M25 245
                        C90 235 105 215 155 222
                        C210 230 230 145 280 158
                        C330 170 340 85 435 48
                        L435 245
                        L25 245
                        Z
                      "
                      fill="#123B2A"
                      opacity="0.05"
                    />

                    <circle
                      cx="25"
                      cy="245"
                      r="5"
                      fill="#123B2A"
                    />

                    <circle
                      cx="155"
                      cy="222"
                      r="5"
                      fill="#123B2A"
                    />

                    <circle
                      cx="280"
                      cy="158"
                      r="5"
                      fill="#3157C8"
                    />

                    <circle
                      cx="435"
                      cy="48"
                      r="6"
                      fill="#123B2A"
                    />
                  </svg>
                </div>

                {/* Floating visual */}

                <div
                  className="
                    absolute
                    left-[2%]
                    top-[18%]
                    border
                    border-[#D7DDD6]
                    bg-white/75
                    px-5
                    py-4
                    backdrop-blur-md
                  "
                >
                  <span
                    className="
                      block
                      text-[9px]
                      uppercase
                      tracking-[0.2em]
                      text-[#8A918B]
                    "
                  >
                    FUND
                  </span>

                  <strong
                    className="
                      mt-1
                      block
                      text-[15px]
                      font-medium
                      text-[#183D2C]
                    "
                  >
                    Diversified
                  </strong>
                </div>

                <div
                  className="
                    absolute
                    right-[0%]
                    top-[29%]
                    border
                    border-[#D7DDD6]
                    bg-white/75
                    px-5
                    py-4
                    backdrop-blur-md
                  "
                >
                  <span
                    className="
                      block
                      text-[9px]
                      uppercase
                      tracking-[0.2em]
                      text-[#8A918B]
                    "
                  >
                    APPROACH
                  </span>

                  <strong
                    className="
                      mt-1
                      block
                      text-[15px]
                      font-medium
                      text-[#183D2C]
                    "
                  >
                    Professional
                  </strong>
                </div>

                <div
                  className="
                    absolute
                    bottom-[13%]
                    left-[13%]
                    rounded-full
                    border
                    border-[#D7DDD6]
                    bg-white/80
                    px-4
                    py-2.5
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.16em]
                    text-[#315C48]
                    backdrop-blur-md
                  "
                >
                  GOAL
                </div>

                <div
                  className="
                    absolute
                    bottom-[10%]
                    right-[10%]
                    rounded-full
                    bg-[#123B2A]
                    px-5
                    py-3
                    text-[10px]
                    font-medium
                    text-white
                  "
                >
                  Plan → Invest → Grow
                </div>
              </div>
            </div>

            <div className="mt-16 h-px w-full bg-[#C8CEC8]" />
          </div>
        </section>

        {/* =====================================================
            FOUNDATION
        ====================================================== */}

        <section
          id="mutual-funds-info"
          className="
            px-6
            py-24
            sm:px-10
            lg:px-16
            lg:py-32
          "
        >
          <div className="mx-auto max-w-[1440px]">

            <div
              className="
                mf-reveal
                grid
                gap-14
                lg:grid-cols-[0.72fr_1.28fr]
                lg:gap-20
              "
            >
              {/* LEFT */}

              <div>
                <span
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.3em]
                    text-[#315C48]
                  "
                >
                  THE FOUNDATION
                </span>

                <h2
                  className="
                    mt-5
                    max-w-[560px]
                    text-[clamp(3rem,5.5vw,6rem)]
                    font-medium
                    leading-[0.86]
                    tracking-[-0.065em]
                    text-[#183D2C]
                  "
                >
                  Mutual
                  <br />
                  Funds.
                </h2>

                <p
                  className="
                    mt-7
                    max-w-[430px]
                    text-[14px]
                    leading-7
                    text-[#737A74]
                  "
                >
                  Mutual funds combine contributions from many
                  investors and deploy them into a diversified
                  basket of assets — such as equities, bonds,
                  or money market instruments.
                </p>

                <div
                  className="
                    mt-10
                    flex
                    items-center
                    gap-4
                  "
                >
                  <span className="h-px w-16 bg-[#123B2A]" />

                  <span
                    className="
                      text-[10px]
                      uppercase
                      tracking-[0.2em]
                      text-[#7B857E]
                    "
                  >
                    POOL · MANAGE · GROW
                  </span>
                </div>
              </div>

              {/* RIGHT */}

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-[#DCE8DF]
                  bg-white
                  p-7
                  sm:p-9
                "
              >
                {/* Background circles */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    right-[-70px]
                    top-[-70px]
                    h-[250px]
                    w-[250px]
                    rounded-full
                    border
                    border-[#DCE8DF]
                  "
                />

                <div
                  className="
                    pointer-events-none
                    absolute
                    right-[-15px]
                    top-[-20px]
                    h-[150px]
                    w-[150px]
                    rounded-full
                    border
                    border-[#DCE8DF]
                  "
                />

                <div className="relative">

                  <div
                    className="
                      max-w-[780px]
                      text-[15px]
                      leading-7
                      text-[#686C67]
                    "
                  >
                    Run by professional managers, mutual funds
                    make it easier for both new and experienced
                    investors to access diversification, liquidity
                    and long-term growth potential.
                  </div>

                  <div
                    className="
                      mt-10
                      flex
                      items-center
                      justify-between
                      border-b
                      border-[#E7ECE8]
                      pb-5
                    "
                  >
                    <span
                      className="
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.25em]
                        text-[#315C48]
                      "
                    >
                      HOW MUTUAL FUNDS WORK
                    </span>

                    <span
                      className="
                        rounded-full
                        bg-[#EAF7EF]
                        px-3
                        py-1.5
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.15em]
                        text-[#315C48]
                      "
                    >
                      04 STEPS
                    </span>
                  </div>

                  <div className="mt-3">

                    {[
                      {
                        number: "01",
                        title: "Pooling",
                        text:
                          "Investors buy units and their money is pooled into one common fund.",
                      },
                      {
                        number: "02",
                        title: "Management",
                        text:
                          "A fund manager invests this pool as per the stated strategy and mandate.",
                      },
                      {
                        number: "03",
                        title: "Returns",
                        text:
                          "Profits, interest and dividends are reflected in the fund's value and your units.",
                      },
                      {
                        number: "04",
                        title: "NAV",
                        text:
                          "Net Asset Value shows the price per unit, recalculated at the end of each trading day.",
                      },
                    ].map((item) => (
                      <div
                        key={item.number}
                        className="
                          grid
                          grid-cols-[44px_1fr]
                          gap-4
                          border-b
                          border-[#E7ECE8]
                          py-5
                          last:border-b-0
                        "
                      >
                        <span
                          className="
                            pt-1
                            text-[10px]
                            font-semibold
                            tracking-[0.18em]
                            text-[#8A918B]
                          "
                        >
                          {item.number}
                        </span>

                        <div>
                          <h3
                            className="
                              text-[17px]
                              font-medium
                              text-[#183D2C]
                            "
                          >
                            {item.title}
                          </h3>

                          <p
                            className="
                              mt-1.5
                              max-w-[650px]
                              text-[12px]
                              leading-6
                              text-[#7B857E]
                            "
                          >
                            {item.text}
                          </p>
                        </div>
                      </div>
                    ))}

                  </div>

                  {/* Key idea */}

                  <div
                    className="
                      mt-7
                      border-l-2
                      border-[#123B2A]
                      bg-[#F7FBF8]
                      px-5
                      py-5
                    "
                  >
                    <span
                      className="
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.2em]
                        text-[#315C48]
                      "
                    >
                      KEY IDEA
                    </span>

                    <p
                      className="
                        mt-2
                        text-[13px]
                        font-medium
                        leading-6
                        text-[#183D2C]
                      "
                    >
                      Mutual funds help you access diversified,
                      professionally managed portfolios — without
                      having to pick and track every single security
                      yourself.
                    </p>
                  </div>

                  {/* Important terms */}

                  <div
                    className="
                      mt-6
                      grid
                      gap-3
                      sm:grid-cols-2
                    "
                  >
                    <div
                      className="
                        rounded-2xl
                        bg-[#F1EEE7]
                        p-5
                      "
                    >
                      <span
                        className="
                          text-[9px]
                          uppercase
                          tracking-[0.18em]
                          text-[#7B857E]
                        "
                      >
                        IMPORTANT TERM
                      </span>

                      <h4
                        className="
                          mt-2
                          text-[18px]
                          font-medium
                          text-[#183D2C]
                        "
                      >
                        NAV
                      </h4>

                      <p
                        className="
                          mt-2
                          text-[11px]
                          leading-5
                          text-[#7B857E]
                        "
                      >
                        Net Asset Value = (Total Assets −
                        Liabilities) / Units in circulation.
                        It represents the per-unit price on
                        any given day.
                      </p>
                    </div>

                    <div
                      className="
                        rounded-2xl
                        bg-[#EAF7EF]
                        p-5
                      "
                    >
                      <span
                        className="
                          text-[9px]
                          uppercase
                          tracking-[0.18em]
                          text-[#567061]
                        "
                      >
                        IMPORTANT TERM
                      </span>

                      <h4
                        className="
                          mt-2
                          text-[18px]
                          font-medium
                          text-[#183D2C]
                        "
                      >
                        Expense Ratio
                      </h4>

                      <p
                        className="
                          mt-2
                          text-[11px]
                          leading-5
                          text-[#567061]
                        "
                      >
                        Annual charge (as a %) that covers
                        fund management and administration
                        costs. A lower ratio usually leaves
                        more of the return in your hands.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================
                CATEGORIES
            ================================================== */}

            <div className="mf-reveal mt-32">

              <div
                className="
                  flex
                  flex-col
                  justify-between
                  gap-7
                  border-b
                  border-[#C8D2C9]
                  pb-8
                  lg:flex-row
                  lg:items-end
                "
              >
                <div>
                  <span
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.3em]
                      text-[#315C48]
                    "
                  >
                    FUND LANDSCAPE
                  </span>

                  <h2
                    className="
                      mt-5
                      max-w-[820px]
                      text-[clamp(2.7rem,5vw,5.3rem)]
                      font-medium
                      leading-[0.88]
                      tracking-[-0.06em]
                      text-[#183D2C]
                    "
                  >
                    Different funds.
                    <br />
                    Different purposes.
                  </h2>
                </div>

                <p
                  className="
                    max-w-[370px]
                    text-[13px]
                    leading-6
                    text-[#737A74]
                    lg:pb-2
                  "
                >
                  Funds differ based on what they invest in,
                  how they are managed, and which goals they
                  target. Use these broad groupings as a
                  starting point for your selection.
                </p>
              </div>

              <div className="border-b border-[#C8D2C9]">

                {categories.map((category) => (
                  <article
                    key={category.number}
                    className="
                      group
                      grid
                      gap-5
                      border-b
                      border-[#C8D2C9]
                      py-8
                      transition-all
                      duration-300
                      hover:px-4
                      last:border-b-0
                      lg:grid-cols-[70px_1fr_1.35fr_150px]
                      lg:items-center
                    "
                  >
                    <span
                      className="
                        text-[10px]
                        font-semibold
                        tracking-[0.2em]
                        text-[#8A918B]
                      "
                    >
                      {category.number}
                    </span>

                    <div>
                      <h3
                        className="
                          text-[22px]
                          font-medium
                          tracking-[-0.035em]
                          text-[#183D2C]
                        "
                      >
                        {category.title}
                      </h3>

                      {category.points && (
                        <div
                          className="
                            mt-3
                            flex
                            flex-wrap
                            gap-2
                          "
                        >
                          {category.points.map((point) => (
                            <span
                              key={point}
                              className="
                                rounded-full
                                bg-[#EAF7EF]
                                px-3
                                py-1.5
                                text-[9px]
                                font-medium
                                text-[#315C48]
                              "
                            >
                              {point}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    <p
                      className="
                        max-w-[600px]
                        text-[13px]
                        leading-6
                        text-[#737A74]
                      "
                    >
                      {category.text}
                    </p>

                    <span
                      className="
                        text-left
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.18em]
                        text-[#315C48]
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                        lg:text-right
                      "
                    >
                      {category.label} ↗
                    </span>
                  </article>
                ))}

              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            BENEFITS
        ====================================================== */}

        <section
          className="
            bg-[#123B2A]
            px-6
            py-24
            text-white
            sm:px-10
            lg:px-16
            lg:py-32
          "
        >
          <div className="mx-auto max-w-[1440px]">

            <div
              className="
                mf-reveal
                grid
                gap-14
                lg:grid-cols-[0.72fr_1.28fr]
                lg:gap-24
              "
            >
              {/* LEFT */}

              <div>
                <span
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.3em]
                    text-[#6BD88E]
                  "
                >
                  THE CASE FOR MUTUAL FUNDS
                </span>

                <h2
                  className="
                    mt-5
                    max-w-[560px]
                    text-[clamp(3rem,5vw,5.5rem)]
                    font-medium
                    leading-[0.87]
                    tracking-[-0.06em]
                  "
                >
                  Why invest
                  <br />
                  through
                  <br />
                  mutual funds?
                </h2>
              </div>

              {/* RIGHT */}

              <div className="border-t border-white/10">

                {benefits.map((benefit) => (
                  <article
                    key={benefit.number}
                    className="
                      grid
                      gap-5
                      border-b
                      border-white/10
                      py-7
                      lg:grid-cols-[60px_0.7fr_1fr]
                      lg:items-start
                    "
                  >
                    <span
                      className="
                        text-[10px]
                        font-semibold
                        tracking-[0.2em]
                        text-[#6BD88E]
                      "
                    >
                      {benefit.number}
                    </span>

                    <h3
                      className="
                        text-[20px]
                        font-medium
                        tracking-[-0.025em]
                      "
                    >
                      {benefit.title}
                    </h3>

                    <p
                      className="
                        max-w-[480px]
                        text-[13px]
                        leading-6
                        text-white/55
                      "
                    >
                      {benefit.text}
                    </p>
                  </article>
                ))}

              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            GROWTH SCENARIOS
        ====================================================== */}

        <section
          className="
            px-6
            py-24
            sm:px-10
            lg:px-16
            lg:py-32
          "
        >
          <div className="mx-auto max-w-[1440px]">

            <div
              className="
                mf-reveal
                grid
                gap-14
                lg:grid-cols-[0.65fr_1.35fr]
                lg:gap-24
              "
            >
              {/* LEFT */}

              <div>
                <span
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.3em]
                    text-[#315C48]
                  "
                >
                  COMPOUNDING
                </span>

                <h2
                  className="
                    mt-5
                    max-w-[560px]
                    text-[clamp(3rem,5vw,5.3rem)]
                    font-medium
                    leading-[0.87]
                    tracking-[-0.06em]
                    text-[#183D2C]
                  "
                >
                  Interactive
                  <br />
                  growth.
                </h2>

                <p
                  className="
                    mt-6
                    max-w-[440px]
                    text-[14px]
                    leading-7
                    text-[#737A74]
                  "
                >
                  Explore how a one-time investment of
                  ₹10,000 could evolve under different average
                  annual return assumptions.
                </p>

                <p
                  className="
                    mt-4
                    max-w-[440px]
                    text-[11px]
                    leading-5
                    text-[#9A9F9A]
                  "
                >
                  These numbers are for illustration only and
                  are not guaranteed outcomes.
                </p>

                {/* SCENARIO BUTTONS */}

                <div className="mt-9 space-y-2">

                  {Object.entries(scenarioData).map(
                    ([key, data]) => (
                      <button
                        key={key}
                        type="button"
                        onClick={() =>
                          setScenario(key)
                        }
                        className={`
                          flex
                          w-full
                          max-w-[350px]
                          items-center
                          justify-between
                          rounded-full
                          border
                          px-5
                          py-3.5
                          text-left
                          text-[11px]
                          font-semibold
                          transition-all
                          duration-300
                          ${
                            scenario === key
                              ? "border-[#123B2A] bg-[#123B2A] text-white"
                              : "border-[#DCE8DF] bg-white text-[#315C48] hover:border-[#AFC2B5]"
                          }
                        `}
                      >
                        <span>
                          {data.label}
                        </span>

                        <span>
                          {data.rate}%
                        </span>
                      </button>
                    )
                  )}

                </div>
              </div>

              {/* RIGHT CHART */}

              <div
                className="
                  rounded-[28px]
                  border
                  border-[#DCE8DF]
                  bg-white
                  p-6
                  sm:p-9
                "
              >

                <div
                  className="
                    flex
                    flex-col
                    justify-between
                    gap-5
                    border-b
                    border-[#E6ECE7]
                    pb-6
                    sm:flex-row
                    sm:items-start
                  "
                >
                  <div>
                    <span
                      className="
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.22em]
                        text-[#8A9089]
                      "
                    >
                      ₹10,000 STARTING VALUE
                    </span>

                    <h3
                      className="
                        mt-2
                        text-[21px]
                        font-medium
                        text-[#183D2C]
                      "
                    >
                      {activeScenario.label}
                    </h3>
                  </div>

                  <span
                    className="
                      text-[25px]
                      font-medium
                      tracking-[-0.04em]
                      text-[#123B2A]
                    "
                  >
                    {activeScenario.rate}%
                  </span>
                </div>

                <div className="mt-8 h-[320px]">
                  <svg
                    viewBox="0 0 900 340"
                    className="h-full w-full"
                    preserveAspectRatio="none"
                  >
                    {/* Horizontal grid */}

                    {[70, 130, 190, 250].map(
                      (y) => (
                        <line
                          key={y}
                          x1="55"
                          x2="870"
                          y1={y}
                          y2={y}
                          stroke="#E8EDE9"
                          strokeWidth="1"
                        />
                      )
                    )}

                    {/* Vertical guide */}

                    {growthYears.map(
                      (_, index) => {
                        const x =
                          55 +
                          (index * 815) /
                            (growthYears.length - 1);

                        return (
                          <line
                            key={index}
                            x1={x}
                            x2={x}
                            y1="50"
                            y2="275"
                            stroke="#F0F3F0"
                            strokeWidth="1"
                          />
                        );
                      }
                    )}

                    {/* Area */}

                    <path
                      d={`
                        M 55 275
                        ${growthValues
                          .map((value, index) => {
                            const x =
                              55 +
                              (index * 815) /
                                (growthValues.length - 1);

                            const y =
                              275 -
                              ((value -
                                growthValues[0]) /
                                (maxGrowth -
                                  growthValues[0] || 1)) *
                                205;

                            return `L ${x} ${y}`;
                          })
                          .join(" ")}
                        L 870 275
                        Z
                      `}
                      fill="#123B2A"
                      opacity="0.055"
                    />

                    {/* Growth line */}

                    <path
                      d={`
                        M 55 275
                        ${growthValues
                          .map((value, index) => {
                            const x =
                              55 +
                              (index * 815) /
                                (growthValues.length - 1);

                            const y =
                              275 -
                              ((value -
                                growthValues[0]) /
                                (maxGrowth -
                                  growthValues[0] || 1)) *
                                205;

                            return `L ${x} ${y}`;
                          })
                          .join(" ")}
                      `}
                      fill="none"
                      stroke="#123B2A"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    {/* Points */}

                    {growthValues.map(
                      (value, index) => {
                        const x =
                          55 +
                          (index * 815) /
                            (growthValues.length - 1);

                        const y =
                          275 -
                          ((value -
                            growthValues[0]) /
                            (maxGrowth -
                              growthValues[0] || 1)) *
                            205;

                        return (
                          <g key={index}>
                            <circle
                              cx={x}
                              cy={y}
                              r="5"
                              fill="#F7FBF8"
                              stroke="#123B2A"
                              strokeWidth="3"
                            />

                            <text
                              x={x}
                              y="305"
                              textAnchor="middle"
                              fontSize="11"
                              fill="#8A9089"
                            >
                              {growthYears[index]}y
                            </text>
                          </g>
                        );
                      }
                    )}
                  </svg>
                </div>

                <div
                  className="
                    mt-4
                    grid
                    gap-4
                    border-t
                    border-[#E6ECE7]
                    pt-5
                    sm:grid-cols-3
                  "
                >
                  <div>
                    <span
                      className="
                        text-[9px]
                        uppercase
                        tracking-[0.18em]
                        text-[#8A9089]
                      "
                    >
                      START
                    </span>

                    <p
                      className="
                        mt-1
                        text-[15px]
                        font-medium
                        text-[#183D2C]
                      "
                    >
                      ₹10,000
                    </p>
                  </div>

                  <div>
                    <span
                      className="
                        text-[9px]
                        uppercase
                        tracking-[0.18em]
                        text-[#8A9089]
                      "
                    >
                      5 YEARS
                    </span>

                    <p
                      className="
                        mt-1
                        text-[15px]
                        font-medium
                        text-[#183D2C]
                      "
                    >
                      {formatMoney(growthValues[2])}
                    </p>
                  </div>

                  <div>
                    <span
                      className="
                        text-[9px]
                        uppercase
                        tracking-[0.18em]
                        text-[#8A9089]
                      "
                    >
                      10 YEARS
                    </span>

                    <p
                      className="
                        mt-1
                        text-[15px]
                        font-medium
                        text-[#123B2A]
                      "
                    >
                      {formatMoney(
                        growthValues[
                          growthValues.length - 1
                        ]
                      )}
                    </p>
                  </div>
                </div>

                <p
                  className="
                    mt-6
                    text-[11px]
                    leading-5
                    text-[#8A9089]
                  "
                >
                  Switch between scenarios to see how even
                  a small change in return rate makes a big
                  difference over time thanks to compounding.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            HOW TO CHOOSE
        ====================================================== */}

        <section
          className="
            bg-[#F1EEE7]
            px-6
            py-24
            sm:px-10
            lg:px-16
            lg:py-32
          "
        >
          <div className="mx-auto max-w-[1440px]">

            <div
              className="
                grid
                gap-14
                lg:grid-cols-[0.7fr_1.3fr]
                lg:gap-24
              "
            >
              {/* LEFT */}

              <div className="mf-reveal">
                <span
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.3em]
                    text-[#315C48]
                  "
                >
                  BEFORE YOU INVEST
                </span>

                <h2
                  className="
                    mt-5
                    max-w-[520px]
                    text-[clamp(3rem,5vw,5.4rem)]
                    font-medium
                    leading-[0.87]
                    tracking-[-0.06em]
                    text-[#183D2C]
                  "
                >
                  Choose the
                  <br />
                  fund around
                  <br />
                  the goal.
                </h2>

                <p
                  className="
                    mt-7
                    max-w-[440px]
                    text-[14px]
                    leading-7
                    text-[#737A74]
                  "
                >
                  Start by clarifying your financial goal and
                  time frame. Then compare funds within the
                  same category and make sure the chosen
                  fund's risk profile aligns with your comfort
                  level.
                </p>
              </div>

              {/* RIGHT */}

              <div className="mf-reveal">

                <div className="border-t border-[#C8D2C9]">

                  {/* 01 */}

                  <div
                    className="
                      group
                      grid
                      gap-5
                      border-b
                      border-[#C8D2C9]
                      py-8
                      transition-all
                      duration-300
                      hover:px-4
                      lg:grid-cols-[70px_1fr_120px]
                      lg:items-center
                    "
                  >
                    <span
                      className="
                        text-[10px]
                        font-semibold
                        tracking-[0.2em]
                        text-[#8A918B]
                      "
                    >
                      01
                    </span>

                    <div>
                      <h3
                        className="
                          text-[24px]
                          font-medium
                          tracking-[-0.035em]
                          text-[#183D2C]
                        "
                      >
                        Clarify the goal.
                      </h3>

                      <p
                        className="
                          mt-2
                          max-w-[590px]
                          text-[13px]
                          leading-6
                          text-[#737A74]
                        "
                      >
                        Start by clarifying your financial
                        goal and time frame — whether it is
                        retirement, child education, wealth
                        creation or short-term savings.
                      </p>
                    </div>

                    <span
                      className="
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.18em]
                        text-[#315C48]
                      "
                    >
                      GOAL
                    </span>
                  </div>

                  {/* 02 */}

                  <div
                    className="
                      group
                      grid
                      gap-5
                      border-b
                      border-[#C8D2C9]
                      py-8
                      transition-all
                      duration-300
                      hover:px-4
                      lg:grid-cols-[70px_1fr_120px]
                      lg:items-center
                    "
                  >
                    <span
                      className="
                        text-[10px]
                        font-semibold
                        tracking-[0.2em]
                        text-[#8A918B]
                      "
                    >
                      02
                    </span>

                    <div>
                      <h3
                        className="
                          text-[24px]
                          font-medium
                          tracking-[-0.035em]
                          text-[#183D2C]
                        "
                      >
                        Compare within the category.
                      </h3>

                      <p
                        className="
                          mt-2
                          max-w-[590px]
                          text-[13px]
                          leading-6
                          text-[#737A74]
                        "
                      >
                        Compare funds within the same category,
                        looking at expense ratios, consistency
                        of past performance, portfolio quality
                        and fund manager track record.
                      </p>
                    </div>

                    <span
                      className="
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.18em]
                        text-[#315C48]
                      "
                    >
                      COMPARE
                    </span>
                  </div>

                  {/* 03 */}

                  <div
                    className="
                      group
                      grid
                      gap-5
                      border-b
                      border-[#C8D2C9]
                      py-8
                      transition-all
                      duration-300
                      hover:px-4
                      lg:grid-cols-[70px_1fr_120px]
                      lg:items-center
                    "
                  >
                    <span
                      className="
                        text-[10px]
                        font-semibold
                        tracking-[0.2em]
                        text-[#8A918B]
                      "
                    >
                      03
                    </span>

                    <div>
                      <h3
                        className="
                          text-[24px]
                          font-medium
                          tracking-[-0.035em]
                          text-[#183D2C]
                        "
                      >
                        Match the risk.
                      </h3>

                      <p
                        className="
                          mt-2
                          max-w-[590px]
                          text-[13px]
                          leading-6
                          text-[#737A74]
                        "
                      >
                        Ensure the chosen fund's risk profile
                        aligns with your comfort level and
                        your ability to stay invested through
                        market movements.
                      </p>
                    </div>

                    <span
                      className="
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.18em]
                        text-[#315C48]
                      "
                    >
                      RISK
                    </span>
                  </div>

                </div>

                <div
                  className="
                    mt-7
                    flex
                    items-center
                    gap-3
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.18em]
                    text-[#6D776F]
                  "
                >
                  <span
                    className="
                      h-2
                      w-2
                      rounded-full
                      bg-[#123B2A]
                    "
                  />

                  Goal → Category → Compare → Risk
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            FAQ
        ====================================================== */}

        <section
          id="faqs"
          className="
            px-6
            py-24
            sm:px-10
            lg:px-16
            lg:py-32
          "
        >
          <div className="mx-auto max-w-[1050px]">

            <div className="mf-reveal">
              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  text-[#315C48]
                "
              >
                QUESTIONS
              </span>

              <h2
                className="
                  mt-5
                  max-w-[850px]
                  text-[clamp(3rem,5vw,5.4rem)]
                  font-medium
                  leading-[0.88]
                  tracking-[-0.06em]
                  text-[#183D2C]
                "
              >
                Mutual Funds —
                <br />
                Frequently Asked Questions.
              </h2>
            </div>

            <div className="mf-reveal mt-14">

              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <div
                    key={faq.question}
                    className="
                      border-t
                      border-[#DCE8DF]
                      last:border-b
                    "
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setOpenFaq(
                          isOpen ? null : index
                        )
                      }
                      className="
                        flex
                        w-full
                        items-center
                        justify-between
                        gap-6
                        py-7
                        text-left
                      "
                    >
                      <span
                        className="
                          max-w-[850px]
                          text-[17px]
                          font-medium
                          tracking-[-0.02em]
                          text-[#183D2C]
                          sm:text-[19px]
                        "
                      >
                        {faq.question}
                      </span>

                      <span
                        className={`
                          flex
                          h-10
                          w-10
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-[#DCE8DF]
                          text-[#123B2A]
                          transition-all
                          duration-300
                          ${
                            isOpen
                              ? "rotate-45 bg-[#EAF7EF]"
                              : "bg-white"
                          }
                        `}
                      >
                        +
                      </span>
                    </button>

                    <div
                      className={`
                        grid
                        transition-all
                        duration-300
                        ${
                          isOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }
                      `}
                    >
                      <div className="overflow-hidden">
                        <p
                          className="
                            max-w-[800px]
                            pb-7
                            pr-12
                            text-[14px]
                            leading-7
                            text-[#737A74]
                          "
                        >
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}

            </div>
          </div>
        </section>

        {/* =====================================================
            CTA
        ====================================================== */}

        <section
          className="
            bg-[#123B2A]
            px-6
            py-24
            text-white
            sm:px-10
            lg:px-16
            lg:py-28
          "
        >
          <div
            className="
              mx-auto
              max-w-[1100px]
              text-center
            "
          >
            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.3em]
                text-[#6BD88E]
              "
            >
              BUILD WITH CLARITY
            </span>

            <h2
              className="
                mt-6
                text-[clamp(3rem,6vw,6rem)]
                font-medium
                leading-[0.88]
                tracking-[-0.06em]
              "
            >
              Invest with
              <br />
              a clearer plan.
            </h2>

            <p
              className="
                mx-auto
                mt-7
                max-w-[600px]
                text-[14px]
                leading-7
                text-white/55
              "
            >
              Understand your options, align them with
              your goals and build an investment approach
              that makes sense for your financial journey.
            </p>

            <div className="mt-9">
              <a
                href="/contact"
                className="
                  inline-flex
                  h-[54px]
                  items-center
                  gap-3
                  rounded-full
                  bg-white
                  px-8
                  text-[13px]
                  font-semibold
                  text-[#123B2A]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#EAF7EF]
                "
              >
                Talk to an Expert
                <span>↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}