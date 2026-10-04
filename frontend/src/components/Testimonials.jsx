import React from "react";
import CircularCarousel from "./CircularCarousel";

const testimonials = [
  {
    id: "rajesh",
    title: "Rajesh Nambiar",
    subtitle: "Business Owner",
    company: "Nambiar Enterprises",
    initials: "RN",
    quote:
      "Wealth Blue Print changed the way I look at money. Their team offered clear, honest, and highly practical advice that helped me grow my business investments significantly within a year.",
  },

  {
    id: "arjun",
    title: "Arjun Mehra",
    subtitle: "IT Professional",
    company: "TechSolutions Pvt Ltd",
    initials: "AM",
    quote:
      "I compared several financial advisory firms before choosing Wealth Blue Print. Their personalized SIP strategy and consistent guidance gave me confidence to stay on track with my financial goals.",
  },

  {
    id: "vikram",
    title: "Vikram Iyer",
    subtitle: "Retired Professional",
    company: "Chennai",
    initials: "VI",
    quote:
      "After retirement, I needed a reliable plan to grow my savings without taking unnecessary risks. Wealth Blue Print delivered exactly that — a simple, structured, and highly effective retirement income strategy.",
  },

  {
    id: "priya",
    title: "Priya Sharma",
    subtitle: "Entrepreneur",
    company: "PS Digital Studio",
    initials: "PS",
    quote:
      "As a first-time investor, I was nervous about where to start. The advisors at Wealth Blue Print made the entire process seamless, transparent, and truly empowering. I now manage my finances with complete confidence.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#F7FBF8] py-24 sm:py-28 lg:py-32"
    >
      {/* ------------------------------------------------ */}
      {/* BACKGROUND                                       */}
      {/* ------------------------------------------------ */}

      <div className="pointer-events-none absolute inset-0">
        {/* Center glow */}
        <div className="absolute left-1/2 top-[54%] h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#EAF7EF] opacity-45 blur-3xl" />

        {/* Left line */}
        <div className="absolute left-0 top-[34%] hidden h-px w-[16vw] bg-[#DCE8DF] lg:block" />

        {/* Right line */}
        <div className="absolute right-0 top-[34%] hidden h-px w-[16vw] bg-[#DCE8DF] lg:block" />

        {/* Small architectural lines */}
        <div className="absolute left-[7%] top-[24%] hidden h-24 w-24 border-l border-t border-[#DCE8DF] opacity-60 lg:block" />

        <div className="absolute bottom-[15%] right-[7%] hidden h-24 w-24 border-b border-r border-[#DCE8DF] opacity-60 lg:block" />
      </div>

      {/* ------------------------------------------------ */}
      {/* MAIN CONTENT                                     */}
      {/* ------------------------------------------------ */}

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        {/* ------------------------------------------------ */}
        {/* HEADER                                           */}
        {/* ------------------------------------------------ */}

        <div className="mx-auto max-w-[800px] text-center">
          {/* Eyebrow */}
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#16A34A]" />

            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#16A34A]">
              Client Stories
            </p>

            <span className="h-px w-8 bg-[#16A34A]" />
          </div>

          {/* Heading */}
          <h2 className="text-[clamp(2.7rem,5vw,5.4rem)] font-medium leading-[0.94] tracking-[-0.055em] text-[#123B2A]">
            Real people.
            <br />

            <span className="text-[#7A8980]">
              Real financial confidence.
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-7 max-w-[560px] text-[15px] leading-7 text-[#637069] sm:text-base">
            The best financial plans are built around real people,
            real goals, and real lives.
          </p>
        </div>

        {/* ------------------------------------------------ */}
        {/* CAROUSEL                                         */}
        {/* ------------------------------------------------ */}

        <div className="relative mx-auto mt-10 h-[540px] w-full max-w-[1200px] sm:mt-12 sm:h-[570px] lg:mt-14">
          <CircularCarousel
            items={testimonials}
            cardWidth={340}
            aspectRatio={0.78}
            speed={22}
            perspective={1800}
            autoplay="drift"
            direction="left"
            pauseOnHover
            focusOnClick
            draggable
            snap
            momentum={0.6}
            cornerRadius={30}
          />
        </div>

        <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">
          <div className="relative h-px w-full bg-[#DCE8DF]">
            <span
              className="
        absolute left-1/2 top-1/2
        h-2 w-2
        -translate-x-1/2 -translate-y-1/2
        rounded-full
        bg-[#123B2A]
      "
            />
          </div>
        </div>
      </div>
    </section>
  );
}