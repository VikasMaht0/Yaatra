import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function UserSignup() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userData, setUserData] = useState({});

  
      const submitHandler = (e) => {
          e.preventDefault()
          setUserData({
             fullName:{
              firstName:firstName,
              lastName:lastName,
             },
              email:email,
              password:password
          })
         
          console.log(userData);
          setFirstName("");
          setLastName("");
          setEmail("");
          setPassword("");
        
      }
  return (
    <div>
          <div className='p-7 h-screen flex flex-col justify-between'>
       <div>
       <img className='w-14 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />

<form onSubmit={submitHandler}>

<h1 className='text-base mb-2 font-medium'>What's your name</h1>
<div className='flex gap-3 mb-5'>
<input 
  required
  value={firstName}
  onChange={(e)=>setFirstName(e.target.value)}
  className='bg-[#eeeeee] rounded  px-4 py-2 border w-1/2  text-lg placeholder:text-base ' 
  type="text" 
  placeholder='First name'
/>
<input 
  required
  value={lastName}
  onChange={(e)=>setLastName(e.target.value)}
  className='bg-[#eeeeee] rounded  px-4 py-2 border w-1/2 text-base placeholder:text-base ' 
  type="text" 
  placeholder='Last name'
/>

</div>
 
<h1 className='text-base mb-2 font-medium'>What's your email</h1>

<input 
  required
  value={email}
  onChange={(e)=>setEmail(e.target.value)}
  className='bg-[#eeeeee] rounded mb-5 px-4 py-2 border w-full text-base placeholder:text-sm ' 
  type="email" 
  placeholder='email@example.com'
/>

<h3 className='text-base mb-2 font-medium'>Enter Password</h3>

<input 
  required 
  value={password}
  onChange={(e)=>setPassword(e.target.value)}
  className='bg-[#eeee] rounded mb-5 px-4 py-2 border w-full text-base placeholder:text-sm ' 
  type="password" 
  placeholder='password'
/>

<button 
className='bg-[#111] text-white font-semibold rounded mb-3 px-4 py-2 w-full text-base placeholder:text-sm '>
Login</button>

<p className='text-center'>Already have a account? <Link to='/login' className='text-blue-600'>Login here</Link></p>
</form>
       </div>
       <div>
         <p className='text-[8px]'>By proceeding ,you consent to get calls , WhatsApp or SMS messages, including by automated means, from Uber and its affiliates to the number provided.</p>
       </div>
    </div>
    </div>
  )
}

export default UserSignup
