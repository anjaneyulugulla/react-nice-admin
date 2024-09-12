import React from "react";
import { useNavigate } from "react-router-dom";

import { authLogout } from "./Auth";

const Logout = () => {
    authLogout();
    const navigate = useNavigate();
    navigate('/login');
};

export default Logout;
