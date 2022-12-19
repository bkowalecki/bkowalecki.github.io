
import Header from './components/header/Header'
import About from './components/about/about'
import Experience from './components/experience/Experience'
import Contact from './components/contact/Contact'
import { createContext, useState } from 'react'
import {ThemeProvider} from 'styled-components'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/footer/Footer'

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
      <NavBar/>
      <Header />
      <Experience/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App