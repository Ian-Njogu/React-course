import { createContext, useReducer } from "react";
//Create context
const UserContext = createContext();
function userReducer(state, action) {
    switch (action.type) {
        case "LOGIN":
            return {...state, isLoggedIn: true};
        case "LOGOUT":
            return{...state, isLoggedIn: false};
        default:
            return state;
    }
}
//Create a context provider(context API)
export function UserProvider({children}) {
    const [state, dispatch] = useReducer(userReducer, {name: 'John Doe', isLoggedIn: false});
    return (
        <UserContext.Provider value={{state, dispatch}}>
            {children}
        </UserContext.Provider>
    )
}
export default UserContext;