import { useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const journey = [
  {
    number: "01",
    title: "Started With a Purpose",
    text:
      "Wealth Blue Print began with a simple purpose — to make financial planning easier to understand and help individuals approach important financial decisions with greater clarity.",
  },
  {
    number: "02",
    title: "Understanding Client Goals",
    text:
      "Our approach evolved around understanding individual goals, financial priorities and different stages of life instead of following a one-size-fits-all approach.",
  },
  {
    number: "03",
    title: "Embracing Digital Planning",
    text:
      "Technology and digital resources have become an important part of modern financial planning, helping people access information, tools and financial resources more conveniently.",
  },
  {
    number: "04",
    title: "Building for the Future",
    text:
      "Today, our focus remains on combining financial knowledge, structured planning and digital convenience to support people throughout their financial journey.",
  },
];

const beliefs = [
  {
    number: "01",
    title: "Goal Focused",
    text:
      "Every financial strategy should have a clear purpose, whether it is building wealth, protecting your family or preparing for retirement.",
  },
  {
    number: "02",
    title: "Long-Term Thinking",
    text:
      "We encourage disciplined financial planning with a focus on sustainable long-term goals rather than short-term market noise.",
  },
  {
    number: "03",
    title: "Easy to Understand",
    text:
      "Financial concepts can be complicated. Our aim is to communicate them in a clear and practical way.",
  },
];

const approach = [
  {
    number: "01",
    title: "Understand",
    text:
      "Understand your financial situation, priorities, responsibilities and future goals.",
  },
  {
    number: "02",
    title: "Plan",
    text:
      "Create a structured financial approach based on your goals and investment horizon.",
  },
  {
    number: "03",
    title: "Implement",
    text:
      "Put the selected financial strategy into action through appropriate investment and protection solutions.",
  },
  {
    number: "04",
    title: "Review",
    text:
      "Financial plans can change with life. Regular reviews help keep strategies aligned with changing goals and circumstances.",
  },
];

const services = [
  {
    number: "01",
    title: "Investment Planning",
    text:
      "Plan investments according to your financial goals, time horizon and risk considerations.",
  },
  {
    number: "02",
    title: "Mutual Funds & SIP",
    text:
      "Understand mutual funds and systematic investment approaches for long-term financial planning.",
  },
  {
    number: "03",
    title: "Insurance Planning",
    text:
      "Consider appropriate protection for your family and financial responsibilities.",
  },
  {
    number: "04",
    title: "Retirement Planning",
    text:
      "Prepare for future financial needs by creating a structured retirement strategy.",
  },
  {
    number: "05",
    title: "Child Future Planning",
    text:
      "Plan ahead for important future expenses such as education and other long-term goals.",
  },
  {
    number: "06",
    title: "Financial Calculators",
    text:
      "Use financial planning tools to understand potential investment and savings scenarios.",
  },
];

const values = [
  {
    number: "01",
    title: "Trust",
    text:
      "We believe meaningful financial relationships are built through consistency, transparency and responsible communication.",
  },
  {
    number: "02",
    title: "Transparency",
    text:
      "We aim to explain financial concepts, options and considerations in a straightforward manner.",
  },
  {
    number: "03",
    title: "Client Focus",
    text:
      "Financial planning should begin with individual goals and circumstances rather than a one-size-fits-all approach.",
  },
  {
    number: "04",
    title: "Continuous Learning",
    text:
      "Financial markets and products evolve, so continuous learning and improvement remain important to our approach.",
  },
];

const whyUs = [
  {
    title: "Holistic Planning",
    text:
      "Look at investments, protection, savings and future goals as parts of one broader financial picture.",
  },
  {
    title: "Goal-Based Thinking",
    text:
      "Connect financial decisions with specific short-term and long-term objectives.",
  },
  {
    title: "Digital Convenience",
    text:
      "Use digital resources and tools to make financial information easier to access and understand.",
  },
  {
    title: "Ongoing Guidance",
    text:
      "Financial planning is not a one-time activity. Goals and circumstances can change over time.",
  },
];

function StoryMark() {
  return (
    <div className="relative h-[430px] w-full overflow-hidden rounded-[32px] bg-[#123B2A]">
      {/* architectural lines */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-[12%] top-0 h-full w-px bg-white" />
        <div className="absolute left-[36%] top-0 h-full w-px bg-white" />
        <div className="absolute left-[60%] top-0 h-full w-px bg-white" />
        <div className="absolute left-[84%] top-0 h-full w-px bg-white" />

        <div className="absolute left-0 top-[22%] h-px w-full bg-white" />
        <div className="absolute left-0 top-[48%] h-px w-full bg-white" />
        <div className="absolute left-0 top-[74%] h-px w-full bg-white" />
      </div>

      {/* large blueprint arc */}
      <div className="absolute -right-[90px] -top-[90px] h-[390px] w-[390px] rounded-full border border-[#C8FF3D]/30" />
      <div className="absolute -right-[35px] -top-[35px] h-[280px] w-[280px] rounded-full border border-[#C8FF3D]/20" />

      {/* central shape */}
      <div className="absolute left-[12%] top-[17%] h-[250px] w-[250px] rotate-45 border border-[#C8FF3D]/30 sm:left-[17%]">
        <div className="absolute inset-[22%] border border-[#C8FF3D]/40" />
      </div>

      <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
        <div>
          <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#C8FF3D]">
            OUR STORY
          </p>

          <p className="mt-3 max-w-[240px] text-[14px] leading-6 text-white/50">
            A clearer way to approach your financial future.
          </p>
        </div>

        <span className="text-[8px] font-semibold uppercase tracking-[0.25em] text-white/25">
          WB — 01
        </span>
      </div>
    </div>
  );
}

export default function OurStory() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".story-hero-item", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.08,
        ease: "power3.out",
      });

      gsap.utils.toArray(".story-reveal").forEach((item) => {
        gsap.from(item, {
          y: 45,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 86%",
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen overflow-hidden bg-[#F7FBF8] text-[#11110F]">
      <Navbar />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="px-6 pb-24 pt-12 sm:px-10 lg:px-16 lg:pb-32 lg:pt-16">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid items-end gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            <div>
              <p className="story-hero-item mb-8 text-[10px] font-semibold uppercase tracking-[0.34em] text-[#3157C8]">
                ABOUT WEALTH BLUE PRINT
              </p>

              <h1 className="story-hero-item max-w-[950px] text-[clamp(4.2rem,8.7vw,9.2rem)] font-medium leading-[0.82] tracking-[-0.09em]">
                Building a
                <br />
                clearer
                <br />
                <span className="text-[#3157C8]">
                  future.
                </span>
              </h1>

              <div className="story-hero-item mt-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                <p className="max-w-[520px] text-[15px] leading-7 text-[#11110F]/55">
                  Wealth Blue Print is built around a simple idea —
                  financial planning should be easier to understand,
                  practical to follow, and aligned with your personal
                  goals.
                </p>

                <span className="shrink-0 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#11110F]/25">
                  PEOPLE · PURPOSE · PLANNING
                </span>
              </div>
            </div>

            <div className="story-hero-item">
              <StoryMark />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          OUR STORY
      ========================================================= */}
      <section className="bg-[#EFECE4] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
            <div className="story-reveal">
              <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#3157C8]">
                OUR STORY
              </p>

              <p className="mt-7 max-w-[240px] text-[12px] uppercase leading-6 tracking-[0.14em] text-[#11110F]/35">
                More than investments.
                <br />
                It's about your future.
              </p>
            </div>

            <div className="story-reveal">
              <h2 className="max-w-[1000px] text-[clamp(2.8rem,5.8vw,6.5rem)] font-medium leading-[0.9] tracking-[-0.075em]">
                More than investments,
                <br />
                <span className="text-[#3157C8]">
                  it's about your future.
                </span>
              </h2>

              <div className="mt-10 grid gap-8 border-t border-[#11110F]/10 pt-8 md:grid-cols-2">
                <p className="text-[15px] leading-7 text-[#11110F]/55">
                  Wealth Blue Print was created with the vision of making
                  financial planning more understandable and accessible.
                  We believe that people should be able to understand
                  where their money is going, why a financial decision
                  matters, and how it connects with their long-term goals.
                </p>

                <p className="text-[15px] leading-7 text-[#11110F]/55">
                  From investment planning and mutual funds to insurance
                  and retirement planning, our approach focuses on
                  understanding the bigger picture instead of looking at
                  financial products in isolation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          JOURNEY — TIMELINE
      ========================================================= */}
      <section className="px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1280px]">
          <div className="story-reveal flex flex-col justify-between gap-8 border-b border-[#11110F]/10 pb-10 lg:flex-row lg:items-end">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#3157C8]">
                OUR JOURNEY
              </p>

              <h2 className="mt-5 max-w-[800px] text-[clamp(3rem,6vw,6.4rem)] font-medium leading-[0.86] tracking-[-0.075em]">
                The Wealth
                <br />
                <span className="text-[#3157C8]">
                  Blue Print evolution.
                </span>
              </h2>
            </div>

            <p className="max-w-[360px] text-[14px] leading-7 text-[#11110F]/45">
              Our journey is shaped by the continuous effort to make
              financial planning more accessible, structured and easier
              to understand.
            </p>
          </div>

          <div className="mt-16">
            {journey.map((item, index) => (
              <div
                key={item.number}
                className="story-reveal grid gap-8 border-b border-[#11110F]/10 py-10 first:border-t md:grid-cols-[100px_0.75fr_1fr] md:items-start md:gap-12"
              >
                <span className="text-[11px] font-semibold tracking-[0.2em] text-[#3157C8]">
                  {item.number}
                </span>

                <h3 className="text-[clamp(1.7rem,3vw,3rem)] font-medium leading-none tracking-[-0.045em]">
                  {item.title}
                </h3>

                <p className="max-w-[500px] text-[14px] leading-7 text-[#11110F]/50">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          BELIEFS — OFFSET CARDS
      ========================================================= */}
      <section className="bg-[#123B2A] px-6 py-24 text-white sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1280px]">
          <div className="story-reveal grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#C8FF3D]">
                WHAT WE BELIEVE
              </p>

              <h2 className="mt-6 max-w-[600px] text-[clamp(3rem,6vw,6.2rem)] font-medium leading-[0.86] tracking-[-0.075em]">
                Financial planning
                <br />
                should be
                <br />
                <span className="text-[#C8FF3D]">
                  simple.
                </span>
              </h2>
            </div>

            <div className="lg:pt-16">
              <p className="max-w-[620px] text-[16px] leading-8 text-white/55">
                Good financial planning is not about following trends or
                making complicated decisions. It is about creating a
                structured approach based on your goals, priorities, time
                horizon and financial situation.
              </p>
            </div>
          </div>

          <div className="mt-20 grid gap-4 md:grid-cols-3">
            {beliefs.map((item, index) => (
              <div
                key={item.number}
                className={`
                  story-reveal
                  min-h-[300px]
                  rounded-[24px]
                  border
                  border-white/10
                  p-7
                  ${
                    index === 1
                      ? "md:translate-y-10 bg-white/[0.04]"
                      : "bg-transparent"
                  }
                `}
              >
                <span className="text-[9px] font-semibold tracking-[0.2em] text-[#C8FF3D]">
                  {item.number}
                </span>

                <h3 className="mt-20 text-[28px] font-medium tracking-[-0.04em]">
                  {item.title}
                </h3>

                <p className="mt-5 text-[13px] leading-6 text-white/40">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          MISSION + VISION
      ========================================================= */}
      <section className="px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1280px]">
          <div className="story-reveal mb-16">
            <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#3157C8]">
              OUR MISSION · OUR VISION
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            <div className="story-reveal rounded-[30px] bg-[#EAF7EF] p-8 sm:p-12 lg:min-h-[520px]">
              <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#3157C8]">
                OUR MISSION
              </span>

              <h2 className="mt-20 max-w-[600px] text-[clamp(2.8rem,5vw,5.4rem)] font-medium leading-[0.88] tracking-[-0.07em] text-[#123B2A]">
                Making better
                <br />
                financial decisions
                <br />
                <span className="text-[#3157C8]">
                  easier.
                </span>
              </h2>

              <p className="mt-8 max-w-[560px] text-[14px] leading-7 text-[#123B2A]/55">
                Our mission is to help individuals and families approach
                their finances with greater clarity and confidence.
              </p>
            </div>

            <div className="story-reveal rounded-[30px] bg-[#3157C8] p-8 text-white sm:p-12 lg:min-h-[520px]">
              <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/50">
                OUR VISION
              </span>

              <h2 className="mt-20 max-w-[600px] text-[clamp(2.8rem,5vw,5.4rem)] font-medium leading-[0.88] tracking-[-0.07em]">
                A future where
                <br />
                financial planning
                <br />
                feels <span className="text-[#C8FF3D]">clear.</span>
              </h2>

              <p className="mt-8 max-w-[560px] text-[14px] leading-7 text-white/55">
                We envision a future where people do not feel overwhelmed
                by financial decisions. Instead, they have access to clear
                information, structured planning and the right tools to
                understand their financial choices.
              </p>
            </div>
          </div>

          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Financial Security",
                text:
                  "Helping families think ahead and prepare for important financial responsibilities.",
              },
              {
                title: "Financial Growth",
                text:
                  "Encouraging disciplined investment and long-term wealth-building habits.",
              },
              {
                title: "Financial Confidence",
                text:
                  "Helping people understand their options so they can participate more confidently in financial decisions.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="story-reveal border-t border-[#11110F]/10 pt-6"
              >
                <h3 className="text-[19px] font-medium tracking-[-0.03em]">
                  {item.title}
                </h3>

                <p className="mt-3 text-[13px] leading-6 text-[#11110F]/45">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          APPROACH — FOUR STEP
      ========================================================= */}
      <section className="bg-[#EFECE4] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1280px]">
          <div className="story-reveal grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#3157C8]">
                OUR APPROACH
              </p>

              <h2 className="mt-5 text-[clamp(3rem,6vw,6.2rem)] font-medium leading-[0.85] tracking-[-0.075em]">
                A structured
                <br />
                approach to
                <br />
                <span className="text-[#3157C8]">
                  planning.
                </span>
              </h2>
            </div>

            <p className="max-w-[560px] self-end text-[15px] leading-7 text-[#11110F]/50">
              We believe financial planning should follow a process
              rather than rely on isolated decisions.
            </p>
          </div>

          <div className="mt-20 grid gap-0 border-t border-[#11110F]/10 lg:grid-cols-4">
            {approach.map((item, index) => (
              <div
                key={item.number}
                className={`
                  story-reveal
                  border-b
                  border-[#11110F]/10
                  py-9
                  lg:border-b-0
                  lg:border-r
                  lg:px-7
                  lg:first:pl-0
                  lg:last:border-r-0
                  lg:last:pr-0
                `}
              >
                <span className="text-[9px] font-semibold tracking-[0.2em] text-[#3157C8]">
                  {item.number}
                </span>

                <h3 className="mt-12 text-[26px] font-medium tracking-[-0.04em]">
                  {item.title}
                </h3>

                <p className="mt-4 max-w-[250px] text-[13px] leading-6 text-[#11110F]/45">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          WHAT WE DO
      ========================================================= */}
      <section className="px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1280px]">
          <div className="story-reveal flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#3157C8]">
                WHAT WE DO
              </p>

              <h2 className="mt-5 max-w-[850px] text-[clamp(3rem,6vw,6.2rem)] font-medium leading-[0.86] tracking-[-0.075em]">
                Financial solutions
                <br />
                built around
                <br />
                <span className="text-[#3157C8]">
                  life goals.
                </span>
              </h2>
            </div>

            <p className="max-w-[360px] text-[14px] leading-7 text-[#11110F]/45">
              Financial planning covers different stages of life. Our
              services are designed to help you approach these areas with
              a structured plan.
            </p>
          </div>

          <div className="mt-16 grid gap-x-10 border-t border-[#11110F]/10 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.number}
                className="story-reveal grid grid-cols-[55px_1fr] gap-6 border-b border-[#11110F]/10 py-8"
              >
                <span className="text-[9px] font-semibold tracking-[0.18em] text-[#3157C8]">
                  {service.number}
                </span>

                <div>
                  <h3 className="text-[22px] font-medium tracking-[-0.035em]">
                    {service.title}
                  </h3>

                  <p className="mt-3 max-w-[500px] text-[13px] leading-6 text-[#11110F]/45">
                    {service.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          VALUES
      ========================================================= */}
      <section className="bg-[#F0F4F1] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1280px]">
          <div className="story-reveal mb-16">
            <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#3157C8]">
              OUR VALUES
            </p>

            <h2 className="mt-5 max-w-[900px] text-[clamp(3rem,6vw,6.2rem)] font-medium leading-[0.86] tracking-[-0.075em]">
              Principles that
              <br />
              <span className="text-[#3157C8]">
                guide us.
              </span>
            </h2>
          </div>

          <div className="grid gap-0 border-t border-[#11110F]/10 md:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.number}
                className="story-reveal min-h-[230px] border-b border-[#11110F]/10 p-7 md:p-10 md:odd:border-r"
              >
                <div className="flex items-start justify-between">
                  <span className="text-[9px] font-semibold tracking-[0.2em] text-[#3157C8]">
                    {value.number}
                  </span>

                  <span className="text-[9px] uppercase tracking-[0.2em] text-[#11110F]/20">
                    WB
                  </span>
                </div>

                <h3 className="mt-14 text-[27px] font-medium tracking-[-0.045em]">
                  {value.title}
                </h3>

                <p className="mt-4 max-w-[470px] text-[13px] leading-6 text-[#11110F]/45">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY WEALTH BLUE PRINT
      ========================================================= */}
      <section className="px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1280px]">
          <div className="story-reveal grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#3157C8]">
                WHY WEALTH BLUE PRINT
              </p>

              <h2 className="mt-5 max-w-[650px] text-[clamp(3rem,6vw,6.2rem)] font-medium leading-[0.86] tracking-[-0.075em]">
                Built around
                <br />
                your financial
                <br />
                <span className="text-[#3157C8]">
                  journey.
                </span>
              </h2>
            </div>

            <div className="grid gap-10 sm:grid-cols-2">
              {whyUs.map((item, index) => (
                <div
                  key={item.title}
                  className="story-reveal border-t border-[#11110F]/10 pt-6"
                >
                  <span className="text-[9px] font-semibold tracking-[0.2em] text-[#3157C8]">
                    0{index + 1}
                  </span>

                  <h3 className="mt-8 text-[21px] font-medium tracking-[-0.035em]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[13px] leading-6 text-[#11110F]/45">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          COMMITMENT CTA
      ========================================================= */}
      <section className="px-6 pb-24 sm:px-10 lg:px-16 lg:pb-32">
        <div className="mx-auto max-w-[1280px]">
          <div className="story-reveal relative overflow-hidden rounded-[32px] bg-[#123B2A] px-7 py-14 sm:px-12 lg:px-16 lg:py-20">
            {/* decorative lines */}
            <div className="pointer-events-none absolute right-[-80px] top-[-100px] h-[320px] w-[320px] rounded-full border border-white/10" />
            <div className="pointer-events-none absolute right-[-20px] top-[-40px] h-[200px] w-[200px] rounded-full border border-[#C8FF3D]/15" />

            <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#C8FF3D]">
                  OUR COMMITMENT
                </p>

                <h2 className="mt-6 max-w-[850px] text-[clamp(3.2rem,6vw,6.8rem)] font-medium leading-[0.84] tracking-[-0.08em] text-white">
                  Your goals.
                  <br />
                  Your journey.
                  <br />
                  <span className="text-[#C8FF3D]">
                    Your plan.
                  </span>
                </h2>

                <p className="mt-7 max-w-[620px] text-[14px] leading-7 text-white/45">
                  Every financial journey is different. There is no
                  single strategy that works for everyone. Our commitment
                  is to keep financial planning focused on clarity,
                  discipline, transparency and long-term goals.
                </p>
              </div>

              <Link
                to="/investment-plans"
                className="
                  inline-flex
                  h-[54px]
                  shrink-0
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-[#C8FF3D]
                  px-7
                  text-[12px]
                  font-semibold
                  text-[#123B2A]
                  transition
                  duration-300
                  hover:-translate-y-1
                "
              >
                Start Your Blueprint
                <span>↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}