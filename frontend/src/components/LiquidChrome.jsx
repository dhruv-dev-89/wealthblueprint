import { Renderer, Program, Mesh, Color, Triangle } from "ogl";
import { useEffect, useRef } from "react";

const VERT = `#version 300 es

in vec2 position;

void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const FRAG = `#version 300 es

precision highp float;

uniform float uTime;
uniform float uAmplitude;
uniform vec3 uBaseColor;
uniform vec2 uResolution;

out vec4 fragColor;

vec3 permute(vec3 x) {
  return mod(((x * 34.0) + 1.0) * x, 289.0);
}

float snoise(vec2 v) {

  const vec4 C = vec4(
    0.211324865405187,
    0.366025403784439,
    -0.577350269189626,
    0.024390243902439
  );

  vec2 i = floor(v + dot(v, C.yy));

  vec2 x0 = v - i + dot(i, C.xx);

  vec2 i1 =
    (x0.x > x0.y)
      ? vec2(1.0, 0.0)
      : vec2(0.0, 1.0);

  vec4 x12 = x0.xyxy + C.xxzz;

  x12.xy -= i1;

  i = mod(i, 289.0);

  vec3 p = permute(
    permute(
      i.y + vec3(0.0, i1.y, 1.0)
    )
    + i.x
    + vec3(0.0, i1.x, 1.0)
  );

  vec3 m = max(
    0.5 -
      vec3(
        dot(x0, x0),
        dot(x12.xy, x12.xy),
        dot(x12.zw, x12.zw)
      ),
    0.0
  );

  m = m * m;
  m = m * m;

  vec3 x =
    2.0 * fract(p * C.www) - 1.0;

  vec3 h =
    abs(x) - 0.5;

  vec3 ox =
    floor(x + 0.5);

  vec3 a0 =
    x - ox;

  m *=
    1.79284291400159 -
    0.85373472095314 *
    (a0 * a0 + h * h);

  vec3 g;

  g.x =
    a0.x * x0.x +
    h.x * x0.y;

  g.yz =
    a0.yz * x12.xz +
    h.yz * x12.yw;

  return 130.0 * dot(m, g);
}

