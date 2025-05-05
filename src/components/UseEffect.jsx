import { useEffect, useState } from "react";

// useEffect(() => {
// code to render after every render})
function Counters() {
    const [count, setCount] = useState(0);
    useEffect(() => console.log(`count updated: ${count}`)) //runs after every render
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Update Count</button>
        </div>
    )
}

export default Counters