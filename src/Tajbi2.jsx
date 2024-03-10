import { useState } from "react"

export default function Tajbi2 () {
    const [count,setCount] = useState(0);
    const handleCount = ( ) => {
      const newCount = count + 1;
      setCount(newCount)
    }
    const minus =() => {
        setCount(count - 1)
    }
return <>
<h2>Alhamdulliah :{count} </h2>
<button onClick={handleCount}>++</button>
<button onClick={minus}>--</button>
</>
}