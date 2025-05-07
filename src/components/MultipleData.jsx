import { useState, useEffect } from "react";
import axios from "axios";

function FetchData() {
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        const fetchMultiple = async () => {
            try{
                const [postsRes, usersRes] = await Promise.all([
                    axios.get("https://jsonplaceholder.typicode.com/posts"),
                    axios.get("https://jsonplaceholder.typicode.com/users"),


                ]);
                setPosts(postsRes.data)
                setUsers(usersRes.data)
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
           <h2>Fetched posts</h2>
           {loading ? (
            <p>Loading data...</p>
           ) : (
            <div>
                {posts.map((post) => (
                    <div key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                ))}
                <h2>Fetched users</h2>
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>
                            <span>{user.name}</span> {user.email}
                        </li>
                    ))}
                </ul>
            </div>
           )}
        </div>
    )
}

export default FetchData