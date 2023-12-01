function Input({ handleInput, inputRef, clear }) {
  return (
    <>
      <h2>Add numbers</h2>
      <div className="input">
        <input id="search" type="text" placeholder="number" ref={inputRef} />
        <button onClick={handleInput}>ADD</button>
        <button onClick={clear}>CLEAR</button>
      </div>
    </>
  );
}

export default Input;
