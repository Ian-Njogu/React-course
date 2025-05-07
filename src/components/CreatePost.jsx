import { useState } from "react";
import axios from "axios";

export default function CreatePost() {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [responseMsg, setResponseMsg] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
                title,
                body,
                userId: 1,
            });
            setResponseMsg(`Post created with ID: ${response.data.id}`)
            setTitle("");
            setBody("")

        } catch (error) {
            console.error("Error: ", error)
            setResponseMsg("failed to create post")
        }
    } 

    return(
        <div>
            <h2>Create a Post</h2>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required/>
                </div>
                <div>
                    <label htmlFor="">Body</label>
                    <input type="text" value={body} onChange={(e) => setBody(e.target.value)} required/>
                </div>
                <button type="submit">Submit</button>
            </form>
            {responseMsg && (
                <div>{responseMsg}</div>
            )}
        </div>
    )
    
}