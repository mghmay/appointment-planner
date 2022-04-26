import React, { useState } from "react";
import ContactForm from "../../components/contactForm/ContactForm";
import TileList from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact }) => {
  const [contactName, setContactName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (contacts.map(contact => contact.contactName.toLowerCase()).includes(contactName.toLowerCase())){ 
      alert('Contact already exists!')
      return;      
    }
    addContact( contactName, email, phone );
    setContactName("");
    setEmail("");
    setPhone("");
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
        contactName={contactName}
        setContactName={setContactName}
        phone={phone}
        setPhone={setPhone}
        email={email}
        setEmail={setEmail}
        handleSubmit={handleSubmit}
      />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList 
         contacts={contacts} 
         isContact={true}
         />
      </section>
    </div>
  );
};
