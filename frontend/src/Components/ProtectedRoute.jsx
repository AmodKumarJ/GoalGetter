import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children }) => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    console.log("isAuthenticated : ",isAuthenticated)
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/signin');
        }
    }, [isAuthenticated, navigate]);

    if (!isAuthenticated) {
        return null; 
    }

    return children;
};

export default ProtectedRoute;
