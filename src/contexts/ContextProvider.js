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
    const [activeMenu, setActiveMenu] = useState
    (true)
    const [isClicked, setIsClicked] = useState(initialState)
    
    // is clicked is string. spread initial state where eveything is false 
    // inside [] only chanhe value that has been clicked and set to true
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
            handleClick
         }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext
(StateContext)