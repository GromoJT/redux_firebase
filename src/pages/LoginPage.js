import React from 'react'
import Login from '../components/Login'
import { Container } from 'react-bootstrap'
function LoginPage() {
  return (
    <Container className="d-flex align-items-center justify-content-center"
      style={{minHeight: "100vh"}}
    >
      <div className='w-100' style={{maxWidth:"300px"}}>
      <Login/>
      </div>
      
    </Container>
  )
}

export default LoginPage