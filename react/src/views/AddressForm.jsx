import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axiosClient from "../axios.jsx";

function AddressForm(props) {

    let {id} = useParams()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState(null)
    const [address, setAddress] = useState({
        id: null,
        ip_address: "",
        comment: "",
    })

    if (id) {
        useEffect(() => {
            setLoading(true)
            axiosClient.get(`/addresses/${id}`)
                .then(({data}) => {
                    setLoading(false)
                    setAddress(data)
                }).catch(() => {
                setLoading(false)
            })
        }, [])
    }

    const onSubmit = (ev) => {
        ev.preventDefault()
        if (address.id) {
            axiosClient.put(`/addresses/${address.id}`, address)
                .then(() => {
                    navigate("/addresses")
                }).catch((err) => {
                const response = err.response
                if (response && response.status === 422) {
                    setErrors(response.data.errors)
                }
            })
        } else {
            axiosClient.post(`/addresses/`, address)
                .then(() => {
                    navigate("/addresses")
                }).catch((err) => {
                const response = err.response
                if (response && response.status === 422) {
                    setErrors(response.data.errors)
                }
            })
        }
    }


    return (
        <>
            {address.id && <h1>Update IP Address:{address.ip_address}</h1>}
            {!address.id && <h1>New IP Address</h1>}
            <div className="card animated fadeInDown">
                {loading && <div className="text-center">Loading...</div>}
                {errors && (
                    <div className="alert">
                        {Object.keys(errors).map((key) => (
                            <p key={key}>{errors[key][0]}</p>
                        ))}
                    </div>
                )}
                {!loading && address.id && (
                    <form onSubmit={onSubmit}>
                        <input
                            value={address.ip_address}
                            onChange={(ev) =>
                                setAddress({...address, ip_address: ev.target.value})
                            }
                            placeholder="IP_Address"
                            disabled
                        />
                        <input
                            value={address.comment}
                            onChange={(ev) =>
                                setAddress({...address, comment: ev.target.value})
                            }
                            placeholder="Comment"
                        />
                        <button className="btn">Save</button>
                    </form>
                )}
                {!loading && !address.id && (
                    <form onSubmit={onSubmit}>
                        <input
                            value={address.ip_address}
                            onChange={(ev) =>
                                setAddress({...address, ip_address: ev.target.value})
                            }
                            placeholder="IP_Address"
                        />
                        <input
                            value={address.comment}
                            onChange={(ev) =>
                                setAddress({...address, comment: ev.target.value})
                            }
                            placeholder="Comment"
                        />
                        <button className="btn">Save</button>
                    </form>
                )}
            </div>
        </>
    );
}

export default AddressForm;
