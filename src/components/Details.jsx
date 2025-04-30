import React from "react"
function Details ({name= "Person", age="Unavailable", number="Not known"}) {
    return <>
            <p>Hello, {name}</p>
            <p>Age: {age}</p>
            <p>Phone number: {number}</p>
            </> 
}

export default Details