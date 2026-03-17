import { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthProvider({children}) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");

    

    function login(name){
        setIsLoggedIn(true);
        setUsername(name);
    }

    function logout(){
        setIsLoggedIn(false);    
        setUsername("");
    }

    return (
        <AuthContext.Provider value={{isLoggedIn,login,logout, username}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider
