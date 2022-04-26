import React from "react";
import { getDateString, getTimeString } from "../functions/Functions";
import RemoveButton from "../removeButton/RemoveButton"

export default function Tile({ 
  contact, 
  appointment, 
  value,
  handleRemoveContact, 
  handleRemoveAppointment, 
  isContact }) {
  return (
    <div className="tile-container">
    {
      isContact ? 
        <>
          <h3>{contact.contactName}</h3>
          <p>{contact.phone}</p>
          <p>{contact.email}</p>
          <RemoveButton 
            handleClick={handleRemoveContact}
            value={value}
          />
        </>
         :
          <>
            <h3>{appointment.title}</h3>
            <p>{appointment.attending.length > 0 ? appointment.attending.join(', ') : "No attendees"}</p>
            <p>{`${getTimeString(appointment.rawDate)} - ${getDateString(appointment.rawDate)}`}</p>
            <RemoveButton 
              handleClick={handleRemoveAppointment}
              value={value}
            />
          </>
    }
    </div>
  );
};

// getDateString(appointment.date) + ` - ` + getTimeString(appointment.time)