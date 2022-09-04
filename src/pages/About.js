import React from 'react'
import Signup from '../components/Signup'
import {Container} from 'react-bootstrap'
import {UserAuth} from '../contexs/AuthContext'
import { Navigate } from 'react-router-dom'
function About() {

  const {user} = UserAuth()

  if(!user){
    return <Navigate to='/login'/>
  }

  return (

    

    <Container className="d-flex align-items-center justify-content-center"
      style={{minHeight: "100vh"}}
    >
      <div className='w-100' style={{maxWidth:"300px"}}>
      <Signup/>
      </div>
      
    </Container>
    
  )
}

export default About