import React from "react";
import CountUp from "react-countup";

const AnimatedCounter = ({ value }: { value: number }) => {
  return (
    <div className="w-full">
      <CountUp
        end={value}
        duration={2.7}
        decimals={2}
        separator=","
        decimal="."
        prefix="$"
      />
    </div>
  );
};

export default AnimatedCounter;
