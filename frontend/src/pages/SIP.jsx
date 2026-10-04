import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

/* =========================================================
   SIP BENEFITS — ORIGINAL CONTENT
========================================================= */

const benefits = [
    {
        number: "01",
        title: "Regular Investing Habit",
        label: "DISCIPLINE",
        text:
            "Build a steady savings routine and steer clear of impulsive choices — invest consistently without trying to predict market moves.",
    },
    {
        number: "02",
        title: "Rupee Cost Averaging",
        label: "CONSISTENCY",
        text:
            "By investing at fixed intervals, you accumulate more units when prices fall and fewer when they rise — smoothing out long-term costs.",
    },
    {
        number: "03",
        title: "Compounding Advantage",
        label: "TIME",
        text:
            "Your earnings start producing their own earnings — the longer you stay invested, the more your money can grow.",
    },
    {
        number: "04",
        title: "Easy Customisation",
        label: "FLEXIBILITY",
        text:
            "Adjust, pause, top-up, or stop your SIP whenever needed to match changes in your income or financial priorities.",
    },
    {
        number: "05",
        title: "Goal-Based Approach",
        label: "PURPOSE",
        text:
            "Define your aims clearly — SIPs are well-suited to objectives like buying a house, planning education, or building a retirement fund.",
    },
    {
        number: "06",
        title: "Smoother Ride",
        label: "LONG TERM",
        text:
            "Spreading investments across time helps reduce the effect of short-term ups and downs, giving you a calmer journey toward wealth creation.",
    },
];

