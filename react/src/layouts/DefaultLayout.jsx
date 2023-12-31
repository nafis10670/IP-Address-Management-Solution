import {Link, Navigate, Outlet} from "react-router-dom";
import {useStateContext} from "../contexts/ContextProvider.jsx";
import {useEffect} from "react";
import axiosClient from "../axios.jsx";

function DefaultLayout(props) {
    const {user, token, setUser, setToken} = useStateContext()

    if (!token) {
        return <Navigate to="/login"/>
    }

    const onLogout = (ev) => {
        ev.preventDefault();

        axiosClient.post("/logout").then(() => {
            setUser({})
            setToken(null)
        })
    }

    useEffect(() => {
        axiosClient.get("/user").then(({data}) => {
            setUser(data);
        });
    }, []);

    return (
        <div id="defaultLayout">
            <aside>
                <Link to="/addresses">IP Addresses</Link>
            </aside>
            <div className="content">
                <header>
                    <div className='header-title'>
                        IP Address Management Solution
                    </div>
                    <div>
                        {user.name} &nbsp; &nbsp;
                        <a onClick={onLogout}
                           className="btn-logout"
                           href="#">Logout</a>

                    </div>
                </header>
                <main>
                    <Outlet/>
                </main>
            </div>
        </div>
    );
}

export default DefaultLayout;
