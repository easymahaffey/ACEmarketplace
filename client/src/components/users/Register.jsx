import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { connect } from 'react-redux'
import { openModal } from '../../redux/actions/authActions'
import API from '../../utils/API'
import './users.scss'

const Register = () => {

    const [showRegister, setShowRegister] = useState(true)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')
    const [openModal, setOpenModal] = useState(false)

    const handleRegister = () => {
        setShowRegister(false)
        setOpenModal(true)

    }

    const handleAddUser = (e) => {
        e.preventDefault()

        const newUser = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password1,
            password2: password2,
        }
        API.register(newUser)
        // dispatch((getUser()))
        setEmail('')
        setFirstName('')
        setLastName('')
        setPassword1('')
        setPassword2('')

    }

    return (
        <>
            {showRegister && (
                <button className="buttons" onClick={handleRegister}>Register</button>
            )}

            {openModal && (
                <div className="modals">
                    <div id="registration-form">
                        <label className="labels" htmlFor="firstName">First Name</label>
                        <input className="modal-inputs" onChange={(e) => setFirstName(e.target.value)} id="firstName" name="firstName" value={firstName} type="text" />
                        <label className="labels" htmlFor="lastName" >Last Name</label>
                        <input className="modal-inputs" onChange={(e) => setLastName(e.target.value)} id="lastName" value={lastName} type="text" name="lastName" />
                        <label className="labels" htmlFor="email">Email</label>
                        <input className="modal-inputs"onChange={(e) => setEmail(e.target.value)} id="userName" value={email} type="text" name="email" />
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
