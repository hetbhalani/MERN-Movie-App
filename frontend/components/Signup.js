import React from 'react'
import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Signup() {
  const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    async function submit (e) {
      e.preventDefault();

      try {
          await axios.post("http://localhost:3690/signup",{
            email,password
          })
      } catch (error) {
        console.log(error);
      }
    }
  return (
    <div className='sugnup'>

      <h1>SignUp</h1>
      <form action="POST">
        <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" />
        <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" />
        <input type="submit" onClick={submit} />
      </form>

      <hr>  
        <p>OR</p>
      </hr>

    <Link to='/'>LogIn</Link>
    </div>
)}

export default Signup