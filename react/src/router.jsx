import {createBrowserRouter, createRoutesFromElements, Navigate, Route} from "react-router-dom";
import Login from "./views/Login.jsx";
import Signup from "./views/Signup.jsx";
import NotFound from "./views/NotFound.jsx";
import DefaultLayout from "./layouts/DefaultLayout.jsx";
import GuestLayout from "./layouts/GuestLayout.jsx";
import Addresses from "./views/Addresses.jsx";
import AddressForm from "./views/AddressForm.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout/>,
        children: [
            {
                path: '/',
                element: <Navigate to="/addresses"/>
            },
            {
                path: '/addresses',
                element: <Addresses/>
            },
            {
                path: '/addresses/new',
                element: <AddressForm key="create"/>
            },
            {
                path: '/addresses/:id',
                element: <AddressForm key="update"/>
            }
        ]
    },
    {
        path: '/',
        element: <GuestLayout/>,
        children: [
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/signup',
                element: <Signup/>
            }
        ]
    },
    {
        path: "*",
        element: <NotFound/>
    }
])

export default router

