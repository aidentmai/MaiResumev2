import { createContext, useState } from "react";

interface IThemeContextInterface {
    darkMode: boolean;
    toggleDarkMode: () => void;
}

export const ThemeContext = createContext<IThemeContextInterface>({
    darkMode: false,
    toggleDarkMode: () => {},
});

interface IThemeContextInterfaceProps {
    children: React.ReactNode;
}

const ThemeContextProvider = ({ children } : IThemeContextInterfaceProps) => {
    const [darkMode, setDarkMode] = useState<boolean>(false);

    const toggleDarkMode: () => void = () => {
        setDarkMode((prevState) => !prevState);
    };

    return <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>{children}</ThemeContext.Provider>
}

export default ThemeContextProvider;