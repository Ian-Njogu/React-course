import { useNavigate } from "react-router-dom";

function DashBoard () {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate("/") //redirects to the home page
    };
    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={goToHome}>Go home</button>
        </div>
    )
}

export default DashBoard