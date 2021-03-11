import React from "react";

import classes from "./Toolbar.module.scss";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

const toolbar: React.FC = () => {
  return (
    <header className={classes.Toolbar}>
      <div>
        <div className={classes.Logo}>
          <Logo />
        </div>
      </div>
      <NavigationItems />
    </header>
  );
};

export default toolbar;
