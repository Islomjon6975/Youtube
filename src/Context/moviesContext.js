import { createContext, useState } from "react";
import {data} from '../mock/movies.js'

export const MoviesCreateContext = createContext();

export const MovieContext = ({children}) => {
    const [lists, setLists] = useState(data);


    return(
        <MoviesCreateContext.Provider value={[lists, setLists]}>
            {children}
        </MoviesCreateContext.Provider>
    )
}