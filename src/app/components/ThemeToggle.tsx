"use client";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(false)

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
        <div className="flex items-center space-x-2 tracking-widest uppercase p-1">
            <div className="text-white bg-black">
                <div onClick={() => setDarkMode(!darkMode)} className="p-1 select-none cursor-pointer">Dark</div>
            </div>
            <div className=" text-black bg-white">
                <div onClick={() => setDarkMode(!darkMode)}  className="p-1 select-none cursor-pointer">Light</div>
            </div>
        </div>
  )
}
export default ThemeToggle