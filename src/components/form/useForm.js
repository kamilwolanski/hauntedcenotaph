import { useState, useEffect } from "react";
import EmailService from "../../api/EmailService";

const useForm = (submitForm, validate) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ez, setEz] = useState(null);

  const handleChange = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    console.log(e);
    setEz(e);
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    async function fetchData() {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        submitForm(await EmailService.sendEmail(ez));
        setIsSubmitting(false);
      }
    }

    fetchData();
  }, [isSubmitting]);

  return { values, errors, isSubmitting, handleChange, handleSubmit };
};

export default useForm;
