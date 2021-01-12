import React from "react";
import "./Header.scss";

const Header = ({ children, nameOfClass }) => {

  return (
    <header className={`header ${nameOfClass?nameOfClass:''}`}>
      {children}
    </header>
  );
};

export default Header;
