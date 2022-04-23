import React, { useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"

export default function AppointmentForm(props) {
  const { 
    contacts,
    title,
    rawDate,
    setRawDate,
    handleCheckboxChange,
    handleChangeTitle,
    handleSubmit
  } = props;
  return (
    <>
      <h1>I'm an appointment form!</h1>
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
          onChange={handleChangeTitle} 
          value={title} 
        />

        <p>Who are you going with?</p>
        {contacts.map((contact) => {
          return (
              <div>
                <input
                  name={contact.name}
                  id={contact.name}
                  type="checkbox"
                  className="contact-input"
                  value={contact}
                  onChange={handleCheckboxChange}
                  key={contact.id}
                />
                <label
                  htmlFor={contact.name}>
                  {contact.name}
                </label>
                <br />
              </div>
            )
        })}
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