import React from "react";
import hand from "../../img/Mano cornuta.png";
const FormFailure = () => {
  return (
    <>
      <div className="contact-container failure">
        <p className="message">
          Something went wrong! Try to send message in some other time
        </p>
        <div className="hand-rock">
          <img src={hand} alt="" />
        </div>
      </div>
    </>
  );
};

export default FormFailure;
