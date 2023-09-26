import React from "react";
import { useNavigate } from 'react-router-dom'
import './landing.scss'
import aceLogo from '../../resources/logos/ACEMarketplacelogo.png'
import SearchBar from '../search/SearchBar'
import LogIn from "../users/LogIn";
import Register from "../users/Register";
import Card from '../Card/card'
import Registration from "../testComponents/Registration";
import AddItem from "../testComponents/AddItem";
import DeleteItem from "../testComponents/DeleteItem";

const Landing = ({ openModal, setOpenModal }) => {
  const navigate = useNavigate()

  return (

    <div id="landing-area">

      <div id="top-area">

        <div id="logo-area"><img className="logo" src={aceLogo} alt="ACE Logo" /></div>
        <SearchBar />
        <div id="logins">
          <LogIn />

          <Register />

        <div id="top-area">

          <div id="logo-area"><img className="logo" src={aceLogo} alt="ACE Logo" /></div>

          
          <SearchBar/>         
          
          <div id="logins">
          <LogIn/>
          <Register/>
          </div>
          <div className="test-components">
            <Registration />
            <AddItem />
            <DeleteItem />
          </div>

          <button className="buttons" onClick={() => navigate('/Admin')}>Admin</button>
        </div>


        <div>
          {/* <FileUpload /> */}
        </div>

      </div>
      <Card />
    </div>
  )
}

export default Landing
