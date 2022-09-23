import { useState, useEffect } from "react";
function UseEffect5_1() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCounter((cur) => cur + 1);
  const onChange = (e) => {
    setKeyword(e.target.value);
  };
  console.log("i run all the time");

  useEffect(() => {
    console.log("CALL THE API");
  }, []);
  useEffect(() => {
    if (keyword !== "") {
      console.log("SEARCH FOR", keyword);
    }
  }, [keyword]);

  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Serch here" />
      <h1>{counter}</h1>
      <button onClick={onClick}>click</button>
    </div>
  );
}

export default UseEffect5_1;
