import React from "react";

export default function ContactForm(props){
  const {
    name,
    setName,
    phone,
    setPhone,
    email,
    setEmail,
    handleSubmit
  } = props;
  return (
    <h1>I'm a contact form!</h1>
  );
};
