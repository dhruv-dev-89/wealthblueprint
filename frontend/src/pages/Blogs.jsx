import { useEffect, useMemo, useState } from "react";
import gsap from "gsap";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const blogs = [
  {
    id: 1,
    category: "Financial Planning",
    filter: "planning",
    meta: "September 2026 · 7 min read",
    title: "How to Build an Emergency Fund in India",
    description:
      "Learn how much emergency savings you may need, where to keep it and how it fits into your overall financial plan.",
    image: "/images/retirement.jpg",
    link:
      "https://medium.com/@social_94728/how-to-create-a-monthly-budget-that-actually-works-the-50-30-20-rule-for-indians-d169a2d51b38?postPublishedType=initial",
  },
  {
    id: 2,
    category: "Investing",
    filter: "investing",
    meta: "Read More · 8 min read",
    title: "SIP vs Lump Sum Investment: Which Strategy Works?",
    description:
      "A practical comparison of systematic investing and one-time investing for different financial goals.",
    image: "/images/retirement-removebg-preview.webp",
    link:
      "https://medium.com/@social_94728/step-up-sip-how-increasing-your-sip-every-year-can-help-build-long-term-wealth-1b75d18844e0?postPublishedType=initial",
  },
  {
    id: 3,
    category: "Investing",
    filter: "investing",
    meta: "Read More · 7 min read",
    title: "How Much Should You Invest Every Month Based on Your Salary?",
    description:
      "A practical framework to divide income between expenses, savings, investments and financial goals.",
    image: "/images/hero-chart.svg",
    link:
      "https://wealthblueprint2.substack.com/p/mutual-funds-for-beginners-in-india",
  },
  {
    id: 4,
    category: "Tax Planning",
    filter: "tax",
    meta: "Read More · 8 min read",
    title: "New vs Old Tax Regime: How Should You Plan?",
    description:
      "Understand the key considerations before choosing a tax approach and planning your investments.",
    image: "/images/child.jpg",
    link:
      "https://wealthblueprint2.substack.com/p/equity-vs-debt-vs-hybrid-mutual-funds",
  },
  {
    id: 5,
    category: "Retirement",
    filter: "planning",
    meta: "Read More · 9 min read",
    title: "How to Calculate Your Retirement Corpus in India",
    description:
      "See the major factors that affect the amount you may need for a financially planned retirement.",
    image: "/images/retirement.webp",
    link:
      "https://www.tumblr.com/wealthblueprint/829085920461520896/the-power-of-compounding-how-small-investments",
  },
  {
    id: 6,
    category: "Insurance",
    filter: "insurance",
    meta: "Read More · 8 min read",
    title: "How Much Life Insurance Cover Do You Actually Need?",
    description:
      "Understand the factors commonly considered when estimating an appropriate life insurance cover.",
    image: "/images/term.webp",
    link:
      "https://www.tumblr.com/wealthblueprint/829086006167961600/how-to-build-a-diversified-investment-portfolio",
  },
  {
    id: 7,
    category: "Financial Planning",
    filter: "planning",
    meta: "Read More · 7 min read",
    title: "Inflation in India: How Rising Prices Affect Your Savings",
    description:
      "Understand why today's savings target may not be enough for tomorrow's financial goals.",
    image: "/images/InflationImage.png",
    link:
      "https://dev.to/wealthblueprint90/should-you-pay-off-debt-first-or-start-investing-46ma",
  },
  {
    id: 8,
    category: "Investing",
    filter: "investing",
    meta: "Read More · 7 min read",
    title: "7 Common Investment Mistakes First-Time Investors Make",
    description:
      "Common habits that can make investing harder — and practical ways to build a more disciplined approach.",
    image: "/images/retirement-removebg-preview.png",
    link:
      "https://dev.to/wealthblueprint90/child-education-planning-in-india-how-much-should-you-start-investing-today-33bm",
  },
  {
    id: 9,
    category: "Goal Planning",
    filter: "planning",
    meta: "Read More · 9 min read",
    title: "Goal-Based Investing: Plan for Your Biggest Life Goals",
    description:
      "Learn how to connect investments with goals such as a home, education, marriage and retirement.",
    image: "/images/education.png",
    link:
      "https://x.com/WealthBlue90/status/2104886180999553512?s=20",
  },
  {
    id: 10,
    category: "Planning",
    filter: "planning",
    meta: "Read More · 9 min read",
    title: "Financial Planning in Your 20s, 30s, 40s and 50s",
    description:
      "Explore how financial priorities can change across different life stages and milestones.",
    image: "/images/journey.jpg",
    link:
      "https://x.com/WealthBlue90/status/2104886537163100226?s=20",
  },
];

