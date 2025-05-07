
import {useEffect, useState} from "react";

function Fetch() {
    const [data, setData] = useState([]);

    useEffect(() => {
       fetch("https://jsonplaceholder.typicode.com/posts")
       .then((response) => {
        if(!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }
        return response.json()
       })
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