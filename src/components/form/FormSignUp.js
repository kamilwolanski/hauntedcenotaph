import React from "react";
import validate from "./validateInfo";
import useForm from "./useForm";

// import './ContactUs.css';

const FormSignUp = ({ submitForm }) => {
  const { values, errors, isSubmitting, handleChange, handleSubmit } = useForm(
    submitForm,
    validate
  );

  return (
    <>
      <div className="contact-container">
        <h2 className="form-title">WRITE TO US</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="hidden" onChange={handleChange} name="contact_number" />
          {/* <label>Name</label> */}
          <input
            type="text"
            onChange={handleChange}
            name="name"
            value={values.name}
            placeholder="Enter your name"
          />
          {errors.name ? <p className="error-message">{errors.name}</p> : <p className="fake-error">x</p>}

          {/* <label>Email</label> */}
          <input
            type="email"
            onChange={handleChange}
            name="email"
            value={values.email}
            placeholder="Enter your email"
          />
          {errors.email ? <p className="error-message">{errors.email}</p> : <p className="fake-error">x</p>}

          {/* <label>Subject</label> */}
          <input
            type="text"
            onChange={handleChange}
            name="subject"
            value={values.subject}
            placeholder="Enter your subject"
          />
          {errors.subject ? <p className="error-message">{errors.subject}</p> : <p className="fake-error">x</p>}

          {/* <label>Message</label> */}
          <textarea
            name="message"
            onChange={handleChange}
            placeholder="Enter your message"
          />
          {errors.message ? <p className="error-message">{errors.message}</p> : <p className="fake-error">x</p>}

          <input type="submit" value="Send" disabled={isSubmitting && "disabled"}/>
        </form>
      </div>
    </>
  );
};

export default FormSignUp;