const faqs = [
    {
        question: "What does SIP mean?",
        answer:
            "SIP stands for Systematic Investment Plan. It is a way of investing a fixed amount at regular intervals into mutual funds, helping you stay consistent and benefit from compounding over time.",
    },
    {
        question: "Can I modify or stop my SIP later?",
        answer:
            "Absolutely! SIPs are highly flexible — you can step up, pause, or discontinue your contributions whenever your financial situation changes.",
    },
    {
        question: "Is investing through SIP risky?",
        answer:
            "SIP returns are linked to market performance and the funds you select. Over the long run, however, SIPs generally help reduce the impact of market fluctuations through rupee-cost averaging.",
    },
    {
        question: "What amount should I begin a SIP with?",
        answer:
            "It depends on your goals and budget. You can start with as little as ₹500 a month and gradually raise your SIP amount as your income increases.",
    },
    {
        question: "When is the right time to start a SIP?",
        answer:
            "The ideal time is today! Beginning early gives compounding more years to work for you. Staying invested matters more than trying to time the market.",
    },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function SIP() {
    const pageRef = useRef(null);

    const [sipAmount, setSipAmount] = useState(5000);
    const [sipReturn, setSipReturn] = useState(12);
    const [sipYears, setSipYears] = useState(10);

    const [result, setResult] = useState(null);
    const [openFaq, setOpenFaq] = useState(null);

    /* =======================================================
       ANIMATIONS
    ======================================================= */

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".sip-hero-item", {
                y: 45,
                opacity: 0,
                duration: 0.9,
                stagger: 0.08,
                ease: "power3.out",
            });

            gsap.from(".sip-hero-visual", {
                x: 45,
                opacity: 0,
                duration: 1,
                delay: 0.2,
                ease: "power3.out",
            });

            gsap.utils.toArray(".sip-reveal").forEach((element) => {
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

    /* =======================================================
       SIP CALCULATOR
    ======================================================= */

    const calculateSIP = () => {
        const amount = Number(sipAmount);
        const annualReturn = Number(sipReturn);
        const years = Number(sipYears);

        if (
            !Number.isFinite(amount) ||
            !Number.isFinite(annualReturn) ||
            !Number.isFinite(years) ||
            amount <= 0 ||
            annualReturn < 0 ||
            years <= 0
        ) {
            return;
        }

        const monthlyRate = annualReturn / 100 / 12;
        const months = years * 12;

        let futureValue;

        if (monthlyRate === 0) {
            futureValue = amount * months;
        } else {
            futureValue =
                amount *
                ((Math.pow(1 + monthlyRate, months) - 1) /
                    monthlyRate) *
                (1 + monthlyRate);
        }

        const invested = amount * months;
        const gain = futureValue - invested;

        const labels = Array.from(
            { length: years + 1 },
            (_, index) => index
        );

        const values = labels.map((year) => {
            if (year === 0) return 0;

            if (monthlyRate === 0) {
                return amount * year * 12;
            }

            return (
                amount *
                ((Math.pow(1 + monthlyRate, year * 12) - 1) /
                    monthlyRate) *
                (1 + monthlyRate)
            );
        });

        setResult({
            amount,
            annualReturn,
            years,
            invested,
            futureValue,
            gain,
            labels,
            values,
        });
    };

    const resetCalculator = () => {
        setSipAmount(5000);
        setSipReturn(12);
        setSipYears(10);
        setResult(null);
    };

    const formatMoney = (value) => {
        return `₹${Math.round(value).toLocaleString("en-IN")}`;
    };

    return (
        <>
            <Navbar />

            <main
                ref={pageRef}
                className="
          overflow-hidden
          bg-[#F7FBF8]
          text-[#11110F]
        "
            >
                {/* =====================================================
            HERO
        ====================================================== */}

                {/* =====================================================
    HERO
====================================================== */}

                <section className="relative overflow-hidden bg-[#F1EEE7] px-6 pb-24 pt-40 sm:px-10 lg:px-16 lg:pb-32 lg:pt-44">

                    {/* subtle background grid */}

                    <div
                        className="pointer-events-none absolute inset-0 opacity-[0.22]"
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

                    <div className="relative mx-auto max-w-[1050px] text-center">

                        {/* eyebrow */}

                        <div className="sip-hero-item flex items-center justify-center gap-3">

                            <span className="h-[7px] w-[7px] rounded-full bg-[#123B2A]" />

                            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#315C48]">
                                SYSTEMATIC INVESTMENT PLAN
                            </span>

                        </div>

                        {/* heading */}

                        <h1
                            className="
        sip-hero-item
        mx-auto
        mt-8
        max-w-[950px]
        text-[clamp(3.5rem,8vw,7.5rem)]
        font-medium
        leading-[0.86]
        tracking-[-0.07em]
        text-[#11110F]
      "
                        >
                            Invest regularly.
                            <br />

                            <span className="text-[#7F887F]">
                                Grow steadily.
                            </span>
                        </h1>

                        {/* description */}

                        <p
                            className="
        sip-hero-item
        mx-auto
        mt-9
        max-w-[700px]
        text-[15px]
        leading-7
        text-[#686C67]
      "
                        >
                            A SIP enables you to put aside small, fixed amounts
                            at regular intervals into mutual funds — converting
                            your everyday savings into a steady investment routine.
                        </p>

                        <p
                            className="
        sip-hero-item
        mx-auto
        mt-4
        max-w-[700px]
        text-[14px]
        leading-7
        text-[#686C67]
      "
                        >
                            You enjoy the advantage{" "}
                            <strong className="text-[#183D2C]">
                                rupee-cost averaging
                            </strong>{" "}
                            together with the{" "}
                            <strong className="text-[#183D2C]">
                                magic of compounding
                            </strong>{" "}
                            as years pass.
                        </p>

                        {/* CTA */}

                        <div className="sip-hero-item mt-9">

                            <a
                                href="#sip-calculator"
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
                                Try the SIP Calculator
                                <span>↓</span>
                            </a>

                        </div>

                        {/* small meaningful separator */}

                        <div
                            className="
        sip-hero-item
        mx-auto
        mt-14
        flex
        max-w-[700px]
        flex-wrap
        items-center
        justify-center
        gap-x-8
        gap-y-3
        border-t
        border-[#CFCFC7]
        pt-7
      "
                        >

                            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7E837D]">
                                Regular investing
                            </span>

                            <span className="hidden h-1 w-1 rounded-full bg-[#A7ADA6] sm:block" />

                            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7E837D]">
                                Rupee-cost averaging
                            </span>

                            <span className="hidden h-1 w-1 rounded-full bg-[#A7ADA6] sm:block" />

                            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7E837D]">
                                Compounding
                            </span>

                        </div>

                    </div>

                </section>

                {/* =====================================================
            SIP FOUNDATION
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
                sip-reveal
                grid
                gap-14
                lg:grid-cols-[0.7fr_1.3fr]
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
                                    THE IDEA
                                </span>

                                <h2
                                    className="
                    mt-5
                    max-w-[520px]
                    text-[clamp(3rem,5vw,5.5rem)]
                    font-medium
                    leading-[0.87]
                    tracking-[-0.06em]
                    text-[#183D2C]
                  "
                                >
                                    Small
                                    <br />
                                    amounts.
                                    <br />
                                    Long horizon.
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
                                    Aim for lasting results: stay regular, keep
                                    your portfolio diversified, and review your
                                    progress from time to time.
                                </p>
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

                                <div
                                    className="
                    absolute
                    right-[-60px]
                    top-[-60px]
                    h-[220px]
                    w-[220px]
                    rounded-full
                    border
                    border-[#DCE8DF]
                  "
                                />

                                <div className="relative">

                                    <div
                                        className="
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
                                            HOW SIP BUILDS THE HABIT
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
                                            03 PRINCIPLES
                                        </span>
                                    </div>

                                    <div className="mt-3">

                                        {[
                                            {
                                                number: "01",
                                                title: "Invest regularly",
                                                text:
                                                    "A fixed amount is invested at regular intervals instead of relying on perfect market timing.",
                                            },
                                            {
                                                number: "02",
                                                title: "Average your purchase cost",
                                                text:
                                                    "Fixed-interval investing means you buy more units when prices are lower and fewer when prices are higher.",
                                            },
                                            {
                                                number: "03",
                                                title: "Give compounding time",
                                                text:
                                                    "Your earnings can themselves generate earnings, making time an important part of long-term wealth creation.",
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
                          py-6
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
                              text-[18px]
                              font-medium
                              tracking-[-0.025em]
                              text-[#183D2C]
                            "
                                                    >
                                                        {item.title}
                                                    </h3>

                                                    <p
                                                        className="
                              mt-2
                              max-w-[620px]
                              text-[13px]
                              leading-6
                              text-[#737A74]
                            "
                                                    >
                                                        {item.text}
                                                    </p>

                                                </div>
                                            </div>
                                        ))}

                                    </div>

                                </div>
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
                sip-reveal
                grid
                gap-14
                lg:grid-cols-[0.7fr_1.3fr]
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
                                    WHY CHOOSE A SIP?
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
                                    Build the habit.
                                    <br />
                                    Let time
                                    <br />
                                    do the work.
                                </h2>

                            </div>

                            {/* RIGHT */}

                            <div className="border-t border-white/10">

                                {benefits.map((benefit) => (
                                    <article
                                        key={benefit.number}
                                        className="
                      group
                      grid
                      gap-5
                      border-b
                      border-white/10
                      py-7
                      transition-all
                      duration-300
                      lg:grid-cols-[60px_0.75fr_1fr_110px]
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
                        max-w-[500px]
                        text-[13px]
                        leading-6
                        text-white/55
                      "
                                        >
                                            {benefit.text}
                                        </p>

                                        <span
                                            className="
                        text-left
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.18em]
                        text-[#6BD88E]
                        lg:text-right
                      "
                                        >
                                            {benefit.label}
                                        </span>

                                    </article>
                                ))}

                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
            SIP CALCULATOR
        ====================================================== */}

                <section
                    id="sip-calculator"
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

                        <div className="sip-reveal">

                            <span
                                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  text-[#315C48]
                "
                            >
                                SIP CALCULATOR
                            </span>

                            <h2
                                className="
                  mt-5
                  max-w-[850px]
                  text-[clamp(3rem,5vw,5.5rem)]
                  font-medium
                  leading-[0.87]
                  tracking-[-0.06em]
                  text-[#183D2C]
                "
                            >
                                See what
                                <br />
                                consistency can build.
                            </h2>

                            <p
                                className="
                  mt-6
                  max-w-[620px]
                  text-[14px]
                  leading-7
                  text-[#737A74]
                "
                            >
                                See how disciplined monthly contributions can
                                build into a sizeable corpus over the years.
                                Change the inputs to explore different scenarios.
                            </p>
                        </div>

                        <div
                            className="
                sip-reveal
                mt-12
                grid
                gap-6
                lg:grid-cols-[0.75fr_1.25fr]
              "
                        >

                            {/* INPUT */}

                            <div
                                className="
                  rounded-[28px]
                  bg-[#123B2A]
                  p-7
                  text-white
                  sm:p-9
                "
                            >

                                <div
                                    className="
                    border-b
                    border-white/10
                    pb-6
                  "
                                >
                                    <span
                                        className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.25em]
                      text-[#6BD88E]
                    "
                                    >
                                        YOUR SIP INPUTS
                                    </span>

                                    <h3
                                        className="
                      mt-3
                      text-[25px]
                      font-medium
                      tracking-[-0.035em]
                    "
                                    >
                                        Set your numbers.
                                    </h3>
                                </div>

                                <div className="mt-8 space-y-7">

                                    {/* amount */}

                                    <div>

                                        <label
                                            className="
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.2em]
                        text-white/55
                      "
                                        >
                                            Monthly SIP Amount (₹)
                                        </label>

                                        <input
                                            type="number"
                                            min="1"
                                            value={sipAmount}
                                            onChange={(e) =>
                                                setSipAmount(e.target.value)
                                            }
                                            className="
                        mt-3
                        h-[54px]
                        w-full
                        rounded-xl
                        border
                        border-white/10
                        bg-white/10
                        px-4
                        text-[16px]
                        text-white
                        outline-none
                        focus:border-white/30
                      "
                                        />

                                    </div>

                                    {/* return */}

                                    <div>

                                        <label
                                            className="
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.2em]
                        text-white/55
                      "
                                        >
                                            Expected Annual Return (%)
                                        </label>

                                        <input
                                            type="number"
                                            min="0"
                                            step="0.1"
                                            value={sipReturn}
                                            onChange={(e) =>
                                                setSipReturn(e.target.value)
                                            }
                                            className="
                        mt-3
                        h-[54px]
                        w-full
                        rounded-xl
                        border
                        border-white/10
                        bg-white/10
                        px-4
                        text-[16px]
                        text-white
                        outline-none
                        focus:border-white/30
                      "
                                        />

                                    </div>

                                    {/* years */}

                                    <div>

                                        <label
                                            className="
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.2em]
                        text-white/55
                      "
                                        >
                                            Investment Duration (Years)
                                        </label>

                                        <input
                                            type="number"
                                            min="1"
                                            value={sipYears}
                                            onChange={(e) =>
                                                setSipYears(e.target.value)
                                            }
                                            className="
                        mt-3
                        h-[54px]
                        w-full
                        rounded-xl
                        border
                        border-white/10
                        bg-white/10
                        px-4
                        text-[16px]
                        text-white
                        outline-none
                        focus:border-white/30
                      "
                                        />

                                    </div>

                                    <div className="flex gap-3">

                                        <button
                                            type="button"
                                            onClick={calculateSIP}
                                            className="
                        h-[52px]
                        flex-1
                        rounded-full
                        bg-[#C8FF3D]
                        px-6
                        text-[13px]
                        font-semibold
                        text-[#123B2A]
                        transition-all
                        duration-300
                        hover:-translate-y-1
                      "
                                        >
                                            Compute
                                        </button>

                                        <button
                                            type="button"
                                            onClick={resetCalculator}
                                            className="
                        h-[52px]
                        rounded-full
                        border
                        border-white/20
                        px-6
                        text-[13px]
                        font-medium
                        text-white
                        transition-all
                        duration-300
                        hover:bg-white/10
                      "
                                        >
                                            Clear
                                        </button>

                                    </div>
                                </div>
                            </div>

                            {/* RESULT */}

                            <div
                                className="
                  rounded-[28px]
                  border
                  border-[#DCE8DF]
                  bg-white
                  p-7
                  sm:p-9
                "
                            >

                                <div
                                    className="
                    flex
                    items-start
                    justify-between
                    gap-5
                    border-b
                    border-[#E6ECE7]
                    pb-6
                  "
                                >

                                    <div>

                                        <span
                                            className="
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.25em]
                        text-[#315C48]
                      "
                                        >
                                            PROJECTED GROWTH
                                        </span>

                                        <h3
                                            className="
                        mt-3
                        text-[25px]
                        font-medium
                        tracking-[-0.035em]
                        text-[#183D2C]
                      "
                                        >
                                            Your projected journey.
                                        </h3>

                                    </div>

                                    <span
                                        className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#EAF7EF]
                      text-[#123B2A]
                    "
                                    >
                                        ↗
                                    </span>

                                </div>

                                {!result ? (
                                    <div
                                        className="
                      flex
                      min-h-[390px]
                      items-center
                      justify-center
                      text-center
                    "
                                    >
                                        <div>

                                            <div
                                                className="
                          mx-auto
                          flex
                          h-16
                          w-16
                          items-center
                          justify-center
                          rounded-full
                          bg-[#EAF7EF]
                          text-[22px]
                          text-[#123B2A]
                        "
                                            >
                                                ₹
                                            </div>

                                            <p
                                                className="
                          mx-auto
                          mt-5
                          max-w-[390px]
                          text-[14px]
                          leading-6
                          text-[#7B857E]
                        "
                                            >
                                                Fill in your SIP details and tap
                                                Compute to view how your money may
                                                grow.
                                            </p>

                                        </div>
                                    </div>
                                ) : (
                                    <>

                                        {/* RESULTS */}

                                        <div
                                            className="
                        mt-7
                        grid
                        gap-px
                        overflow-hidden
                        rounded-2xl
                        border
                        border-[#DCE8DF]
                        bg-[#DCE8DF]
                        sm:grid-cols-3
                      "
                                        >

                                            <ResultBox
                                                label="TOTAL INVESTED"
                                                value={formatMoney(result.invested)}
                                            />

                                            <ResultBox
                                                label="PROJECTED VALUE"
                                                value={formatMoney(result.futureValue)}
                                                highlighted
                                            />

                                            <ResultBox
                                                label="ESTIMATED GAIN"
                                                value={formatMoney(result.gain)}
                                            />

                                        </div>

                                        {/* chart */}

                                        <div className="mt-8 h-[270px]">

                                            <svg
                                                viewBox="0 0 900 300"
                                                className="h-full w-full"
                                                preserveAspectRatio="none"
                                            >

                                                {[60, 120, 180, 240].map(
                                                    (y) => (
                                                        <line
                                                            key={y}
                                                            x1="45"
                                                            x2="870"
                                                            y1={y}
                                                            y2={y}
                                                            stroke="#E8EDE9"
                                                            strokeWidth="1"
                                                        />
                                                    )
                                                )}

                                                {(() => {
                                                    const maxValue =
                                                        Math.max(
                                                            ...result.values
                                                        );

                                                    const points =
                                                        result.values.map(
                                                            (value, index) => {
                                                                const x =
                                                                    45 +
                                                                    (index *
                                                                        825) /
                                                                    (result.values
                                                                        .length -
                                                                        1);

                                                                const y =
                                                                    250 -
                                                                    (value /
                                                                        maxValue) *
                                                                    190;

                                                                return {
                                                                    x,
                                                                    y,
                                                                };
                                                            }
                                                        );

                                                    const linePath =
                                                        points
                                                            .map(
                                                                (point, index) =>
                                                                    `${index === 0
                                                                        ? "M"
                                                                        : "L"
                                                                    } ${point.x} ${point.y}`
                                                            )
                                                            .join(" ");

                                                    const areaPath = `
                            ${linePath}
                            L 870 250
                            L 45 250
                            Z
                          `;

                                                    return (
                                                        <>
                                                            <path
                                                                d={areaPath}
                                                                fill="#123B2A"
                                                                opacity="0.06"
                                                            />

                                                            <path
                                                                d={linePath}
                                                                fill="none"
                                                                stroke="#123B2A"
                                                                strokeWidth="3"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />

                                                            {points.map(
                                                                (
                                                                    point,
                                                                    index
                                                                ) => (
                                                                    <circle
                                                                        key={index}
                                                                        cx={point.x}
                                                                        cy={point.y}
                                                                        r="4"
                                                                        fill="#F7FBF8"
                                                                        stroke="#123B2A"
                                                                        strokeWidth="2.5"
                                                                    />
                                                                )
                                                            )}
                                                        </>
                                                    );
                                                })()}

                                                {result.labels.map(
                                                    (year, index) => {
                                                        const x =
                                                            45 +
                                                            (index *
                                                                825) /
                                                            (result.labels
                                                                .length -
                                                                1);

                                                        return (
                                                            <text
                                                                key={year}
                                                                x={x}
                                                                y="280"
                                                                textAnchor="middle"
                                                                fontSize="10"
                                                                fill="#8A9089"
                                                            >
                                                                {year}y
                                                            </text>
                                                        );
                                                    }
                                                )}

                                            </svg>

                                        </div>

                                        <div
                                            className="
                        mt-3
                        flex
                        flex-wrap
                        gap-x-8
                        gap-y-2
                        border-t
                        border-[#E6ECE7]
                        pt-5
                        text-[11px]
                        text-[#7B857E]
                      "
                                        >
                                            <span>
                                                Monthly:{" "}
                                                <strong className="text-[#183D2C]">
                                                    {formatMoney(result.amount)}
                                                </strong>
                                            </span>

                                            <span>
                                                Return:{" "}
                                                <strong className="text-[#183D2C]">
                                                    {result.annualReturn}%
                                                </strong>
                                            </span>

                                            <span>
                                                Duration:{" "}
                                                <strong className="text-[#183D2C]">
                                                    {result.years} years
                                                </strong>
                                            </span>
                                        </div>

                                    </>
                                )}

                                <p
                                    className="
                    mt-6
                    text-[11px]
                    leading-5
                    text-[#8A9089]
                  "
                                >
                                    Based on monthly compounding at the assumed
                                    annual return. This calculator is for
                                    illustration only and does not guarantee
                                    investment returns.
                                </p>

                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
            FAQ
        ====================================================== */}

                <section
                    id="sip-faq"
                    className="
            px-6
            py-24
            sm:px-10
            lg:px-16
            lg:py-32
          "
                >
                    <div className="mx-auto max-w-[1050px]">

                        <div className="sip-reveal">

                            <span
                                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  text-[#315C48]
                "
                            >
                                COMMON QUESTIONS ABOUT SIPS
                            </span>

                            <h2
                                className="
                  mt-5
                  max-w-[850px]
                  text-[clamp(3rem,5vw,5.3rem)]
                  font-medium
                  leading-[0.88]
                  tracking-[-0.06em]
                  text-[#183D2C]
                "
                            >
                                Questions worth
                                <br />
                                answering.
                            </h2>

                            <p
                                className="
                  mt-6
                  max-w-[650px]
                  text-[14px]
                  leading-7
                  text-[#737A74]
                "
                            >
                                Quick answers to the things investors ask most
                                often about SIPs — how they work, their perks,
                                and how flexible they are.
                            </p>

                        </div>

                        <div className="sip-reveal mt-14">

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
                          ${isOpen
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
                        ${isOpen
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
                            START SMALL. STAY CONSISTENT.
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
                            Give your money
                            <br />
                            more time to grow.
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
                            Start with an amount that fits your budget,
                            stay consistent and let your long-term plan
                            do the work.
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

/* =========================================================
   RESULT BOX
========================================================= */

function ResultBox({
    label,
    value,
    highlighted = false,
}) {
    return (
        <div
            className={`
        p-6
        ${highlighted
                    ? "bg-[#EAF7EF]"
                    : "bg-white"
                }
      `}
        >
            <span
                className="
          text-[9px]
          font-semibold
          uppercase
          tracking-[0.2em]
          text-[#8A9089]
        "
            >
                {label}
            </span>

            <div
                className={`
          mt-2
          text-[20px]
          font-medium
          tracking-[-0.035em]
          ${highlighted
                        ? "text-[#123B2A]"
                        : "text-[#183D2C]"
                    }
        `}
            >
                {value}
            </div>
        </div>
    );
}