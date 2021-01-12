import React from "react";
import "./Footer.scss";

const Footer = ({className}) => {
  const cuurentYear = new Date().getFullYear();

  return (
    <footer className={`footer section-padding ${className}`}>
      <div className="wrapper">
        <p>
          {cuurentYear} © haunted cenotaph | designed and developed by Kamil Wolański
        </p>
      </div>
    </footer>
  );
};

export default Footer;
