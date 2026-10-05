import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import gsap from "gsap";

export default function RenewPolicy() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      gsap.from(".renew-hero-item", {
        y: 35,
        opacity: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
      });

      gsap.from(".renew-section-item", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.06,
        delay: 0.2,
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
      <section className="px-6 pb-20 pt-12 sm:px-10 lg:px-16 lg:pb-28 lg:pt-26">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.85fr] lg:gap-20">
            <div>
              <p className="renew-hero-item mb-7 text-[10px] font-semibold uppercase tracking-[0.34em] text-[#3157C8]">
                POLICY SUPPORT
              </p>

              <h1 className="renew-hero-item max-w-[850px] text-[clamp(4rem,8.5vw,8.8rem)] font-medium leading-[0.82] tracking-[-0.09em]">
                Keep your
                <br />
                protection
                <br />
                <span className="text-[#3157C8]">active.</span>
              </h1>

              <p className="renew-hero-item mt-9 max-w-[530px] text-[15px] leading-7 text-[#11110F]/55">
                Renew your existing policy with a simple request and keep
                your financial protection on track.
              </p>
            </div>

            {/* VISUAL */}
            <div className="renew-hero-item relative min-h-[430px] overflow-hidden rounded-[32px] bg-[#EAF7EF]">
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage:
                    "linear-gradient(#123B2A12 1px, transparent 1px), linear-gradient(90deg, #123B2A12 1px, transparent 1px)",
                  backgroundSize: "46px 46px",
                }}
              />

              <div className="absolute left-8 top-8">
                <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#123B2A]/45">
                  POLICY RENEWAL
                </p>
              </div>

              <div className="absolute bottom-10 left-8 right-8">
                <div className="relative h-[190px]">
                  <div className="absolute bottom-0 left-[5%] h-[100px] w-[24%] bg-[#123B2A]" />
                  <div className="absolute bottom-0 left-[34%] h-[145px] w-[24%] bg-[#3157C8]" />
                  <div className="absolute bottom-0 left-[63%] h-[190px] w-[24%] bg-[#C8FF3D]" />

                  <div className="absolute bottom-[150px] left-[38%] text-[9px] font-semibold uppercase tracking-[0.2em] text-[#123B2A]/45">
                    ACTIVE
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-[#123B2A]/10 pt-4">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#123B2A]/40">
                    PROTECT
                  </span>
                  <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#123B2A]/40">
                    RENEW
                  </span>
                  <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#123B2A]/40">
                    CONTINUE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="bg-white px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-[1180px]">
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
            <div className="renew-section-item">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#3157C8]">
                RENEW POLICY
              </p>

              <h2 className="mt-5 max-w-[450px] text-[clamp(2.5rem,5vw,5rem)] font-medium leading-[0.9] tracking-[-0.065em]">
                Continue
                <br />
                without a
                <br />
                <span className="text-[#3157C8]">gap.</span>
              </h2>

              <p className="mt-7 max-w-[390px] text-[14px] leading-7 text-[#11110F]/50">
                Share your policy details and our team can help you with the
                renewal process.
              </p>
            </div>

            <div className="renew-section-item rounded-[28px] bg-[#F7FBF8] p-6 sm:p-9">
              {submitted ? (
                <div className="flex min-h-[390px] flex-col items-center justify-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#123B2A] text-2xl text-white">
                    ✓
                  </div>

                  <h3 className="mt-6 text-3xl font-medium tracking-[-0.04em]">
                    Request received.
                  </h3>

                  <p className="mt-4 max-w-[440px] text-sm leading-7 text-[#11110F]/50">
                    Your renewal request has been recorded. Our team can
                    contact you to continue the renewal process.
                  </p>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-7 rounded-full border border-[#123B2A]/15 px-6 py-3 text-xs font-semibold text-[#123B2A]"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#11110F]/45">
                      Policy Number
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Enter your policy number"
                      className="h-14 w-full rounded-2xl border border-[#11110F]/10 bg-white px-5 text-sm outline-none transition focus:border-[#3157C8]"
                    />
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#11110F]/45">
                        Full Name
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Your full name"
                        className="h-14 w-full rounded-2xl border border-[#11110F]/10 bg-white px-5 text-sm outline-none transition focus:border-[#3157C8]"
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
                        className="h-14 w-full rounded-2xl border border-[#11110F]/10 bg-white px-5 text-sm outline-none transition focus:border-[#3157C8]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#11110F]/45">
                      Policy Type
                    </label>

                    <select
                      required
                      className="h-14 w-full rounded-2xl border border-[#11110F]/10 bg-white px-5 text-sm outline-none focus:border-[#3157C8]"
                    >
                      <option value="">Select policy type</option>
                      <option>Term Insurance</option>
                      <option>Health Insurance</option>
                      <option>Child Plan</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#11110F]/45">
                      Additional Message
                    </label>

                    <textarea
                      rows="4"
                      placeholder="Anything you'd like us to know..."
                      className="w-full resize-none rounded-2xl border border-[#11110F]/10 bg-white px-5 py-4 text-sm outline-none focus:border-[#3157C8]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex h-14 w-full items-center justify-center gap-3 rounded-full bg-[#123B2A] text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-[#0D3022]"
                  >
                    Request Renewal Assistance
                    <span>↗</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* INFO */}
      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-[1180px]">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              [
                "01",
                "Share your details",
                "Provide your policy number and basic contact information.",
              ],
              [
                "02",
                "We review",
                "Our team can review your request and guide you on the next step.",
              ],
              [
                "03",
                "Continue protection",
                "Complete the renewal process through the appropriate policy channel.",
              ],
            ].map(([num, title, text]) => (
              <div
                key={num}
                className="renew-section-item border-t border-[#11110F]/10 pt-6"
              >
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#3157C8]">
                  {num}
                </span>

                <h3 className="mt-5 text-2xl font-medium tracking-[-0.04em]">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#11110F]/50">
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