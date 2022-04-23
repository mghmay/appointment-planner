import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  
  const [ appointments, setAppointments ] = useState([
    {
      title: 'Meet-up',
      attending: ['Bill'],
      date: 20220522,
      time: 1545,
      id: 34567
    },
    {
      title: 'Football match',
      attending: ['Fred', 'Jessy'],
      date: 20220601,
      time: 1200,
      id: 12345
    },
    {
      title: 'Party',
      attending: ['Bill', 'Jessy', 'Nancy'],
      date: 20220724,
      time: 2000,
      id: 23456
    },
  ]);
  const [ contacts, setContacts] = useState([
    {
      name: 'Fred',
      phone: '01234567123',
      email: 'Fred@Fred.com',
      id: 12345
    },
    {
      name: 'Jessy',
      phone: '01234567120',
      email: 'Jessy@Jessy.com',
      id: 23456
    },
    {
      name: 'Bill',
      phone: '01234567192',
      email: 'Bill@Bill.com',
      id: 34567
    }
  ]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  const addContact = (contact) => {
    setContacts((prev) => [
      contact,
      ...prev
    ])
  }

  const addAppointment = (appointment) => {
    setAppointments((prev) => [
      appointment,
      ...prev
    ])
  }

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
            <ContactsPage 
            contacts={contacts} 
            addContact={addContact}/>
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            <AppointmentsPage 
            contacts={contacts}
            appointments={appointments} 
            addAppointments={setAppointments}/>
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
