import React from 'react';
import {Outlet} from "react-router-dom";

function DefaultLayout(props) {
    return (
        <div><Outlet/></div>
    );
}

export default DefaultLayout;
