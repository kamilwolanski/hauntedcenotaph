import React, { useState } from "react";
import FormSignUp from "./FormSignUp";
import FormSuccess from './FormSuccess';
import FormFailure from './FormFailure';
import Fade from "react-reveal/Fade";


const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(null);

  function submitForm(response) {
    setIsSubmitted(response);
  }

  const renderMessage = () => {
    if (isSubmitted) {
      return <FormSuccess/>;
    } else if (isSubmitted === false) {
      return <FormFailure/>;
    } else if (!isSubmitted) {
      return <FormSignUp submitForm={submitForm} />;
    }
  };

  return (
    <>
    <Fade bottom>
      <div className="form-container">
          <div className="form-content-left">
            
          </div>
          <div className="form-content-right">
              {renderMessage()}
          </div>
      </div>
      </Fade>
    </>
  );
};

export default Form;
