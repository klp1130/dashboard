import { notifications } from "@syncfusion/ej2";
import React, { createContext, useContext, useState } from "react";

const StateContext = createContext()

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true)
    const [isClicked, setIsClicked] = useState(initialState)
    const [screenSize, setScreenSize] = useState(undefined)
    const [currentColor, setCurrentColor] = useState('#03C9D7')
    const [currentMode, setCurrentMode] = useState('Light')
    const [themeSettings, setThemeSettings] = useState(false)

    const setMode = (e) => {
        setCurrentMode(e.target.value) 

    //update local storage so user has same theme from previous use
    localStorage.setItem('themeMode', e.target.value)

    setThemeSettings(false)
    }

    const setColor = (color) => {
        setCurrentColor(color) 

    //update local storage so user has same color from previous use
    localStorage.setItem('colorMode', color)

    setThemeSettings(false)
    }

    // is clicked is string. spread initial state where eveything is false 
    // inside [] only change value that has been clicked and set to true
    const handleClick = (clicked) => {
        setIsClicked({ ...initialState, [clicked]:
        true })
    }

    return (
        <StateContext.Provider
        value={{ 
            activeMenu,
            setActiveMenu,
            isClicked,
            setIsClicked,
            handleClick,
            screenSize,
            setScreenSize,
            currentColor,
            currentMode, 
            themeSettings, 
            setThemeSettings,
            setMode,
            setColor
         }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext
(StateContext)