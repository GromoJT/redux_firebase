import React from 'react'
import { Navigate } from 'react-router-dom';
import {UserAuth} from '../contexs/AuthContext'
import HomeAlert from '../components/hompageComponentAlert';
import { Container } from 'react-bootstrap';
function Home() {
  
  

  const {user} = UserAuth();
  

  if(!user){
    return <Navigate to='/login'/>
  }


  return (
    <Container className='mt-2' >
      <div className='mb-2'> This is Home page! {user && user.email}</div>
      <HomeAlert />
    </Container>
    
  )
}

export default Home