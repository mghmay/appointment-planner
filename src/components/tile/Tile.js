import React from "react";
import { getDateString, getTimeString } from "../functions/Functions";

export default function Tile({ contact, appointment }) {
  return (
    <div className="tile-container">
    {
      contact ? 
        <>
          <h3>{contact.contactName}</h3>
          <p>{contact.phone}</p>
          <p>{contact.email}</p>
        </>
         :
          <>
          <h3>{appointment.title}</h3>
          <p>{appointment.attending.join(', ')}</p>
          <p>{`${getTimeString(appointment.rawDate)} - ${getDateString(appointment.rawDate)}`}</p>
          </>
    }
    </div>
  );
};

// getDateString(appointment.date) + ` - ` + getTimeString(appointment.time)