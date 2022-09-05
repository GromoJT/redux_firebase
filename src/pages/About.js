import React from 'react'
import Signup from '../components/Signup'
import {Container} from 'react-bootstrap'
import {UserAuth} from '../contexs/AuthContext'
import { Navigate } from 'react-router-dom'
import ToDoList from '../components/todoComponent'
function About(todos) {

  const {user} = UserAuth()

  if(!user){
    return <Navigate to='/login'/>
  }


 




  return (

    

    <Container className="d-flex align-items-center justify-content-center"
      style={{minHeight: "100vh"}}
    >
      <div className='w-100' >
      <ToDoList/>
      </div>
      
    </Container>
    
  )
}

export default About