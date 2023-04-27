import React, {useState} from 'react'
import { Button, Card, Alert} from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
  const { currentUser,logout} = useAuth()
  const [error, setError] = useState('')
  const navigate = useNavigate()
  async function handleLogout() {
    try{
      await logout();
      navigate('/login');
    }catch{
      setError("Failed to log out")
    }
  }


  return (
    <>
      <Card>
        <Card.Body>
         <h2 className='text-center mb-4'>Profile</h2>
          {error && <Alert variant='danger'>{error}</Alert>}
          <strong>Email:</strong>{currentUser.email} 
        </Card.Body> 
      </Card>
      <div className='w-100 text-center mt-2'>
        <Button variant='link' onClick={handleLogout}>Log Out</Button>
      </div>
    </>
  )
}

export default Dashboard