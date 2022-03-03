import { createContext, useState } from "react"

export const MenuCreateContext = createContext()

export const MenuContext = ({children}) =>{
    const [menu, setMenu] = useState(true);

    return(
        <MenuCreateContext.Provider value={[menu, setMenu]} >
            {children}
        </MenuCreateContext.Provider>
    )
}

