import { useState } from "react";
function App() {
  const [result, setResult] = useState(0);
  const [firstNumber, setFirstNumber] = useState([]);

  const getNumber = () => {
    let number = 0;
    for (let i = 0; i < firstNumber.length; i++) {
      number += firstNumber[i] * Math.pow(10, i);
    }
    setResult(number);
  };

  const pushToFirstNumber = (digit) => {
    const digits = firstNumber;
    digits.unshift(digit);
    setFirstNumber(digits);
    getNumber();
  };

  const numbers = () => {
    const numbersList = [];

    for (let i = 9; i > 0; i--) {
      numbersList.push(
        <button onClick={() => pushToFirstNumber(i)}>{i}</button>
      );
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
          <button>0</button>
          <button>.</button>
          <button>=</button>
        </div>
        <div className="operator">
          <button>/</button>
          <button>*</button>
          <button>-</button>
          <button>+</button>
          <button>%</button>
        </div>
        <div className="specialOperator">
          <button>AC</button>
          <button>( )</button>
          <button>Del</button>
        </div>
      </div>
    </div>
  );
}

export default App;
