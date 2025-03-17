import React, { useContext, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import UserContext,{ UserDataContext } from '../context/UserContext'
import axios from 'axios'

function UserLogin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userData, setUserData] = useState({});

    const {user,setUser} = useContext(UserDataContext)
    const navigate = useNavigate()

    const submitHandler = async(e) => {
        e.preventDefault();

       const userData ={
        email:email,
        password:password
       }
 
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`,userData);
       
      if(response.status === 200){
        const data = response.data
        setUser(data.user)
        localStorage.setItem('token',data.token)
        navigate('/home')
      }

        setEmail("");
        setPassword("");
    }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
       <div>
       <img className='w-14 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />

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

<p className='text-center'>new here? <Link to='/signup' className='text-blue-600'>Create new Account</Link></p>
</form>
       </div>
       <div>
        <Link to='/captain-login' className='flex items-center justify-center bg-[#10b461] text-white font-semibold rounded mb-3 px-4 py-2 w-full text-lg placeholder:text-base '>
        Sign in as Captain</Link>
       </div>
    </div>
  )
}

export default UserLogin
