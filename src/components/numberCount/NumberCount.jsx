import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./numberCount.scss";

const NumberCount = () => {
  const [counts, setCounts] = useState([
    { label: "STUDENTS", value: 0, target: 2350 },
    { label: "STAFFS", value: 0, target: 102 },
    { label: "COURSES", value: 0, target: 30 },
    { label: "CAMPUS ACRES", value: 0, target: 21 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prevCounts) => {
        return prevCounts.map((count) => {
          if (count.value < count.target) {
            const increment = count.label === "STUDENTS" ? 10 : 1; // Adjust the increment based on the label
            return { ...count, value: count.value + increment };
          }
          return count;
        });
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="numcount-1">
      <div className={`number-count-container container-xxl py-5`}>
        <div className="container">
          <div className="row g-4 cont1">
            {counts.map((count, index) => (
              <div
                key={index}
                className="col-lg-3 col-sm-6 wow fadeInDown cont"
                data-wow-delay={(index + 1) * 0.2 + "s"}
              >
                <div className="service-item text-center pt-3">
                  <div className="p-1">
                    <div className="value1" akhi={count.target}>
                      {count.value}

                      {count.value === count.target && "+"}
                    </div>
                    <div className="label1">{count.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="horizontal-line1"></div>
        <div className="horizontal-line2"></div>

      </div>
    </div>
  );
};

export default NumberCount;
