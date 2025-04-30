import React from "react"
function Greetings ({name = "Guest", occupation = "unemployed", age = "Unknown"}) {
    return <>
            <h1>Hello, {name}</h1>
            <h1>Occupation: {occupation}</h1>
            <h1>Age: {age}</h1>
        </> 
}
// Setting default props
// Greetings.defaultProps = {
//     name: "Guest",
//     occupation: "Unemployed",
//     age: "unknown"
// }
export default Greetings