import React, { useEffect, useMemo, useRef, useState } from "react";

/* ---------- helpers ---------- */
function useInViewport<T extends HTMLElement>(opts?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setInView(true),
      { threshold: 0.4, ...opts }
    );
    io.observe(node);
    return () => io.disconnect();
  }, [opts]);

  return { ref, inView } as const;
}

function parseNumeric(value: string) {
  // captures optional prefix, the number, and suffix
  const m = value.trim().match(/^(\D*?)([\d.,]+)(.*)$/);
  if (!m) return { prefix: "", num: 0, suffix: value };
  const [, prefix, numeric, suffix] = m;
  const num = Number(numeric.replace(/[,]/g, "")) || 0;
  return { prefix, num, suffix };
}

function CountUp({
  target,
  start,
  duration = 1.6,
  prefix = "",
  suffix = "",
  className = "",
}: {
  target: number;
  start: boolean;
  duration?: number; // seconds
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  const [val, setVal] = useState(0);
  const ran = useRef(false);
  const fmt = useMemo(() => new Intl.NumberFormat("en-US"), []);

  useEffect(() => {
    if (!start || ran.current) return;
    ran.current = true;

    const from = 0;
    const to = target;
    const total = duration * 1000;
    const startAt = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const t = Math.min((now - startAt) / total, 1);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      setVal(Math.round(from + (to - from) * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);

  return (
    <span className={className}>
      {prefix}
      {fmt.format(val)}
      {suffix}
    </span>
  );
}

/* ---------- Stat & Strip ---------- */
type StatProps = {
  value: string;
  label: string;
  numberSize?: string;
  numberWeight?: string;
  labelSize?: string;
  labelWeight?: string;
  start?: boolean;
  className?: string;
};

const Stat: React.FC<StatProps> = ({
  value,
  label,
  numberSize = "text-2xl",
  numberWeight = "font-semibold",
  labelSize = "text-xs",
  labelWeight = "font-normal",
  start = false,
  className = "",
}) => {
  const { prefix, num, suffix } = parseNumeric(value);
  return (
    <div className={`text-center ${className}`}>
      <CountUp
        target={num}
        start={start}
        prefix={prefix}
        suffix={suffix}
        className={`${numberSize} ${numberWeight} tracking-tight`}
      />
      <div className={`mt-1 ${labelSize} ${labelWeight} text-neutral-500`}>
        {label}
      </div>
    </div>
  );
};

type StatsStripProps = {
  numberSize?: string;
  numberWeight?: string;
  labelSize?: string;
  labelWeight?: string;
  className?: string;
};

const StatsStrip: React.FC<StatsStripProps> = ({
  numberSize,
  numberWeight,
  labelSize,
  labelWeight,
  className = "",
}) => {
  const { ref, inView } = useInViewport<HTMLDivElement>();

  return (
    <section className={`bg-neutral-50 ${className}`} ref={ref}>
      <div className="mx-auto w-full">
        <div className="bg-white border border-neutral-200 shadow-md rounded-none">
          <div className="mx-auto w-full max-w-5xl px-6">
            <div className="flex flex-col gap-6 py-6 sm:flex-row sm:items-center sm:justify-around">
              <Stat
                value="60,000+"
                label="Pieces per month"
                numberSize={numberSize}
                numberWeight={numberWeight}
                labelSize={labelSize}
                labelWeight={labelWeight}
                start={inView}
              />
              <Stat
                value="200+"
                label="Employees"
                numberSize={numberSize}
                numberWeight={numberWeight}
                labelSize={labelSize}
                labelWeight={labelWeight}
                start={inView}
              />
              <Stat
                value="1"
                label="Factory"
                numberSize={numberSize}
                numberWeight={numberWeight}
                labelSize={labelSize}
                labelWeight={labelWeight}
                start={inView}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsStrip;
