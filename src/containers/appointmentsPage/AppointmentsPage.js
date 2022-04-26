import React, { useState, useEffect } from "react";
import AppointmentForm from "../../components/appointmentForm/AppointmentForm"
import TileList from "../../components/tileList/TileList";
import { getNewIdNumber, getDateString } from "../../components/functions/Functions"

export const AppointmentsPage = ({
  appointments,
  addAppointment, 
  contacts}) => {
  
  const [ title, setTitle ] = useState("");

  const [ attending, setAttending] = useState([]);
  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      setAttending((prev) => ([
        ...prev,
        e.target.name
      ]))
    } else {
      setAttending(attending.filter(
        item => item !== e.target.name
      ))
    }
  }


  const [ rawDate, setRawDate ] = useState(new Date());

  const [ date, setDate] = useState(null);
  useEffect(() => {
    const newDate = getDateString(rawDate)
    setDate(newDate)
  }, [rawDate])

  const [ time, setTime ] = useState(null);
  useEffect(() => {
    const newTime = rawDate.toTimeString()
    setTime(newTime)
  }, [rawDate])

  const handleSubmit = (e) => {
    e.preventDefault();
    addAppointment( title, attending, date, time);
    setTitle("");
    setAttending([]);
    setRawDate(new Date());
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          rawDate={rawDate}
          setRawDate={setRawDate}
          contacts={contacts}
          title={title}
          setTitle={setTitle}
          handleCheckboxChange={handleCheckboxChange}
          handleSubmit={handleSubmit}
         />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList 
          appointments={appointments}
          isContact={false}  
          />
      </section>
    </div>
  );
};
