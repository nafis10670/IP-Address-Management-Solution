import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import Login from "./views/Login.jsx";
import Signup from "./views/Signup.jsx";
import NotFound from "./views/NotFound.jsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route index element={<Login/>}/>
            <Route path={"/signup"} element={<Signup/>}/>
            <Route path={"*"} element={<NotFound/>}/>

        </Route>
    )
)

// const router = createBrowserRouter([
//     {
//         path: '/',
//         element: <Login/>
//     },
//     {
//         path: '/signup',
//         element: <Signup/>
//     },
//     {
//         path: '*',
//         element: <NotFound/>
//     }
// ])

export default router

