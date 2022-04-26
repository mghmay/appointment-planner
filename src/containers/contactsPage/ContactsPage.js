import React, { useState, useEffect } from "react";
import ContactForm from "../../components/contactForm/ContactForm";
import TileList from "../../components/tileList/TileList";

export const ContactsPage = ({ 
  contacts,
  addContact, 
  handleRemoveContact
  }) => {
  const [contactName, setContactName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isDuplicate, setIsDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isDuplicate) {
      alert("This contact already exists!")
      return;
    }
    addContact( contactName, email, phone );
    setContactName("");
    setEmail("");
    setPhone("");
  };

  useEffect(() => {
    const checkDuplicate = () => {
      const find = contacts.find( contact => contact.contactName.toLowerCase() === contactName.toLowerCase())
      if (find !== undefined) {
        return true;
      }
      return false;
    }
    
    if (checkDuplicate()) {
      setIsDuplicate(true)
    } else {
      setIsDuplicate(false)
    }
    console.log(isDuplicate)
  }, [contacts, contactName, isDuplicate]);

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
         handleRemoveContact={handleRemoveContact}
         />
      </section>
    </div>
  );
};
