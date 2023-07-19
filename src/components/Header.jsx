import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <section>
      <header className={classes.header}>
        <h1>Online Judge</h1>
      </header>
    </section>
  );
};

export default Header;
