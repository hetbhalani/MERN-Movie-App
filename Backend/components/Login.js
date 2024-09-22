import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Signup from './Signup'

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    async function submit (e) {
      e.preventDefault();

      try {
          await axios.post("http://localhost:3690/",{
            email,password
          })
      } catch (error) {
        console.log(error);
      }
    }
  return (
    <div className='login'>

      <h1>Login</h1>
      <form action="POST">
        <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" />
        <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" />
        <input type="submit" onClick={submit} />
      </form>

      <hr>  
        <p>OR</p>
      </hr>

    <Link to='/signup'>SignUp</Link>
    </div>
  )

}

export default Login