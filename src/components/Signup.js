import React, { useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { UserAuth } from '../contexs/AuthContext'
import { useNavigate } from "react-router-dom"

export default function Signup() {

  const [emailRef,setEmailRef]= useState('')
  const [passwordRef,setPasswordRef]= useState('')
  const [passwordConfRef,setPasswordConfRef]= useState('')
  const [error,setError]= useState('')
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  const {createUser} = UserAuth()

  const handleSubmit = async (e) =>{
    e.preventDefault();
    setError('')
    setLoading(false);

    

    try{
      if(passwordRef !== passwordConfRef){
        e.preventDefault();
        return setError('Passwords do not match')
      }
      await createUser(emailRef,passwordRef)
      setEmailRef(null)
      setPasswordRef(null)
      navigate('/login')
    }catch (err){
      
      setError(err.message)
      console.log(err.message)

    }finally{
      setLoading(true)
    }
    
  }


  /*
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfRef = useRef();

  const {signup} = useAuth()
  const [error,setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e){
    e.preventDefault()


    if(passwordRef.current.value === passwordConfRef.current.value){
      return setError('Passwords do not match')
    }
      
      try{
        setError('');
        setLoading(true);
        await signup(emailRef.current.value,passwordRef.current.value);
      }catch{
        setError('Faild to create an account')
      };
      setLoading(false)
  }
 */

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" onChange={ (e) => setEmailRef(e.target.value)} required />
            </Form.Group>

            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" onChange={(e)=>setPasswordRef(e.target.value)} required />
            </Form.Group>

            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" onChange={(e)=>setPasswordConfRef(e.target.value)} required />
            </Form.Group>
            <Button disabled={!loading} className="w-100 mt-4" type="submit">Sign Up</Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <a href="/login">Log In</a>
      </div>
    </>
  )
}