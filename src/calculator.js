import { useState } from "react";
export default function Calculator() {
  const [value, setValue] = useState(null);
  const [displayValue, setDisplayValue] = useState("0");
  const [operator, setOperator] = useState(null);
  const [awaitOperand, setAwaitOperand] = useState(false);
  function performOperation(operator, firstValue, secondValue) {
    switch (operator) {
      case "/": {
        return firstValue / secondValue;
      }
      case "*": {
        return firstValue * secondValue;
      }
      case "-": {
        return firstValue - secondValue;
      }
      case "+": {
        return firstValue + secondValue;
      }
      case "=": {
        return secondValue;
      }
      default:
        return secondValue;
    }
  }
  function inputDigit(digit) {
    if (awaitOperand) {
      setDisplayValue(`${digit}`);
      setAwaitOperand(false);
    } else {
      setDisplayValue(displayValue === "0" ? `${digit}` : displayValue + digit);
    }
    console.log(displayValue);
  }
  function handleOperatorInput(nextOperator) {
    const inputValue = parseFloat(displayValue);
    if (value === null) {
      setValue(inputValue);
    } else if (operator && !awaitOperand) {
      const currentValue = value || 0;
      console.log(currentValue);
      console.log(inputValue);
      const newValue = performOperation(operator, currentValue, inputValue);

      setValue(newValue);
      setDisplayValue(`${newValue}`);
    }
    setAwaitOperand(true);
    setOperator(nextOperator);
    // console.log(value);
  }
  function clearDisplay() {
    setDisplayValue("0");
    setOperator(null);
    setValue(null);
    setAwaitOperand(false);
  }
  return (
    <div className="calculator">
      <div className="display">{displayValue}</div>
      <div className="row">
        <div className="button clear-btn" onClick={clearDisplay}>
          C
        </div>
        <div className="button">&lt;</div>
        <div className="button" onClick={() => handleOperatorInput("/")}>
          /
        </div>
      </div>
      <div className="row">
        <div className="button" onClick={() => inputDigit(7)}>
          7
        </div>
        <div className="button" onClick={() => inputDigit(8)}>
          8
        </div>
        <div className="button" onClick={() => inputDigit(9)}>
          9
        </div>
        <div className="button" onClick={() => handleOperatorInput("*")}>
          *
        </div>
      </div>
      <div className="row">
        <div className="button" onClick={() => inputDigit(4)}>
          4
        </div>
        <div className="button" onClick={() => inputDigit(5)}>
          5
        </div>
        <div className="button" onClick={() => inputDigit(6)}>
          6
        </div>
        <div className="button" onClick={() => handleOperatorInput("-")}>
          -
        </div>
      </div>
      <div className="row">
        <div className="button" onClick={() => inputDigit(1)}>
          1
        </div>
        <div className="button" onClick={() => inputDigit(2)}>
          2
        </div>
        <div className="button" onClick={() => inputDigit(3)}>
          3
        </div>
        <div className="button" onClick={() => handleOperatorInput("+")}>
          +
        </div>
      </div>
      <div className="row">
        <div className="button zero-btn" onClick={() => inputDigit(0)}>
          0
        </div>
        <div className="button">.</div>
        <div
          className="button equals-button"
          onClick={() => handleOperatorInput("=")}
        >
          =
        </div>
      </div>
    </div>
  );
}
