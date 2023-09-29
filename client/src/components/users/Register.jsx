import React, { useState } from "react";
import API from '../../utils/API'
import './users.scss'

const Register = () => {

    const [showRegister, setShowRegister] = useState(true)
    const [openRegister, setOpenRegister] = useState(false)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')

    const handleRegister = () => {
        setShowRegister(false)
        setOpenRegister(true)
    }

    const closeRegister = () => {
        setOpenRegister(false)
        setShowRegister(true)
    }

    const handleAddUser = (e) => {
        e.preventDefault()

        const newUser = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password1: password1,
            password2: password2,
            //should I be only sending the password 1 to the backend as just password becuase the schema just shows password?
            // ** Send both when registering **
        }

        API.register(newUser)
        setOpenRegister(false)
        setEmail('')
        setFirstName('')
        setLastName('')
        setPassword1('')
        setPassword2('')
        console.log(newUser)
    }

    return (
        <>
            {showRegister && (
                <button className="buttons register" onClick={handleRegister}>Register</button>
            )}
            {openRegister && (
                <div className="modals">
                    <div className="close-btn" onClick={closeRegister}>X</div>
                    <div className="modal-forms">
                        <label className="labels" htmlFor="firstName">First Name</label>
                        <input className="modal-inputs" onChange={(e) => setFirstName(e.target.value)} id="firstName" name="firstName" value={firstName} type="text" />
                        <label className="labels" htmlFor="lastName" >Last Name</label>
                        <input className="modal-inputs" onChange={(e) => setLastName(e.target.value)} id="lastName" value={lastName} type="text" name="lastName" />
                        <label className="labels" htmlFor="email">Email</label>
                        <input className="modal-inputs" onChange={(e) => setEmail(e.target.value)} id="userName" value={email} type="text" name="email" />
                        <label className="labels" htmlFor="password">Password</label>
                        <input className="modal-inputs" onChange={(e) => setPassword1(e.target.value)} id="password1" value={password1} type="password" name="password1" />
                        <label className="labels" htmlFor="password2">Confirm Password</label>
                        <input className="modal-inputs" onChange={(e) => setPassword2(e.target.value)} id="password2" value={password2} type="password" name="password2" />
                        <button className="buttons submit-btn" onClick={handleAddUser}>Submit</button>
                    </div>
                </div>
            )}
        </>
    )

}

export default Register
