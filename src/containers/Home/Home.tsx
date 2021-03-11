import React from "react";

import classes from "./Home.module.scss";
import Header from "../../components/Header/Header";
import Features from "../../components/Features/Features";
import Footer from "../../components/Footer/Footer";

const Home: React.FC = () => {
  return (
    <main className={classes.Home}>
      <Header />
      <Features />
      <Footer />
    </main>
  );
};

export default Home;
