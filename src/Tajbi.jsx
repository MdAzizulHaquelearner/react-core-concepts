import { useState } from "react"

export default function Tajbi (){
    const [count,setCount] = useState(0) ;
    const increment =() => {
        const newCount = count +1;
        setCount(newCount)
    };
    const decrement = ()=> {
        setCount(count -1)
    };
    return (
        <div>
            <h2>SubhanAllah: {count} </h2>
            <button onClick={increment}>++</button>
            <button onClick={decrement}>--</button>
        </div>
    )
}