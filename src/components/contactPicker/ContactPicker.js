import React from "react";

export default function ContactPicker({ contacts, handleCheckboxChange }) {
  return (
    <div>
      {contacts.length > 0 ?
        contacts.map((contact) => {
          return (
              <div key={contact.contactName}>
                <input
                  name={contact.contactName}
                  id={contact.contactName}
                  type="checkbox"
                  className="contact-input"
                  value={contact}
                  onChange={handleCheckboxChange}
                  key={contact.id}
                />
                <label
                  htmlFor={contact.contactName}
                  key={`${contact.id}-label`}
                >
                  {contact.contactName}
                </label>
                <br />
              </div>
            )
        }) : <p>No contacts!</p>
      }
    </div>
  );
};
