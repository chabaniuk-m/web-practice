import { useState } from 'react'
import './App.css'

function App() {
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem('isDarkTheme')) || 'dark')

  return (
    <div className={theme}>
    </div>
  )
}

export default App
