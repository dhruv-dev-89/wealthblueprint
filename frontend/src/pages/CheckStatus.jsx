import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const statusTypes = [
  {
    id: "application",
    label: "Application",
    description: "Check the progress of a submitted application.",
  },
  {
    id: "renewal",
    label: "Renewal",
    description: "Track your policy renewal request.",
  },
  {
    id: "claim",
    label: "Claim",
    description: "Follow the progress of your claim.",
  },
];

const recentSearches = [
  {
    type: "Application",
    reference: "WB-••••••",
    date: "Recently searched",
  },
  {
    type: "Renewal",
    reference: "PL-••••••",
    date: "Recently searched",
  },
];

const progressSteps = [
  "Application Submitted",
  "Document Verification",
  "Assessment / Review",
  "Processing",
  "Completion",
];

function StatusVisual({ activeType }) {
  return (
    <div className="relative h-[460px] w-full overflow-hidden rounded-[32px] bg-[#EAF7EF]">
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(#123B2A12 1px, transparent 1px), linear-gradient(90deg, #123B2A12 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="absolute left-8 top-8">
        <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#123B2A]/40">
          WEALTHBLUEPRINT
        </p>
      </div>

      <div className="absolute left-8 top-[110px]">
        <p className="text-[clamp(3rem,5vw,5.5rem)] font-medium leading-[0.84] tracking-[-0.075em] text-[#123B2A]">
          Track
          <br />
          with
          <br />
          <span className="text-[#3157C8]">clarity.</span>
        </p>
      </div>

      <div className="absolute bottom-8 left-8 right-8">
        <div className="border-t border-[#123B2A]/15 pt-5">
          <div className="flex items-center justify-between">
            <span className="text-[9px] font-semibold uppercase tracking-[0.24em] text-[#123B2A]/40">
              CURRENT CHECK
            </span>

            <span className="rounded-full bg-white/70 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#123B2A]/55">
              {activeType}
            </span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[100px] right-[-15px] hidden h-[210px] w-[210px] rounded-full border border-[#123B2A]/10 sm:block" />

      <div className="absolute bottom-[145px] right-[45px] hidden h-[115px] w-[115px] rounded-full border border-[#3157C8]/20 sm:block" />

      <div className="absolute right-[80px] top-[95px] hidden h-3 w-3 rounded-full bg-[#3157C8] sm:block" />
    </div>
  );
}

export default function CheckStatus() {
  const [activeType, setActiveType] = useState("application");
  const [reference, setReference] = useState("");
  const [mobile, setMobile] = useState("");
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const activeLabel =
    statusTypes.find((item) => item.id === activeType)?.label || "Application";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!reference.trim() || !mobile.trim()) return;

    setSearched(true);
  };

  return (
    <div className="min-h-screen bg-[#F7FBF8] text-[#11110F]">
      <Navbar />

      {/* HERO */}
      <section className="px-6 pb-20 pt-10 sm:px-10 lg:px-16 lg:pb-28 lg:pt-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.82fr] lg:gap-20">
            <div>
              <p className="mb-8 text-[10px] font-semibold uppercase tracking-[0.34em] text-[#3157C8]">
                CHECK STATUS
              </p>

              <h1 className="max-w-[850px] text-[clamp(4rem,8.3vw,8.8rem)] font-medium leading-[0.82] tracking-[-0.09em]">
                Know where
                <br />
                <span className="text-[#3157C8]">you</span>
                <br />
                stand.
              </h1>

              <p className="mt-9 max-w-[530px] text-[15px] leading-7 text-[#11110F]/55">
                Check the progress of your application, renewal or claim
                using your reference details.
              </p>
            </div>

            <StatusVisual activeType={activeLabel} />
          </div>
        </div>
      </section>

      {/* STATUS CHECK */}
      <section className="border-t border-[#11110F]/10 bg-white px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr]">
            {/* LEFT */}
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#3157C8]">
                FIND YOUR STATUS
              </p>

              <h2 className="mt-5 max-w-[500px] text-[clamp(2.8rem,5vw,5rem)] font-medium leading-[0.9] tracking-[-0.07em]">
                What would
                <br />
                you like to
                <br />
                <span className="text-[#3157C8]">check?</span>
              </h2>

              <p className="mt-7 max-w-[420px] text-[14px] leading-7 text-[#11110F]/50">
                Select the type of request and enter the reference details
                associated with it.
              </p>
            </div>

            {/* RIGHT */}
            <div>
              <div className="grid gap-3 sm:grid-cols-3">
                {statusTypes.map((item) => {
                  const active = activeType === item.id;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        setActiveType(item.id);
                        setSearched(false);
                      }}
                      className={`min-h-[130px] rounded-[20px] border p-5 text-left transition-all duration-300 ${
                        active
                          ? "border-[#123B2A] bg-[#123B2A] text-white"
                          : "border-[#11110F]/10 bg-[#F7FBF8] text-[#11110F] hover:-translate-y-1 hover:border-[#123B2A]/30"
                      }`}
                    >
                      <span
                        className={`text-[10px] font-semibold uppercase tracking-[0.22em] ${
                          active
                            ? "text-[#C8FF3D]"
                            : "text-[#11110F]/35"
                        }`}
                      >
                        {item.label}
                      </span>

                      <p
                        className={`mt-6 text-[12px] leading-5 ${
                          active ? "text-white/60" : "text-[#11110F]/50"
                        }`}
                      >
                        {item.description}
                      </p>
                    </button>
                  );
                })}
              </div>

              <form
                onSubmit={handleSubmit}
                className="mt-5 rounded-[24px] border border-[#11110F]/10 bg-[#F7FBF8] p-6 sm:p-8"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.22em] text-[#11110F]/40">
                      Reference Number
                    </span>

                    <input
                      value={reference}
                      onChange={(e) => setReference(e.target.value)}
                      placeholder={
                        activeType === "claim"
                          ? "Enter claim number"
                          : activeType === "renewal"
                          ? "Enter policy / renewal number"
                          : "Enter application number"
                      }
                      className="h-[54px] w-full rounded-xl border border-[#11110F]/10 bg-white px-4 text-[13px] outline-none transition focus:border-[#3157C8]"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.22em] text-[#11110F]/40">
                      Registered Mobile
                    </span>

                    <input
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      placeholder="Enter mobile number"
                      inputMode="numeric"
                      className="h-[54px] w-full rounded-xl border border-[#11110F]/10 bg-white px-4 text-[13px] outline-none transition focus:border-[#3157C8]"
                    />
                  </label>
                </div>

                <button
                  type="submit"
                  className="mt-5 inline-flex h-[52px] w-full items-center justify-center gap-3 rounded-full bg-[#123B2A] px-7 text-[12px] font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#0D3022]"
                >
                  Check {activeLabel} Status
                  <span>↗</span>
                </button>
              </form>

              {searched && (
                <div className="mt-5 rounded-[24px] border border-[#3157C8]/20 bg-[#F2F6FF] p-6 sm:p-8">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#3157C8]">
                        REQUEST RECEIVED
                      </p>

                      <h3 className="mt-3 text-[24px] font-medium tracking-[-0.04em]">
                        Status lookup is ready.
                      </h3>

                      <p className="mt-3 max-w-[560px] text-[13px] leading-6 text-[#11110F]/55">
                        Your {activeLabel.toLowerCase()} reference has been
                        captured. Live status information will appear here
                        once the status service is connected.
                      </p>
                    </div>

                    <div className="shrink-0 rounded-full bg-white px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#11110F]/50">
                      {reference}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* LOCATE REFERENCE */}
      <section className="bg-[#F7FBF8] px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div className="border-t border-[#11110F]/10 pt-5">
              <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#11110F]/35">
                CAN'T FIND IT?
              </p>

              <h2 className="mt-5 text-[clamp(2.4rem,4vw,4rem)] font-medium leading-[0.9] tracking-[-0.065em]">
                Locate your
                <br />
                reference
                <br />
                number.
              </h2>

              <p className="mt-6 max-w-[430px] text-[14px] leading-7 text-[#11110F]/50">
                If you've misplaced your application, policy or claim
                reference, contact our support team and we'll help you find
                the right details.
              </p>

              <a
                href="/contact"
                className="mt-7 inline-flex items-center gap-3 text-[12px] font-semibold text-[#3157C8] transition hover:gap-4"
              >
                Get Support
                <span>↗</span>
              </a>
            </div>

            <div className="rounded-[28px] bg-[#123B2A] p-7 text-white sm:p-9">
              <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#C8FF3D]">
                RECENT SEARCHES
              </p>

              <div className="mt-7 divide-y divide-white/10">
                {recentSearches.map((item, index) => (
                  <div
                    key={`${item.type}-${index}`}
                    className="flex items-center justify-between gap-5 py-5 first:pt-0 last:pb-0"
                  >
                    <div>
                      <p className="text-[13px] font-medium">
                        {item.type}
                      </p>

                      <p className="mt-1 text-[11px] text-white/40">
                        {item.date}
                      </p>
                    </div>

                    <span className="rounded-full border border-white/10 px-3 py-1.5 font-mono text-[10px] text-white/50">
                      {item.reference}
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-7 border-t border-white/10 pt-5 text-[11px] leading-5 text-white/35">
                Your actual recent searches can be connected here when
                account-based status tracking is enabled.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRESS */}
      <section className="bg-white px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#3157C8]">
                HOW IT MOVES
              </p>

              <h2 className="mt-5 text-[clamp(2.8rem,5vw,5rem)] font-medium leading-[0.9] tracking-[-0.07em]">
                From
                <br />
                request
                <br />
                to
                <br />
                <span className="text-[#3157C8]">completion.</span>
              </h2>
            </div>

            <div>
              {progressSteps.map((step, index) => (
                <div
                  key={step}
                  className="group flex gap-6 border-t border-[#11110F]/10 py-6 last:border-b"
                >
                  <span className="w-8 shrink-0 text-[10px] font-semibold text-[#3157C8]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="flex-1">
                    <p className="text-[17px] font-medium tracking-[-0.02em]">
                      {step}
                    </p>

                    <p className="mt-2 max-w-[500px] text-[12px] leading-5 text-[#11110F]/40">
                      Your request progresses through the relevant review
                      and processing stage.
                    </p>
                  </div>

                  <span className="text-[#11110F]/20 transition group-hover:translate-x-1 group-hover:text-[#3157C8]">
                    ↗
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SUPPORT */}
      <section className="bg-[#123B2A] px-6 py-20 text-white sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-[1100px]">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C8FF3D]">
                NEED HELP?
              </p>

              <h2 className="mt-5 max-w-[750px] text-[clamp(3rem,6vw,6rem)] font-medium leading-[0.88] tracking-[-0.075em]">
                We're here
                <br />
                when you
                <br />
                need us.
              </h2>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href="/contact"
                className="inline-flex h-[50px] items-center justify-center gap-3 rounded-full bg-white px-7 text-[12px] font-semibold text-[#123B2A] transition hover:-translate-y-1"
              >
                Talk to Support
                <span>↗</span>
              </a>

              <a
                href="/contact"
                className="inline-flex h-[50px] items-center justify-center gap-3 rounded-full border border-white/15 px-7 text-[12px] font-semibold text-white transition hover:border-white/30"
              >
                Schedule a Call
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}