/** @format */

import { useState } from "react";

export default function Counter() {
	const [value, setValue] = useState(100);
	
 function handleCount (){
    const valueIncrement = value +1;
  setValue(valueIncrement)
};
function reduceValue (){
    const valueDecrement = value - 1;
    setValue(valueDecrement)
}
	return (
		<>
			<div style={{border:"2px solid purple",
        padding:'20px'}}>
            <h2>counter :{value} </h2>
            <button onClick={handleCount}>update Counter</button>
            <button onClick={reduceValue}>update Counter</button>
            </div>
		</>
	);
}
