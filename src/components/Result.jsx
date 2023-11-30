const Result = ({ result }) => {
  return <div>{typeof result === "string" && <h3>{result}</h3>}</div>;
};
export default Result;
