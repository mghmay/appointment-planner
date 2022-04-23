import React from "react";
import Tile from "../tile/Tile"

export default function TileList({ contacts, appointments, isContact }) {
  return (
    <>
      {
        isContact ? 
          contacts.map((contact) => {
          return <Tile 
                    contact={contact}
                    key={contact.id}
                  /> 
          }) :
              appointments.map((appointment) => {
                return <Tile 
                        appointment={appointment}
                        key={appointment.id}
                      />
              })
        }
    </>
  );
};
