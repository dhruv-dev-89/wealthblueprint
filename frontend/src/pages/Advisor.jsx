import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const advisors = [
  {
    name: "Rajesh Sharma",
    role: "Lead Financial Consultant",
    category: "Investment",
    city: "Mumbai",
    experience: "12+ years",
    credentials: "CFP, SEBI Registered",
    reviews: 48,
    badge: "Top Rated",
    initials: "RS",
    description:
      "Rajesh helps clients build structured investment strategies around long-term wealth creation, portfolio discipline and financial goals.",
  },
  {
    name: "Priya Patel",
    role: "Retirement Income Strategist",
    category: "Retirement",
    city: "Delhi",
    experience: "8 years",
    credentials: "CFP, ChFC",
    reviews: 36,
    badge: "",
    initials: "PP",
    description:
      "Priya specialises in retirement planning and helps clients create practical strategies for long-term financial independence.",
  },
  {
    name: "Amit Verma",
    role: "Tax Advisory Professional",
    category: "Tax",
    city: "Bangalore",
    experience: "5 years",
    credentials: "CA, CFP",
    reviews: 22,
    badge: "New",
    initials: "AV",
    description:
      "Amit helps individuals and families structure their finances with a focus on tax-efficient investment and wealth planning.",
  },
  {
    name: "Sunita Reddy",
    role: "Portfolio Manager",
    category: "Investment",
    city: "Chennai",
    experience: "10 years",
    credentials: "CFA, SEBI Registered",
    reviews: 41,
    badge: "Top Rated",
    initials: "SR",
    description:
      "Sunita focuses on portfolio construction, asset allocation and disciplined long-term investment strategies.",
  },
  {
    name: "Vikram Singh",
    role: "Wealth Preservation Specialist",
    category: "Retirement",
    city: "Hyderabad",
    experience: "15 years",
    credentials: "LLB, CFP",
    reviews: 32,
    badge: "",
    initials: "VS",
    description:
      "Vikram works with clients on preserving accumulated wealth while building strategies for future financial security.",
  },
  {
    name: "Neha Gupta",
    role: "Risk Management Advisor",
    category: "Risk Management",
    city: "Pune",
    experience: "7 years",
    credentials: "IRDA, CFP",
    reviews: 39,
    badge: "",
    initials: "NG",
    description:
      "Neha helps families identify financial risks and build appropriate protection strategies around their broader financial plans.",
  },
];

const filters = [
  "All",
  "Investment",
  "Retirement",
  "Tax",
  "Risk Management",
];

