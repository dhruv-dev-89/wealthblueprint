import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  {
    number: "01",
    title: "Large Cover, Pocket-Friendly Premium",
    text:
      "Access high life cover starting from just ₹699 per month, so your family stays secure without stretching your monthly expenses.",
  },
  {
    number: "02",
    title: "Tax Savings",
    text:
      "Premiums may qualify for deductions under Section 80C, and eligible claim payouts can be exempt under Section 10(10D) as per tax laws.",
  },
  {
    number: "03",
    title: "Flexible Benefit Payouts",
    text:
      "Opt for a lump sum, regular monthly income, or a blended option so that your family receives money in the way that suits them best.",
  },
  {
    number: "04",
    title: "Protection-Boosting Riders",
    text:
      "Customise your policy with add-ons such as critical illness cover, accidental death benefit, and disability protection for wider safety.",
  },
  {
    number: "05",
    title: "Reliable Claims Track Record",
    text:
      "A claim settlement ratio of 99.4% reflects our focus on paying valid claims quickly when your family needs support the most.",
  },
  {
    number: "06",
    title: "Fast, Hassle-Free Issuance",
    text:
      "Enjoy a smooth, digital-first buying journey with minimal paperwork and quick policy issuance in most straightforward cases.",
  },
];

const faqs = [
  {
    question: "What exactly is term insurance?",
    answer:
      "Term insurance is a straightforward life cover that protects your family financially if you pass away during the policy period. It provides a high sum assured at comparatively low premiums and usually does not offer any payout if you outlive the chosen term.",
  },
  {
    question: "How much term insurance cover should I opt for?",
    answer:
      "Many people aim for coverage that is around 10–15 times their annual income. However, your ideal cover depends on your loans, monthly expenses, dependents, and long-term goals. Our team can help you work out a suitable amount based on your current and future financial responsibilities.",
  },
  {
    question: "What if I live beyond the policy duration?",
    answer:
      "In a standard term plan, there is typically no payout if you survive till the end of the term. However, with our Term Shield Premier plan’s Return of Premium feature, you can receive back all the premiums you have paid if you outlive the policy period.",
  },
  {
    question: "Can I include riders with my term policy?",
    answer:
      "Yes, you can enhance your cover by adding riders like Critical Illness Cover, Accidental Death Benefit, Disability Benefit, and Premium Waiver. These optional add-ons provide extra protection at a relatively small additional cost.",
  },
  {
    question: "Which documents are needed to purchase term insurance?",
    answer:
      "You’ll generally need identity proof (such as Aadhaar, PAN, or Voter ID), proof of address, proof of age, and income documents. Depending on your age and the cover amount, a medical check-up report may also be required. Large sum assured policies may call for a few additional documents.",
  },
  {
    question: "What situations are usually not covered by a term plan?",
    answer:
      "Common exclusions include death due to suicide within the initial waiting period, death linked to undisclosed pre-existing medical issues, and death arising from risky activities that were not declared at the time of purchase. It is important to share complete and honest information when applying for the policy.",
  },
];

