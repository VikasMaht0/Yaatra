import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserProtectWrapper = ({ children }) => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token'); // Correct way to retrieve token

    useEffect(() => {
        if (!token) {
            navigate('/login');
        }
    }, [token, navigate]); // Ensure dependencies are properly passed

    return token ? <>{children}</> : null; // Prevent rendering children if redirecting
};

export default UserProtectWrapper;