export default function Advisor() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedAdvisor, setSelectedAdvisor] = useState(null);

  const visibleAdvisors =
    activeFilter === "All"
      ? advisors
      : advisors.filter(
          (advisor) => advisor.category === activeFilter
        );

  return (
    <div className="min-h-screen bg-[#F7FBF8] text-[#11110F]">
      <Navbar />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="px-6 pb-20 pt-12 sm:px-10 lg:px-16 lg:pb-28 lg:pt-29">
        <div className="mx-auto max-w-[1440px]">

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

            {/* LEFT */}
            <div>
              <p className="mb-8 text-[10px] font-semibold uppercase tracking-[0.34em] text-[#3157C8]">
                OUR ADVISORS
              </p>

              <h1 className="max-w-[800px] text-[clamp(4rem,8vw,8.5rem)] font-medium leading-[0.82] tracking-[-0.09em]">
                Meet your
                <br />
                financial
                <br />
                <span className="text-[#3157C8]">
                  experts.
                </span>
              </h1>

              <p className="mt-10 max-w-[500px] text-[15px] leading-7 text-[#11110F]/55">
                Explore advisors across different areas of financial
                planning and find the expertise that fits your goals.
              </p>
            </div>

            {/* RIGHT VISUAL */}
            <div className="relative h-[420px] overflow-hidden rounded-[30px] bg-[#E8F2EC] sm:h-[500px]">

              {/* GRID */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(#123B2A14 1px, transparent 1px), linear-gradient(90deg, #123B2A14 1px, transparent 1px)",
                  backgroundSize: "48px 48px",
                }}
              />

              <div className="absolute left-7 top-7 sm:left-9 sm:top-9">
                <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#123B2A]/45">
                  PROFESSIONAL NETWORK
                </p>
              </div>

              <div className="absolute left-7 top-[105px] sm:left-9 sm:top-[120px]">
                <p className="text-[clamp(3rem,5vw,5.5rem)] font-medium leading-[0.82] tracking-[-0.075em] text-[#123B2A]">
                  People
                  <br />
                  <span className="text-[#3157C8]">
                    behind
                  </span>
                  <br />
                  the plan.
                </p>
              </div>

              {/* ARCHITECTURAL BLOCKS */}

              <div className="absolute bottom-0 right-0 h-[270px] w-[65%]">

                <div className="absolute bottom-0 right-[38%] h-[220px] w-[95px] bg-[#123B2A]" />

                <div className="absolute bottom-0 right-[17%] h-[155px] w-[115px] bg-[#3157C8]" />

                <div className="absolute bottom-0 right-[-2%] h-[90px] w-[105px] bg-[#C8FF3D]" />

                <div className="absolute bottom-[220px] right-[48%] h-px w-[170px] rotate-[-32deg] bg-[#123B2A]/30" />

                <div className="absolute bottom-[258px] right-[68%] h-3 w-3 rounded-full bg-[#3157C8]" />

                <span className="absolute bottom-[170px] right-[38%] text-[8px] font-semibold uppercase tracking-[0.2em] text-white/60">
                  ADVISE
                </span>

                <span className="absolute bottom-[105px] right-[18%] text-[8px] font-semibold uppercase tracking-[0.2em] text-white/65">
                  PLAN
                </span>

                <span className="absolute bottom-[48px] right-[2%] text-[8px] font-semibold uppercase tracking-[0.2em] text-[#123B2A]/60">
                  GROW
                </span>
              </div>

              {/* BOTTOM */}
              <div className="absolute bottom-7 left-7 right-7 flex justify-between border-t border-[#123B2A]/10 pt-4 sm:left-9 sm:right-9">
                <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#123B2A]/40">
                  PEOPLE · PLAN · PROGRESS
                </span>

                <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#123B2A]/30">
                  01 — 06
                </span>
              </div>
            </div>
          </div>

          {/* FILTERS */}

          <div className="mt-14 flex flex-wrap gap-2 border-t border-[#11110F]/10 pt-7">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={
                  activeFilter === filter
                    ? "rounded-full border border-[#123B2A] bg-[#123B2A] px-5 py-3 text-[9px] font-semibold uppercase tracking-[0.24em] text-white"
                    : "rounded-full border border-[#11110F]/10 bg-white px-5 py-3 text-[9px] font-semibold uppercase tracking-[0.24em] text-[#11110F]/45 transition hover:border-[#123B2A]/30 hover:text-[#123B2A]"
                }
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          ADVISOR LIST
      ===================================================== */}

      <section
        id="advisors"
        className="px-6 pb-28 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-[1440px]">

          <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#3157C8]">
                OUR PROFESSIONAL NETWORK
              </p>

              <h2 className="mt-5 text-[clamp(3rem,5vw,5rem)] font-medium leading-[0.88] tracking-[-0.075em]">
                Meet our
                <br />
                financial experts.
              </h2>
            </div>

            <p className="max-w-[370px] text-[13px] leading-6 text-[#11110F]/45">
              Our professional network is focused on helping you make
              clearer and more informed financial decisions.
            </p>
          </div>

          {/* CARDS */}

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">

            {visibleAdvisors.map((advisor) => (
              <div
                key={advisor.name}
                className="rounded-[24px] border border-[#11110F]/10 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(18,59,42,0.08)]"
              >

                {/* TOP */}

                <div className="flex items-start justify-between">

                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#EAF7EF] text-[13px] font-semibold text-[#123B2A]">
                    {advisor.initials}
                  </div>

                  {advisor.badge && (
                    <span className="rounded-full bg-[#EAF7EF] px-3 py-1.5 text-[8px] font-semibold uppercase tracking-[0.2em] text-[#123B2A]">
                      {advisor.badge}
                    </span>
                  )}
                </div>

                {/* NAME */}

                <div className="mt-8">

                  <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-[#3157C8]">
                    {advisor.category}
                  </p>

                  <h3 className="mt-3 text-[25px] font-medium tracking-[-0.045em]">
                    {advisor.name}
                  </h3>

                  <p className="mt-2 text-[13px] text-[#11110F]/50">
                    {advisor.role}
                  </p>
                </div>

                {/* DETAILS */}

                <div className="mt-7 border-t border-[#11110F]/10 pt-5">

                  <div className="grid grid-cols-2 gap-5">

                    <div>
                      <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#11110F]/30">
                        LOCATION
                      </p>

                      <p className="mt-2 text-[12px] text-[#11110F]/65">
                        {advisor.city}
                      </p>
                    </div>

                    <div>
                      <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#11110F]/30">
                        EXPERIENCE
                      </p>

                      <p className="mt-2 text-[12px] text-[#11110F]/65">
                        {advisor.experience}
                      </p>
                    </div>

                    <div className="col-span-2">
                      <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#11110F]/30">
                        CREDENTIALS
                      </p>

                      <p className="mt-2 text-[12px] text-[#11110F]/65">
                        {advisor.credentials}
                      </p>
                    </div>

                  </div>
                </div>

                {/* REVIEWS */}

                <div className="mt-6 flex items-center gap-2">

                  <span className="text-[11px] tracking-wider text-[#C8A951]">
                    ★★★★★
                  </span>

                  <span className="text-[10px] text-[#11110F]/35">
                    {advisor.reviews} reviews
                  </span>

                </div>

                {/* BUTTONS */}

                <div className="mt-7 flex gap-2">

                  <button
                    type="button"
                    onClick={() => setSelectedAdvisor(advisor)}
                    className="flex h-11 flex-1 items-center justify-center rounded-full border border-[#11110F]/10 text-[11px] font-semibold transition hover:border-[#123B2A]"
                  >
                    View Profile
                  </button>

                  <a
                    href="/contact"
                    className="flex h-11 flex-1 items-center justify-center gap-2 rounded-full bg-[#123B2A] text-[11px] font-semibold text-white transition hover:-translate-y-0.5"
                  >
                    Book Consultation
                    <span>↗</span>
                  </a>

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* =====================================================
          FIND YOUR FIT
      ===================================================== */}

      <section className="bg-[#EAF7EF] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1440px]">

          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">

            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#3157C8]">
                FIND YOUR FIT
              </p>

              <h2 className="mt-6 text-[clamp(3rem,5vw,5.5rem)] font-medium leading-[0.88] tracking-[-0.075em] text-[#123B2A]">
                The right
                <br />
                guide makes
                <br />
                a difference.
              </h2>
            </div>

            <div>

              <div className="border-t border-[#123B2A]/15 py-8">
                <h3 className="text-xl font-medium text-[#123B2A]">
                  Start with your goal
                </h3>

                <p className="mt-3 max-w-[560px] text-[14px] leading-6 text-[#123B2A]/55">
                  Whether you're investing, planning retirement,
                  managing taxes or protecting your family, start
                  with what you want your money to achieve.
                </p>
              </div>

              <div className="border-t border-[#123B2A]/15 py-8">
                <h3 className="text-xl font-medium text-[#123B2A]">
                  Choose the right expertise
                </h3>

                <p className="mt-3 max-w-[560px] text-[14px] leading-6 text-[#123B2A]/55">
                  Explore advisors based on their area of expertise,
                  experience and approach to financial planning.
                </p>
              </div>

              <div className="border-y border-[#123B2A]/15 py-8">
                <h3 className="text-xl font-medium text-[#123B2A]">
                  Have the conversation
                </h3>

                <p className="mt-3 max-w-[560px] text-[14px] leading-6 text-[#123B2A]/55">
                  Once you've found a potential fit, connect with
                  the advisor and start building a plan around your
                  priorities.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="bg-[#123B2A] px-6 py-24 text-white sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1050px] text-center">

          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C8FF3D]">
            NEED HELP CHOOSING?
          </p>

          <h2 className="mt-6 text-[clamp(3.2rem,6vw,6.5rem)] font-medium leading-[0.88] tracking-[-0.075em]">
            Let's find the
            <br />
            right conversation.
          </h2>

          <p className="mx-auto mt-7 max-w-[570px] text-[15px] leading-7 text-white/50">
            Not sure which advisor or planning solution is right for
            you? Speak with our team and we'll help you take the next
            step.
          </p>

          <a
            href="/contact"
            className="mt-9 inline-flex h-[54px] items-center gap-3 rounded-full bg-white px-8 text-[12px] font-semibold text-[#123B2A] transition hover:-translate-y-1"
          >
            Talk to an Expert
            <span>↗</span>
          </a>

        </div>
      </section>

      <Footer />

      {/* =====================================================
          PROFILE MODAL
      ===================================================== */}

      {selectedAdvisor && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 px-5 backdrop-blur-sm"
          onClick={() => setSelectedAdvisor(null)}
        >
          <div
            className="relative w-full max-w-[540px] rounded-[28px] bg-[#F7FBF8] p-8"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              type="button"
              onClick={() => setSelectedAdvisor(null)}
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-xl"
            >
              ×
            </button>

            <div className="flex items-center gap-5">

              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#123B2A] text-white">
                {selectedAdvisor.initials}
              </div>

              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#3157C8]">
                  {selectedAdvisor.category}
                </p>

                <h3 className="mt-1 text-2xl font-medium">
                  {selectedAdvisor.name}
                </h3>

                <p className="mt-1 text-sm text-black/50">
                  {selectedAdvisor.role}
                </p>
              </div>

            </div>

            <div className="mt-7 grid grid-cols-2 gap-3">

              <div className="rounded-2xl bg-white p-4">
                <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-black/30">
                  LOCATION
                </p>

                <p className="mt-2 text-sm">
                  {selectedAdvisor.city}
                </p>
              </div>

              <div className="rounded-2xl bg-white p-4">
                <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-black/30">
                  EXPERIENCE
                </p>

                <p className="mt-2 text-sm">
                  {selectedAdvisor.experience}
                </p>
              </div>

            </div>

            <div className="mt-3 rounded-2xl bg-white p-5">

              <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-black/30">
                CREDENTIALS
              </p>

              <p className="mt-2 text-sm text-black/65">
                {selectedAdvisor.credentials}
              </p>

            </div>

            <p className="mt-7 text-[15px] leading-7 text-black/60">
              {selectedAdvisor.description}
            </p>

            <a
              href="/contact"
              className="mt-7 flex h-12 items-center justify-center gap-3 rounded-full bg-[#123B2A] text-sm font-semibold text-white"
            >
              Book a Consultation
              <span>↗</span>
            </a>

          </div>
        </div>
      )}
    </div>
  );
}