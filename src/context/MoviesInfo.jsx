import {  createContext, useState } from "react"

export const MoviesContext=createContext()
const MoviesInfo = ({children}) => {
  const [movies,setMovies]=useState([])
  return <MoviesContext.Provider value={{movies,setMovies}}>
    {children}
  </MoviesContext.Provider>
}

export default MoviesInfo