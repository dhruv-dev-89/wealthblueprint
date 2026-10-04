import { useEffect, useMemo, useState } from "react";
import gsap from "gsap";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const jobs = [
  {
    id: 1,
    title: "Senior Financial Advisor",
    category: "Finance",
    location: "Mumbai, India",
    type: "Full-time",
    description:
      "We're seeking a seasoned financial advisor to guide our premium clientele with tailored wealth strategies, portfolio construction, and long-term retirement planning.",
    requirements: [
      "Minimum 5 years in wealth advisory or private banking",
      "CFP / CFA or equivalent professional qualification",
      "Excellent client relationship and communication abilities",
      "Proficiency with portfolio management and CRM tools",
    ],
  },
  {
    id: 2,
    title: "Full Stack Developer",
    category: "Technology",
    location: "Bangalore, India",
    type: "Full-time",
    description:
      "Help us design and scale next-gen digital tools that empower clients to track investments, analyze risk, and manage their financial goals seamlessly.",
    requirements: [
      "3+ years building scalable web applications",
      "Strong expertise in React.js, Node.js, MongoDB",
      "Hands-on with REST APIs and microservices architecture",
      "Fintech or BFSI domain exposure preferred",
    ],
  },
  {
    id: 3,
    title: "Digital Marketing Specialist",
    category: "Marketing",
    location: "Delhi, India",
    type: "Full-time",
    description:
      "Drive our brand growth by planning and executing data-driven digital campaigns that connect us with more investors nationwide.",
    requirements: [
      "2+ years managing performance marketing campaigns",
      "Proven skills in SEO, Google Ads, and social platforms",
      "Comfortable with GA4, Search Console, and analytics dashboards",
      "Ability to craft engaging financial content",
    ],
  },
  {
    id: 4,
    title: "Customer Support Executive",
    category: "Customer Service",
    location: "Pune, India",
    type: "Full-time",
    description:
      "Be the trusted first point of contact for Wealth Blueprint clients, assisting them smoothly through onboarding, queries, and their investment journey.",
    requirements: [
      "1+ year in client support or financial operations",
      "Fluent in English & Hindi (written & spoken)",
      "Fundamental knowledge of mutual funds, SIPs, and insurance",
      "Empathetic approach with strong problem-solving mindset",
    ],
  },
];

const benefits = [
  {
    title: "Health & Wellness",
    text:
      "Complete medical cover for you and dependents, annual health checkups, wellness sessions, and dedicated mental wellbeing assistance.",
  },
  {
    title: "Career Growth",
    text:
      "Structured learning paths, certification sponsorships, internal mentorship, and transparent promotion frameworks.",
  },
  {
    title: "Financial Rewards",
    text:
      "Market-leading CTC, performance incentives, ESOP eligibility, and exclusive staff rates on our investment products.",
  },
  {
    title: "Work-Life Balance",
    text:
      "Hybrid work model, flexible timings, and generous leave policy including wellness days and sabbaticals.",
  },
  {
    title: "Learning Support",
    text:
      "Full reimbursement for CFP, CFA, NISM and other relevant finance and technology certifications.",
  },
  {
    title: "Team Culture",
    text:
      "Quarterly offsites, festive celebrations, hackathons, and sports clubs to build strong connections beyond work.",
  },
];

const culture = [
  {
    number: "01",
    title: "Innovation",
    text:
      "We test ideas quickly, embrace new technology, and reward creative problem-solving at every level.",
  },
  {
    number: "02",
    title: "Collaboration",
    text:
      "Cross-functional squads work together to deliver seamless client experiences and faster results.",
  },
  {
    number: "03",
    title: "Excellence",
    text:
      "We set high standards — from advice quality to product delivery — and continuously raise the bar.",
  },
];

