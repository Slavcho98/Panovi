import React from "react";

type StatProps = {
  value: string;
  label: string;
  numberSize?: string;
  numberWeight?: string;
  labelSize?: string;
  labelWeight?: string;
  className?: string;
};

const Stat: React.FC<StatProps> = ({
  value,
  label,
  numberSize = "text-2xl",
  numberWeight = "font-semibold",
  labelSize = "text-xs",
  labelWeight = "font-normal",
  className = "",
}) => (
  <div className={`text-center ${className}`}>
    <div className={`${numberSize} ${numberWeight} tracking-tight`}>{value}</div>
    <div className={`mt-1 ${labelSize} ${labelWeight} text-neutral-500`}>{label}</div>
  </div>
);

type StatsStripProps = {
  numberSize?: string;
  numberWeight?: string;
  labelSize?: string;
  labelWeight?: string;
};

const StatsStrip: React.FC<StatsStripProps> = ({
  numberSize,
  numberWeight,
  labelSize,
  labelWeight,
}) => {
  return (
    <section className="bg-neutral-50">
      <div className="mx-auto w-full">
        <div className="bg-white border border-neutral-200 shadow-md rounded-none">
          <div className="mx-auto w-full max-w-5xl px-6">
            <div className="flex items-center justify-around py-6">
              <Stat
                value="60,000+"
                label="Pieces per month"
                numberSize={numberSize}
                numberWeight={numberWeight}
                labelSize={labelSize}
                labelWeight={labelWeight}
              />
              <Stat
                value="200+"
                label="Employees"
                numberSize={numberSize}
                numberWeight={numberWeight}
                labelSize={labelSize}
                labelWeight={labelWeight}
              />
              <Stat
                value="1"
                label="Factory"
                numberSize={numberSize}
                numberWeight={numberWeight}
                labelSize={labelSize}
                labelWeight={labelWeight}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsStrip;
