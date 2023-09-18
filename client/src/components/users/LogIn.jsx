import React, { useState } from "react";
import './users.scss'

const LogIn = () => {

    const [showLogIn, setShowLogIn] = useState(true)
    const [showLogOut, setShowLogOut] = useState(false)

    const handleLogIn = () => {
        setShowLogIn(false)
        setShowLogOut(true)
    }

    const handleLogOut = () => {

        setShowLogOut(false)
        setShowLogIn(true)

    }



    return (
        <>

            {showLogIn && (
                <button className="buttons" onClick={handleLogIn}>Log In</button>
            )}



            {showLogOut && (
                <button className="buttons" onClick={handleLogOut}>Log Out</button>
            )}


        </>


    )
}

export default LogIn
