import React from "react";

const HeaderHeading = ({ headingText }) => {
  return (
    <div className="header__banner">
      <h1>{headingText.h1}</h1>
      <span>{headingText.span}</span>
    </div>
  );
};

export default HeaderHeading;
