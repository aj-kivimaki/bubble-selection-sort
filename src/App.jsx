import { useState, useRef } from "react";
import Input from "./components/Input";
import Label from "./components/Label";
import Sort from "./components/Sort";
import { bubbleSort, selectionSort } from "./helper_functions/sortingFunctions";
import Result from "./components/Result";

function App() {
  const [array, setArray] = useState([]);
  const [result, setResult] = useState([]);
  const inputRef = useRef(null);

  const handleInput = () => {
    if (inputRef.current.value === "") return;
    setArray([...array, Number(inputRef.current.value)]);
    inputRef.current.value = "";
  };

  const handleSort = (sortingType) =>
    sortingType === "bubble"
      ? setResult(bubbleSort(array))
      : setResult(selectionSort(array));

  const clear = () => {
    setArray([]);
    setResult([]);
  };

  return (
    <div className="app">
      <main className="main">
        <h1>SORT</h1>
        <Input handleInput={handleInput} inputRef={inputRef} clear={clear} />
        <Label array={array} />
        <Sort handleSort={handleSort} />
        <Result result={result} />
      </main>
    </div>
  );
}

export default App;
