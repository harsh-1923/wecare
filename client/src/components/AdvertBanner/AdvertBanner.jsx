import React, { useState, useEffect } from "react";
import "./AdverBanner.css";
import { ArrowDownRightIcon } from "@heroicons/react/24/outline";

const AdvertBanner = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const target = 400;
    let interval;

    if (count < target) {
      interval = setInterval(() => {
        setCount((prevCount) => Math.min(prevCount + 1, target));
      }, 10);
    }

    return () => {
      clearInterval(interval);
    };
  }, [count]);
  return (
    <div className="advert-wrapper">
      <div className="advert-value">{count}+</div>
      <div className="advert-description">
        successfully appointments
        <svg
          style={{ color: "white", width: "40px", height: "40px" }}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
          />
        </svg>
      </div>
    </div>
  );
};

export default AdvertBanner;
