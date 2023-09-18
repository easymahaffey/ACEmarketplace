import React, { useState } from "react";
import './users.scss'

const Register = () => {

    const [showRegister, setShowRegister] = useState(true)

    const handleLogOut = () => {

        setShowRegister(false)

    }



    return (
        <>

           

            {showRegister && (
                <button className="buttons" onClick={handleLogOut}>Register</button>
            )}


        </>


    )
}

export default Register