export default function Insurance() {
  const pageRef = useRef(null);

  const [age, setAge] = useState(30);
  const [gender, setGender] = useState("male");
  const [coverage, setCoverage] = useState(10000000);
  const [term, setTerm] = useState(30);
  const [smoker, setSmoker] = useState("no");

  const [result, setResult] = useState({
    monthly: 899,
    annual: 10788,
    tax: 2158,
  });

  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".insurance-hero-item", {
        y: 35,
        opacity: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
      });

      gsap.from(".insurance-hero-image", {
        x: 35,
        opacity: 0,
        duration: 1,
        delay: 0.15,
        ease: "power3.out",
      });

      gsap.utils.toArray(".insurance-reveal").forEach((element) => {
        gsap.from(element, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 88%",
            once: true,
          },
        });
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const calculatePremium = () => {
    let basePremium = coverage / 100000;

    basePremium *= 1 + (Number(age) - 30) * 0.03;
    basePremium *= smoker === "yes" ? 1.3 : 1;
    basePremium *= gender === "male" ? 1.05 : 0.95;
    basePremium /= Number(term) / 10;

    const monthlyPremium = Math.max(1, Math.round(basePremium));
    const annualPremium = monthlyPremium * 12;
    const taxBenefit = Math.round(annualPremium * 0.2);

    setResult({
      monthly: monthlyPremium,
      annual: annualPremium,
      tax: taxBenefit,
    });
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

        <section className="relative overflow-hidden bg-[#F1EEE7] px-6 pb-24 pt-40 sm:px-10 lg:px-16 lg:pb-32 lg:pt-44">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.2]"
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
            <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
              {/* LEFT */}

              <div>
                <div className="insurance-hero-item flex items-center gap-3">
                  <span className="h-[7px] w-[7px] rounded-full bg-[#123B2A]" />

                  <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#315C48]">
                    TERM LIFE PROTECTION
                  </span>
                </div>

                <h1 className="insurance-hero-item mt-7 max-w-[800px] text-[clamp(3.5rem,7vw,7rem)] font-medium leading-[0.86] tracking-[-0.07em] text-[#11110F]">
                  Protect what
                  <br />
                  <span className="text-[#7F887F]">matters most.</span>
                </h1>

                <p className="insurance-hero-item mt-8 max-w-[620px] text-[15px] leading-7 text-[#686C67]">
                  Life can be unpredictable — your family’s financial security
                  shouldn’t be. Choose term cover that offers extensive
                  protection, affordable premiums, and lasting reassurance for
                  those who depend on you.
                </p>

                <div className="insurance-hero-item mt-9">
                  <a
                    href="#insurance-calculator"
                    className="inline-flex h-[52px] items-center gap-3 rounded-full bg-[#123B2A] px-7 text-[13px] font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#0D3022]"
                  >
                    Check Your Premium
                    <span>↓</span>
                  </a>
                </div>
              </div>

              {/* IMAGE */}

              <div className="insurance-hero-image relative">
                <div className="absolute -inset-4 rounded-[30px] border border-[#D6DED7]" />

                <div className="relative overflow-hidden rounded-[24px] bg-white">
                  <img
                    src="https://media.istockphoto.com/id/2194882474/photo/insurance-policy-document-concept-businesswomen-checklist-insurance-document-online.jpg?b=1&s=612x612&w=0&k=20&c=de33jWMLJaLcOyIqfjMea6ZR8XeKZ1arLWxPkT7lRZ4="
                    alt="Happy family secured with insurance"
                    className="h-[480px] w-full object-cover"
                  />

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#11110F]/75 via-[#11110F]/20 to-transparent p-7 pt-28">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/60">
                      FINANCIAL PROTECTION
                    </span>

                    <p className="mt-2 max-w-[360px] text-[21px] font-medium leading-tight text-white">
                      A safety net for the people who depend on you.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* source stats */}

            <div className="insurance-hero-item mt-16 grid border-t border-[#CFCFC7] sm:grid-cols-3">
              <Stat
                value="₹1000+ Cr"
                label="Total Claims Paid"
              />

              <Stat
                value="99.8%"
                label="Claims Paid Ratio"
              />

              <Stat
                value="10L+"
                label="Families Secured"
              />
            </div>
          </div>
        </section>

        {/* =====================================================
            INTRO
        ====================================================== */}

        <section className="px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
          <div className="insurance-reveal mx-auto max-w-[1100px]">
            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#315C48]">
                  WHY TERM INSURANCE
                </span>

                <h2 className="mt-5 text-[clamp(3rem,5vw,5.3rem)] font-medium leading-[0.88] tracking-[-0.06em] text-[#183D2C]">
                  Security
                  <br />
                  before
                  <br />
                  uncertainty.
                </h2>
              </div>

              <div className="flex flex-col justify-end">
                <p className="text-[17px] leading-8 text-[#686F69]">
                  Term insurance is designed to provide financial protection
                  for your family if you pass away during the policy period.
                </p>

                <p className="mt-5 text-[14px] leading-7 text-[#808780]">
                  The objective is simple: provide a high sum assured at a
                  comparatively affordable premium so that your family has
                  financial support when it matters most.
                </p>

                <div className="mt-9 border-l-2 border-[#123B2A] pl-5">
                  <p className="text-[14px] font-medium leading-6 text-[#183D2C]">
                    The right protection should fit your responsibilities,
                    dependents, loans, expenses and long-term goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            BENEFITS
        ====================================================== */}

        <section className="bg-[#F1EEE7] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
          <div className="mx-auto max-w-[1200px]">
            <div className="insurance-reveal mb-14 text-center">
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#315C48]">
                WHY CHOOSE US
              </span>

              <h2 className="mx-auto mt-5 max-w-[800px] text-[clamp(3rem,5vw,5.5rem)] font-medium leading-[0.88] tracking-[-0.06em] text-[#183D2C]">
                Term insurance
                <br />
                advantages.
              </h2>

              <p className="mx-auto mt-6 max-w-[600px] text-[14px] leading-7 text-[#737A74]">
                Get wide-ranging financial protection for your family at a
                price that fits your budget.
              </p>
            </div>

            <div className="grid gap-px overflow-hidden rounded-[24px] border border-[#DCE8DF] bg-[#DCE8DF] md:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit) => (
                <article
                  key={benefit.number}
                  className="insurance-reveal group bg-white p-7 transition-all duration-300 hover:bg-[#F1F7F3] sm:p-9"
                >
                  <div className="flex items-start justify-between">
                    <span className="text-[10px] font-semibold tracking-[0.2em] text-[#315C48]">
                      {benefit.number}
                    </span>

                    <span className="text-[9px] uppercase tracking-[0.18em] text-[#A0A69F]">
                      PROTECTION
                    </span>
                  </div>

                  <h3 className="mt-12 max-w-[300px] text-[20px] font-medium leading-tight tracking-[-0.03em] text-[#183D2C]">
                    {benefit.title}
                  </h3>

                  <p className="mt-4 text-[13px] leading-6 text-[#747B75]">
                    {benefit.text}
                  </p>

                  <div className="mt-8 h-px w-10 bg-[#123B2A] transition-all duration-300 group-hover:w-16" />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            PREMIUM CALCULATOR
        ====================================================== */}

        <section
          id="insurance-calculator"
          className="bg-[#123B2A] px-6 py-24 text-white sm:px-10 lg:px-16 lg:py-32"
        >
          <div className="mx-auto max-w-[1200px]">
            <div className="insurance-reveal text-center">
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#6BD88E]">
                PREMIUM ESTIMATOR
              </span>

              <h2 className="mx-auto mt-5 max-w-[800px] text-[clamp(3rem,5.5vw,5.8rem)] font-medium leading-[0.88] tracking-[-0.06em]">
                Work out your
                <br />
                premium.
              </h2>

              <p className="mx-auto mt-6 max-w-[620px] text-[14px] leading-7 text-white/55">
                Use this quick tool to get an approximate term insurance
                premium.
              </p>
            </div>

            <div className="insurance-reveal mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              {/* FORM */}

              <div className="rounded-[24px] border border-white/10 bg-white/[0.05] p-7 sm:p-9">
                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#6BD88E]">
                  YOUR DETAILS
                </span>

                <h3 className="mt-4 text-[26px] font-medium tracking-[-0.04em]">
                  Fill in your information.
                </h3>

                <p className="mt-3 text-[13px] leading-6 text-white/50">
                  Share a few basic details to get a personalised estimate.
                </p>

                <div className="mt-8 space-y-6">
                  {/* AGE */}

                  <div>
                    <label className="text-[11px] font-medium text-white/55">
                      Your Age
                    </label>

                    <input
                      type="number"
                      min="18"
                      max="65"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      className="mt-2 h-[52px] w-full rounded-xl border border-white/10 bg-white/[0.07] px-4 text-white outline-none focus:border-[#6BD88E]"
                    />

                    <input
                      type="range"
                      min="18"
                      max="65"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      className="mt-4 w-full accent-[#6BD88E]"
                    />
                  </div>

                  {/* GENDER */}

                  <div>
                    <label className="text-[11px] font-medium text-white/55">
                      Gender
                    </label>

                    <select
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      className="mt-2 h-[52px] w-full rounded-xl border border-white/10 bg-white px-4 text-[#183D2C] outline-none"
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>

                  {/* COVERAGE */}

                  <div>
                    <label className="text-[11px] font-medium text-white/55">
                      Coverage Amount
                    </label>

                    <select
                      value={coverage}
                      onChange={(e) =>
                        setCoverage(Number(e.target.value))
                      }
                      className="mt-2 h-[52px] w-full rounded-xl border border-white/10 bg-white px-4 text-[#183D2C] outline-none"
                    >
                      <option value={5000000}>₹50 Lakhs</option>
                      <option value={10000000}>₹1 Crore</option>
                      <option value={20000000}>₹2 Crore</option>
                      <option value={50000000}>₹5 Crore</option>
                    </select>
                  </div>

                  {/* TERM */}

                  <div>
                    <label className="text-[11px] font-medium text-white/55">
                      Policy Term
                    </label>

                    <input
                      type="number"
                      min="5"
                      max="40"
                      value={term}
                      onChange={(e) => setTerm(e.target.value)}
                      className="mt-2 h-[52px] w-full rounded-xl border border-white/10 bg-white/[0.07] px-4 text-white outline-none focus:border-[#6BD88E]"
                    />

                    <input
                      type="range"
                      min="5"
                      max="40"
                      value={term}
                      onChange={(e) => setTerm(e.target.value)}
                      className="mt-4 w-full accent-[#6BD88E]"
                    />
                  </div>

                  {/* SMOKER */}

                  <div>
                    <label className="text-[11px] font-medium text-white/55">
                      Do you smoke?
                    </label>

                    <select
                      value={smoker}
                      onChange={(e) => setSmoker(e.target.value)}
                      className="mt-2 h-[52px] w-full rounded-xl border border-white/10 bg-white px-4 text-[#183D2C] outline-none"
                    >
                      <option value="no">No</option>
                      <option value="yes">Yes</option>
                    </select>
                  </div>

                  <button
                    type="button"
                    onClick={calculatePremium}
                    className="h-[52px] w-full rounded-full bg-[#C8FF3D] text-[13px] font-semibold text-[#123B2A] transition-all duration-300 hover:-translate-y-1"
                  >
                    Calculate Premium
                  </button>
                </div>
              </div>

              {/* RESULT */}

              <div className="rounded-[24px] bg-white p-7 text-[#11110F] sm:p-9">
                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#315C48]">
                  YOUR ESTIMATED PREMIUM
                </span>

                <h3 className="mt-4 text-[26px] font-medium tracking-[-0.04em] text-[#183D2C]">
                  Your protection at a glance.
                </h3>

                <p className="mt-3 text-[13px] leading-6 text-[#7B837C]">
                  Calculation based on the details you entered.
                </p>

                <div className="mt-9 grid gap-px overflow-hidden rounded-2xl border border-[#DCE8DF] bg-[#DCE8DF]">
                  <PremiumResult
                    label="MONTHLY PREMIUM"
                    value={`₹${result.monthly.toLocaleString("en-IN")}`}
                    highlighted
                  />

                  <PremiumResult
                    label="YEARLY PREMIUM"
                    value={`₹${result.annual.toLocaleString("en-IN")}`}
                  />

                  <PremiumResult
                    label="APPROX. TAX SAVING (SEC 80C)"
                    value={`₹${result.tax.toLocaleString("en-IN")}`}
                  />
                </div>

                <div className="mt-7 rounded-2xl bg-[#F1F6F2] p-6">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#315C48]">
                    YOUR INPUTS
                  </span>

                  <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
                    <InputSummary label="Age" value={`${age} yrs`} />
                    <InputSummary
                      label="Cover"
                      value={
                        coverage >= 10000000
                          ? `₹${coverage / 10000000} Cr`
                          : `₹${coverage / 100000} L`
                      }
                    />
                    <InputSummary
                      label="Term"
                      value={`${term} yrs`}
                    />
                    <InputSummary
                      label="Smoker"
                      value={smoker === "yes" ? "Yes" : "No"}
                    />
                  </div>
                </div>

                <a
                  href="/contact"
                  className="mt-7 inline-flex h-[50px] items-center gap-3 rounded-full border border-[#123B2A] px-6 text-[13px] font-semibold text-[#123B2A] transition hover:bg-[#EAF7EF]"
                >
                  Speak to an Advisor
                  <span>↗</span>
                </a>

                <p className="mt-6 text-[10px] leading-5 text-[#929991]">
                  This is an approximate illustration based on the calculator
                  logic. Actual premiums and tax treatment may vary based on
                  insurer, policy terms, underwriting and applicable laws.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            FAQ
        ====================================================== */}

        <section className="px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
          <div className="mx-auto max-w-[1050px]">
            <div className="insurance-reveal text-center">
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#315C48]">
                COMMON QUESTIONS
              </span>

              <h2 className="mx-auto mt-5 max-w-[800px] text-[clamp(3rem,5vw,5.4rem)] font-medium leading-[0.88] tracking-[-0.06em] text-[#183D2C]">
                Frequently asked
                <br />
                questions.
              </h2>
            </div>

            <div className="insurance-reveal mt-14 border-t border-[#DCE8DF]">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <div
                    key={faq.question}
                    className="border-b border-[#DCE8DF]"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setOpenFaq(isOpen ? null : index)
                      }
                      className="flex w-full items-center justify-between gap-6 py-7 text-left"
                    >
                      <span className="text-[17px] font-medium tracking-[-0.02em] text-[#183D2C] sm:text-[19px]">
                        {faq.question}
                      </span>

                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#DCE8DF] text-[20px] text-[#123B2A] transition-all duration-300 ${
                          isOpen
                            ? "rotate-45 bg-[#EAF7EF]"
                            : "bg-white"
                        }`}
                      >
                        +
                      </span>
                    </button>

                    <div
                      className={`grid transition-all duration-300 ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-[820px] pb-7 pr-12 text-[14px] leading-7 text-[#737A74]">
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

        <section className="bg-[#123B2A] px-6 py-24 text-white sm:px-10 lg:px-16 lg:py-28">
          <div className="mx-auto max-w-[1000px] text-center">
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#6BD88E]">
              PROTECT YOUR FAMILY
            </span>

            <h2 className="mt-6 text-[clamp(3rem,6vw,6rem)] font-medium leading-[0.88] tracking-[-0.06em]">
              Build a stronger
              <br />
              safety net.
            </h2>

            <p className="mx-auto mt-7 max-w-[600px] text-[14px] leading-7 text-white/55">
              Choose protection around your family’s responsibilities,
              financial commitments and long-term goals.
            </p>

            <div className="mt-9">
              <a
                href="/contact"
                className="inline-flex h-[54px] items-center gap-3 rounded-full bg-white px-8 text-[13px] font-semibold text-[#123B2A] transition-all duration-300 hover:-translate-y-1 hover:bg-[#EAF7EF]"
              >
                Speak to an Advisor
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
   STAT
========================================================= */

function Stat({ value, label }) {
  return (
    <div className="border-b border-[#CFCFC7] py-6 sm:border-b-0 sm:border-r sm:px-8 first:pl-0 last:border-r-0">
      <div className="text-[24px] font-medium tracking-[-0.04em] text-[#183D2C]">
        {value}
      </div>

      <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-[#8A9089]">
        {label}
      </div>
    </div>
  );
}

/* =========================================================
   PREMIUM RESULT
========================================================= */

function PremiumResult({ label, value, highlighted = false }) {
  return (
    <div className={`flex items-center justify-between p-6 ${
      highlighted ? "bg-[#EAF7EF]" : "bg-white"
    }`}>
      <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#8A9089]">
        {label}
      </span>

      <strong className="text-[20px] font-medium tracking-[-0.035em] text-[#183D2C]">
        {value}
      </strong>
    </div>
  );
}

/* =========================================================
   INPUT SUMMARY
========================================================= */

function InputSummary({ label, value }) {
  return (
    <div>
      <span className="block text-[9px] uppercase tracking-[0.15em] text-[#939A93]">
        {label}
      </span>

      <span className="mt-1 block text-[13px] font-medium text-[#183D2C]">
        {value}
      </span>
    </div>
  );
}