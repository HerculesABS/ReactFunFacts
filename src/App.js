import React from "react"
import Navbar from "./Navbar"
import Main from "./Main"

export default function App() {
    
    //A darkMode state of true default
    const [darkMode, setDarkMode] = React.useState(true)

    //A function that toggle the currentMode to its opposite.
    function toggleDarkMode() {
        setDarkMode (prevMode => !prevMode)
    }

    return (
        <div className="container">
            <Navbar darkMode = {darkMode}
             toggleDarkMode = {toggleDarkMode}/>
            <Main darkMode = {darkMode}/>
        </div>
    )
}