void main() {

  vec2 uv =
    gl_FragCoord.xy /
    uResolution;

  /*
   * Aspect ratio correction
   */
  float aspect =
    uResolution.x /
    uResolution.y;

  vec2 p = uv;

  p.x *= aspect;

  /*
   * Large liquid movement
   */
  float wave1 =
    snoise(
      vec2(
        p.x * 1.35 +
        uTime * 0.22,

        p.y * 0.75 -
        uTime * 0.12
      )
    );

  float wave2 =
    snoise(
      vec2(
        p.x * 2.2 -
        uTime * 0.16,

        p.y * 1.25 +
        uTime * 0.09
      )
    );

  float wave3 =
    snoise(
      vec2(
        p.x * 3.4 +
        uTime * 0.08,

        p.y * 1.8 -
        uTime * 0.06
      )
    );

  /*
   * Combine waves
   */
  float liquid =
    wave1 * 0.55 +
    wave2 * 0.30 +
    wave3 * 0.15;

  /*
   * Vertical chrome flow
   */
  float flow =
    sin(
      p.x * 3.0 +
      liquid * 2.5 +
      uTime * 0.45
    );

  /*
   * Metallic brightness
   */
  float highlight =
    smoothstep(
      0.05,
      0.75,
      flow * 0.5 + 0.5
    );

  /*
   * Chrome reflection
   */
  float reflection =
    pow(
      max(
        0.0,
        1.0 -
        abs(
          liquid * 1.4
        )
      ),
      2.0
    );

  /*
   * Moving light strip
   */
  float lightSweep =
    sin(
      p.x * 5.0 -
      p.y * 2.0 +
      uTime * 0.55
    );

  lightSweep =
    smoothstep(
      0.45,
      1.0,
      lightSweep
    );

  /*
   * Base color
   */
  vec3 color =
    uBaseColor;

  /*
   * Mix chrome highlights
   */
  color =
    mix(
      color * 0.42,
      vec3(1.0),
      highlight * 0.48
    );

  color +=
    vec3(1.0) *
    reflection *
    0.35;

  color +=
    vec3(1.0) *
    lightSweep *
    0.20;

  /*
   * Subtle dark metallic areas
   */
  color *=
    0.82 +
    liquid * 0.20;

  /*
   * Soft vignette
   */
  vec2 center =
    uv - 0.5;

  float vignette =
    1.0 -
    smoothstep(
      0.25,
      0.82,
      length(center)
    );

  color *=
    0.88 +
    vignette * 0.18;

  fragColor =
    vec4(
      color,
      1.0
    );
}
`;

export default function LiquidChrome({
  baseColor = [
    0.48627450980392156,
    0.22745098039215686,
    0.9294117647058824,
  ],

  speed = 0.3,

  amplitude = 0.3,

  interactive = true,
}) {
  const containerRef =
    useRef(null);

  const mouseRef =
    useRef({
      x: 0.5,
      y: 0.5,
    });

  useEffect(() => {
    const container =
      containerRef.current;

    if (!container) return;

    const renderer =
      new Renderer({
        alpha: false,
        antialias: true,
        dpr: Math.min(
          window.devicePixelRatio || 1,
          2
        ),
      });

    const gl =
      renderer.gl;

    gl.clearColor(
      baseColor[0],
      baseColor[1],
      baseColor[2],
      1
    );

    let program;

    const geometry =
      new Triangle(gl);

    program =
      new Program(gl, {
        vertex: VERT,

        fragment: FRAG,

        uniforms: {
          uTime: {
            value: 0,
          },

          uAmplitude: {
            value: amplitude,
          },

          uBaseColor: {
            value: baseColor,
          },

          uResolution: {
            value: [
              container.offsetWidth,
              container.offsetHeight,
            ],
          },
        },
      });

    const mesh =
      new Mesh(gl, {
        geometry,
        program,
      });

    container.appendChild(
      gl.canvas
    );

    /*
     * Canvas styling
     */
    gl.canvas.style.position =
      "absolute";

    gl.canvas.style.inset =
      "0";

    gl.canvas.style.width =
      "100%";

    gl.canvas.style.height =
      "100%";

    gl.canvas.style.display =
      "block";

    /*
     * Resize
     */
    const resize =
      () => {
        const width =
          container.offsetWidth;

        const height =
          container.offsetHeight;

        renderer.setSize(
          width,
          height
        );

        program.uniforms
          .uResolution.value = [
          width,
          height,
        ];
      };

    resize();

    window.addEventListener(
      "resize",
      resize
    );

    /*
     * Mouse interaction
     */
    const handlePointerMove =
      (event) => {
        if (!interactive) return;

        const rect =
          container.getBoundingClientRect();

        mouseRef.current.x =
          (event.clientX -
            rect.left) /
          rect.width;

        mouseRef.current.y =
          1 -
          (event.clientY -
            rect.top) /
          rect.height;
      };

    container.addEventListener(
      "pointermove",
      handlePointerMove
    );

    /*
     * Animation
     */
    let animationId;

    const animate =
      (time) => {
        animationId =
          requestAnimationFrame(
            animate
          );

        const t =
          time *
          0.001 *
          speed;

        const mouse =
          mouseRef.current;

        /*
         * Mouse creates a subtle
         * time distortion
         */
        const interaction =
          interactive
            ? (
                mouse.x -
                0.5
              ) *
              0.25
            : 0;

        program.uniforms
          .uTime.value =
          t + interaction;

        program.uniforms
          .uAmplitude.value =
          amplitude;

        renderer.render({
          scene: mesh,
        });
      };

    animationId =
      requestAnimationFrame(
        animate
      );

    /*
     * Cleanup
     */
    return () => {
      cancelAnimationFrame(
        animationId
      );

      window.removeEventListener(
        "resize",
        resize
      );

      container.removeEventListener(
        "pointermove",
        handlePointerMove
      );

      if (
        gl.canvas.parentNode ===
        container
      ) {
        container.removeChild(
          gl.canvas
        );
      }

      gl
        .getExtension(
          "WEBGL_lose_context"
        )
        ?.loseContext();
    };
  }, [
    baseColor,
    speed,
    amplitude,
    interactive,
  ]);

  return (
    <div
      ref={containerRef}
      className="
        absolute
        inset-0
        h-full
        w-full
        overflow-hidden
      "
    />
  );
}