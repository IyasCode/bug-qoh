import React, { ReactNode, useReducer } from "react";

import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import layoutReducer from "./store/reducer";
import {layoutState } from "./store/state";



export const LayoutContext = React.createContext<typeof layoutState>(layoutState);

interface LayoutProps {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = (props) => {
  const [state, dispatch] = useReducer(layoutReducer, layoutState);

  return (
    <LayoutContext.Provider value={state as typeof layoutState}>
      <Toolbar />
      {props.children}
    </LayoutContext.Provider>
  );
};

export default Layout;
