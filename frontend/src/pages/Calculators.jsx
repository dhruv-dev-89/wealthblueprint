import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

/* =========================================================
   DATA
========================================================= */

const calculators = [
  {
    id: "sip",
    number: "01",
    label: "SIP",
    title: "Build wealth monthly.",
    description:
      "See what consistent monthly investing could become over time.",
  },
  {
    id: "compound",
    number: "02",
    label: "COMPOUND",
    title: "Let time do the work.",
    description:
      "Understand how an investment can grow through compounding.",
  },
  {
    id: "lumpsum",
    number: "03",
    label: "LUMP SUM",
    title: "Put a sum to work.",
    description:
      "Explore the possible future value of a one-time investment.",
  },
  {
    id: "goal",
    number: "04",
    label: "GOAL",
    title: "Work backwards from a goal.",
    description:
      "Find an indicative monthly investment for a target amount.",
  },
  {
    id: "retirement",
    number: "05",
    label: "RETIREMENT",
    title: "Build your future runway.",
    description:
      "Estimate a possible retirement corpus from today's position.",
  },
  {
    id: "inflation",
    number: "06",
    label: "INFLATION",
    title: "See tomorrow's price.",
    description:
      "Understand how inflation can change the future cost of money.",
  },
  {
    id: "emi",
    number: "07",
    label: "EMI",
    title: "Know the monthly commitment.",
    description:
      "Understand the indicative monthly payment on a loan.",
  },
  {
    id: "debt",
    number: "08",
    label: "DEBT",
    title: "Find your way out.",
    description:
      "Estimate how long it could take to clear an outstanding balance.",
  },
];

/* =========================================================
   HELPERS
========================================================= */

const MAX_VALUE = Number.MAX_SAFE_INTEGER;

const safeNumber = (value, fallback = 0) => {
  const number = Number(value);

  if (!Number.isFinite(number)) {
    return fallback;
  }

  return Math.max(0, number);
};

const clampValue = (value) => {
  if (!Number.isFinite(value)) {
    return MAX_VALUE;
  }

  return Math.min(
    MAX_VALUE,
    Math.max(0, value)
  );
};

const formatNumber = (value) => {
  return new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 0,
  }).format(safeNumber(value));
};

const formatMoney = (value) => {
  return `₹${formatNumber(value)}`;
};

const resultFontSize = (value) => {
  const length = String(value).length;

  if (length >= 28)
    return "clamp(0.65rem, 1.1vw, 1.15rem)";

  if (length >= 24)
    return "clamp(0.75rem, 1.3vw, 1.35rem)";

  if (length >= 20)
    return "clamp(0.9rem, 1.6vw, 1.7rem)";

  if (length >= 17)
    return "clamp(1rem, 1.9vw, 2rem)";

  if (length >= 14)
    return "clamp(1.15rem, 2.3vw, 2.4rem)";

  if (length >= 11)
    return "clamp(1.5rem, 3vw, 3rem)";

  if (length >= 8)
    return "clamp(1.9rem, 3.8vw, 3.8rem)";

  return "clamp(2.5rem, 5vw, 5.4rem)";
};

/* =========================================================
   INFINITE / DIRECT CURSOR SLIDER

   IMPORTANT:

   - Cursor can click ANYWHERE on the line.
   - Knob immediately moves to cursor.
   - Dragging follows cursor.
   - Money uses logarithmic scale.
   - There is no ₹1L / ₹1Cr artificial limit.
========================================================= */

function InfiniteSlider({
  label,
  value,
  onChange,
  prefix = "",
  suffix = "",
  step = 1000,
  type = "money",
}) {
  const trackRef = useRef(null);

  const pointerRef = useRef({
    dragging: false,
  });

  /*
    Different scales for different variables.

    MONEY:
    0 → very large values

    RATE:
    0 → 100% visually, but dragging beyond
    100% continues growing.

    YEARS:
    0 → 100 years visually, beyond that
    continues growing.
  */

  const getPosition = (currentValue) => {
    const n = safeNumber(currentValue);

    if (n <= 0) return 0;

    if (type === "rate") {
      return Math.min(
        100,
        (Math.log10(n + 1) / 3) * 100
      );
    }

    if (type === "years") {
      return Math.min(
        100,
        (Math.log10(n + 1) / 3) * 100
      );
    }

    /*
      MONEY

      1      ≈ 0%
      10     ≈ 8%
      100    ≈ 17%
      1,000  ≈ 25%
      10,000 ≈ 33%
      1L     ≈ 50%
      1Cr    ≈ 67%
      100Cr  ≈ 83%
      huge   → keeps moving toward 100%
    */

    return Math.min(
      100,
      (Math.log10(n + 1) / 15) * 100
    );
  };

  const getValue = (position) => {
    const p = Math.max(
      0,
      Math.min(100, position)
    );

    if (p <= 0) return 0;

    let raw;

    if (type === "rate") {
      raw =
        Math.pow(
          10,
          (p / 100) * 3
        ) - 1;
    } else if (type === "years") {
      raw =
        Math.pow(
          10,
          (p / 100) * 3
        ) - 1;
    } else {
      raw =
        Math.pow(
          10,
          (p / 100) * 15
        ) - 1;
    }

    if (!Number.isFinite(raw)) {
      return MAX_VALUE;
    }

    if (type === "rate") {
      return Number(
        raw.toFixed(1)
      );
    }

    if (type === "years") {
      return Math.round(raw);
    }

    return Math.round(
      raw / step
    ) * step;
  };

  const updateFromPointer = (clientX) => {
    if (!trackRef.current) return;

    const rect =
      trackRef.current.getBoundingClientRect();

    const position =
      ((clientX - rect.left) /
        rect.width) *
      100;

    const nextValue =
      getValue(position);

    onChange(
      Math.max(
        0,
        Math.min(
          MAX_VALUE,
          nextValue
        )
      )
    );
  };

  const handlePointerDown = (event) => {
    event.preventDefault();

    pointerRef.current.dragging =
      true;

    event.currentTarget.setPointerCapture(
      event.pointerId
    );

    updateFromPointer(
      event.clientX
    );
  };

  const handlePointerMove = (event) => {
    if (
      !pointerRef.current.dragging
    ) {
      return;
    }

    updateFromPointer(
      event.clientX
    );
  };

  const handlePointerUp = () => {
    pointerRef.current.dragging =
      false;
  };

  const position = getPosition(value);

  const displayedValue =
    type === "rate"
      ? Number(value).toFixed(1)
      : formatNumber(value);

  return (
    <div className="select-none">
      {/* TOP */}

      <div className="mb-7 flex items-end justify-between gap-6">
        <div className="min-w-0">
          <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#11110F]/40">
            {label}
          </p>

          <p className="mt-2 text-[8px] uppercase tracking-[0.16em] text-[#11110F]/20">
            Click or drag anywhere on the line
          </p>
        </div>

        <p
          className="shrink-0 whitespace-nowrap font-medium leading-none tracking-[-0.06em]"
          style={{
            fontSize:
              String(displayedValue).length >
              12
                ? "clamp(1.25rem, 2.5vw, 2.6rem)"
                : "clamp(1.8rem, 3vw, 3rem)",
          }}
        >
          {prefix}
          {displayedValue}
          {suffix}
        </p>
      </div>

      {/* TRACK */}

      <div
        ref={trackRef}
        className="relative h-12 w-full cursor-ew-resize touch-none"
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
        onPointerLeave={
          handlePointerUp
        }
      >
        {/* BASE */}

        <div className="absolute left-0 right-0 top-1/2 h-[3px] -translate-y-1/2 rounded-full bg-[#11110F]/10" />

        {/* ACTIVE */}

        <div
          className="absolute left-0 top-1/2 h-[3px] -translate-y-1/2 rounded-full bg-[#123B2A]"
          style={{
            width: `${position}%`,
          }}
        />

        {/* KNOB */}

        <div
          className="absolute top-1/2 h-[20px] w-[20px] -translate-y-1/2 rounded-full border-[4px] border-[#F7FBF8] bg-[#123B2A] shadow-[0_2px_10px_rgba(18,59,42,0.22)]"
          style={{
            left: `calc(${position}% - 10px)`,
          }}
        />

        {/* LABELS */}

        <div className="absolute left-0 right-0 top-[32px] flex justify-between">
          <span className="text-[8px] uppercase tracking-[0.15em] text-[#11110F]/20">
            0
          </span>

          <span className="text-[8px] uppercase tracking-[0.15em] text-[#11110F]/20">
            DRAG →
          </span>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   MONEY FLOW
========================================================= */

function MoneyFlow({
  invested,
  growth,
  finalValue,
  label,
}) {
  const total =
    Math.abs(invested) +
      Math.abs(growth) || 1;

  const investedWidth =
    Math.max(
      8,
      Math.min(
        92,
        (Math.abs(invested) /
          total) *
          100
      )
    );

  const growthWidth =
    Math.max(
      5,
      Math.min(
        92,
        (Math.abs(growth) /
          total) *
          100
      )
    );

  return (
    <div className="relative min-w-0 self-start overflow-hidden rounded-[28px] bg-[#11110F] p-7 text-white sm:p-9">
      <div className="flex min-w-0 items-start justify-between gap-6">
        <div className="min-w-0">
          <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/35">
            {label}
          </p>

          <p className="mt-4 max-w-[430px] text-[13px] leading-6 text-white/40">
            Your final number is made from what you put in and the change
            that time may create.
          </p>
        </div>

        <span className="shrink-0 text-[30px] text-[#C8FF3D]">
          ↗
        </span>
      </div>

      {/* MINI GRAPH */}

      <div className="mt-12 flex h-[120px] items-end gap-[3px] overflow-hidden">
        {Array.from({
          length: 34,
        }).map((_, index) => {
          const progress =
            index / 33;

          const height =
            15 +
            Math.pow(
              progress,
              1.7
            ) *
              85;

          return (
            <div
              key={index}
              className="min-w-0 flex-1 rounded-t-[2px] bg-[#C8FF3D]"
              style={{
                height: `${height}%`,
                opacity:
                  0.12 +
                  progress * 0.88,
              }}
            />
          );
        })}
      </div>

      {/* CONTRIBUTION BAR */}

      <div className="mt-5 flex h-3 overflow-hidden rounded-full bg-white/10">
        <div
          className="bg-white"
          style={{
            width: `${investedWidth}%`,
          }}
        />

        <div
          className="bg-[#C8FF3D]"
          style={{
            width: `${growthWidth}%`,
          }}
        />
      </div>

      {/* VALUES */}

      <div className="mt-5 grid grid-cols-2 gap-6">
        <div className="min-w-0">
          <p className="text-[8px] uppercase tracking-[0.2em] text-white/30">
            CONTRIBUTION
          </p>

          <p className="mt-2 truncate text-[17px] font-medium">
            {formatMoney(invested)}
          </p>
        </div>

        <div className="min-w-0 text-right">
          <p className="text-[8px] uppercase tracking-[0.2em] text-white/30">
            CHANGE / GROWTH
          </p>

          <p className="mt-2 truncate text-[17px] font-medium text-[#C8FF3D]">
            {formatMoney(growth)}
          </p>
        </div>
      </div>

      {/* OUTCOME */}

      <div className="mt-8 border-t border-white/10 pt-5">
        <div className="flex min-w-0 items-end justify-between gap-6">
          <span className="shrink-0 text-[8px] uppercase tracking-[0.2em] text-white/30">
            OUTCOME
          </span>

          <span
            className="min-w-0 truncate text-right font-medium leading-none tracking-[-0.06em]"
            style={{
              fontSize:
                resultFontSize(
                  formatMoney(
                    finalValue
                  )
                ),
            }}
          >
            {formatMoney(
              finalValue
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   SCENARIO GRID
========================================================= */

function ScenarioGrid({
  amount,
}) {
  const base =
    safeNumber(amount);

  const rates = [
    8, 10, 12, 14,
  ];

  const years = [
    5, 10, 15, 20,
  ];

  const calculate = (
    rate,
    year
  ) => {
    if (base <= 0) return 0;

    const monthlyRate =
      rate / 100 / 12;

    const months =
      year * 12;

    if (monthlyRate === 0) {
      return base * months;
    }

    return clampValue(
      base *
        (((Math.pow(
          1 + monthlyRate,
          months
        ) -
          1) /
          monthlyRate) *
          (1 + monthlyRate))
    );
  };

  return (
    <div className="min-w-0 overflow-x-auto rounded-[28px] border border-[#11110F]/10 bg-white">
      <div className="min-w-[580px]">
        {/* HEADER */}

        <div className="grid grid-cols-[85px_repeat(4,minmax(0,1fr))] border-b border-[#11110F]/10">
          <div />

          {rates.map((rate) => (
            <div
              key={rate}
              className={`border-l border-[#11110F]/10 p-4 text-center ${
                rate === 12
                  ? "bg-[#EAF7EF]"
                  : ""
              }`}
            >
              <span className="text-[9px] font-semibold tracking-[0.14em] text-[#11110F]/45">
                {rate}%
              </span>
            </div>
          ))}
        </div>

        {/* ROWS */}

        {years.map((year) => (
          <div
            key={year}
            className="grid grid-cols-[85px_repeat(4,minmax(0,1fr))] border-b border-[#11110F]/10 last:border-0"
          >
            <div className="flex items-center justify-center p-4">
              <span className="text-[9px] uppercase tracking-[0.12em] text-[#11110F]/30">
                {year} yrs
              </span>
            </div>

            {rates.map((rate) => (
              <div
                key={`${year}-${rate}`}
                className={`min-w-0 border-l border-[#11110F]/10 p-4 text-center ${
                  rate === 12
                    ? "bg-[#EAF7EF]/60"
                    : ""
                }`}
              >
                <span className="whitespace-nowrap text-[10px] font-medium text-[#123B2A]">
                  {formatMoney(
                    calculate(
                      rate,
                      year
                    )
                  )}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   MAIN PAGE
========================================================= */

export default function Calculators() {
  const pageRef = useRef(null);

  const [activeId, setActiveId] =
    useState("sip");

  /* =======================================================
     STATES
  ======================================================= */

  const [sip, setSip] = useState({
    monthly: 18000,
    rate: 12,
    years: 10,
  });

  const [compound, setCompound] =
    useState({
      principal: 100000,
      rate: 12,
      years: 10,
    });

  const [lumpsum, setLumpsum] =
    useState({
      amount: 200000,
      rate: 12,
      years: 10,
    });

  const [goal, setGoal] = useState({
    target: 2500000,
    rate: 10,
    years: 10,
  });

  const [retirement, setRetirement] =
    useState({
      age: 30,
      retirementAge: 60,
      monthly: 15000,
      savings: 500000,
      rate: 8,
    });

  const [inflation, setInflation] =
    useState({
      amount: 100000,
      rate: 6,
      years: 10,
    });

  const [emi, setEmi] = useState({
    amount: 1000000,
    rate: 9,
    years: 5,
  });

  const [debt, setDebt] = useState({
    amount: 500000,
    rate: 10,
    monthly: 15000,
  });

  /* =======================================================
     ANIMATION
  ======================================================= */

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(
        ".calculator-hero-item",
        {
          y: 40,
          opacity: 0,
          duration: 0.9,
          stagger: 0.08,
          ease: "power3.out",
        }
      );

      gsap.utils
        .toArray(
          ".calculator-reveal"
        )
        .forEach((element) => {
          gsap.from(element, {
            y: 35,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              once: true,
            },
          });
        });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  /* =======================================================
     CALCULATIONS
  ======================================================= */

  const result = useMemo(() => {
    /* SIP */

    if (activeId === "sip") {
      const monthlyRate =
        sip.rate / 100 / 12;

      const months = Math.max(
        1,
        Math.round(
          sip.years * 12
        )
      );

      let futureValue;

      if (monthlyRate === 0) {
        futureValue =
          sip.monthly * months;
      } else {
        futureValue =
          sip.monthly *
          (((Math.pow(
            1 + monthlyRate,
            months
          ) -
            1) /
            monthlyRate) *
            (1 + monthlyRate));
      }

      const invested =
        sip.monthly * months;

      return {
        value:
          clampValue(futureValue),
        invested:
          clampValue(invested),
        growth:
          clampValue(
            futureValue -
              invested
          ),
        years: sip.years,
      };
    }

    /* COMPOUND */

    if (activeId === "compound") {
      const value =
        compound.principal *
        Math.pow(
          1 +
            compound.rate /
              100,
          compound.years
        );

      return {
        value:
          clampValue(value),
        invested:
          compound.principal,
        growth:
          clampValue(
            value -
              compound.principal
          ),
        years: compound.years,
      };
    }

    /* LUMP SUM */

    if (activeId === "lumpsum") {
      const value =
        lumpsum.amount *
        Math.pow(
          1 +
            lumpsum.rate / 100,
          lumpsum.years
        );

      return {
        value:
          clampValue(value),
        invested:
          lumpsum.amount,
        growth:
          clampValue(
            value -
              lumpsum.amount
          ),
        years: lumpsum.years,
      };
    }

    /* GOAL */

    if (activeId === "goal") {
      const monthlyRate =
        goal.rate / 100 / 12;

      const months = Math.max(
        1,
        Math.round(
          goal.years * 12
        )
      );

      let monthly;

      if (monthlyRate === 0) {
        monthly =
          goal.target / months;
      } else {
        monthly =
          (goal.target *
            monthlyRate) /
          ((Math.pow(
            1 + monthlyRate,
            months
          ) -
            1) *
            (1 + monthlyRate));
      }

      return {
        value:
          goal.target,
        monthly:
          clampValue(monthly),
        invested:
          clampValue(
            monthly * months
          ),
        growth:
          clampValue(
            goal.target -
              monthly * months
          ),
        years: goal.years,
      };
    }

    /* RETIREMENT */

    if (activeId === "retirement") {
      const years = Math.max(
        0,
        retirement.retirementAge -
          retirement.age
      );

      const months =
        Math.max(1, years * 12);

      const monthlyRate =
        retirement.rate /
        100 /
        12;

      let existingGrowth;
      let monthlyGrowth;

      if (monthlyRate === 0) {
        existingGrowth =
          retirement.savings;

        monthlyGrowth =
          retirement.monthly *
          months;
      } else {
        existingGrowth =
          retirement.savings *
          Math.pow(
            1 + monthlyRate,
            months
          );

        monthlyGrowth =
          retirement.monthly *
          (((Math.pow(
            1 + monthlyRate,
            months
          ) -
            1) /
            monthlyRate) *
            (1 + monthlyRate));
      }

      const value =
        existingGrowth +
        monthlyGrowth;

      const invested =
        retirement.savings +
        retirement.monthly *
          months;

      return {
        value:
          clampValue(value),
        invested:
          clampValue(invested),
        growth:
          clampValue(
            value - invested
          ),
        years,
      };
    }

    /* INFLATION */

    if (activeId === "inflation") {
      const value =
        inflation.amount *
        Math.pow(
          1 +
            inflation.rate / 100,
          inflation.years
        );

      return {
        value:
          clampValue(value),
        invested:
          inflation.amount,
        growth:
          clampValue(
            value -
              inflation.amount
          ),
        years:
          inflation.years,
      };
    }

    /* EMI */

    if (activeId === "emi") {
      const monthlyRate =
        emi.rate / 100 / 12;

      const months = Math.max(
        1,
        Math.round(
          emi.years * 12
        )
      );

      let monthly;

      if (monthlyRate === 0) {
        monthly =
          emi.amount / months;
      } else {
        monthly =
          (emi.amount *
            monthlyRate *
            Math.pow(
              1 + monthlyRate,
              months
            )) /
          (Math.pow(
            1 + monthlyRate,
            months
          ) -
            1);
      }

      const total =
        monthly * months;

      return {
        value:
          clampValue(monthly),
        invested:
          emi.amount,
        growth:
          clampValue(
            total - emi.amount
          ),
        total:
          clampValue(total),
        years: emi.years,
      };
    }

    /* DEBT */

    if (activeId === "debt") {
      const monthlyRate =
        debt.rate / 100 / 12;

      let balance =
        debt.amount;

      let months = 0;

      let totalInterest = 0;

      while (
        balance > 0 &&
        months < 1200
      ) {
        const interest =
          balance *
          monthlyRate;

        if (
          monthlyRate > 0 &&
          debt.monthly <=
            interest
        ) {
          return {
            value: 0,
            invested:
              debt.amount,
            growth: 0,
            years: 0,
            impossible: true,
          };
        }

        balance += interest;
        balance -= debt.monthly;

        totalInterest +=
          interest;

        months++;
      }

      return {
        value: months,
        invested:
          debt.amount,
        growth:
          clampValue(
            totalInterest
          ),
        years:
          months / 12,
        impossible:
          months >= 1200,
      };
    }

    return {
      value: 0,
      invested: 0,
      growth: 0,
      years: 0,
    };
  }, [
    activeId,
    sip,
    compound,
    lumpsum,
    goal,
    retirement,
    inflation,
    emi,
    debt,
  ]);

  /* =======================================================
     ACTIVE TOOL
  ======================================================= */

  const activeTool =
    calculators.find(
      (item) =>
        item.id === activeId
    ) || calculators[0];

  /* =======================================================
     MAIN RESULT
  ======================================================= */

  const getMainResult = () => {
    if (activeId === "goal") {
      return formatMoney(
        result.monthly
      );
    }

    if (activeId === "emi") {
      return formatMoney(
        result.value
      );
    }

    if (activeId === "debt") {
      if (result.impossible) {
        return "CAN'T CLEAR";
      }

      const months =
        Math.ceil(result.value);

      const years =
        Math.floor(
          months / 12
        );

      const remaining =
        months % 12;

      if (years === 0) {
        return `${remaining}m`;
      }

      if (remaining === 0) {
        return `${years}y`;
      }

      return `${years}y ${remaining}m`;
    }

    return formatMoney(
      result.value
    );
  };

  const mainResult =
    getMainResult();

  /* =======================================================
     INPUTS
  ======================================================= */

  const renderInputs = () => {
    if (activeId === "sip") {
      return (
        <div className="space-y-12">
          <InfiniteSlider
            label="Monthly investment"
            prefix="₹"
            value={sip.monthly}
            step={1000}
            type="money"
            onChange={(value) =>
              setSip((old) => ({
                ...old,
                monthly: value,
              }))
            }
          />

          <InfiniteSlider
            label="Expected annual return"
            suffix="%"
            value={sip.rate}
            step={0.5}
            type="rate"
            onChange={(value) =>
              setSip((old) => ({
                ...old,
                rate: value,
              }))
            }
          />

          <InfiniteSlider
            label="Investment horizon"
            suffix=" yrs"
            value={sip.years}
            step={1}
            type="years"
            onChange={(value) =>
              setSip((old) => ({
                ...old,
                years: value,
              }))
            }
          />
        </div>
      );
    }

    if (activeId === "compound") {
      return (
        <div className="space-y-12">
          <InfiniteSlider
            label="Starting amount"
            prefix="₹"
            value={
              compound.principal
            }
            step={1000}
            type="money"
            onChange={(value) =>
              setCompound((old) => ({
                ...old,
                principal: value,
              }))
            }
          />

          <InfiniteSlider
            label="Expected annual return"
            suffix="%"
            value={
              compound.rate
            }
            step={0.5}
            type="rate"
            onChange={(value) =>
              setCompound((old) => ({
                ...old,
                rate: value,
              }))
            }
          />

          <InfiniteSlider
            label="Time"
            suffix=" yrs"
            value={
              compound.years
            }
            step={1}
            type="years"
            onChange={(value) =>
              setCompound((old) => ({
                ...old,
                years: value,
              }))
            }
          />
        </div>
      );
    }

    if (activeId === "lumpsum") {
      return (
        <div className="space-y-12">
          <InfiniteSlider
            label="Investment amount"
            prefix="₹"
            value={
              lumpsum.amount
            }
            step={1000}
            type="money"
            onChange={(value) =>
              setLumpsum((old) => ({
                ...old,
                amount: value,
              }))
            }
          />

          <InfiniteSlider
            label="Expected annual return"
            suffix="%"
            value={
              lumpsum.rate
            }
            step={0.5}
            type="rate"
            onChange={(value) =>
              setLumpsum((old) => ({
                ...old,
                rate: value,
              }))
            }
          />

          <InfiniteSlider
            label="Time"
            suffix=" yrs"
            value={
              lumpsum.years
            }
            step={1}
            type="years"
            onChange={(value) =>
              setLumpsum((old) => ({
                ...old,
                years: value,
              }))
            }
          />
        </div>
      );
    }

    if (activeId === "goal") {
      return (
        <div className="space-y-12">
          <InfiniteSlider
            label="Your target"
            prefix="₹"
            value={goal.target}
            step={10000}
            type="money"
            onChange={(value) =>
              setGoal((old) => ({
                ...old,
                target: value,
              }))
            }
          />

          <InfiniteSlider
            label="Time to goal"
            suffix=" yrs"
            value={goal.years}
            step={1}
            type="years"
            onChange={(value) =>
              setGoal((old) => ({
                ...old,
                years: value,
              }))
            }
          />

          <InfiniteSlider
            label="Expected annual return"
            suffix="%"
            value={goal.rate}
            step={0.5}
            type="rate"
            onChange={(value) =>
              setGoal((old) => ({
                ...old,
                rate: value,
              }))
            }
          />
        </div>
      );
    }

    if (activeId === "retirement") {
      return (
        <div className="space-y-12">
          <InfiniteSlider
            label="Current age"
            value={
              retirement.age
            }
            step={1}
            type="years"
            onChange={(value) =>
              setRetirement(
                (old) => ({
                  ...old,
                  age: value,
                })
              )
            }
          />

          <InfiniteSlider
            label="Retirement age"
            value={
              retirement.retirementAge
            }
            step={1}
            type="years"
            onChange={(value) =>
              setRetirement(
                (old) => ({
                  ...old,
                  retirementAge:
                    value,
                })
              )
            }
          />

          <InfiniteSlider
            label="Monthly investment"
            prefix="₹"
            value={
              retirement.monthly
            }
            step={1000}
            type="money"
            onChange={(value) =>
              setRetirement(
                (old) => ({
                  ...old,
                  monthly: value,
                })
              )
            }
          />

          <InfiniteSlider
            label="Expected return"
            suffix="%"
            value={
              retirement.rate
            }
            step={0.5}
            type="rate"
            onChange={(value) =>
              setRetirement(
                (old) => ({
                  ...old,
                  rate: value,
                })
              )
            }
          />
        </div>
      );
    }

    if (activeId === "inflation") {
      return (
        <div className="space-y-12">
          <InfiniteSlider
            label="Money today"
            prefix="₹"
            value={
              inflation.amount
            }
            step={1000}
            type="money"
            onChange={(value) =>
              setInflation(
                (old) => ({
                  ...old,
                  amount: value,
                })
              )
            }
          />

          <InfiniteSlider
            label="Inflation"
            suffix="%"
            value={
              inflation.rate
            }
            step={0.5}
            type="rate"
            onChange={(value) =>
              setInflation(
                (old) => ({
                  ...old,
                  rate: value,
                })
              )
            }
          />

          <InfiniteSlider
            label="Time"
            suffix=" yrs"
            value={
              inflation.years
            }
            step={1}
            type="years"
            onChange={(value) =>
              setInflation(
                (old) => ({
                  ...old,
                  years: value,
                })
              )
            }
          />
        </div>
      );
    }

    if (activeId === "emi") {
      return (
        <div className="space-y-12">
          <InfiniteSlider
            label="Loan amount"
            prefix="₹"
            value={emi.amount}
            step={10000}
            type="money"
            onChange={(value) =>
              setEmi((old) => ({
                ...old,
                amount: value,
              }))
            }
          />

          <InfiniteSlider
            label="Interest rate"
            suffix="%"
            value={emi.rate}
            step={0.5}
            type="rate"
            onChange={(value) =>
              setEmi((old) => ({
                ...old,
                rate: value,
              }))
            }
          />

          <InfiniteSlider
            label="Loan tenure"
            suffix=" yrs"
            value={emi.years}
            step={1}
            type="years"
            onChange={(value) =>
              setEmi((old) => ({
                ...old,
                years: value,
              }))
            }
          />
        </div>
      );
    }

    if (activeId === "debt") {
      return (
        <div className="space-y-12">
          <InfiniteSlider
            label="Outstanding debt"
            prefix="₹"
            value={
              debt.amount
            }
            step={10000}
            type="money"
            onChange={(value) =>
              setDebt((old) => ({
                ...old,
                amount: value,
              }))
            }
          />

          <InfiniteSlider
            label="Interest rate"
            suffix="%"
            value={
              debt.rate
            }
            step={0.5}
            type="rate"
            onChange={(value) =>
              setDebt((old) => ({
                ...old,
                rate: value,
              }))
            }
          />

          <InfiniteSlider
            label="Monthly payment"
            prefix="₹"
            value={
              debt.monthly
            }
            step={1000}
            type="money"
            onChange={(value) =>
              setDebt((old) => ({
                ...old,
                monthly: value,
              }))
            }
          />
        </div>
      );
    }

    return null;
  };

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <div
      ref={pageRef}
      className="min-h-screen overflow-hidden bg-[#F7FBF8] text-[#11110F]"
    >
      <Navbar />

      {/* ===================================================
          HERO
      =================================================== */}

      <section className="px-6 pb-24 pt-12 sm:px-10 lg:px-16 lg:pb-36 lg:pt-35">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="calculator-hero-item mb-8 text-[10px] font-semibold uppercase tracking-[0.34em] text-[#3157C8]">
                FINANCIAL CALCULATORS
              </p>

              <h1 className="calculator-hero-item max-w-[1050px] text-[clamp(4.5rem,9vw,10rem)] font-medium leading-[0.8] tracking-[-0.09em]">
                Make the
                <br />
                numbers
                <br />
                <span className="text-[#3157C8]">
                  visible.
                </span>
              </h1>
            </div>

            <div className="calculator-hero-item border-t border-[#11110F]/12 pt-7">
              <p className="max-w-[430px] text-[15px] leading-7 text-[#11110F]/55">
                Don't just calculate a number. Explore what happens when you
                change the amount, the time, or the goal.
              </p>

              <div className="mt-8 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#C8FF3D]" />

                <span className="text-[9px] font-semibold uppercase tracking-[0.24em] text-[#11110F]/35">
                  YOUR MONEY · YOUR VARIABLES
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          CALCULATOR
      =================================================== */}

      <section className="px-4 pb-28 sm:px-8 lg:px-12 lg:pb-40">
        <div className="mx-auto max-w-[1440px]">
          <div className="calculator-reveal grid min-w-0 overflow-hidden rounded-[34px] bg-[#EDE9E0] lg:grid-cols-[0.36fr_0.64fr]">
            {/* LEFT */}

            <aside className="min-w-0 border-b border-[#11110F]/10 p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
              <div className="lg:sticky lg:top-28">
                <div className="mb-10">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#11110F]/30">
                    CHOOSE YOUR QUESTION
                  </p>

                  <p className="mt-3 max-w-[230px] text-[12px] leading-5 text-[#11110F]/45">
                    Every tool changes the same way: alter the variables and
                    watch the future move.
                  </p>
                </div>

                <div className="space-y-1">
                  {calculators.map(
                    (tool) => {
                      const active =
                        activeId ===
                        tool.id;

                      return (
                        <button
                          key={tool.id}
                          type="button"
                          onClick={() =>
                            setActiveId(
                              tool.id
                            )
                          }
                          className={`group flex w-full min-w-0 items-center gap-4 rounded-2xl px-3 py-3 text-left transition-all duration-300 ${
                            active
                              ? "bg-[#123B2A] text-white"
                              : "hover:bg-white/70"
                          }`}
                        >
                          <span
                            className={`text-[9px] font-semibold tracking-[0.18em] ${
                              active
                                ? "text-[#C8FF3D]"
                                : "text-[#11110F]/25"
                            }`}
                          >
                            {
                              tool.number
                            }
                          </span>

                          <span
                            className={`min-w-0 text-[11px] font-semibold uppercase tracking-[0.08em] ${
                              active
                                ? "text-white"
                                : "text-[#11110F]/45"
                            }`}
                          >
                            {
                              tool.label
                            }
                          </span>

                          <span
                            className={`ml-auto shrink-0 ${
                              active
                                ? "text-[#C8FF3D]"
                                : "text-[#11110F]/10"
                            }`}
                          >
                            →
                          </span>
                        </button>
                      );
                    }
                  )}
                </div>

                <div className="mt-12 border-t border-[#11110F]/10 pt-5">
                  <p className="text-[9px] uppercase leading-5 tracking-[0.16em] text-[#11110F]/25">
                    INDICATIVE ONLY
                    <br />
                    NOT FINANCIAL ADVICE
                  </p>
                </div>
              </div>
            </aside>

            {/* RIGHT */}

            <main className="min-w-0 bg-[#F7FBF8] p-6 sm:p-10 lg:p-14">
              {/* TITLE */}

              <div className="flex min-w-0 items-start justify-between gap-8">
                <div className="min-w-0">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#3157C8]">
                    {activeTool.number} / 08
                  </p>

                  <h2 className="mt-5 max-w-[700px] text-[clamp(2.7rem,5vw,5.8rem)] font-medium leading-[0.86] tracking-[-0.075em]">
                    {
                      activeTool.title
                    }
                  </h2>

                  <p className="mt-6 max-w-[500px] text-[13px] leading-6 text-[#11110F]/45">
                    {
                      activeTool.description
                    }
                  </p>
                </div>

                <span className="hidden shrink-0 text-[56px] font-light leading-none text-[#11110F]/10 sm:block">
                  {
                    activeTool.number
                  }
                </span>
              </div>

              {/* SLIDERS */}

              <div className="mt-14 min-w-0 rounded-[28px] bg-white p-6 sm:p-9 lg:p-11">
                {renderInputs()}
              </div>

              {/* RESULTS */}

              <div className="mt-5 grid min-w-0 items-start gap-5 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]">
                {/* GREEN */}

                <div className="min-w-0 self-start overflow-hidden rounded-[28px] bg-[#C8FF3D] p-7 sm:p-9">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#123B2A]/45">
                    THE NUMBER
                  </p>

                  <p
                    className="mt-6 min-w-0 max-w-full overflow-hidden whitespace-nowrap font-medium leading-[0.84] tracking-[-0.075em] text-[#123B2A]"
                    style={{
                      fontSize:
                        resultFontSize(
                          mainResult
                        ),
                    }}
                  >
                    {mainResult}
                  </p>

                  <p className="mt-5 text-[10px] uppercase tracking-[0.17em] text-[#123B2A]/45">
                    {activeId ===
                    "goal"
                      ? "MONTHLY INVESTMENT"
                      : activeId ===
                        "emi"
                      ? "MONTHLY EMI"
                      : activeId ===
                        "debt"
                      ? "ESTIMATED PAYOFF"
                      : "PROJECTED VALUE"}
                  </p>
                </div>

                {/* BLACK */}

                <MoneyFlow
                  invested={
                    result.invested
                  }
                  growth={
                    result.growth
                  }
                  finalValue={
                    activeId ===
                    "emi"
                      ? result.total
                      : result.value
                  }
                  label={
                    activeId ===
                    "debt"
                      ? "HOW THE DEBT MOVES"
                      : activeId ===
                        "emi"
                      ? "WHERE THE PAYMENT GOES"
                      : "WHERE THE MONEY COMES FROM"
                  }
                />
              </div>
            </main>
          </div>
        </div>
      </section>

      {/* ===================================================
          TIME
      =================================================== */}

      <section className="calculator-reveal px-6 pb-32 sm:px-10 lg:px-16 lg:pb-40">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#3157C8]">
                TIME CHANGES EVERYTHING
              </p>

              <h2 className="mt-7 text-[clamp(3rem,6vw,6.5rem)] font-medium leading-[0.84] tracking-[-0.08em]">
                See the
                <br />
                <span className="text-[#3157C8]">
                  distance.
                </span>
              </h2>
            </div>

            <div>
              <p className="max-w-[530px] text-[14px] leading-7 text-[#11110F]/50">
                Time is one of the variables behind almost every long-term
                financial decision.
              </p>

              <div className="mt-10">
                <div className="relative h-[100px]">
                  <div className="absolute left-0 right-0 top-5 h-px bg-[#11110F]/10" />

                  <div className="relative flex justify-between">
                    {[0, 25, 50, 75, 100].map(
                      (item) => (
                        <div
                          key={item}
                          className="flex flex-col items-center"
                        >
                          <span
                            className={`h-3 w-3 rounded-full border-[3px] border-[#F7FBF8] ${
                              item === 100
                                ? "bg-[#3157C8]"
                                : "bg-[#11110F]/15"
                            }`}
                          />

                          <span className="mt-4 text-[8px] uppercase tracking-[0.15em] text-[#11110F]/25">
                            {Math.round(
                              (result.years ||
                                10) *
                                (item /
                                  100)
                            )}{" "}
                            yrs
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          WHAT IF
      =================================================== */}

      <section className="calculator-reveal bg-[#F2EEE7] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#3157C8]">
                WHAT IF?
              </p>

              <h2 className="mt-7 text-[clamp(3rem,6vw,6.5rem)] font-medium leading-[0.84] tracking-[-0.08em]">
                Change one
                <br />
                thing.
              </h2>

              <p className="mt-7 max-w-[420px] text-[14px] leading-7 text-[#11110F]/45">
                Different assumptions create different outcomes. Explore a
                range instead of looking at a single number.
              </p>
            </div>

            <ScenarioGrid
              amount={
                activeId ===
                "sip"
                  ? sip.monthly
                  : activeId ===
                    "retirement"
                  ? retirement.monthly
                  : activeId ===
                    "goal"
                  ? result.monthly
                  : activeId ===
                    "debt"
                  ? debt.monthly
                  : activeId ===
                    "emi"
                  ? emi.amount / 12
                  : activeId ===
                    "compound"
                  ? compound.principal /
                    12
                  : activeId ===
                    "lumpsum"
                  ? lumpsum.amount /
                    12
                  : inflation.amount /
                    12
              }
            />
          </div>
        </div>
      </section>

      {/* ===================================================
          FINAL CTA
      =================================================== */}

      <section className="calculator-reveal px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="relative overflow-hidden rounded-[34px] bg-[#C8FF3D] px-7 py-16 sm:px-12 lg:px-20 lg:py-20">
            <div className="absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full border border-[#123B2A]/10" />

            <div className="relative z-10 grid gap-14 lg:grid-cols-[1fr_0.8fr] lg:items-end">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#123B2A]/45">
                  YOUR MONEY BLUEPRINT
                </p>

                <h2 className="mt-7 max-w-[850px] text-[clamp(3.5rem,7vw,8rem)] font-medium leading-[0.8] tracking-[-0.09em] text-[#123B2A]">
                  Numbers are
                  <br />
                  just the
                  <br />
                  beginning.
                </h2>
              </div>

              <div className="min-w-0 rounded-[28px] bg-[#123B2A] p-7 text-white sm:p-9">
                <div className="space-y-5">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <span className="text-[9px] uppercase tracking-[0.2em] text-white/35">
                      TOOL
                    </span>

                    <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#C8FF3D]">
                      {
                        activeTool.label
                      }
                    </span>
                  </div>

                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <span className="text-[9px] uppercase tracking-[0.2em] text-white/35">
                      TIME
                    </span>

                    <span className="text-[11px]">
                      {result.years
                        ? `${Math.round(
                            result.years
                          )} years`
                        : "—"}
                    </span>
                  </div>

                  <div className="flex min-w-0 items-center justify-between gap-5">
                    <span className="shrink-0 text-[9px] uppercase tracking-[0.2em] text-white/35">
                      OUTCOME
                    </span>

                    <span
                      className="min-w-0 truncate text-right font-medium text-[#C8FF3D]"
                      style={{
                        fontSize:
                          resultFontSize(
                            mainResult
                          ),
                      }}
                    >
                      {mainResult}
                    </span>
                  </div>
                </div>

                <a
                  href="/contact"
                  className="mt-8 flex h-[52px] items-center justify-between rounded-full bg-white px-6 text-[11px] font-semibold text-[#123B2A] transition duration-300 hover:-translate-y-1"
                >
                  Talk to an Expert

                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          DISCLAIMER
      =================================================== */}

      <section className="px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-5 border-t border-[#11110F]/10 pt-6 sm:flex-row sm:items-start sm:justify-between">
          <p className="max-w-[700px] text-[10px] leading-5 text-[#11110F]/30">
            Calculations shown are indicative illustrations based on the
            assumptions and values entered. Actual returns, inflation,
            borrowing costs and financial outcomes may differ because markets
            and personal circumstances change.
          </p>

          <span className="shrink-0 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#11110F]/20">
            WEALTHBLUEPRINT · PLAN WITH INTENTION
          </span>
        </div>
      </section>

      <Footer />
    </div>
  );
}