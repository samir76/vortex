import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="flex flex-col h-screen items-center justify-center font-bold wrap text-4xl to-blue-200">
       <p>404 - Page you are after is Not Found, </p>
        <p>Go back to </p> 
       <p><Link className="text-green-600" to="/">Home Page</Link></p>
        
        </div>
  )
}

export default NotFound