import React, { useState } from "react";
import API from '../../utils/API'
import './users.scss'



const LogIn = () => {

    const [showLogIn, setShowLogIn] = useState(true)
    const [showLogOut, setShowLogOut] = useState(false)
    const [openLogIn, setOpenLogIn] = useState(false)
    const [checkEmail, setCheckEmail] = useState('')
    const [checkPassword, setCheckPassword] = useState('')


    const handleLogIn = () => {
        setShowLogIn(false)
        setShowLogOut(true)
        setOpenLogIn(true)
    }

    const handleLogOut = () => {

        setShowLogOut(false)
        setShowLogIn(true)

    }
    const closeLogin = ()=>{
        setOpenLogIn(false)
    }

    const handleCheckUser = (e) => {
        e.preventDefault()
       
        const checkUser = {
            email: checkEmail,
            password: checkPassword
        }
        API.login(checkUser)
        setOpenLogIn(false)
        setCheckEmail('')
        setCheckPassword('')

    }

    return (
        <>

            {showLogIn && (
                <button className="buttons login" onClick={handleLogIn}>Log In</button>
            )}
            {showLogOut && (
                <button className="buttons logout" onClick={handleLogOut}>Log Out</button>
            )}

            {openLogIn && (

                <div className="modals">
                
                 
                <div className="close-btn" onClick={closeLogin}>X</div>

                    <div className="modal-forms">
                        <label className="labels" htmlFor="email">Email</label>
                        <input className="modal-inputs" onChange={(e) => setCheckEmail(e.target.value)} id="userName" value={checkEmail} type="text" name="email" />
                        <label className="labels" htmlFor="password">Password</label>
                        <input className="modal-inputs" onChange={(e) => setCheckPassword(e.target.value)} id="password" type="password" value={checkPassword} name="password1" />

                        <button className="buttons submit-btn" onClick={handleCheckUser}>Submit</button>

                    </div>
                </div>

            )}

        </>


    )
}

export default LogIn
