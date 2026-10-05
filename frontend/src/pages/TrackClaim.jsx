import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import gsap from "gsap";

export default function TrackClaim() {
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      gsap.from(".track-item", {
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
    setSearched(true);
  };

  return (
    <div className="min-h-screen bg-[#F7FBF8] text-[#11110F]">
      <Navbar />

      {/* HERO */}
      <section className="px-6 pb-20 pt-12 sm:px-10 lg:px-16 lg:pb-28 lg:pt-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.9fr]">
            <div className="track-item">
              <p className="mb-7 text-[10px] font-semibold uppercase tracking-[0.34em] text-[#3157C8]">
                CLAIM SUPPORT
              </p>

              <h1 className="max-w-[850px] text-[clamp(4rem,8.5vw,8.8rem)] font-medium leading-[0.82] tracking-[-0.09em]">
                Follow your
                <br />
                claim
                <br />
                <span className="text-[#3157C8]">forward.</span>
              </h1>

              <p className="mt-9 max-w-[520px] text-[15px] leading-7 text-[#11110F]/55">
                Enter your claim details to begin checking its progress.
              </p>
            </div>

            <div className="track-item">
              <div className="relative min-h-[470px] overflow-hidden rounded-[32px] bg-[#EAF7EF]">
                <div
                  className="absolute inset-0 opacity-35"
                  style={{
                    backgroundImage:
                      "linear-gradient(#123B2A12 1px, transparent 1px), linear-gradient(90deg, #123B2A12 1px, transparent 1px)",
                    backgroundSize: "46px 46px",
                  }}
                />

                <div className="absolute left-8 top-8">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#123B2A]/45">
                    CLAIM TRACKING
                  </p>
                </div>

                <div className="absolute bottom-10 left-8 right-8">
                  <div className="relative ml-3 border-l border-[#123B2A]/15 pl-8">
                    {[
                      ["Submitted", "Request received"],
                      ["Review", "Documents checked"],
                      ["Processing", "Claim being assessed"],
                      ["Resolved", "Final outcome"],
                    ].map(([title, text], index) => (
                      <div
                        key={title}
                        className={`relative pb-8 ${
                          index === 3 ? "pb-0" : ""
                        }`}
                      >
                        <span className="absolute -left-[39px] top-0 h-5 w-5 rounded-full border-4 border-[#EAF7EF] bg-[#123B2A]" />

                        <p className="text-sm font-semibold text-[#123B2A]">
                          {title}
                        </p>

                        <p className="mt-1 text-[11px] text-[#123B2A]/45">
                          {text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRACK FORM */}
      <section className="bg-white px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-[1050px]">
          <div className="track-item text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#3157C8]">
              TRACK CLAIM
            </p>

            <h2 className="mx-auto mt-5 max-w-[700px] text-[clamp(2.8rem,5vw,5rem)] font-medium leading-[0.9] tracking-[-0.065em]">
              Where is your claim?
            </h2>
          </div>

          <div className="track-item mt-12 rounded-[28px] bg-[#F7FBF8] p-6 sm:p-10">
            {searched ? (
              <div className="py-10 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#123B2A] text-2xl text-white">
                  ✓
                </div>

                <h3 className="mt-6 text-3xl font-medium tracking-[-0.04em]">
                  Tracking request received.
                </h3>

                <p className="mx-auto mt-4 max-w-[520px] text-sm leading-7 text-[#11110F]/50">
                  Live claim tracking is not connected to an insurer or claims
                  database yet, so no artificial claim status is being shown.
                </p>

                <button
                  onClick={() => setSearched(false)}
                  className="mt-7 rounded-full border border-[#123B2A]/15 px-6 py-3 text-xs font-semibold text-[#123B2A]"
                >
                  Track another claim
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#11110F]/45">
                      Claim Number
                    </label>

                    <input
                      required
                      type="text"
                      placeholder="Enter claim number"
                      className="h-14 w-full rounded-2xl border border-[#11110F]/10 bg-white px-5 text-sm outline-none focus:border-[#3157C8]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#11110F]/45">
                      Registered Mobile
                    </label>

                    <input
                      required
                      type="tel"
                      placeholder="Enter Your Mobile Number"
                      className="h-14 w-full rounded-2xl border border-[#11110F]/10 bg-white px-5 text-sm outline-none focus:border-[#3157C8]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="inline-flex h-14 w-full items-center justify-center gap-3 rounded-full bg-[#123B2A] text-sm font-semibold text-white transition hover:-translate-y-1"
                >
                  Track Claim
                  <span>→</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* STATUS EXPLANATION */}
      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-[1180px]">
          <div className="grid gap-5 md:grid-cols-4">
            {[
              ["Submitted", "Your claim request has been received."],
              ["Under Review", "Documents and details are being reviewed."],
              ["Processing", "The claim is being assessed."],
              ["Resolved", "A final decision has been made."],
            ].map(([title, text]) => (
              <div
                key={title}
                className="track-item border-t border-[#11110F]/10 pt-6"
              >
                <h3 className="text-lg font-medium tracking-[-0.03em]">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#11110F]/45">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}