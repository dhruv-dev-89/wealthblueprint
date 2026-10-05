import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import gsap from "gsap";

export default function FileClaim() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      gsap.from(".claim-item", {
        y: 30,
        opacity: 0,
        duration: 0.75,
        stagger: 0.07,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#F7FBF8] text-[#11110F]">
      <Navbar />

      {/* HERO */}
      <section className="px-6 pb-20 pt-12 sm:px-10 lg:px-16 lg:pb-28 lg:pt-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.9fr]">
            <div className="claim-item">
              <p className="mb-7 text-[10px] font-semibold uppercase tracking-[0.34em] text-[#3157C8]">
                CLAIM SUPPORT
              </p>

              <h1 className="max-w-[850px] text-[clamp(4rem,8.5vw,8.8rem)] font-medium leading-[0.82] tracking-[-0.09em]">
                When you
                <br />
                need
                <br />
                <span className="text-[#3157C8]">support.</span>
              </h1>

              <p className="mt-9 max-w-[520px] text-[15px] leading-7 text-[#11110F]/55">
                Share the basic details of your claim and our team can guide
                you through the next steps.
              </p>
            </div>

            {/* CLAIM VISUAL */}
            <div className="claim-item">
              <div className="relative min-h-[500px] overflow-hidden rounded-[32px] bg-[#3157C8] text-white">
                <div
                  className="absolute inset-0 opacity-[0.12]"
                  style={{
                    backgroundImage:
                      "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
                    backgroundSize: "48px 48px",
                  }}
                />

                <div className="absolute left-8 top-8">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-white/45">
                    CLAIM PROCESS
                  </p>
                </div>

                <div className="absolute bottom-10 left-8 right-8">
                  <div className="space-y-4">
                    {[
                      ["01", "Submit", true],
                      ["02", "Review", false],
                      ["03", "Resolution", false],
                    ].map(([num, label, active]) => (
                      <div
                        key={num}
                        className="flex items-center gap-5 border-b border-white/10 pb-4"
                      >
                        <span
                          className={`text-[10px] font-semibold ${
                            active ? "text-[#C8FF3D]" : "text-white/30"
                          }`}
                        >
                          {num}
                        </span>

                        <span
                          className={`text-xl font-medium tracking-[-0.03em] ${
                            active ? "text-white" : "text-white/40"
                          }`}
                        >
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="bg-white px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-[1180px]">
          <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr]">
            <div className="claim-item">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#3157C8]">
                FILE A CLAIM
              </p>

              <h2 className="mt-5 text-[clamp(2.7rem,5vw,5rem)] font-medium leading-[0.9] tracking-[-0.065em]">
                Start with
                <br />
                the
                <br />
                <span className="text-[#3157C8]">details.</span>
              </h2>

              <p className="mt-7 max-w-[380px] text-sm leading-7 text-[#11110F]/50">
                Please provide accurate information so your claim request can
                be reviewed properly.
              </p>
            </div>

            <div className="claim-item rounded-[28px] bg-[#F7FBF8] p-6 sm:p-9">
              {submitted ? (
                <div className="flex min-h-[480px] flex-col items-center justify-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#123B2A] text-2xl text-white">
                    ✓
                  </div>

                  <h3 className="mt-6 text-3xl font-medium tracking-[-0.04em]">
                    Claim request received.
                  </h3>

                  <p className="mt-4 max-w-[470px] text-sm leading-7 text-[#11110F]/50">
                    Your claim information has been captured by this form.
                    Actual claim submission and insurer processing will require
                    backend integration.
                  </p>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-7 rounded-full border border-[#123B2A]/15 px-6 py-3 text-xs font-semibold text-[#123B2A]"
                  >
                    Submit another claim
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#11110F]/45">
                        Full Name
                      </label>

                      <input
                        required
                        type="text"
                        placeholder="Your full name"
                        className="h-14 w-full rounded-2xl border border-[#11110F]/10 bg-white px-5 text-sm outline-none focus:border-[#3157C8]"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#11110F]/45">
                        Mobile Number
                      </label>

                      <input
                        required
                        type="tel"
                        placeholder="Enter Your Mobile Number"
                        className="h-14 w-full rounded-2xl border border-[#11110F]/10 bg-white px-5 text-sm outline-none focus:border-[#3157C8]"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#11110F]/45">
                        Policy Number
                      </label>

                      <input
                        required
                        type="text"
                        placeholder="Policy number"
                        className="h-14 w-full rounded-2xl border border-[#11110F]/10 bg-white px-5 text-sm outline-none focus:border-[#3157C8]"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#11110F]/45">
                        Claim Type
                      </label>

                      <select
                        required
                        className="h-14 w-full rounded-2xl border border-[#11110F]/10 bg-white px-5 text-sm outline-none focus:border-[#3157C8]"
                      >
                        <option value="">Select claim type</option>
                        <option>Life Insurance</option>
                        <option>Health Insurance</option>
                        <option>Child Plan</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#11110F]/45">
                      Incident Date
                    </label>

                    <input
                      required
                      type="date"
                      className="h-14 w-full rounded-2xl border border-[#11110F]/10 bg-white px-5 text-sm outline-none focus:border-[#3157C8]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#11110F]/45">
                      Claim Details
                    </label>

                    <textarea
                      required
                      rows="5"
                      placeholder="Briefly explain what happened..."
                      className="w-full resize-none rounded-2xl border border-[#11110F]/10 bg-white px-5 py-4 text-sm outline-none focus:border-[#3157C8]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#11110F]/45">
                      Supporting Documents
                    </label>

                    <label className="flex min-h-[120px] cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-[#11110F]/15 bg-white text-center transition hover:border-[#3157C8]">
                      <span className="text-2xl text-[#123B2A]">+</span>
                      <span className="mt-2 text-xs font-semibold">
                        Upload documents
                      </span>
                      <span className="mt-1 text-[10px] text-[#11110F]/35">
                        PDF, JPG or PNG
                      </span>

                      <input type="file" multiple className="hidden" />
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="inline-flex h-14 w-full items-center justify-center gap-3 rounded-full bg-[#123B2A] text-sm font-semibold text-white transition hover:-translate-y-1"
                  >
                    Submit Claim Request
                    <span>↗</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* NOTE */}
      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-[1000px] border-t border-[#11110F]/10 pt-7">
          <p className="text-[11px] leading-6 text-[#11110F]/40">
            Claim submission, document verification and claim settlement are
            subject to the terms, conditions and processes of the applicable
            insurer. This website form is currently a request interface and
            does not itself constitute claim approval or settlement.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}