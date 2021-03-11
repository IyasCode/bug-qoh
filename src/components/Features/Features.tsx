import React from "react";

import classes from "./Features.module.scss";
import interactiveUiIcon from "../../assets/images/feature/interactive-ui-vector.png";
import bugTrackIcon from "../../assets/images/feature/bug-track-vector.png";
import teamworkIcon from "../../assets/images/feature/teamwork-vector.png";
import featureBackgroundPic from "../../assets/images/background/feature-background.png";

const features: React.FC = () => {
  return (
    <section className={classes.Features}>
      <img
        className={classes.FeatureBackground}
        src={featureBackgroundPic}
        alt="feture background pic"
      />
      <h1 className={classes.Title}>Why Bug Qoh?</h1>
      <div className={classes.FeatureBoxes}>
        <div className={classes.FeatureBox}>
          <figure className={classes.FeatureBoxIcon}>
            <img
              className={classes.InteractiveUiIcon}
              src={interactiveUiIcon}
              alt="interactive UI icon"
            />
          </figure>
          <div className={classes.FeatureDescription}>
            <h2 className={classes.FeatureBoxTitle}>Interactive UI</h2>
            <p className={classes.FeatureBoxPhrase}>
              In order to deliver the best experience to our users, Bug Qoh
              provides a simple yet elegant UI for any user that can easily
              interact with the app at first glance.
            </p>
            <blockquote className={classes.Blockquote}>
              <p className={classes.BlockquoteTitle}>
                "There is no second chance to make a first imppression"
              </p>
              <p className={classes.BlockquoteCredit}>someone</p>
            </blockquote>
          </div>
        </div>

        <div className={classes.FeatureBox}>
          <figure className={classes.FeatureBoxIcon}>
            <img
              className={classes.BugTrackIcon}
              src={bugTrackIcon}
              alt="bug track icon"
            />
          </figure>
          <div className={classes.FeatureDescription}>
            <h2 className={classes.FeatureBoxTitle}>Log and track bugs</h2>
            <p className={classes.FeatureBoxPhrase}>
              Track bug directly in Bug Qoh, proper documentation can be add and
              many more. Bug Qoh is an easy-to-use bug tracker that has
              everything you need to manage projects.
            </p>
            <blockquote className={classes.Blockquote}>
              <p className={classes.BlockquoteTitle}>
                "Work smart is always better than work hard"
              </p>
              <p className={classes.BlockquoteCredit}>someone</p>
            </blockquote>
          </div>
        </div>

        <div className={classes.FeatureBox}>
          <figure className={classes.FeatureBoxIcon}>
            <img
              className={classes.TeamworkIcon}
              src={teamworkIcon}
              alt="team managment icon"
            />
          </figure>
          <div className={classes.FeatureDescription}>
            <h2 className={classes.FeatureBoxTitle}>Team management</h2>
            <p className={classes.FeatureBoxPhrase}>
              tracking a bug can be difficult espacially when you are working
              with a team. Bug Qoh provide the right tools for you to check in
              with your team and see what everyone is working on.
            </p>
            <blockquote className={classes.Blockquote}>
              <p className={classes.BlockquoteTitle}>
                "Alone we can do so little, together we can do so much"
              </p>
              <p className={classes.BlockquoteCredit}>someone</p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default features;
