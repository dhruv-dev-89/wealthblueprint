import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    let width = 0;
    let height = 0;
    let dpr = 1;

    let particles = [];

    const mouse = {
      x: 0,
      y: 0,
      active: false,
    };

    const config = {
      particleCount: 750,
      baseSpeed: 0.35,
      acceleration: 0.018,
      maxDepth: 1000,
      centerPull: 0.0015,
    };

    const createParticle = () => {
      const angle =
        Math.random() * Math.PI * 2;

      const radius =
        Math.random() *
        Math.min(width, height) *
        0.58;

      return {
        angle,
        radius,
        depth:
          Math.random() * config.maxDepth,

        speed:
          0.5 +
          Math.random() * 1.4,

        size:
          Math.random() * 1.15 + 0.25,

        alpha:
          Math.random() * 0.7 + 0.15,

        hue:
          Math.random() < 0.72
            ? "lime"
            : "white",
      };
    };

    const resetParticle = (particle) => {
      particle.angle =
        Math.random() * Math.PI * 2;

      particle.radius =
        Math.random() *
        Math.min(width, height) *
        0.58;

      particle.depth =
        config.maxDepth;

      particle.speed =
        0.5 +
        Math.random() * 1.4;

      particle.size =
        Math.random() * 1.15 + 0.25;

      particle.alpha =
        Math.random() * 0.7 + 0.15;

      particle.hue =
        Math.random() < 0.72
          ? "lime"
          : "white";
    };

    const resize = () => {
      const rect =
        canvas.parentElement.getBoundingClientRect();

      dpr = Math.min(
        window.devicePixelRatio || 1,
        2
      );

      width = rect.width;
      height = rect.height;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(
        dpr,
        0,
        0,
        dpr,
        0,
        0
      );

      particles = Array.from(
        { length: config.particleCount },
        createParticle
      );
    };

    const handleMouseMove = (event) => {
      const rect =
        canvas.getBoundingClientRect();

      mouse.x =
        event.clientX - rect.left;

      mouse.y =
        event.clientY - rect.top;

      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    const draw = () => {
      ctx.clearRect(
        0,
        0,
        width,
        height
      );

      const centerX =
        width / 2;

      const centerY =
        height / 2;

      /*
       * Very subtle center glow
       */

      const glow =
        ctx.createRadialGradient(
          centerX,
          centerY,
          0,
          centerX,
          centerY,
          Math.min(width, height) * 0.55
        );

      glow.addColorStop(
        0,
        "rgba(200,255,61,0.045)"
      );

      glow.addColorStop(
        0.45,
        "rgba(18,59,42,0.02)"
      );

      glow.addColorStop(
        1,
        "rgba(5,18,13,0)"
      );

      ctx.fillStyle = glow;

      ctx.fillRect(
        0,
        0,
        width,
        height
      );

      particles.forEach((particle) => {
        /*
         * Move particles toward viewer.
         */

        particle.depth -=
          config.baseSpeed *
          particle.speed;

        /*
         * Reset when particle gets
         * too close.
         */

        if (particle.depth < 1) {
          resetParticle(particle);
        }

        /*
         * Perspective projection.
         */

        const perspective =
          700 / particle.depth;

        let x =
          centerX +
          Math.cos(particle.angle) *
            particle.radius *
            perspective;

        let y =
          centerY +
          Math.sin(particle.angle) *
            particle.radius *
            perspective;

        /*
         * Mouse interaction.
         */

        if (mouse.active) {
          const dx =
            x - mouse.x;

          const dy =
            y - mouse.y;

          const distance =
            Math.sqrt(
              dx * dx +
                dy * dy
            );

          if (distance < 220) {
            const force =
              (220 - distance) /
              220;

            x +=
              (dx / (distance || 1)) *
              force *
              7;

            y +=
              (dy / (distance || 1)) *
              force *
              7;
          }
        }

        /*
         * Previous position for
         * radial streak.
         */

        const previousDepth =
          particle.depth +
          9 * particle.speed;

        const previousPerspective =
          700 / previousDepth;

        const previousX =
          centerX +
          Math.cos(particle.angle) *
            particle.radius *
            previousPerspective;

        const previousY =
          centerY +
          Math.sin(particle.angle) *
            particle.radius *
            previousPerspective;

        /*
         * Fade based on depth.
         */

        const depthProgress =
          1 -
          particle.depth /
            config.maxDepth;

        const alpha =
          particle.alpha *
          Math.min(
            depthProgress * 1.5,
            1
          );

        /*
         * Longer streaks farther
         * from center.
         */

        const streak =
          1 +
          depthProgress * 3.5;

        const endX =
          x +
          (x - previousX) *
            streak;

        const endY =
          y +
          (y - previousY) *
            streak;

        /*
         * Particle color.
         */

        if (particle.hue === "lime") {
          ctx.strokeStyle = `rgba(
            200,
            255,
            61,
            ${alpha}
          )`;
        } else {
          ctx.strokeStyle = `rgba(
            235,
            244,
            238,
            ${alpha * 0.65}
          )`;
        }

        ctx.lineWidth =
          particle.size *
          (0.5 + depthProgress);

        ctx.beginPath();

        ctx.moveTo(
          previousX,
          previousY
        );

        ctx.lineTo(
          endX,
          endY
        );

        ctx.stroke();

        /*
         * Tiny particle core.
         */

        if (depthProgress > 0.5) {
          ctx.fillStyle =
            particle.hue === "lime"
              ? `rgba(200,255,61,${alpha})`
              : `rgba(255,255,255,${alpha * 0.7})`;

          ctx.beginPath();

          ctx.arc(
            x,
            y,
            particle.size *
              (0.7 + depthProgress),
            0,
            Math.PI * 2
          );

          ctx.fill();
        }
      });

      animationRef.current =
        requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener(
      "resize",
      resize
    );

    canvas.addEventListener(
      "mousemove",
      handleMouseMove
    );

    canvas.addEventListener(
      "mouseleave",
      handleMouseLeave
    );

    return () => {
      cancelAnimationFrame(
        animationRef.current
      );

      window.removeEventListener(
        "resize",
        resize
      );

      canvas.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      canvas.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );
    };
  }, []);

  return (
    <section
      className="
        relative
        min-h-[calc(100vh-72px)]
        overflow-hidden
        bg-[#07140E]
        text-white
      "
    >
      {/* =====================================================
          GLITTER WARP CANVAS
      ===================================================== */}

      <canvas
        ref={canvasRef}
        className="
          absolute
          inset-0
          h-full
          w-full
        "
      />

      {/* =====================================================
          DARK VIGNETTE
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,transparent_15%,rgba(7,20,14,0.18)_52%,rgba(7,20,14,0.72)_100%)]
        "
      />

      {/* =====================================================
          TOP NAV SEPARATOR
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-0
          right-0
          top-0
          z-10
          h-px
          bg-white/10
        "
      />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-20
          mx-auto
          flex
          min-h-[calc(100vh-72px)]
          max-w-[1500px]
          flex-col
          px-6
          sm:px-10
          lg:px-14
        "
      >

        {/* =================================================
            TOP META
        ================================================= */}

        <div
          className="
            flex
            items-center
            justify-between
            border-b
            border-white/10
            py-5
          "
        >

          <div
            className="
              flex
              items-center
              gap-3
            "
          >
            <span
              className="
                h-[7px]
                w-[7px]
                rounded-full
                bg-[#DDE9DF]
                shadow-[0_0_14px_rgba(200,255,61,0.7)]
              "
            />

            <span
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.32em]
                text-white/60
              "
            >
              WEALTHBLUEPRINT
            </span>
          </div>

          <div
            className="
              hidden
              items-center
              gap-5
              text-[8px]
              font-medium
              uppercase
              tracking-[0.25em]
              text-white/35
              sm:flex
            "
          >
            <span>PLAN</span>
            <span>INVEST</span>
            <span>GROW</span>
          </div>

          <span
            className="
              text-[8px]
              font-medium
              uppercase
              tracking-[0.25em]
              text-white/30
            "
          >
            01 / 06
          </span>

        </div>

        {/* =================================================
            MAIN HERO
        ================================================= */}

        <div
          className="
            flex
            flex-1
            flex-col
            items-center
            justify-center
            py-12
            text-center
            lg:py-16
          "
        >

          {/* Eyebrow */}

          <div
            className="
              flex
              items-center
              gap-3
            "
          >

            <span
              className="
                h-px
                w-10
                bg-[#DDE9DF]/50
              "
            />

            <span
              className="
                text-[9px]
                font-medium
                uppercase
                tracking-[0.34em]
                text-[#DDE9DF]
              "
            >
              PLAN · INVEST · GROW
            </span>

            <span
              className="
                h-px
                w-10
                bg-[#DDE9DF]/50
              "
            />

          </div>

          {/* Heading */}

          <h1
            className="
              mt-8
              max-w-[1200px]
              text-[clamp(4rem,10vw,10.5rem)]
              font-medium
              leading-[0.78]
              tracking-[-0.085em]
            "
          >
            <span
              className="
                block
                text-[#F4F1E9]
              "
            >
              Build wealth.
            </span>

            <span
              className="
                mt-2
                block
                text-[#DDE9DF]
              "
            >
              With intention.
            </span>
          </h1>

          {/* Description */}

          <p
            className="
              mt-9
              max-w-[570px]
              text-[14px]
              leading-7
              text-white/50
              sm:text-[15px]
            "
          >
            A clearer way to plan, invest and grow your
            wealth — with every financial decision connected
            to the future you want.
          </p>

          {/* CTA */}

          <div
            className="
              mt-9
              flex
              flex-col
              items-center
              gap-5
              sm:flex-row
            "
          >

            <Link
              to="/contact"
              className="
                group
                flex
                h-14
                items-center
                gap-5
                rounded-full
                bg-[#DDE9DF]
                px-7
                text-[11px]
                font-semibold
                text-[#07140E]
                shadow-[0_0_35px_rgba(200,255,61,0.08)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_0_45px_rgba(200,255,61,0.18)]
              "
            >

              <span>
                Start Your Blueprint
              </span>

              <span
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  bg-[#07140E]
                  text-white
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                ↗
              </span>

            </Link>

            <a
              href="#services"
              className="
                group
                flex
                items-center
                gap-3
                text-[11px]
                font-medium
                text-white/70
              "
            >
              Explore solutions

              <span
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </a>

          </div>

        </div>

        {/* =================================================
            BOTTOM META
        ================================================= */}

        <div
          className="
            flex
            items-center
            justify-between
            border-t
            border-white/10
            py-5
          "
        >

          <div
            className="
              flex
              items-center
              gap-4
            "
          >
            <span
              className="
                text-[8px]
                font-medium
                uppercase
                tracking-[0.28em]
                text-white/30
              "
            >
              MONEY
            </span>

            <span
              className="
                h-px
                w-6
                bg-white/15
              "
            />

            <span
              className="
                text-[8px]
                font-medium
                uppercase
                tracking-[0.28em]
                text-white/30
              "
            >
              PURPOSE
            </span>

            <span
              className="
                h-px
                w-6
                bg-white/15
              "
            />

            <span
              className="
                text-[8px]
                font-medium
                uppercase
                tracking-[0.28em]
                text-white/30
              "
            >
              FUTURE
            </span>
          </div>

          <span
            className="
              hidden
              text-[8px]
              font-medium
              uppercase
              tracking-[0.25em]
              text-white/25
              sm:block
            "
          >
            MOVE WITH PURPOSE
          </span>

        </div>

      </div>
    </section>
  );
}