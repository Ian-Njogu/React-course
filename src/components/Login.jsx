import { useContext, useState } from "react";
import UserContext from "./Context";
function LogIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { state, dispatch} = useContext(UserContext);
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form action="" onSubmit={handleSubmit} className="bg-white shadow-md rounded-2xl px-8 pb-8 pt-6 w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Log In</h2>
                <div className="mb-4">
                    <label htmlFor="email"
                    className="block text-gray-700 text-sm font-bold mb-2">
                        Email address
                    </label>
                    <input type="email"
                    id="email"
                    value={email}
                    name="email"
                    onChange={ (e) => setEmail(e.target.value) }
                    className="shadow appearance-none border rounded-sm w-full px-3
                    py-2 text-gray-700 leading-tight focus:outline-none focus:ring-2
                    focus:ring-blue-400"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email"
                    className="block text-gray-700 text-sm font-bold mb-2">
                        Password
                    </label>
                    <input type="password"
                    id="password"
                    value={password}
                    name="password"
                    onChange={ (e) => setPassword(e.target.value) }
                    className="shadow appearance-none border rounded-sm w-full px-3
                    py-2 text-gray-700 leading-tight focus:outline-none focus:ring-2
                    focus:ring-blue-400"
                    />
                </div>
                <button type="submit"
                onClick={() => dispatch({type: state.isLoggedIn ? "LOGIN" : "LOGOUT"})}
                className="bg-blue-400 px-4 py-2 rounded-md hover:bg-blue-600
                items-center w-full">
                {state.isLoggedIn ? "Login" : "Logout"}
                </button>
            </form>
        </div>
    )
}
export default LogIn;