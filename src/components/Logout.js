import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { authLogout } from "./Auth";

const Logout = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        authLogout();
        navigate('/login');
    };

    useEffect (() => {
        handleLogout();
    },[]);
    
    return <div>Logging out...</div>;
};

export default Logout;
