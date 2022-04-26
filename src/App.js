
  import React, { useState } from "react";
  import { Routes, Route, Navigate, NavLink } from "react-router-dom";
  
  import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
  import { ContactsPage } from "./containers/contactsPage/ContactsPage";

  import { getNewIdNumber } from "./components/functions/Functions";

function App() {
  
  const [ appointments, setAppointments ] = useState([
    {
      title: 'Meet-up',
      attending: ['Bill'],
      date: 20220522,
      time: 1545,
      id: getNewIdNumber()
    },
    {
      title: 'Football match',
      attending: ['Fred', 'Jessy'],
      date: 20220601,
      time: 1200,
      id: getNewIdNumber()
    },
    {
      title: 'Party',
      attending: ['Bill', 'Jessy', 'Nancy'],
      date: 20220724,
      time: 2000,
      id: getNewIdNumber()
    },
  ]);
  const [ contacts, setContacts] = useState([{
    contactName: 'Fred',
    phone: '01234567123',
    email: 'Fred@Fred.com',
    id: getNewIdNumber()
  },
  {
    contactName: 'Jessy',
    phone: '01234567120',
    email: 'Jessy@Jessy.com',
    id: getNewIdNumber()
  },
  {
    contactName: 'Bill',
    phone: '01234567192',
    email: 'Bill@Bill.com',
    id: getNewIdNumber()
  }
]);
    

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  const addContact = ( contactName, phone, email ) => {
    const newContact = {
      contactName,
      phone,
      email,
      id: getNewIdNumber()
    }
    setContacts((prev) => [
      newContact,
      ...prev
    ])
  }

  const addAppointment = ( title, attending, date, time ) => {
    const newAppointment = {
      title,
      attending,
      date,
      time,
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
