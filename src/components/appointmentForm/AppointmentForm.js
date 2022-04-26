import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import ContactPicker from "../contactPicker/ContactPicker"

export default function AppointmentForm(props) {
  const { 
    contacts,
    title,
    setTitle,
    rawDate,
    setRawDate,
    handleCheckboxChange,
    handleSubmit
  } = props;

  return (
    <>
      <form 
        onSubmit={handleSubmit}
      >
        <label 
          htmlFor="title">
          Appointment title:
        </label>
        <input 
          type="text" 
          id="title"
          name="title"
          onChange={(e) => setTitle(e.target.value)}   
          value={title} 
        />

        <p>Who are you going with?</p>
        <ContactPicker 
          name="contact"
          contacts={contacts}
          handleCheckboxChange={handleCheckboxChange}
        />
        <br />
        
        <label 
          htmlFor="date">
          When is it? (don't forget to pick a time!)
        </label>
        <br />
        <DatePicker
          selected={rawDate}
          onChange={(date) => {setRawDate(date)}}
          minDate={new Date()}
          showTimeSelect
          dateFormat="Pp"
        />
        <button 
          type="submit">
          Submit
        </button>
      </form>
    </>
  );
};