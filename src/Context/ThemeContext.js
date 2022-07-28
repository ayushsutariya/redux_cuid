import React, { createContext, useReducer } from 'react'
import { Theme_Reducer } from './Reducer/Theme.reducer';

const ThemeContext = createContext()

const initialState = {
    theme: 'light'
}

export const ThemeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Theme_Reducer, initialState);

    const toggleTheme = (theme) => {
        const newTheme = theme === 'light' ? 'dark' : 'light'
        dispatch({ type: 'TOGGLE_THEME', payload:newTheme})
        console.log(newTheme);
    }

    return (
        <ThemeContext.Provider
            value={{
                ...state,
                toggleTheme
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeContext;