import React from 'react';
import {Navigate, Outlet} from "react-router-dom";
import {useStateContext} from "../contexts/ContextProvider.jsx";

function GuestLayout(props) {
    const {token} = useStateContext()

    if (token) {
        return <Navigate to="/"/>
    }

    return (
        <div><Outlet/></div>
    );
}

export default GuestLayout;