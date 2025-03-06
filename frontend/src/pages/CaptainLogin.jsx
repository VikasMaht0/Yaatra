import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function CaptainLogin() {

     const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
        const [captainData, setCaptainData] = useState({});
    
        const submitHandler = (e) => {
            e.preventDefault()
            setCaptainData({
                email:email,
                password:password
            })
        
            setEmail("");
            setPassword("");
        }
    
  return (
    <div>
      <div className='p-7 h-screen flex flex-col justify-between'>
       <div>
       <img className='w-20 mb-3' src="https://pngimg.com/d/uber_PNG24.png" alt="" />

<form onSubmit={submitHandler}>
<h1 className='text-lg mb-2 font-medium'>What's your email</h1>

<input 
  required
  value={email}
  onChange={(e)=>setEmail(e.target.value)}
  className='bg-[#eeeeee] rounded mb-7 px-4 py-2 border w-full text-lg placeholder:text-base ' 
  type="email" 
  placeholder='email@example.com'
/>

<h3 className='text-lg mb-2 font-medium'>Enter Password</h3>

<input 
  required 
  value={password}
  onChange={(e)=>setPassword(e.target.value)}
  className='bg-[#eeee] rounded mb-7 px-4 py-2 border w-full text-lg placeholder:text-base ' 
  type="password" 
  placeholder='password'
/>

<button 
className='bg-[#111] text-white font-semibold rounded mb-3 px-4 py-2 w-full text-lg placeholder:text-base '>
Login</button>

<p className='text-center'>Join a fleet? <Link to='/captain-signup' className='text-blue-600'>Register as a captain</Link></p>
</form>
       </div>
       <div>
        <Link to='/login' className='flex items-center justify-center bg-[#d5622d] text-white font-semibold rounded mb-3 px-4 py-2 w-full text-lg placeholder:text-base '>
        Sign in as User</Link>
       </div>
    </div>
    </div>
  )
}

export default CaptainLogin
