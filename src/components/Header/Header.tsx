import React from "react";

import classes from "./Header.module.scss";
import homeBackgroundPic from "../../assets/images/background/home-background.png";

const header: React.FC = () => {
  console.log(window);
  return (
    <header className={classes.Header}>
      <img
        className={classes.HeaderBackground}
        src={homeBackgroundPic}
        alt="home background"
      />
      <div className={classes.InvisibleBox}></div>
      <div>
        <p className={classes.WelcomeText}>welcome to</p>
        <h1 className={classes.BugQohText}>Bug Qoh</h1>
      </div>
      <article className={classes.Phrase}>
        <p className={classes.Line1}>Bug Qoh is a simple bug tracker</p>
        <p className={classes.Line2}>
          for you and your team to work easily and efficiently
        </p>
        <div className={classes.ButtonBox}>
          <button className={classes.Button}>Free Try</button>
        </div>
      </article>
    </header>
  );
};

export default header;
