import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function submit(e) {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3690/signup", {
        email,
        password
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='container mt-5'>
      <h1 className='text-center'>Sign Up</h1>
      <form onSubmit={submit} className='bg-light p-4 rounded shadow mx-auto' style={{ maxWidth: '400px', minHeight: '340px'  }}>
        <div className='mb-4'>
          <label htmlFor='email' className='form-label'>Email</label>
          <input
            type='email'
            className='form-control'
            id='email'
            placeholder='Enter your email'
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='mb-5'>
          <label htmlFor='password' className='form-label'>Password</label>
          <input
            type='password'
            className='form-control'
            id='password'
            placeholder='Enter your password'
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type='submit' className='btn btn-primary w-100'>
          Sign Up
        </button>

        <div className='mt-4 float-start'>Already have an account?<Link className='ms-1' to='/login'>Login</Link></div>
      </form>

      
    </div>
  );
}

export default Signup;
