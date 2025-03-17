import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import { useContext } from 'react';
import axios from 'axios';

const CaptainProtectWrapper = ({ children }) => {
    const navigate = useNavigate();
    const {captain, setCaptain} = useContext(CaptainDataContext)
    const token = localStorage.getItem('token'); // Correct way to retrieve token
    const [isLoading , setIsLoading] = useState(true)



    useEffect(() => {
        if (!token) {
            navigate('/captain-login');
        }
    }, [token, navigate]); // Ensure dependencies are properly passed

    axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`,{
        headers:{
            Authorization: `Bearer ${token}`
                }
    }).then((response)=>{
        if(response.status === 2000){
            setCaptain(response.data.captain)
            setIsLoading(false)
        }
    }).catch((error)=>{
        console.log(error)
        localStorage.removeItem('token')
        navigate('/captain-login')
    })

    if(isLoading){
        return <h1>Loading...</h1>
    }



    return token ? <>{children}</> : null; // Prevent rendering children if redirecting
};

export default CaptainProtectWrapper;
