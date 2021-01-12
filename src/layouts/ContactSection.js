import React from "react";
import Form from "../components/form/Form";
import "./ContactSection.scss";
import Fade from "react-reveal/Fade";

const ContactSection = () => {
  return (
    <>
      <div className="overlay"></div>

      <section className="section-padding">
        <div className="wrapper">
          <div className="contact-box margin-top">
            <div className="heading-container subpages-heading">
              <Fade>
                <h2 className="section-heading">contact</h2>
              </Fade>
            </div>
            <Form />
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
