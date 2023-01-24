import React, { useState, useContext } from "react"

const AppContext = React.createContext()

export const AppProvider = ({children}) => {
  const [viewportWidth, setViewportWidth] = useState(visualViewport.width)

  window.addEventListener("resize", () => setViewportWidth(visualViewport.width))

  return <AppContext.Provider value={{
    viewportWidth, 
    setViewportWidth,
  }}>{children}</AppContext.Provider>
}

// custom hook

export const useGlobalContext = () => {
  return useContext(AppContext)
}