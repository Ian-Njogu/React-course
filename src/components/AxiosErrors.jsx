// // App.js
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Axios = () => {
//     const [items, setItems] = useState([]);
//     const [dataIsLoaded, setDataIsLoaded] = useState(false);

//     useEffect(() => {
//         axios.get("https://jsonplaceholder.typicode.com/users")
            
//             .then((res) => {
//                 setItems(res.data);
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

// export default Axios;
import axios from "axios";
import {useEffect, useState} from "react";

function Fetch() {
    const [data, setData] = useState([]);

    useEffect(() => {
       axios.get("https://jsonplaceholder.typicode.com/posts/1")
        .then((response) => setData(response.data)) // axios converts the response to a JSON object
        .catch((error) => {
            if (error.response) {
                console.error("Server responded with error:", error.response.status);
            } else if (error.request) {
                console.error("No response received:", error.request)
            } else { 
                console.error("Error setting up request", error.message)
            }
        })
           
    }, []);

    return (
        <div>
            <h2>Fetching data</h2>
             {data ? <p>{JSON.stringify(data, null, 2)}</p> : <p>Loading...</p>}
        </div>
    )
}

export default Fetch;