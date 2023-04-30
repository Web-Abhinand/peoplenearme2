import React, { useState } from 'react'
import { Button, Card, Alert, Form } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import { db } from '../firebase'
import { collection, doc, setDoc, getDocs,query,where} from "firebase/firestore";
import { useEffect } from 'react';
function Dashboard() {
  const { currentUser, logout } = useAuth()
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const [events, setEvents] = useState([]);
  async function handleLogout() {
    try {
      await logout();
      navigate('/login');
    } catch {
      setError("Failed to log out")
    }
  }
  // code to enter data from form to firebase database

  async function handleSubmit(event) {
    event.preventDefault();
    const { name, date, location } = event.target.elements;
    try {
      const eventsRef = collection(db, "events"); // create a reference to the events collection
      const newEventRef = doc(eventsRef); // create a new document reference in the events collection
      await setDoc(newEventRef, {
        name: name.value,
        date: date.value,
        location: location.value
      }); // set the data for the new document
      alert('Event added successfully!');
    } catch (error) {
      alert(error.message);
    }
  }

  async function handleDisplayData() {
    try {
      const eventsRef = collection(db, "events");
      const querySnapshot = await getDocs(query(collection(db, "events"), where("location", "==", "kochi")));
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setEvents(data);
    } catch (error) {
      console.log(error);
    }
  }

  // useEffect(() => {
  //   getEvents();
  // }, []);



  return (
    <>
      <header style={{ width: '100%', border: '1px solid red', display: 'flex', justifyContent: 'space-between', position: 'fixed', top: "0", left: '0' }}>
        <div style={{ width: '20%' }}>
          <h1>LOGO</h1>
        </div>
        <div style={{ with: '60%', display: 'flex', alignItems: 'center', marginRight: '1rem' }}>
          <Link href='/login' onClick={handleLogout}>LogOut</Link>
        </div>
      </header>
      <h1>Dashboard</h1>
      <Card>
        <Card.Body>
          <h2 className='text-center mb-4'>Profile</h2>
          {error && <Alert variant='danger'>{error}</Alert>}
          <strong>Email:</strong>{currentUser.email}
        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2'>
        <Form onSubmit={handleSubmit}>
          <Form.Group id='name'>
            <Form.Label>Place</Form.Label>
            <Form.Control type='text' required name="name"></Form.Control>
          </Form.Group>
          <Form.Group id='date'>
            <Form.Label>Date</Form.Label>
            <Form.Control type='date' required name="date"></Form.Control>
          </Form.Group>
          <Form.Group id='location'>
            <Form.Label>Location</Form.Label>
            <Form.Control type='text'  required name="location"></Form.Control>
          </Form.Group>
          <Button type='submit' className='w-100 mt-4'>Submit</Button>
        </Form>
      </div>
      <div className='w-100 text-center mt-2'>
      <Button onClick={handleDisplayData}>Display Data</Button>
    </div>
      <div className='hello'>
      {events.map((event) => (
      <div key={event.id}>
        <h3>{event.name}</h3>
        <p>Date: {event.date}</p>
        <p>Location: {event.location}</p>
      </div>
  ))}
      </div>
    </>
  )
}

export default Dashboard