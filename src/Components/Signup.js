import React, {useRef,useState} from 'react'
import {Button,Form,Card,Alert} from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext';
import { AuthProvieder } from '../contexts/AuthContext';

const Signup = () => {
    const emailRef=useRef();
    const passwordRef=useRef();
    const passwordConfirmRef=useRef();
    const {signup,currentUser}=useAuth();
    const [error,setError] = useState('');
    const [loading,setLoading] = useState(false);

    function handleSubmit(e){
        e.preventDefault();
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
        console.log(passwordConfirmRef.current.value);
        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            console.log('Passwords do not match');
            return setError('Passwords do not match')
        }
        else if(emailRef.current.value,passwordRef.current.value){
            setError('');
            setLoading(true);
            signup(emailRef.current.value,passwordRef.current.value);
            console.log('Account created')
        }
        else{
            setError('Failed to create an account')
            console.log('account not created')
        }
    }
  return (
    <>
        <Card>
            <Card.Body>
                <h2 className='text-center mb-4'>Sign Up</h2>
                {currentUser && currentUser.email}
                {error && <Alert className='alert alert-danger'>{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id='email'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' ref={emailRef} required></Form.Control>
                    </Form.Group>
                    <Form.Group id='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' ref={passwordRef} required></Form.Control>
                    </Form.Group>
                    <Form.Group id='passwordConfirm'>
                        <Form.Label>Password Confirm</Form.Label>
                        <Form.Control type='password' ref={passwordConfirmRef} required></Form.Control>
                    </Form.Group>
                    <Button type='submit' disabled={loading} className='w-100 mt-4'>Sign Up</Button>
                </Form>
            </Card.Body>
        </Card>
        <div className='w-100 text-center mt-2'>
            Already have an account? Log In
        </div>
    </>
  )
}

export default Signup