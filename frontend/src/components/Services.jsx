import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const services = [
  {
    title: "Investment Planning",
    eyebrow: "01",
    text: "Build an investment strategy around your goals, time horizon and comfort with risk.",
    image: "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW52ZXN0bWVudHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Mutual Funds",
    eyebrow: "02",
    text: "Explore diversified investment options designed around your financial objectives.",
    image: "https://images.unsplash.com/photo-1506555191898-a76bacf004ca?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "SIP",
    eyebrow: "03",
    text: "A systematic way to invest regularly while building towards long-term financial goals.",
    image: "https://plus.unsplash.com/premium_photo-1742119207785-8948a2817848?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3lzdGVtYXRpYyUyMGludmVzdG1lbnQlMjBwbGFufGVufDB8fDB8fHww",
  },
  {
    title: "Insurance",
    eyebrow: "04",
    text: "Protect the financial progress you are building with coverage aligned to your needs.",
    image: "https://images.unsplash.com/photo-1742318592061-15c5f19e1e47?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZpbmFuY2lhbCUyMGluc3VyYW5jZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Tax Planning",
    eyebrow: "05",
    text: "Structure your finances with tax-efficient decisions that support your wider financial plan.",
    image: "https://plus.unsplash.com/premium_photo-1679923906285-386991e8d862?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGF4fGVufDB8fDB8fHww",
  },
  {
    title: "Financial Planning",
    eyebrow: "06",
    text: "Bring your goals, investments, protection and future priorities together into one clear plan.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZpbmFuY2lhbCUyMHBsYW5uaW5nfGVufDB8fDB8fHww",
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hovered, setHovered] = useState(false);

  const cardsRef = useRef([]);
  const containerRef = useRef(null);
  const autoplayRef = useRef(null);

  const dragStart = useRef(0);
  const isDragging = useRef(false);
  const didDrag = useRef(false);

  const cardWidth = 300;
  const cardHeight = 380;
  const depth = 220;
  const spread = 90;
  const tilt = 22;
  const visibleCards = 4;
  const duration = 500;

  const total = services.length;

  const normalizeIndex = (index) => {
    return ((index % total) + total) % total;
  };

  /*
   * ---------------------------------------------------------
   * RELATIVE POSITION
   * ---------------------------------------------------------
   */

  const getRelativePosition = (index, currentIndex = activeIndex) => {
    let difference = index - currentIndex;

    if (difference > total / 2) {
      difference -= total;
    }

    if (difference < -total / 2) {
      difference += total;
    }

    return difference;
  };

  /*
   * ---------------------------------------------------------
   * ANIMATE CARDS
   * ---------------------------------------------------------
   */

  const updateCards = (instant = false, currentIndex = activeIndex) => {
    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      const position = getRelativePosition(index, currentIndex);
      const distance = Math.abs(position);

      /*
       * Cards which are too far away.
       */
      if (distance > visibleCards) {
        gsap.to(card, {
          duration: instant ? 0 : duration / 1000,
          x: position > 0 ? 500 : -500,
          y: 30,
          z: -300,
          scale: 0.7,
          opacity: 0,
          rotateY: position > 0 ? -35 : 35,
          filter: "blur(8px)",
          zIndex: 0,
          ease: "power3.out",
          overwrite: true,
        });

        return;
      }

      /*
       * CENTER CARD
       */
      if (position === 0) {
        gsap.to(card, {
          duration: instant ? 0 : duration / 1000,

          x: 0,
          y: 0,
          z: depth,

          scale: 1,
          opacity: 1,

          rotateY: 0,

          filter: "blur(0px)",

          zIndex: 100,

          ease: "power3.inOut",

          overwrite: true,
        });

        return;
      }

      /*
       * SIDE CARDS
       */
      const direction = position > 0 ? 1 : -1;

      const distanceRatio = Math.min(
        distance / visibleCards,
        1
      );

      const x =
        direction *
        (cardWidth * 0.55 + (distance - 1) * spread);

      const z = depth - distance * 125;

      const scale = 1 - distanceRatio * 0.13;

      const opacity = 1 - distanceRatio * 0.42;

      const rotation =
        direction *
        tilt *
        (position > 0 ? -1 : 1);

      const blurAmount =
        distance === 1
          ? 0.8
          : distance * 1.2;

      gsap.to(card, {
        duration: instant ? 0 : duration / 1000,

        x,
        y: distance * 5,
        z,

        scale,
        opacity,

        rotateY: rotation,

        filter: `blur(${blurAmount}px)`,

        zIndex: 100 - Math.round(distance * 10),

        ease: "power3.inOut",

        overwrite: true,
      });
    });
  };

  /*
   * ---------------------------------------------------------
   * INITIAL LOAD
   * ---------------------------------------------------------
   */

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      updateCards(true, 0);
    });

    const handleResize = () => {
      updateCards(true, activeIndex);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /*
   * ---------------------------------------------------------
   * ACTIVE INDEX CHANGE
   * ---------------------------------------------------------
   */

  useEffect(() => {
    updateCards(false, activeIndex);
  }, [activeIndex]);

  /*
   * ---------------------------------------------------------
   * NEXT
   * ---------------------------------------------------------
   */

  const next = () => {
    setActiveIndex((current) => {
      return normalizeIndex(current + 1);
    });
  };

  /*
   * ---------------------------------------------------------
   * PREVIOUS
   * ---------------------------------------------------------
   */

  const previous = () => {
    setActiveIndex((current) => {
      return normalizeIndex(current - 1);
    });
  };

  /*
   * ---------------------------------------------------------
   * GO TO SPECIFIC CARD
   * ---------------------------------------------------------
   */

  const goTo = (index) => {
    setActiveIndex(normalizeIndex(index));
  };

  /*
   * ---------------------------------------------------------
   * AUTOPLAY
   * ---------------------------------------------------------
   */

  useEffect(() => {
  if (hovered) return;

  autoplayRef.current = setInterval(() => {
    setActiveIndex((current) => {
      return normalizeIndex(current + 1);
    });
  }, 2000);

  return () => {
    clearInterval(autoplayRef.current);
  };
  }, [hovered]);

  /*
   * ---------------------------------------------------------
   * DRAG START
   * ---------------------------------------------------------
   */

  const handlePointerDown = (e) => {
    /*
     * Don't start dragging when clicking buttons.
     */
    if (e.target.closest("button")) {
      return;
    }

    dragStart.current = e.clientX;
    isDragging.current = true;
    didDrag.current = false;

    containerRef.current?.setPointerCapture?.(
      e.pointerId
    );
  };

  /*
   * ---------------------------------------------------------
   * DRAG MOVE
   * ---------------------------------------------------------
   */

  const handlePointerMove = (e) => {
    if (!isDragging.current) return;

    const distance =
      e.clientX - dragStart.current;

    if (Math.abs(distance) > 8) {
      didDrag.current = true;
    }
  };

  /*
   * ---------------------------------------------------------
   * DRAG END
   * ---------------------------------------------------------
   */

  const handlePointerUp = (e) => {
    if (!isDragging.current) return;

    isDragging.current = false;

    containerRef.current?.releasePointerCapture?.(
      e.pointerId
    );

    const distance =
      e.clientX - dragStart.current;

    if (distance > 50) {
      previous();
    } else if (distance < -50) {
      next();
    }

    /*
     * Reset after the click event has passed.
     */
    setTimeout(() => {
      didDrag.current = false;
    }, 50);
  };

  /*
   * ---------------------------------------------------------
   * KEYBOARD
   * ---------------------------------------------------------
   */

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        previous();
      }

      if (e.key === "ArrowRight") {
        next();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, []);

  /*
   * ---------------------------------------------------------
   * RENDER
   * ---------------------------------------------------------
   */

  return (
    <section
      id="services"
      className="
        relative overflow-hidden
        bg-[#F7FBF8]
        px-6 py-20
        sm:px-10
        lg:px-16 lg:py-14
      "
    >
      <div className="mx-auto max-w-[1440px]">

        {/* HEADER */}

        <div
          className="
            mb-8
            flex flex-col gap-5
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          <div>
            <div className="mb-4 flex items-center gap-2">
              <span className="h-[6px] w-[6px] rounded-full bg-[#43A85B]" />

              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  text-[#167544]
                "
              >
                WHAT WE OFFER
              </span>
            </div>

            <h2
              className="
                text-[clamp(2.8rem,5.5vw,5.8rem)]
                font-medium
                leading-[0.88]
                tracking-[-0.065em]
                text-[#183D2C]
              "
            >
              Everything your
              <br />
              <span className="text-[#3157C8]">
                wealth needs.
              </span>
            </h2>
          </div>

          
        </div>

        {/* DEPTH CAROUSEL */}

        <div
        ref={containerRef}
        className="
          relative
          h-[540px]
          w-full
          overflow-hidden
          select-none
        "
        style={{
          perspective: "1400px",
          perspectiveOrigin: "50% 50%",
          touchAction: "pan-y",
        }}
        
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
          {services.map((service, index) => {
            const position =
              getRelativePosition(index);

            return (
              <div
                key={service.title}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onClick={() => {
                  /*
                   * Don't trigger card click after dragging.
                   */
                  if (didDrag.current) return;

                  if (position !== 0) {
                    goTo(index);
                  }
                }}
                className="
                  absolute
                  left-1/2
                  top-1/2
                  overflow-hidden
                  cursor-pointer
                  will-change-transform
                "
                style={{
                  width: `${cardWidth}px`,
                  height: `${cardHeight}px`,
                  marginLeft: `${-cardWidth / 2}px`,
                  marginTop: `${-cardHeight / 2}px`,
                  borderRadius: "18px",
                  transformStyle: "preserve-3d",
                  background: "#05060a",
                }}
              >
                {/* IMAGE */}

                <img
                  src={service.image}
                  alt={service.title}
                  draggable={false}
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                  "
                />

                {/* IMAGE OVERLAY */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black
                    via-black/25
                    to-black/5
                  "
                />

                {/* TOP */}

                <div
                  className="
                    absolute
                    left-5
                    right-5
                    top-5
                    flex
                    items-center
                    justify-between
                  "
                >
                  <span
                    className="
                      text-[9px]
                      font-medium
                      uppercase
                      tracking-[0.25em]
                      text-white/65
                    "
                  >
                    {service.eyebrow}
                  </span>

                  <span
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/20
                      bg-black/10
                      text-[13px]
                      text-white
                      backdrop-blur-md
                    "
                  >
                    ↗
                  </span>
                </div>

                {/* CONTENT */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    p-6
                  "
                >
                  <h3
                    className="
                      text-[26px]
                      font-medium
                      leading-[0.95]
                      tracking-[-0.045em]
                      text-white
                    "
                  >
                    {service.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      max-w-[245px]
                      text-[11px]
                      leading-5
                      text-white/65
                    "
                  >
                    {service.text}
                  </p>
                </div>

                {/* ACTIVE BORDER */}

                {position === 0 && (
                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      rounded-[18px]
                      ring-1
                      ring-white/30
                    "
                  />
                )}
              </div>
            );
          })}

          {/* CONTROLS */}

          <div
            className="
              absolute
              bottom-3
              left-1/2
              z-[200]
              flex
              -translate-x-1/2
              items-center
              gap-2
            "
          >
            <button
              type="button"
              onPointerDown={(e) => {
                e.stopPropagation();
              }}
              onClick={(e) => {
                e.stopPropagation();
                previous();
              }}
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-[#D6E2DA]
                bg-white
                text-[#183D2C]
                shadow-[0_8px_25px_rgba(18,59,42,0.08)]
                transition-all
                duration-300
                hover:-translate-x-1
                hover:bg-[#183D2C]
                hover:text-white
              "
            >
              ←
            </button>

            <button
              type="button"
              onPointerDown={(e) => {
                e.stopPropagation();
              }}
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-[#D6E2DA]
                bg-white
                text-[#183D2C]
                shadow-[0_8px_25px_rgba(18,59,42,0.08)]
                transition-all
                duration-300
                hover:translate-x-1
                hover:bg-[#183D2C]
                hover:text-white
              "
            >
              →
            </button>
          </div>

          {/* INDICATORS */}

          <div
            className="
              absolute
              bottom-5
              right-5
              z-[200]
              hidden
              items-center
              gap-1.5
              sm:flex
            "
          >
            {services.map((_, index) => (
              <button
                key={index}
                type="button"
                onPointerDown={(e) => {
                  e.stopPropagation();
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  goTo(index);
                }}
                className="
                  h-1.5
                  rounded-full
                  transition-all
                  duration-500
                "
                style={{
                  width:
                    activeIndex === index
                      ? "28px"
                      : "7px",

                  background:
                    activeIndex === index
                      ? "#183D2C"
                      : "#C8D5CD",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}