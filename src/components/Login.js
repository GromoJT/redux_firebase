import React, {useState} from "react"
import { Form, Button, Card, Alert, } from "react-bootstrap"
import {UserAuth} from '../contexs/AuthContext'
import { Link,useNavigate} from "react-router-dom"



const Login = () => {
  
  const [emailRef,setEmailRef]= useState('')
  const [passwordRef,setPasswordRef]= useState('')
  const [error,setError]= useState('')
  const navigate = useNavigate()
  const {signIn} = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try{
      await signIn(emailRef,passwordRef)
      navigate('/')
    }catch (e){
      setError(e.message)
      console.log(e.message)
    }
  }

  
  
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" onChange={(e)=>setEmailRef(e.target.value)} required />
            </Form.Group>

            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" onChange={(e)=>setPasswordRef(e.target.value)} required />
            </Form.Group>

            <Button className="w-100 mt-4" type="submit">Login</Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </>
  )
}

export default Login;