const filters = [
  { label: "All", value: "all" },
  { label: "Investing", value: "investing" },
  { label: "Planning", value: "planning" },
  { label: "Insurance", value: "insurance" },
  { label: "Tax", value: "tax" },
];

function Blogs() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".blogs-hero-item", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
      });

      gsap.from(".blog-card", {
        y: 35,
        opacity: 0,
        duration: 0.7,
        stagger: 0.06,
        delay: 0.15,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  const filteredBlogs = useMemo(() => {
    const query = search.trim().toLowerCase();

    return blogs.filter((blog) => {
      const categoryMatch =
        activeFilter === "all" || blog.filter === activeFilter;

      const searchMatch =
        !query ||
        blog.title.toLowerCase().includes(query) ||
        blog.description.toLowerCase().includes(query) ||
        blog.category.toLowerCase().includes(query);

      return categoryMatch && searchMatch;
    });
  }, [activeFilter, search]);

  return (
    <div className="min-h-screen overflow-hidden bg-[#F7FBF8] text-[#11110F]">
      <Navbar />

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="px-6 pb-20 pt-12 sm:px-10 lg:px-16 lg:pb-24 lg:pt-16">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            {/* LEFT */}
            <div className="blogs-hero-item">
              <p className="mb-7 text-[10px] font-semibold uppercase tracking-[0.32em] text-[#3157C8]">
                WEALTH BLUE PRINT INSIGHTS
              </p>

              <h1 className="max-w-[1000px] text-[clamp(4rem,8vw,8.5rem)] font-medium leading-[0.84] tracking-[-0.08em]">
                Simple ideas
                <br />
                for{" "}
                <span className="text-[#3157C8]">
                  smarter decisions.
                </span>
              </h1>
            </div>

            {/* RIGHT */}
            <div className="blogs-hero-item border-t border-[#11110F]/15 pt-7">
              <p className="max-w-[450px] text-[15px] leading-7 text-[#11110F]/55">
                Practical guides on investing, financial planning, retirement,
                insurance and building long-term wealth — explained in a simple
                way.
              </p>

              {/* SEARCH */}
              <div className="relative mt-8 max-w-[450px]">
                <input
                  type="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search financial topics..."
                  className="
                    h-[54px] w-full rounded-full
                    border border-[#11110F]/12
                    bg-white px-5 pr-12
                    text-[13px] text-[#11110F]
                    outline-none transition
                    placeholder:text-[#11110F]/30
                    focus:border-[#3157C8]
                  "
                />

                <span className="absolute right-5 top-1/2 -translate-y-1/2 text-[20px] text-[#11110F]/30">
                  ⌕
                </span>
              </div>
            </div>
          </div>

          {/* BOTTOM META */}
          <div className="mt-14 grid border-t border-[#11110F]/12 pt-5 sm:grid-cols-3">
            <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#11110F]/30">
              FINANCIAL KNOWLEDGE HUB
            </span>

            <span className="hidden text-center text-[9px] font-semibold uppercase tracking-[0.25em] text-[#11110F]/30 sm:block">
              INVEST · PLAN · GROW
            </span>

            <span className="text-right text-[9px] font-semibold uppercase tracking-[0.25em] text-[#11110F]/30">
              {filteredBlogs.length} ARTICLES
            </span>
          </div>
        </div>
      </section>

      {/* =====================================================
          FILTERS
      ===================================================== */}
      <section className="px-6 pb-8 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter.value}
                type="button"
                onClick={() => setActiveFilter(filter.value)}
                className={`
                  rounded-full px-5 py-2.5
                  text-[11px] font-semibold
                  transition-all duration-300
                  ${
                    activeFilter === filter.value
                      ? "bg-[#123B2A] text-white"
                      : "border border-[#11110F]/12 bg-transparent text-[#11110F]/50 hover:border-[#11110F]/30 hover:text-[#11110F]"
                  }
                `}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURED
      ===================================================== */}
      {activeFilter === "all" && !search && (
        <section className="px-6 py-10 sm:px-10 lg:px-16 lg:py-14">
          <div className="mx-auto max-w-[1440px]">
            <article className="group grid overflow-hidden rounded-[30px] bg-[#123B2A] text-white lg:grid-cols-[1.05fr_0.95fr]">
              {/* IMAGE */}
              <div className="relative min-h-[380px] overflow-hidden lg:min-h-[500px]">
                <img
                  src={blogs[0].image}
                  alt={blogs[0].title}
                  loading="eager"
                  className="
                    absolute inset-0 h-full w-full
                    object-cover
                    transition duration-700
                    group-hover:scale-[1.04]
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                <div className="absolute left-7 top-7">
                  <span className="rounded-full bg-white/90 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#11110F] backdrop-blur">
                    FEATURED
                  </span>
                </div>
              </div>

              {/* CONTENT */}
              <div className="flex flex-col justify-between p-8 sm:p-12 lg:p-16">
                <div>
                  <div className="flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#C8FF3D]">
                    <span>{blogs[0].category}</span>
                    <span className="text-white/25">•</span>
                    <span>{blogs[0].meta}</span>
                  </div>

                  <h2 className="mt-8 max-w-[620px] text-[clamp(2.7rem,5vw,5.5rem)] font-medium leading-[0.9] tracking-[-0.065em]">
                    {blogs[0].title}
                  </h2>

                  <p className="mt-7 max-w-[500px] text-[14px] leading-7 text-white/55">
                    {blogs[0].description}
                  </p>
                </div>

                <div className="mt-12">
                  <a
                    href={blogs[0].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex h-[50px]
                      items-center gap-3
                      rounded-full
                      bg-[#C8FF3D]
                      px-6
                      text-[11px] font-semibold
                      text-[#123B2A]
                      transition duration-300
                      hover:-translate-y-1
                    "
                  >
                    Read Article
                    <span>↗</span>
                  </a>
                </div>
              </div>
            </article>
          </div>
        </section>
      )}

      {/* =====================================================
          BLOG GRID
      ===================================================== */}
      <section className="px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-[1440px]">
          {/* SECTION HEADER */}
          <div className="mb-12 flex items-end justify-between border-b border-[#11110F]/12 pb-6">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#3157C8]">
                LATEST INSIGHTS
              </p>

              <h2 className="mt-4 text-[clamp(2.5rem,4vw,4.5rem)] font-medium leading-none tracking-[-0.06em]">
                Read. Learn. Plan.
              </h2>
            </div>

            <span className="hidden text-[9px] font-semibold uppercase tracking-[0.2em] text-[#11110F]/30 sm:block">
              {filteredBlogs.length} RESULTS
            </span>
          </div>

          {/* NO RESULTS */}
          {filteredBlogs.length === 0 ? (
            <div className="border-y border-[#11110F]/12 py-24 text-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#3157C8]">
                NO RESULTS
              </p>

              <h3 className="mt-4 text-[clamp(2.2rem,4vw,4rem)] font-medium tracking-[-0.06em]">
                Nothing matched your search.
              </h3>

              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setActiveFilter("all");
                }}
                className="
                  mt-7 rounded-full
                  bg-[#123B2A]
                  px-6 py-3
                  text-[11px] font-semibold
                  text-white
                "
              >
                View All Articles
              </button>
            </div>
          ) : (
            <div className="grid gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
              {filteredBlogs.map((blog, index) => {
                /*
                  When "All" is selected and there is no search,
                  first article is already shown as featured.
                */
                const isFeaturedDuplicate =
                  activeFilter === "all" &&
                  !search &&
                  index === 0;

                if (isFeaturedDuplicate) {
                  return null;
                }

                return (
                  <article
                    key={blog.id}
                    className="
                      blog-card
                      group
                      min-w-0
                    "
                  >
                    {/* IMAGE */}
                    <div
                      className="
                        relative aspect-[1.2/1]
                        overflow-hidden
                        rounded-[24px]
                        bg-[#EAF7EF]
                      "
                    >
                      <img
                        src={blog.image}
                        alt={blog.title}
                        loading="lazy"
                        className="
                          absolute inset-0
                          h-full w-full
                          object-cover
                          transition duration-700
                          group-hover:scale-[1.045]
                        "
                      />

                      {/* subtle overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60" />

                      {/* category */}
                      <div className="absolute left-4 top-4">
                        <span
                          className="
                            rounded-full
                            bg-white/90
                            px-3 py-1.5
                            text-[8px]
                            font-semibold
                            uppercase
                            tracking-[0.18em]
                            text-[#11110F]
                            backdrop-blur
                          "
                        >
                          {blog.category}
                        </span>
                      </div>
                    </div>

                    {/* CONTENT */}
                    <div className="pt-5">
                      <div className="text-[9px] font-semibold uppercase tracking-[0.17em] text-[#11110F]/30">
                        {blog.meta}
                      </div>

                      <h3
                        className="
                          mt-4
                          max-w-[450px]
                          text-[25px]
                          font-medium
                          leading-[1.02]
                          tracking-[-0.045em]
                          transition duration-300
                          group-hover:text-[#3157C8]
                        "
                      >
                        {blog.title}
                      </h3>

                      <p className="mt-4 max-w-[430px] text-[13px] leading-6 text-[#11110F]/50">
                        {blog.description}
                      </p>

                      <div className="mt-6">
                        <a
                          href={blog.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            inline-flex
                            items-center
                            gap-2
                            text-[11px]
                            font-semibold
                            text-[#123B2A]
                          "
                        >
                          Read Article
                          <span className="transition duration-300 group-hover:translate-x-1">
                            ↗
                          </span>
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="px-6 pb-8 sm:px-10 lg:px-16">
        <div
          className="
            mx-auto max-w-[1440px]
            overflow-hidden
            rounded-[30px]
            bg-[#123B2A]
            px-7 py-20
            text-white
            sm:px-12
            lg:px-20 lg:py-24
          "
        >
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            {/* LEFT */}
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C8FF3D]">
                PLAN WITH PURPOSE
              </p>

              <h2
                className="
                  mt-7
                  max-w-[850px]
                  text-[clamp(3rem,6vw,6.5rem)]
                  font-medium
                  leading-[0.88]
                  tracking-[-0.07em]
                "
              >
                Have a
                <br />
                financial goal
                <br />
                <span className="text-[#C8FF3D]">in mind?</span>
              </h2>
            </div>

            {/* RIGHT */}
            <div>
              <p className="max-w-[390px] text-[14px] leading-7 text-white/55">
                Explore our planning solutions and calculators to take the
                next step toward your financial goals.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/calculators"
                  className="
                    inline-flex h-[52px]
                    items-center gap-3
                    rounded-full
                    bg-[#C8FF3D]
                    px-7
                    text-[11px]
                    font-semibold
                    text-[#123B2A]
                    transition
                    hover:-translate-y-1
                  "
                >
                  Use Calculators
                  <span>↗</span>
                </a>

                <a
                  href="/contact"
                  className="
                    inline-flex h-[52px]
                    items-center gap-3
                    rounded-full
                    border border-white/20
                    px-7
                    text-[11px]
                    font-semibold
                    text-white
                    transition
                    hover:-translate-y-1
                    hover:bg-white/5
                  "
                >
                  Talk to an Expert
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Blogs;