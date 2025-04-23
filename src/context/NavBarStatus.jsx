import { createContext, useState } from "react";
export const NavBarContext=createContext({});

const NavBarStatus = ({children}) => {
    const [isNavBarOpened,setIsNavBarOpened]=useState(false);
    return (
        <NavBarContext.Provider value={{isNavBarOpened,setIsNavBarOpened }}>
            {children}
        </NavBarContext.Provider>
    )
}

export default NavBarStatus
