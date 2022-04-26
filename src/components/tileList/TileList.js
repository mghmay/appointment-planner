import React from "react";
import Tile from "../tile/Tile";

export default function TileList({ 
  contacts, 
  appointments, 
  isContact, 
  handleRemoveContact, 
  handleRemoveAppointment
 }) {
  return (
    <>
      {
        isContact && contacts.length > 0 ? 
          contacts.map((contact) => {
          return <Tile 
                    contact={contact}
                    key={contact.id}
                    value={contact.id}
                    handleRemoveContact={handleRemoveContact}
                    isContact={isContact}
                  /> 
          }) : !isContact && appointments.length > 0 ?
              appointments.map((appointment) => {
                return <Tile 
                        appointment={appointment}
                        key={appointment.id}
                        value={appointment.id}
                        handleRemoveAppointment={handleRemoveAppointment}
                        isContact={isContact}
                      />
              }) : <p>Nothing to show here!</p>
        }
    </>
  );
};
