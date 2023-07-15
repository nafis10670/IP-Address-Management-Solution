import React from 'react';
import {Outlet} from "react-router-dom";

function GuestLayout(props) {
    return (
        <div><Outlet/>></div>
    );
}

export default GuestLayout;
