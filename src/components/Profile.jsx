// import { useState } from "react";

// function Userprofile() {
//     const [name, setName] = useState("John")
//     const [age, setAge] = useState(18)

//     return (
//         <>
//         <h3>Name: {name}</h3>
//         <p>Age: {age}</p>
//         <button onClick={() => setAge(age + 1)}>Set age</button>
//         <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        
//         </>
//     )
// }

// export default Userprofile

import { useContext } from "react";
import UserContext from "./Context";
function Profile() {
    const {state} = useContext(UserContext);
    return (
        <div className="p-4 border rounded-lg mt-6 m-3">
            <h2 className="text-xl font-bold">User Profile</h2>
            <p>Name: {state.name}</p>
            <p>Status: {state.isLoggedIn ? "Logged in" : "Logged out"}</p>
        </div>
    )
}
export default Profile;