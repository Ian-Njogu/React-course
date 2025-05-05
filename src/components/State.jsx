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
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    )
}

export function Login() {
    const [login, setLogin] = useState("no")

    return (
        <>
        <p>Are you logged in? {login}</p>
        <button onClick={() => setLogin("yes")}>login</button>
        </>
    )
}

export default Counter