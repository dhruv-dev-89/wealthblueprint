import React, {
  useCallback,
  useEffect,
  useRef,
} from "react";

const CircularCarousel = ({
  items = [],
  cardWidth = 340,
  aspectRatio = 0.78,
  speed = 18,
  perspective = 1800,
  autoplay = "drift",
  direction = "left",
  pauseOnHover = true,
  focusOnClick = true,
  draggable = true,
  snap = true,
  momentum = 0.6,
  cornerRadius = 30,
}) => {
  const stageRef = useRef(null);
  const orbitRef = useRef(null);
  const cardsRef = useRef([]);

  const rotationRef = useRef(0);
  const velocityRef = useRef(0);

  const animationFrameRef = useRef(null);
  const lastTimeRef = useRef(null);

  const isDraggingRef = useRef(false);
  const isHoveredRef = useRef(false);

  const lastPointerXRef = useRef(0);
  const activePointerIdRef = useRef(null);

  const snapAnimationRef = useRef(null);

  const itemCount = items.length;

  const cardHeight = cardWidth / aspectRatio;

  /*
   * Distance from the center.
   * Responsive adjustment happens through CSS scale,
   * while the actual orbit remains stable.
   */
  const radius = Math.max(
    330,
    Math.min(430, cardWidth * 1.25)
  );

  /*
   * One complete rotation.
   * speed = seconds per full revolution.
   */
  const degreesPerSecond =
    360 / Math.max(speed, 1);

  /*
   * --------------------------------------------------
   * UPDATE CARD POSITIONS
   * --------------------------------------------------
   */
  const updateCards = useCallback(() => {
    if (!itemCount) return;

    const cards = cardsRef.current;

    const angleStep = 360 / itemCount;

    cards.forEach((card, index) => {
      if (!card) return;

      let angle =
        index * angleStep +
        rotationRef.current;

      /*
       * Normalize angle
       * -180 -> 180
       */
      angle =
        ((angle + 180) % 360) - 180;

      const radians =
        (angle * Math.PI) / 180;

      /*
       * Horizontal position
       */
      const x =
        Math.sin(radians) * radius;

      /*
       * Depth
       */
      const depth =
        Math.cos(radians);

      /*
       * Z position
       */
      const z =
        depth * radius;

      /*
       * Front card:
       *
       * depth = 1
       *
       * Back card:
       *
       * depth = -1
       */
      const depthProgress =
        (depth + 1) / 2;

      /*
       * Scale
       */
      const scale =
        0.64 +
        depthProgress * 0.36;

      /*
       * Opacity
       */
      const opacity =
        0.16 +
        depthProgress * 0.84;

      /*
       * Blur
       */
      const blur =
        Math.max(
          0,
          (1 - depthProgress) * 2.2
        );

      /*
       * Slight vertical movement
       * gives the carousel more depth.
       */
      const y =
        Math.abs(Math.sin(radians)) *
        8;

      /*
       * Front card gets highest z-index.
       */
      const zIndex =
        Math.round(
          (depthProgress + 1) * 100
        );

      /*
       * Is this the active/front card?
       */
      const isFront =
        depth > 0.92;

      /*
       * Front card gets a subtle lift.
       */
      const lift =
        isFront ? -8 : 0;

      card.style.transform = `
        translate3d(
          ${x}px,
          ${y + lift}px,
          ${z}px
        )
        scale(${scale})
      `;

      card.style.opacity =
        opacity.toFixed(3);

      card.style.filter =
        `blur(${blur.toFixed(2)}px)`;

      card.style.zIndex =
        String(zIndex);

      /*
       * Front card receives shadow.
       */
      if (isFront) {
        card.style.boxShadow =
          "0 40px 90px rgba(18,59,42,0.17), 0 12px 30px rgba(18,59,42,0.09)";
      } else {
        card.style.boxShadow =
          "0 18px 45px rgba(18,59,42,0.06)";
      }

      card.dataset.front =
        isFront ? "true" : "false";
    });
  }, [
    itemCount,
    radius,
  ]);

  /*
   * --------------------------------------------------
   * ANIMATION LOOP
   * --------------------------------------------------
   */
  useEffect(() => {
    if (!itemCount) return;

    const animate = (time) => {
      if (!lastTimeRef.current) {
        lastTimeRef.current = time;
      }

      const delta =
        Math.min(
          time - lastTimeRef.current,
          40
        );

      lastTimeRef.current = time;

      /*
       * Autoplay only when:
       *
       * - autoplay enabled
       * - not dragging
       * - not hovered
       */
      if (
        autoplay &&
        !isDraggingRef.current &&
        !(
          pauseOnHover &&
          isHoveredRef.current
        )
      ) {
        const directionMultiplier =
          direction === "right"
            ? 1
            : -1;

        rotationRef.current +=
          degreesPerSecond *
          directionMultiplier *
          (delta / 1000);
      }

      updateCards();

      animationFrameRef.current =
        requestAnimationFrame(
          animate
        );
    };

    animationFrameRef.current =
      requestAnimationFrame(
        animate
      );

    return () => {
      if (
        animationFrameRef.current
      ) {
        cancelAnimationFrame(
          animationFrameRef.current
        );
      }

      lastTimeRef.current = null;
    };
  }, [
    autoplay,
    direction,
    degreesPerSecond,
    itemCount,
    pauseOnHover,
    updateCards,
  ]);

  /*
   * --------------------------------------------------
   * SNAP
   * --------------------------------------------------
   */
  const snapToNearest = useCallback(() => {
    if (
      !snap ||
      itemCount <= 1
    ) {
      return;
    }

    if (snapAnimationRef.current) {
      cancelAnimationFrame(
        snapAnimationRef.current
      );
    }

    const step =
      360 / itemCount;

    const start =
      rotationRef.current;

    const target =
      Math.round(start / step) *
      step;

    let distance =
      target - start;

    /*
     * Always use shortest route.
     */
    while (distance > 180) {
      distance -= 360;
    }

    while (distance < -180) {
      distance += 360;
    }

    const duration = 500;

    const startTime =
      performance.now();

    const animateSnap = (now) => {
      const progress =
        Math.min(
          (now - startTime) /
            duration,
          1
        );

      /*
       * Ease out cubic
       */
      const eased =
        1 -
        Math.pow(
          1 - progress,
          3
        );

      rotationRef.current =
        start +
        distance * eased;

      updateCards();

      if (progress < 1) {
        snapAnimationRef.current =
          requestAnimationFrame(
            animateSnap
          );
      } else {
        velocityRef.current = 0;
      }
    };

    snapAnimationRef.current =
      requestAnimationFrame(
        animateSnap
      );
  }, [
    itemCount,
    snap,
    updateCards,
  ]);

  /*
   * --------------------------------------------------
   * FOCUS CARD
   * --------------------------------------------------
   */
  const focusCard = useCallback(
    (index) => {
      if (
        !focusOnClick ||
        itemCount === 0
      ) {
        return;
      }

      if (snapAnimationRef.current) {
        cancelAnimationFrame(
          snapAnimationRef.current
        );
      }

      const step =
        360 / itemCount;

      const start =
        rotationRef.current;

      /*
       * We want clicked card
       * exactly at front.
       */
      const rawTarget =
        -index * step;

      /*
       * Find closest equivalent angle.
       */
      const rotations =
        Math.round(
          (start - rawTarget) /
            360
        );

      const target =
        rawTarget +
        rotations * 360;

      const distance =
        target - start;

      const duration = 550;

      const startTime =
        performance.now();

      const animateFocus = (now) => {
        const progress =
          Math.min(
            (now - startTime) /
              duration,
            1
          );

        const eased =
          1 -
          Math.pow(
            1 - progress,
            3
          );

        rotationRef.current =
          start +
          distance * eased;

        updateCards();

        if (progress < 1) {
          snapAnimationRef.current =
            requestAnimationFrame(
              animateFocus
            );
        }
      };

      snapAnimationRef.current =
        requestAnimationFrame(
          animateFocus
        );
    },
    [
      focusOnClick,
      itemCount,
      updateCards,
    ]
  );

  /*
   * --------------------------------------------------
   * POINTER DOWN
   * --------------------------------------------------
   */
  const handlePointerDown = (
    event
  ) => {
    if (!draggable) return;

    isDraggingRef.current = true;

    activePointerIdRef.current =
      event.pointerId;

    lastPointerXRef.current =
      event.clientX;

    velocityRef.current = 0;

    if (snapAnimationRef.current) {
      cancelAnimationFrame(
        snapAnimationRef.current
      );
    }

    event.currentTarget.setPointerCapture(
      event.pointerId
    );
  };

  /*
   * --------------------------------------------------
   * POINTER MOVE
   * --------------------------------------------------
   */
  const handlePointerMove = (
    event
  ) => {
    if (
      !draggable ||
      !isDraggingRef.current
    ) {
      return;
    }

    const delta =
      event.clientX -
      lastPointerXRef.current;

    lastPointerXRef.current =
      event.clientX;

    /*
     * Drag sensitivity.
     */
    const rotationDelta =
      delta * 0.22;

    rotationRef.current +=
      rotationDelta;

    velocityRef.current =
      rotationDelta;

    updateCards();
  };

  /*
   * --------------------------------------------------
   * POINTER UP
   * --------------------------------------------------
   */
  const handlePointerUp = (
    event
  ) => {
    if (
      !isDraggingRef.current
    ) {
      return;
    }

    isDraggingRef.current = false;

    try {
      event.currentTarget.releasePointerCapture(
        event.pointerId
      );
    } catch {
      // Ignore pointer capture errors.
    }

    /*
     * Momentum after release.
     */
    rotationRef.current +=
      velocityRef.current *
      momentum *
      2.5;

    velocityRef.current = 0;

    snapToNearest();
  };

  /*
   * --------------------------------------------------
   * HOVER
   * --------------------------------------------------
   */
  const handleMouseEnter = () => {
    isHoveredRef.current = true;
  };

  const handleMouseLeave = () => {
    isHoveredRef.current = false;

    if (isDraggingRef.current) {
      isDraggingRef.current = false;
      snapToNearest();
    }
  };

  /*
   * --------------------------------------------------
   * EMPTY STATE
   * --------------------------------------------------
   */
  if (!items.length) {
    return null;
  }

  return (
    <div
      ref={stageRef}
      className="relative h-full w-full overflow-hidden select-none"
      style={{
        perspective: `${perspective}px`,
        perspectiveOrigin:
          "50% 50%",
        touchAction: draggable
          ? "pan-y"
          : "auto",
        cursor: draggable
          ? "grab"
          : "default",
      }}
      onMouseEnter={
        handleMouseEnter
      }
      onMouseLeave={
        handleMouseLeave
      }
      onPointerDown={
        handlePointerDown
      }
      onPointerMove={
        handlePointerMove
      }
      onPointerUp={
        handlePointerUp
      }
      onPointerCancel={
        handlePointerUp
      }
    >
      {/* CENTER GLOW */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(22,163,74,0.07) 0%, rgba(22,163,74,0.025) 38%, transparent 72%)",
        }}
      />

      {/* ORBIT */}
      <div
        ref={orbitRef}
        className="absolute left-1/2 top-1/2"
        style={{
          width: 0,
          height: 0,
          transformStyle:
            "preserve-3d",
        }}
      >
        {items.map(
          (item, index) => (
            <article
              key={
                item.id ??
                `${item.title}-${index}`
              }
              ref={(element) => {
                cardsRef.current[index] =
                  element;
              }}
              onClick={() =>
                focusCard(index)
              }
              data-carousel-card
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{
                width: `${cardWidth}px`,
                height: `${cardHeight}px`,
                borderRadius: `${cornerRadius}px`,
                transformStyle:
                  "preserve-3d",
                willChange:
                  "transform, opacity, filter",
              }}
            >
              {/* CARD */}
              <div
                className="relative flex h-full w-full flex-col overflow-hidden border border-[#DCE8DF] bg-white"
                style={{
                  borderRadius:
                    `${cornerRadius}px`,
                }}
              >
                {/* TOP */}
                <div className="flex items-center justify-between px-7 pt-7">
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#16A34A]">
                    Client story
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EAF7EF] text-[15px] text-[#123B2A]">
                    ↗
                  </span>
                </div>

                {/* NUMBER */}
                <div className="absolute right-7 top-[72px] text-[10px] font-semibold tracking-[0.15em] text-[#A4B1A9]">
                  {String(
                    index + 1
                  ).padStart(2, "0")}
                </div>

                {/* QUOTE */}
                <div className="flex flex-1 flex-col justify-center px-7">
                  <div className="mb-2 font-serif text-[52px] leading-none text-[#16A34A]/20">
                    “
                  </div>

                  <p className="text-[16px] font-medium leading-[1.58] tracking-[-0.015em] text-[#24342C]">
                    {item.quote}
                  </p>
                </div>

                {/* DIVIDER */}
                <div className="mx-7 h-px bg-[#E4ECE6]" />

                {/* PERSON */}
                <div className="px-7 pb-7 pt-5">
                  <div className="flex items-center gap-3">
                    {/* INITIALS */}
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#123B2A] text-[11px] font-bold tracking-wide text-white">
                      {item.initials}
                    </div>

                    {/* NAME */}
                    <div className="min-w-0">
                      <h3 className="truncate text-[14px] font-semibold text-[#17201B]">
                        {item.title}
                      </h3>

                      <p className="mt-0.5 text-[11px] text-[#718078]">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* COMPANY */}
                  <p className="mt-4 text-[9px] font-semibold uppercase tracking-[0.17em] text-[#98A49D]">
                    {item.company}
                  </p>
                </div>

                {/* GREEN BOTTOM ACCENT */}
                <div className="absolute bottom-0 left-0 h-[3px] w-full bg-[#16A34A]" />

                {/* INNER HIGHLIGHT */}
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    borderRadius:
                      `${cornerRadius}px`,
                    boxShadow:
                      "inset 0 1px 0 rgba(255,255,255,0.9)",
                  }}
                />
              </div>
            </article>
          )
        )}
      </div>

      
    </div>
  );
};

export default CircularCarousel;