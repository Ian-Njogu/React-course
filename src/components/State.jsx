// State management
// useState hook - Manages local component state
// useEffect - handles side effects when fetching data
// useContext - Provide global state management 
// useRef - used to access DOM elements and persist values across renders
// useMemo - Optimize expensive calculations
// useCallbacks - Memoizes functions to prevent unnecessary re-renders 

// Basic syntax 
// const [state, setState] = useState("initialState/value")

import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0); //initial value is set at 0

    return (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    )
}

export default Counter