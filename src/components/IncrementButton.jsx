import { useState } from "react";
export default function IncrementButton(){
  const [count, setCount] = useState(0);

const addOne=()=>{

  setCount(count+1)
}

  return (

    <>
    <p>{count}</p>
    <button>Increment</button>


    </>
    
  );
};


export default IncrementButton;