const Sort = ({ handleSort }) => {
  return (
    <div className="sort">
      <div className="buttons">
        <button onClick={() => handleSort("bubble")}>BUBBLE SORT</button>
        <button onClick={() => handleSort("selection")}>SELECTION SORT</button>
      </div>
    </div>
  );
};

export default Sort;
