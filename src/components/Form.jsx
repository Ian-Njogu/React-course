import { useState } from "react";
import '../App.css'

// function FormData() {
//     const [name, setName] = useState('')
//     const [email, setEmail] = useState('')

//     return(
//         <>
//         <form onSubmit={(e) => {e.preventDefault(); console.log("Name:", name, ); console.log("Email:", email)}}>
//             <label htmlFor="">Name:</label>
//             <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//             <label htmlFor="">Email:</label>
//             <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
//             <button type="submit">Submit</button>
//         </form>
//         {/* <h2></h2>
//         <h2>Email: {email}</h2> */}

//         </>
//     )
// }

function MultipleFormInput () {
    const [formData, setFormData] = useState({
        username: '',
        email: ''
    });
    function handleChange (event) {
        const {name, value} = event.target;
        setFormData({
            ...formData, //keep the previous state
            [name]: value,
        })
    }
    return (
        <form action="" className="form-container">
            <label className="form-label" htmlFor="">
                Username:
                <input type="text" name="username" value={formData.username} onChange={handleChange} className="form-input"/>
            </label>
            <br/>
            <label className="form-label" htmlFor="">
                Email:
                <input type="text" name="email" value={formData.email} onChange={handleChange}/>
            </label>
            <p className="form-output">Username: {formData.username}, Email: {formData.email}</p>
        </form>
    )
}

export default MultipleFormInput