import React, { useEffect } from "react";

const MyCalculator = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://cdn.omnicalculator.com/sdk.js";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="calculator-container">
      <div
        className="omni-calculator"
        data-calculator="everyday-life/tesla-charging-cost"
        data-width="300"
        data-config="{}"
        data-currency="INR"
        data-show-row-controls="false"
        data-version="3"
        data-t="1693335592878"
      >
        <div className="omni-calculator-header">
          Tesla Charging Cost Calculator
        </div>
        <div className="omni-calculator-footer">
          <a
            href="https://www.omnicalculator.com/everyday-life/tesla-charging-cost"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="Omni"
              className="omni-calculator-logo"
              src="https://cdn.omnicalculator.com/embed/omni-calculator-logo-long.svg"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyCalculator;
