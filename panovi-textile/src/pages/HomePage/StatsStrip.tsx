import React from "react";

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center">
    <div className="text-2xl font-semibold tracking-tight">{value}</div>
    <div className="mt-1 text-xs text-neutral-500">{label}</div>
  </div>
);

const StatsStrip: React.FC = () => {
  return (
    <section className="bg-neutral-50">
      <div className="mx-auto w-full">
        <div className="bg-white border border-neutral-200 shadow-md rounded-none">
          <div className="mx-auto w-full max-w-5xl px-6">
            <div className="flex items-center justify-around py-6">
              <Stat value="60,000+" label="Pieces per month" />
              <Stat value="200+" label="Employees" />
              <Stat value="1" label="Factory" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsStrip;
