import React from "react";

export default function ContactForm(props){
  const {
    contactName,
    setContactName,
    phone,
    setPhone,
    email,
    setEmail,
    handleSubmit
  } = props;
  return (
      <>
        <form 
          onSubmit={handleSubmit}
        >
          <label 
            htmlFor="name">
            Contact name:
          </label>
          <input 
            type="text" 
            id="name"
            name="name"
            onChange={(e) => setContactName(e.target.value)} 
            required
            value={contactName} 
          />
          <label 
            htmlFor="phone">
            Contact phone number:
          </label>
          <input 
            type="tel" 
            id="phone"
            name="phone"
            pattern="[0-9]{11}"
            onChange={(e) => setPhone(e.target.value)} 
            value={phone} 
          />
          <br />
          <label 
            htmlFor="email">
            Contact email address:
          </label>
          <input 
            type="email" 
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)} 
            value={email} 
          />
          <button 
            type="submit">
            Submit
          </button>
        </form>
      </>
  );
};
