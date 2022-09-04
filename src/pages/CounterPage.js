import React from 'react'
import { Container } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import Counter from '../components/counter/Counter';
import {UserAuth} from '../contexs/AuthContext'
function CounterPage() {

  const {user} = UserAuth()

  if(!user){
    return <Navigate to='/login'/>
  }

  return (
    <Container className="d-flex align-items-top justify-content-left mt-5"
      style={{minHeight: "100%"}}
    >
      <div className='w-100' style={{maxWidth:"300px"}}>
      <Counter/>
      </div>
      
    </Container>
  )
}

export default CounterPage