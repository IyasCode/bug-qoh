import React from "react";

import LogoURL from "../../assets/images/Logo/bug-qoh-logo.png";
import classes from "./Logo.module.scss";

const logo: React.FC = () => (
  <img className={classes.Logo} src={LogoURL} alt="Bug Qoh Logo" />
);

export default logo;
