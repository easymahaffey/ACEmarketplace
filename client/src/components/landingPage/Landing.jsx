import React from "react";
import './landing.scss'

import aceLogo from '../../resources/logos/ACEMarketplacelogo.png'
import SearchBar from '../search/SearchBar'
import LogIn from "../users/LogIn";
import Register from "../users/Register";
import FileUpload from "../picture/Upload";

const Landing = () => {

    return(




      <div id="landing-area">

        <h1>HOLA TESTING!!!!</h1>

        <div id="top-area">

          <div id="logo-area"><img className="logo" src={aceLogo} alt="ACE Logo" /></div>

          <div id="search-area">
          <SearchBar/>
          <LogIn/>
          <Register/>
          </div>
          <div>
            {/* <FileUpload /> */}
          </div>

        </div>
        
      </div>
    )
}

export default Landing
