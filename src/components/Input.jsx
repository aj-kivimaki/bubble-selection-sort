function Input({ handleInput, inputRef, clear }) {
  return (
    <>
      <h2>Give at least two numbers</h2>
      <div className="input">
        <input
          id="search"
          type="text"
          placeholder="add a number"
          ref={inputRef}
        />
        <button onClick={handleInput}>ADD</button>
        <button onClick={clear}>CLEAR</button>
      </div>
    </>
  );
}

export default Input;
