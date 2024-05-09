"use client";
import { useEffect, useState } from "react";


const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(true)

    useEffect(() => {
        const theme = localStorage.getItem('theme')
        if (theme === 'dark') setDarkMode(true)    
    }, [])


    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }, [darkMode])
    return(
        <div className="flex items-center space-x-2 tracking-widest  uppercase select-none cursor-pointer p-1" onClick={() => setDarkMode(!darkMode)}>
            <div className="text-white dark:text-black bg-black dark:bg-white">
                <div className="p-1">Dark</div>
            </div>
            <div className=" text-black dark:text-white bg-white dark:bg-black ">
                <div className="p-1">Light</div>
            </div>
        </div>
  )
}
export default ThemeToggle