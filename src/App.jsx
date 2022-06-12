
import Header from './components/header/Header'
import About from './components/about/about'
import Experience from './components/experience/Experience'
import { createContext, useState } from 'react'
import {ThemeProvider} from 'styled-components'

// export const ThemeContext = createContext(null);

const LightTheme = {
  pageBackground: "white"
  
};

const DarkTheme = {
  pageBackground: "black"
}

const themes = {
  light: LightTheme,
  dark: DarkTheme
}

const App = () => {

  const [theme, setTheme] = useState("dark");


  return (
      <div className='App'>
          <Header />
          <Experience/>
          <About/>
          
         
          
      </div>
  )
}

export default App