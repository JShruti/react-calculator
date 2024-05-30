import { useState } from "react";
 function App() {
// const[calc, setCalc] = useState(0);
const [result, setResult]=useState(0);



  
  const numbers = () => {
    const numbersList = [];

    for (let i = 9; i > 0; i--) {
      numbersList.push(<button onClick={()=> setResult(result + i)}>{i}</button>);
    }
    return numbersList;
  };

  return (
    <div className="App">
      <div className="calculator">

      <div className ="display">
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
<button>Del</button>

      </div>
      <div className="specialOperator">
        <button>AC</button>
        <button>%</button>
        <button>()</button>
      </div>

      </div>
    </div>
  );
}

export default App;
