import {useEffect, useState} from "react";

function Fetch() {
    const [data, setData] = useState([]);

    useEffect(() => {
       const FetchData = async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            
            const jsonData = await response.json();
            setData(jsonData);
        } catch (err) {
            console.error("Data not found", err);
       }
    }
    FetchData()
    }, []);

    return (
        <div>
            <h2>Fetching data</h2>
             {data ? <p>{JSON.stringify(data, null, 2)}</p> : <p>Loading...</p>}
        </div>
    )
}

export default Fetch;

