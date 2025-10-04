import { createContext, useState } from "react";

const AppContext = createContext();

const defaultProvider = {
    state : {
        drawerVisible: false,
    },
    setState : () => {},
    toggleDrawer : () => {}
}

const AppProvider = ({ children }) => {
  const [state, setState] = useState(defaultProvider.state);

   
    function toggleDrawer() {
        setState({
            ...state,
            drawerVisible: !state.drawerVisible,
        });
    }

     let values = {
        state,
        setState,
        toggleDrawer,
    }


    return (
        <AppContext.Provider value={values}>
        {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };
