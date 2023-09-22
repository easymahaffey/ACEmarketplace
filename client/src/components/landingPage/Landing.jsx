import React from "react";
import { useNavigate } from 'react-router-dom'
import './landing.scss'
import aceLogo from '../../resources/logos/ACEMarketplacelogo.png'
import SearchBar from '../search/SearchBar'
import LogIn from "../users/LogIn";
import Register from "../users/Register";

const Landing = () => {
  const navigate = useNavigate()

    return(

      <div id="landing-area">

        <div id="top-area">

          <div id="logo-area"><img className="logo" src={aceLogo} alt="ACE Logo" /></div>

          <SearchBar/>         
          
          <div id="logins">
          <LogIn/>
          <Register/>
          <button className="buttons" onClick={()=> navigate('/Admin')}>Admin</button>
          </div>

        </div>
        
      </div>
    )
}

export default Landing
