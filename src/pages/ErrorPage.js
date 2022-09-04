import React from 'react'
import { Navigate } from 'react-router-dom'
import {UserAuth} from '../contexs/AuthContext'

function ErrorPage() {
  const {user} = UserAuth()

  if(!user){
    return <Navigate to='/login'/>
  }
  return (
    <div>Error! Page not found!</div>
  )
}

export default ErrorPage