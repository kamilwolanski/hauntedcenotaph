import React from "react";
import hand from '../../img/Mano cornuta.png';
const FormSuccess = () => {
  return (
    <>
      <div className="contact-container success">
        <p className="message">We have received your message!</p>
        <div className="hand-rock">
          <img src={hand} alt=""/>
        </div>
      </div>
    </>
  );
};

export default FormSuccess;
