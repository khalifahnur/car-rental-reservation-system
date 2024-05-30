"use client"
import { createContext,useState, useContext } from "react";

const AppContext = createContext(null);

export function AppWrapper({children}){
    const [user, setUser] = useState(null);
    //const [userLoggedIn,setUserLogedIn] = useState(false);

  // Function to update user context
  const updateUser = (newUser) => setUser(newUser);

    return(
        <AppContext.Provider value={{ user, updateUser }}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext(){
    return useContext(AppContext)
}

