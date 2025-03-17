import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function UserLogout() {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate('/login'); // If no token, redirect immediately
            return;
        }

        axios.get(`${import.meta.env.VITE_API_URL}/user/logout`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            if (response.status === 200) { // Correct status check
                localStorage.removeItem('token'); // Remove token after successful logout
                navigate('/login'); // Navigate after logout
            }
        }).catch((error) => {
            console.error('Logout failed:', error);
            navigate('/login'); // Redirect to login even if an error occurs
        });
    }, [token, navigate]); // Dependency array to avoid re-running

    // return null; // No need to return an empty div
}

export default UserLogout;
