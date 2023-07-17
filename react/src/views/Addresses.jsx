import React, {useEffect, useState} from 'react';
import axiosClient from "../axios.jsx";

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
                console.log(data)
            }).catch(() => {
            setLoading(false)
        })
    }

    return (
        <div></div>
    );
}

export default Addresses;
