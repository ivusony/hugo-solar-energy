import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const defaultProvider = {
    color               : '#B0BEC5',
    colorDarker         : "#B0BEC5",
    colorLighter        : "#B0BEC5",
    colorSecondary      : "#B0BEC5",
    colorSecondaryDark  : "#B0BEC5",
}

const ThemeProvider = ({ children }) => {
    const [themeColors, setThemeColors] = useState(defaultProvider);

    useEffect(() => {
            const getCssVariable = (variableName) => {
                const rootStyle = getComputedStyle(document.documentElement);
                return rootStyle.getPropertyValue(variableName).trim();
            };
    
            const color                 = getCssVariable('--color');
            const colorDarker           = getCssVariable('--color-darker');
            const colorLighter          = getCssVariable('--color-lighter');
            const colorSecondary        = getCssVariable('--color-secondary');
            const colorSecondaryDark    = getCssVariable('--color-secondary-dark');

            setThemeColors({
                color,
                colorDarker,
                colorLighter,
                colorSecondary,
                colorSecondaryDark,
            });
    }, []);


    const values = {
        ...themeColors
    };

    return (
        <ThemeContext.Provider value={values}>
            {
                children
            }
        </ThemeContext.Provider>
    );
};

export { ThemeContext, ThemeProvider };
