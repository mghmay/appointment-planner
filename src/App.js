
  import React, { useState } from "react";
  import { Routes, Route, Navigate, NavLink } from "react-router-dom";
  
  import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
  import { ContactsPage } from "./containers/contactsPage/ContactsPage";

  import { getNewIdNumber } from "./components/functions/Functions";

function App() {
  
  const [ appointments, setAppointments ] = useState([]);
  const [ contacts, setContacts] = useState([]);
    

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
            />} />
          <Route path={ROUTES.APPOINTMENTS} element={<AppointmentsPage
              appointments={appointments}
              addAppointment={addAppointment}
              contacts={contacts}
            />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
