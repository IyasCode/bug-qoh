import React from "react";

import classes from "./HomeBackground.module.scss";
import homeBackgroundImage from "../../assets/images/background/home-background.png";

const homeBackground: React.FC = () => (
  <img
    className={classes.HomeBackground}
    src={homeBackgroundImage}
    alt="background image"
  />
);

export default homeBackground;
