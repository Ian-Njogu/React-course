import { Link, Route } from "react-router-dom";
function Navbar() {
    return(
        <ul>
            <li><Link to ="/">Home</Link></li>
            <li><Link to ="/Profile">Profile</Link></li>
            <li><Link to ="/Form">Form</Link></li>
        </ul>
    )
}

export default Navbar