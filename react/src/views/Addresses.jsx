import React, {useEffect, useState} from 'react';
import axiosClient from "../axios.jsx";
import {Link} from "react-router-dom";

function Addresses(props) {
    const [addresses, setAddresses] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getAddresses()
    }, [])


    const getAddresses = () => {
        setLoading(true)
        axiosClient.get("/addresses")
            .then(({data}) => {
                setLoading(false)
                setAddresses(data.data)
            }).catch(() => {
            setLoading(false)
        })
    }

    const onDeleteClick = (u) => {
        if (!window.confirm("Are you sure you want to delete this IP address?")) {
            return;
        }
        axiosClient.delete(`/addresses/${u.id}`)
            .then(() => {

            })
    };
    return (
        <div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <h1>IP Addresses</h1>
                <Link className="btn-add" to="/addresses/new">
                    Add new
                </Link>
            </div>
            <div className="card animated fadeInDown">
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>IP Address</th>
                        <th>Comment</th>
                        <th>Created At</th>
                        <th>Updated At</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    {loading && (
                        <tbody>
                        <tr>
                            <td colSpan="6" className="text-center">
                                Loading...
                            </td>
                        </tr>
                        </tbody>
                    )}
                    {!loading && (
                        <tbody>
                        {addresses.map((u) => (
                            <tr key={u.id}>
                                <td>{u.id}</td>
                                <td>{u.ip_address}</td>
                                <td className="table-column">{u.comment}</td>
                                <td>{u.created_at}</td>
                                <td>{u.updated_at}</td>
                                <td>
                                    <Link
                                        className="btn-edit"
                                        to={"/addresses/" + u.id}
                                    >
                                        Edit
                                    </Link>
                                    &nbsp;
                                    <button
                                        className="btn-delete"
                                        onClick={(ev) => onDeleteClick(u)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    )}
                </table>
            </div>
        </div>
    );
}

export default Addresses;
