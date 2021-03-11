import React, { useContext } from "react";

import classes from "./NavigationItems.module.scss";
import NavigationItem from "./NavigationItem/NavigationItem";
import { LayoutContext } from "../../../containers/Layout/Layout";

const NavigationItems: React.FC = () => {
  const state = useContext(LayoutContext);

  let navLists: typeof state.nav.signedIn | typeof state.nav.signedOut = state.nav.signedOut;
  if (state.userSignedIn) {
    navLists = state.nav.signedIn;
  }
  const navArray = Object.entries(navLists)
  return (
    <nav>
      { navArray.map((navList, index) => {
        const key = 0;
        const value = 1;

        return (
          <NavigationItem
            key={navList[key]}
            text={navList[value].text}
            link={navList[value].link}
            class={navList[value].text === "Join Now" ? classes.JoinNowStyle : undefined}
          />
        );
      })}
    </nav>
  );
};

export default NavigationItems;
