
  import React, { useState } from "react";
  import { Routes, Route, Navigate, NavLink } from "react-router-dom";
  
  import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
  import { ContactsPage } from "./containers/contactsPage/ContactsPage";

  import { getNewIdNumber } from "./components/functions/Functions";

function App() {
  
  const [ appointments, setAppointments ] = useState([]);
  const [ contacts, setContacts] = useState([
    {
      "contactName": "Mathew George Henry May",
      "email": "mghmay@gmail.com",
      "phone": "07895068818",
      "id": "835fbf65-0e53-4b66-b7ba-123e960fd90e"
    }
  ]);
    

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  const addContact = ( contactName, email, phone ) => {
    const newContact = {
      contactName,
      email,
      phone,
      id: getNewIdNumber()
    }
    setContacts((prev) => [
      newContact,
      ...prev
    ])
  }

  const addAppointment = ( title, attending, rawDate ) => {
    const newAppointment = {
      title,
      attending,
      rawDate,
      id: getNewIdNumber()
    }
    setAppointments((prev) => [
      newAppointment,
      ...prev
    ])
  }

  const removeAppointment = (id) => {
    const filteredAppointments = appointments.filter((appointment => appointment.id !== id))
    setAppointments(() => filteredAppointments)
  }

  const removeContact = (id) => {
    const filteredContacts = contacts.filter((contact => contact.id !== id))
    setContacts(() => filteredContacts)
  }

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} className={({isActive}) => (isActive ? "active" : 'none')}>
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} className={({isActive}) => (isActive ? "active" : 'none')}>
        Appointments
        </NavLink>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Navigate to={ROUTES.CONTACTS} />} />
          <Route path={ROUTES.CONTACTS} element={<ContactsPage 
              contacts={contacts}
              addContact={addContact} 
              handleRemoveContact={removeContact}
            />} />
          <Route path={ROUTES.APPOINTMENTS} element={<AppointmentsPage
              appointments={appointments}
              addAppointment={addAppointment}
              contacts={contacts}
              handleRemoveAppointment={removeAppointment}
            />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
