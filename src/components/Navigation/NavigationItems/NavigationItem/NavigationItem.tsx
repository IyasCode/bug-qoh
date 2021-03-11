import React from "react";
import { Link, NavLink } from "react-router-dom";

import classes from "./NavigationItem.module.scss";

interface NavigationItemProps {
  link: string
  text: string
  class?: string
}

const navigationItem: React.FC<NavigationItemProps> = (props) => {
  return (
    <Link
      to={props.link}
      className={props.class ? [props.class, classes.NavigationItem].join(" ") : classes.NavigationItem }
      //onClick={props.navClicked}
    >
      {props.text}
    </Link>
  );
};

export default navigationItem;
