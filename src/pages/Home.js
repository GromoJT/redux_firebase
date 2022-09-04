import React from 'react'
import { Navigate } from 'react-router-dom';
import {UserAuth} from '../contexs/AuthContext'
function Home() {
  
  

  const {user} = UserAuth();
  

  if(!user){
    return <Navigate to='/login'/>
  }


  return (
    <div> This is Home page! {user && user.email}</div>
  )
}

export default Home