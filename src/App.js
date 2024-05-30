function App() {
  const numbers = () => {
    const numbersList = [];

    for (let i = 9; i > 0; i--) {
      numbersList.push(<button>{i}</button>);
    }
    return numbersList;
  };

  return (
    <div className="App">
      <div className ="Display">
<span>(0)</span> 0

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
    </div>
  );
}

export default App;
