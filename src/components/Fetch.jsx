// import React, { useState, useEffect } from "react";

// const Fetch = () => {
//     const [items, setItems] = useState([]);
//     const [dataIsLoaded, setDataIsLoaded] = useState(false);

//     useEffect(() => {
//         fetch("https://jsonplaceholder.typicode.com/users")
//             .then((res) => res.json())
//             .then((json) => {
//                 setItems(json);
//                 setDataIsLoaded(true);
//             });
//     }, []); 

//     if (!dataIsLoaded) {
//         return (
//             <div>
//                 <h1>Please wait some time....</h1>
//             </div>
//         );
//     }

//     return (
//         <div className="App">
//             <h3>Fetch data from an API in React</h3>
//             <div className="container">
//                 {items.map((item) => (
//                     <div className="item" key={item.id}>
//                         <ol>
//                             <div>
//                                 <strong>User_Name: </strong>
//                                 {item.username},
//                             </div>
//                             <div>Full_Name: {item.name}</div>
//                             <div>User_Email: {item.email}</div>
//                         </ol>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Fetch;

import {useEffect, useState} from "react";

function Fetch() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json()) //converts the response to json
        .then((data) => setData(data)) // store the data in state
        .catch((error) => console.error("Data not found", error))
    }, []);

    return (
        <div>
            <h2>Fetching data</h2>
             {data ? <p>{JSON.stringify(data, null, 2)}</p> : <p>Loading...</p>}
        </div>
    )
}

export default Fetch;