import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useInViewport } from "../../helpers/useInViewport";

function parseNumeric(value: string): { prefix: string; num: number; suffix: string } {
  const m = value.trim().match(/^(\D*?)([\d.,\s]+)(.*)$/);
  if (!m) return { prefix: "", num: 0, suffix: value };
  const [, prefix, numeric, suffix] = m;
  // Strip common thousand separators so "60,000+" or "60.000+" both work.
  const cleaned = numeric.replace(/[.,\s]/g, "");
  const num = Number(cleaned) || 0;
  return { prefix, num, suffix };
}

function CountUp({
  target,
  start,
  duration = 1.6,
  prefix = "",
  suffix = "",
  locale = "en",
  className = "",
}: {
  target: number;
  start: boolean;
  duration?: number;
  prefix?: string;
  suffix?: string;
  locale?: string;
  className?: string;
}) {
  const [val, setVal] = useState(0);
  const ran = useRef(false);
  const fmt = useMemo(() => new Intl.NumberFormat(locale), [locale]);

  useEffect(() => {
    if (!start || ran.current) return;
    ran.current = true;

    const from = 0;
    const to = target;
    const total = duration * 1000;
    const startAt = performance.now();

    let raf = requestAnimationFrame(function tick(now: number) {
      const t = Math.min((now - startAt) / total, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setVal(Math.round(from + (to - from) * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    });

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

type StatProps = {
  value: string;
  label: string;
  numberSize?: string;
  numberWeight?: string;
  labelSize?: string;
  labelWeight?: string;
  start?: boolean;
  locale?: string;
  className?: string;
};

const Stat = ({
  value,
  label,
  numberSize = "text-2xl",
  numberWeight = "",
  labelSize = "text-lg",
  labelWeight = "font-light",
  start = false,
  locale = "en",
  className = "",
}: StatProps) => {
  const { prefix, num, suffix } = parseNumeric(value);
  return (
    <div className={`text-center ${className}`}>
      <CountUp
        target={num}
        start={start ?? false}
        prefix={prefix}
        suffix={suffix}
        locale={locale}
        className={`${numberSize} ${numberWeight} tracking-tight`}
      />
      <div className={`mt-1 ${labelSize} ${labelWeight}`}>{label}</div>
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

export default function StatsStrip({
  numberSize,
  numberWeight,
  labelSize,
  labelWeight,
  className = "",
}: StatsStripProps) {
  const { ref, inView } = useInViewport<HTMLDivElement>();
  const { t, i18n } = useTranslation();
  const locale = (i18n.resolvedLanguage || i18n.language || "en").slice(0, 2);

  return (
    <section className={`bg-neutral-50 ${className}`} ref={ref}>
      <div className="mx-auto w-full">
        <div className="rounded-none border border-neutral-200 bg-white shadow-md">
          <div className="mx-auto w-full max-w-5xl px-6">
            <div className="flex flex-col gap-6 py-6 sm:flex-row sm:items-center sm:justify-around">
              <Stat
                value="60000+"
                label={t("home.stats.piecesPerMonth")}
                numberSize={numberSize}
                numberWeight={numberWeight}
                labelSize={labelSize}
                labelWeight={labelWeight}
                start={inView}
                locale={locale}
              />
              <Stat
                value="200+"
                label={t("home.stats.employees")}
                numberSize={numberSize}
                numberWeight={numberWeight}
                labelSize={labelSize}
                labelWeight={labelWeight}
                start={inView}
                locale={locale}
              />
              <Stat
                value="1"
                label={t("home.stats.factory")}
                numberSize={numberSize}
                numberWeight={numberWeight}
                labelSize={labelSize}
                labelWeight={labelWeight}
                start={inView}
                locale={locale}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
