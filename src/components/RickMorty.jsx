import { useState, useEffect } from "react";
import axios from "axios";

function FetchData() {
    const [char, setChar] = useState([]);
    const [epis, setEpi] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        const fetchMultiple = async () => {
            try{
                const [charResp, epiResp] = await Promise.all([
                    axios.get("https://rickandmortyapi.com/api/character"),
                    axios.get("https://rickandmortyapi.com/api/episode"),

                ])
                setChar(charResp.data.results)
                setEpi(epiResp.data.results)
                console.log(charResp)
            }
            catch (error){
                if (error.response) {
                    console.error("Server responded with error:", error.response.status);
                } else if (error.request) {
                    console.error("No response received:", error.request)
                } else { 
                    console.error("Error setting up request", error.message)
                } 
            } 
            finally {
                setLoading(false)
            }
        }
        fetchMultiple()
    },[])

    return (
        <div>
           <h2>Fetched characters</h2>
           {loading ? (
            <p>Loading data...</p>
           ) : (
            <div className="cards-container">
                {char.map((char) => (
                    <div  >
                        <div key={char.id} className="card">

                        <img src={char.image} alt={char.name}/>
                        <div className="card-info">
                     
                        <h3>{char.name}</h3>
                        <p><strong>Gender:</strong> {char.gender}</p>
                        <p><strong>Species:</strong> {char.species}</p>
                        <p><strong>Location: </strong>{char.location.name}</p>
                        </div>
                        </div>
                    </div>
                ))}
                
            </div>
           )}
           <div>
            <h1>Episodes</h1>
            {epis.map((epi) => (
                <div>
                <h3>Name:{epi.name}</h3>
                <p>Created: {epi.created}</p>
                <p>Air dated: {epi.air_date}</p>
                </div>
            ))}
            
           </div>
        </div>
    )
}

export default FetchData