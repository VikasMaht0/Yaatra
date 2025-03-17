import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function CaptainSignup() {

  const navigate = useNavigate();

   const {captain , setCaptain} = React.useContext(CaptainDataContext);
  
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const [vehicleColor, setVehicleColor] = useState('');
    const [vehiclePlate, setVehiclePlate] = useState('');
    const [vehicleCapacity, setVehicleCapacity] = useState('');
    const [vehicleType, setVehicleType] = useState('');

  
  const submitHandler = async(e) => {
    e.preventDefault()
    const captainData = {
      fullname: {
        firstname: firstName,
        lastname: lastName
      },
        email:email,
        password:password,
        vehicle:{
          color:vehicleColor,
          plate:vehiclePlate,
          capacity:vehicleCapacity,
          vehicleType:vehicleType,

        }
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData)

    if(response.status === 201){
      const data = response.data;
      setCaptain(data);
      localStorage.setItem('token',data.token);
      navigate('/captain-home');

    }
   
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setVehicleColor("");
    setVehiclePlate("");
    setVehicleCapacity("");
    setVehicleType("");
  
}
  return (
    <div>
    <div className='p-7 h-screen flex flex-col justify-between'>
 <div>
 <img className='w-14 mb-10' src="https://pngimg.com/d/uber_PNG24.png" alt="" />

<form onSubmit={submitHandler}>

<h1 className='text-base mb-2 font-medium'>What's our Captain's name</h1>
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

<h1 className='text-base mb-2 font-medium'>What's our Captain's email</h1>

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

<h1 className='text-base mb-2 font-medium'>Vehicle Details</h1>

<div className='flex gap-3 mb-5'>
  <input 
    required
    value={vehicleColor}
    onChange={(e) => setVehicleColor(e.target.value)}
    className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base'
    type="text" 
    placeholder='Vehicle Color'
  />
  <input 
    required
    value={vehiclePlate}
    onChange={(e) => setVehiclePlate(e.target.value)}
    className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-base placeholder:text-base'
    type="text" 
    placeholder='Vehicle Plate Number'
  />
</div>

<div className='flex gap-3 mb-5'>
  <input 
    required
    value={vehicleCapacity}
    onChange={(e) => setVehicleCapacity(e.target.value)}
    className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base'
    type="number" 
    placeholder='Vehicle Capacity'
  />
  <select 
    required
    value={vehicleType}
    onChange={(e) => setVehicleType(e.target.value)}
    className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-base'
  >
    <option value="">Select Vehicle Type</option>
    <option value="car">Car</option>
    <option value="auto">Auto</option>
    <option value="moto">Moto</option>
  </select>
</div>

<button 
className='bg-[#111] text-white font-semibold rounded mb-3 px-4 py-2 w-full text-base placeholder:text-sm '>
Create Captain Account</button>

<p className='text-center'>Already have a account? <Link to='/captain-login' className='text-blue-600'>Login here</Link></p>
</form>
 </div>
 <div>
   <p className='text-[8px]'>By proceeding ,you consent to get calls , WhatsApp or SMS messages, including by automated means, from Uber and its affiliates to the number provided.</p>
 </div>
</div>
</div>
  )
}

export default CaptainSignup
