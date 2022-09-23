import { useState, useEffect } from "react";

// function Hello() {
//   useEffect(() => {
//     console.log("created :)");
//     return () => console.log("destroyed :(");
//   }, []);
//   return <h1>Hello</h1>;
// }
//? 위에 hello 주석이랑 같은거임
//? 해당 컴포넌트가 삭제될때는 return이 실행됨
function Hello() {
  function destroyedFn() {
    console.log("destroyed :(");
  }
  function createdFn() {
    console.log("created :)");
    return destroyedFn;
  }
  useEffect(createdFn, []);
  return <h1>Hello</h1>;
}

function CleanUp_6_4() {
  const [showing, setShowing] = useState(false);
  const onClick = () => {
    setShowing((cur) => !cur);
  };
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "show"}</button>
    </div>
  );
}
export default CleanUp_6_4;
