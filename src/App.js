import { useState } from "react";
function App() {
  const [result, setResult] = useState("0");
  const [firstNumber, setFirstNumber] = useState([]);
  const [secondNumber, setSecondNumber] = useState([]);
  const [operator, setOperator] = useState("");

  const operatorIsNull = () => operator === "";

  const getNumber = (digits) => {
    let number = 0;
    for (let i = 0; i < digits.length; i++) {
      number += digits[i] * Math.pow(10, i);
    }
    return number;
  };

  const clear = () => {
    setFirstNumber([]);
    setSecondNumber([]);
    setOperator("");
    setResult("0");
  }

  const registerDigits = (digit) => {
    let digits;
    if (operatorIsNull()) {
      digits = firstNumber;
      digits.unshift(digit);
      setFirstNumber(digits);
      const number = getNumber(firstNumber);
      setResult(number);
    } else {
      digits = secondNumber;
      digits.unshift(digit);
      setSecondNumber(digits);
      const number1 = getNumber(firstNumber);
      const number2 = getNumber(secondNumber);
      setResult(`${number1} ${operator} ${number2}`);
    }
  };

  const registerOperator = (symbol) => {
    setOperator(symbol);
    setResult(result + " " + symbol);
  };

  const applyOperator = () => {
    const number1 = getNumber(firstNumber);
    const number2 = getNumber(secondNumber);
    switch (operator) {
      case "/":
        setResult(number1 / number2);
        break;
      case "*":
        setResult(number1 * number2);
        break;
      case "+":
        setResult(number1 + number2);
        break;
      case "-":
        setResult(number1 - number2);
        break;
      default:
        break;
    }
    setFirstNumber([]);
    setSecondNumber([]);
    setOperator("");
  };

  const numbers = () => {
    const numbersList = [];

    for (let i = 9; i > 0; i--) {
      numbersList.push(<button onClick={() => registerDigits(i)}>{i}</button>);
    }
    return numbersList;
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          <span>(0)</span> {result}
        </div>
        <div className="digits">
          {numbers()}
          <button onClick={() => registerDigits(0)}>0</button>
          <button>.</button>
          <button onClick={() => applyOperator()}>=</button>
        </div>
        <div className="operator">
          <button onClick={() => registerOperator("/")}>/</button>
          <button onClick={() => registerOperator("*")}>*</button>
          <button onClick={() => registerOperator("-")}>-</button>
          <button onClick={() => registerOperator("+")}>+</button>
          <button>%</button>
        </div>
        <div className="specialOperator">
          <button onClick={() => clear()}>AC</button>
          <button>( )</button>
          <button>Del</button>
        </div>
      </div>
    </div>
  );
}

export default App;
