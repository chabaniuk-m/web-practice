import React, { useState, useContext } from "react"
import links from "./assets/data/navbar"

const AppContext = React.createContext()

export const AppProvider = ({children}) => {
  const [viewportWidth, setViewportWidth] = useState(visualViewport.width)
  const [menus, setMenus] = useState([])
  const [titles, setTitles] = useState([])
  const [activeTopic, setActiveTopic] = useState('')

  window.addEventListener("resize", () => setViewportWidth(visualViewport.width))

  const openMenu = (name, left, depth=0, top=60) => {
    console.log(`Opens menu ${name}, left=${left}, top=${top}, depth=${depth}`)
    if (depth === 0) {
      console.log("Setting new Topic")
      setActiveTopic(name)
      setMenus([{
        topics: links.find(link => link.title === name).topics,
        left,
        top
      }])
      setTitles([name])
      console.log(`You're in ['${name}']`)
    } else {
      if (depth === menus.length) {
        menus.pop()
        titles.pop()
      }
      const newMenus = []
      for (const menu of menus) 
        newMenus.push(menu)
      newMenus.push({
        topics: menus[menus.length - 1].topics.find(link => link.title === name).subtopics,
        left,
        top
      })
      setMenus(newMenus)
      const newTitles = []
      for (const title of titles)
        newTitles.push(title)
      newTitles.push(name)
      setTitles(newTitles)
      console.log(`You're in ${JSON.stringify(newTitles)}`)
    }
    // console.log(`Updated menus is of len ${menus.length} and with data ${JSON.stringify(menus)}`)
  }

  const collapseSubmenu = () => {
    console.log("collapse submenu")
    menus.pop()
    titles.pop()
    const newMenus = []
    for (const menu of menus)
      newMenus.push(menu)
    const newTitles = []
    for (const title of titles)
      newTitles.push(title)
    if (menus.length === 0)  setActiveTopic('')
    setMenus(newMenus)
    setTitles(newTitles)
  }

  return <AppContext.Provider value={{
    viewportWidth, 
    setViewportWidth,
    menus,
    openMenu,
    collapseSubmenu,
    setMenus,
    activeTopic,
    titles,
  }}>{children}</AppContext.Provider>
}

// custom hook

export const useGlobalContext = () => {
  return useContext(AppContext)
}