function CareersVisual() {
  return (
    <div className="relative h-[470px] overflow-hidden rounded-[32px] bg-[#E8F2EC] sm:h-[540px]">
      {/* subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.28]"
        style={{
          backgroundImage:
            "linear-gradient(#123B2A12 1px, transparent 1px), linear-gradient(90deg, #123B2A12 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      {/* top label */}
      <div className="absolute left-8 top-8 sm:left-10 sm:top-10">
        <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#123B2A]/45">
          LIFE AT WEALTH BLUE PRINT
        </p>
      </div>

      {/* giant typography */}
      <div className="absolute left-8 top-[105px] sm:left-10 sm:top-[115px]">
        <p className="text-[clamp(3.5rem,6vw,6.5rem)] font-medium leading-[0.8] tracking-[-0.08em] text-[#123B2A]">
          People
          <br />
          <span className="text-[#3157C8]">build</span>
          <br />
          futures.
        </p>
      </div>

      {/* abstract architecture */}
      <div className="absolute bottom-0 right-0 h-[235px] w-[72%]">
        {/* dark block */}
        <div className="absolute bottom-0 right-[24%] h-[180px] w-[115px] bg-[#123B2A] sm:h-[205px] sm:w-[130px]">
          <div className="absolute left-5 top-5 text-[8px] font-semibold uppercase tracking-[0.2em] text-white/45">
            PEOPLE
          </div>
        </div>

        {/* blue block */}
        <div className="absolute bottom-0 right-[6%] h-[135px] w-[120px] bg-[#3157C8] sm:h-[155px] sm:w-[140px]">
          <div className="absolute left-5 top-5 text-[8px] font-semibold uppercase tracking-[0.2em] text-white/50">
            IMPACT
          </div>
        </div>

        {/* lime block */}
        <div className="absolute bottom-0 right-[-4%] h-[78px] w-[100px] bg-[#C8FF3D] sm:h-[92px] sm:w-[115px]">
          <div className="absolute left-4 top-4 text-[8px] font-semibold uppercase tracking-[0.2em] text-[#123B2A]/50">
            GROW
          </div>
        </div>

        {/* connecting line */}
        <div className="absolute bottom-[180px] right-[31%] h-px w-[190px] rotate-[-28deg] origin-right bg-[#123B2A]/25 sm:bottom-[205px]">
          <span className="absolute -right-1 -top-1.5 h-3 w-3 rounded-full bg-[#3157C8]" />
        </div>

        <div className="absolute bottom-[139px] right-[52%] h-3 w-3 rounded-full bg-[#3157C8]" />
      </div>

      {/* bottom information */}
      <div className="absolute bottom-7 left-8 right-8 border-t border-[#123B2A]/12 pt-4 sm:left-10 sm:right-10">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#123B2A]/35">
              BUILD · LEARN · LEAD
            </p>

            <p className="mt-2 text-[13px] font-medium text-[#123B2A]/60">
              A place to grow your career.
            </p>
          </div>

          <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#123B2A]/25">
            01 — 03
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Careers() {
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".career-hero-item", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.08,
        ease: "power3.out",
      });

      gsap.utils.toArray(".career-reveal").forEach((item) => {
        gsap.from(item, {
          y: 35,
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

  const categories = useMemo(
    () => ["All", ...new Set(jobs.map((job) => job.category))],
    []
  );

  const filteredJobs =
    activeCategory === "All"
      ? jobs
      : jobs.filter((job) => job.category === activeCategory);

  const scrollToJobs = () => {
    document
      .getElementById("open-roles")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#F7FBF8] text-[#11110F]">
      <Navbar />

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="px-6 pb-24 pt-12 sm:px-10 lg:px-16 lg:pb-32 lg:pt-40">
  <div className="mx-auto max-w-[1440px]">

    <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">

      {/* LEFT */}
      <div className="relative z-10">

        <p className="career-hero-item mb-8 text-[10px] font-semibold uppercase tracking-[0.34em] text-[#3157C8]">
          CAREERS AT WEALTH BLUE PRINT
        </p>

        <h1 className="career-hero-item max-w-[850px] text-[clamp(4rem,8.2vw,8.8rem)] font-medium leading-[0.82] tracking-[-0.09em]">
          Do work
          <br />
          that
          <br />
          <span className="text-[#3157C8]">matters.</span>
        </h1>

        <div className="career-hero-item mt-10 flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">

          <p className="max-w-[470px] text-[15px] leading-7 text-[#11110F]/55">
            Join a forward-thinking team that's working to make wealth
            management more accessible, practical and future-ready
            across India.
          </p>

          <button
            type="button"
            onClick={scrollToJobs}
            className="
              inline-flex
              h-[52px]
              shrink-0
              items-center
              justify-center
              gap-3
              rounded-full
              bg-[#123B2A]
              px-7
              text-[12px]
              font-semibold
              text-white
              transition
              duration-300
              hover:-translate-y-1
            "
          >
            See Open Roles
            <span>↓</span>
          </button>

        </div>

      </div>

      {/* RIGHT */}
      <div className="career-hero-item">
        <CareersVisual />
      </div>

    </div>

    {/* bottom line */}
    <div className="career-hero-item mt-14 grid border-t border-[#11110F]/10 pt-5 sm:grid-cols-3">

      <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#11110F]/30">
        PEOPLE FIRST
      </span>

      <span className="hidden text-center text-[9px] font-semibold uppercase tracking-[0.25em] text-[#11110F]/30 sm:block">
        LEARN EVERY DAY
      </span>

      <span className="text-right text-[9px] font-semibold uppercase tracking-[0.25em] text-[#11110F]/30">
        BUILD WHAT MATTERS
      </span>

    </div>

  </div>
</section>

      {/* =====================================================
          OPEN ROLES
      ===================================================== */}
      <section
        id="open-roles"
        className="bg-[#EFECE4] px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
      >
        <div className="mx-auto max-w-[1280px]">
          <div className="career-reveal flex flex-col gap-8 border-b border-[#11110F]/10 pb-10 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#3157C8]">
                CAREER OPPORTUNITIES
              </p>

              <h2 className="mt-5 text-[clamp(3rem,6vw,6.2rem)] font-medium leading-[0.86] tracking-[-0.075em]">
                Current
                <br />
                <span className="text-[#3157C8]">
                  open roles.
                </span>
              </h2>
            </div>

            <p className="max-w-[380px] text-[14px] leading-7 text-[#11110F]/45">
              Discover the right position to accelerate your growth with
              Wealth Blue Print.
            </p>
          </div>

          {/* filters */}
          <div className="career-reveal mt-8 flex flex-wrap gap-2">
            {categories.map((category) => {
              const active = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`
                    rounded-full
                    px-5
                    py-2.5
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    transition-all
                    duration-300
                    ${
                      active
                        ? "bg-[#123B2A] text-white"
                        : "bg-white text-[#11110F]/40 hover:text-[#123B2A]"
                    }
                  `}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <div className="mt-10">
            {filteredJobs.map((job, index) => (
              <article
                key={job.id}
                className="career-reveal border-t border-[#11110F]/10 py-10 last:border-b"
              >
                <div className="grid gap-8 lg:grid-cols-[80px_1fr_0.8fr_auto] lg:items-start lg:gap-10">
                  <span className="text-[10px] font-semibold tracking-[0.2em] text-[#3157C8]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-[#3157C8]/8 px-3 py-1 text-[8px] font-semibold uppercase tracking-[0.16em] text-[#3157C8]">
                        {job.category}
                      </span>

                      <span className="text-[9px] uppercase tracking-[0.16em] text-[#11110F]/25">
                        {job.type}
                      </span>
                    </div>

                    <h3 className="mt-5 text-[clamp(1.8rem,3vw,3.1rem)] font-medium leading-none tracking-[-0.05em]">
                      {job.title}
                    </h3>

                    <p className="mt-5 max-w-[620px] text-[14px] leading-7 text-[#11110F]/50">
                      {job.description}
                    </p>

                    <div className="mt-6">
                      <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#11110F]/30">
                        REQUIREMENTS
                      </p>

                      <ul className="space-y-2">
                        {job.requirements.map((requirement) => (
                          <li
                            key={requirement}
                            className="flex gap-3 text-[12px] leading-6 text-[#11110F]/50"
                          >
                            <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-[#3157C8]" />
                            {requirement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="lg:border-l lg:border-[#11110F]/10 lg:pl-8">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#11110F]/25">
                      LOCATION
                    </p>

                    <p className="mt-3 text-[13px] text-[#11110F]/55">
                      {job.location}
                    </p>
                  </div>

                  <div className="lg:pt-1">
                    <a
                      href={`mailto:contactus@wealthblueprint.in?subject=Application for ${encodeURIComponent(
                        job.title
                      )}`}
                      className="
                        inline-flex
                        h-[48px]
                        items-center
                        justify-center
                        gap-3
                        rounded-full
                        bg-[#123B2A]
                        px-6
                        text-[11px]
                        font-semibold
                        text-white
                        transition
                        duration-300
                        hover:-translate-y-1
                      "
                    >
                      Apply Now
                      <span>↗</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          BENEFITS
      ===================================================== */}
      <section className="px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1280px]">
          <div className="career-reveal grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#3157C8]">
                PERKS & BENEFITS
              </p>

              <h2 className="mt-5 max-w-[620px] text-[clamp(3rem,6vw,6.2rem)] font-medium leading-[0.86] tracking-[-0.075em]">
                Why you'll
                <br />
                <span className="text-[#3157C8]">
                  love working here.
                </span>
              </h2>
            </div>

            <p className="max-w-[560px] self-end text-[15px] leading-7 text-[#11110F]/50">
              We invest in our people with comprehensive rewards designed
              for health, growth and work-life harmony.
            </p>
          </div>

          <div className="mt-20 grid border-t border-[#11110F]/10 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="
                  career-reveal
                  min-h-[260px]
                  border-b
                  border-[#11110F]/10
                  p-7
                  lg:p-9
                  lg:nth-[3n+1]:border-r
                "
              >
                <span className="text-[9px] font-semibold tracking-[0.2em] text-[#3157C8]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-14 text-[22px] font-medium tracking-[-0.04em]">
                  {benefit.title}
                </h3>

                <p className="mt-4 max-w-[320px] text-[13px] leading-6 text-[#11110F]/45">
                  {benefit.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CULTURE
      ===================================================== */}
      <section className="bg-[#123B2A] px-6 py-24 text-white sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1280px]">
          <div className="career-reveal grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-24">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#C8FF3D]">
                OUR WORK CULTURE
              </p>

              <h2 className="mt-6 max-w-[850px] text-[clamp(3rem,6vw,6.3rem)] font-medium leading-[0.84] tracking-[-0.08em]">
                Trust.
                <br />
                Learning.
                <br />
                <span className="text-[#C8FF3D]">
                  Ownership.
                </span>
              </h2>
            </div>

            <p className="max-w-[470px] text-[15px] leading-7 text-white/45">
              Culture isn't just a poster on the wall — it's how we work
              every day. We champion bold ideas, celebrate diverse
              backgrounds and give teammates real responsibility.
            </p>
          </div>

          <div className="mt-20 grid gap-5 md:grid-cols-3">
            {culture.map((item, index) => (
              <div
                key={item.number}
                className={`
                  career-reveal
                  min-h-[310px]
                  rounded-[24px]
                  border
                  border-white/10
                  p-7
                  ${
                    index === 1
                      ? "md:translate-y-10 bg-white/[0.035]"
                      : ""
                  }
                `}
              >
                <span className="text-[9px] font-semibold tracking-[0.2em] text-[#C8FF3D]">
                  {item.number}
                </span>

                <h3 className="mt-24 text-[29px] font-medium tracking-[-0.05em]">
                  {item.title}
                </h3>

                <p className="mt-4 text-[13px] leading-6 text-white/40">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1280px]">
          <div className="career-reveal border-t border-[#11110F]/10 pt-12 lg:pt-16">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#3157C8]">
                  DON'T SEE THE RIGHT ROLE?
                </p>

                <h2 className="mt-5 max-w-[850px] text-[clamp(3rem,6vw,6.3rem)] font-medium leading-[0.85] tracking-[-0.08em]">
                  We may still
                  <br />
                  want to hear
                  <br />
                  <span className="text-[#3157C8]">
                    from you.
                  </span>
                </h2>

                <p className="mt-7 max-w-[560px] text-[14px] leading-7 text-[#11110F]/45">
                  If you believe you can contribute to the Wealth Blue
                  Print journey, send us your resume and tell us where
                  you think you can make an impact.
                </p>
              </div>

              <a
                href="mailto:contactus@wealthblueprint.in?subject=Career Application"
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
                Send Your Resume
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}