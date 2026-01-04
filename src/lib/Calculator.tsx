import { useState } from "react";
import Buttons from "@/components/Buttons";
import Display from "@/components/Display";

const Calculator: React.FC = () => {
  const [display, setDisplay] = useState("");
  const [result, setResult] = useState("0");

  const calculate = (expr: string) => {
    if (!expr) {
      setResult("0");
      return;
    }

    let sanitized = expr
      .replace(/x/g, "*")
      .replace(/÷/g, "/")
      .replace(/,/g, ",")
      .replace(/\s+/g, "");

    sanitized = sanitized.replace(/(\d+(\.\d+)?)%/g, "($1/100)");

    const caracterGood = /^[0-9+\-*/().]+$/;

    if (!caracterGood.test(sanitized)) {
      setResult("Error");
      return;
    }

    try {
      const value = Function(`"use strict"; return (${sanitized})`)();

      if (typeof value === "number" && Number.isFinite(value)) {
        const rounded = +parseFloat(value.toFixed(12));
        setResult(String(rounded));
      } else {
        setResult("Error");
      }
    } catch {
      setResult("Error");
    }
  };

  return (
    <div id="container" className="flex flex-row m-2.5  gap-10">
      <Buttons
        setDisplay={setDisplay}
        setResult={setResult}
        onCalculate={() => calculate(display)}
      />
      <Display display={display} result={result} />
    </div>
  );
};

export default Calculator;
