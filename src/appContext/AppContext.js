import { createContext } from "react";

export const AppContext = createContext()

export const AppProvider = (props) => {

    // Define states here

    return(
        <AppContext.Provider
            value={{
                // Values to be consumed
            }}
        >
            {props.children}
        </AppContext.Provider>
    )
}