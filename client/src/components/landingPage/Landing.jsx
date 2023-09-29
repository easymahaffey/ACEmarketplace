import React from "react";
import './landing.scss'

import aceLogo from '../../resources/logos/ACEMarketplacelogo.png'
import SearchBar from '../search/SearchBar'
import LogIn from "../users/LogIn";
import Register from "../users/Register";
// Test Components
import Registration from "../testComponents/Registration";
import AddItem from "../testComponents/AddItem";
import DeleteItem from "../testComponents/DeleteItem";
import GetItem from "../testComponents/GetItem";

const Landing = () => {

    return(




      <div id="landing-area">

        <div id="top-area">

          <div id="logo-area"><img className="logo" src={aceLogo} alt="ACE Logo" /></div>

          
          <SearchBar/>         
          
          <div id="logins">
          <LogIn/>
          <Register/>
          </div>
          <div className="test-components">
            {/* <Registration /> */}
            <AddItem />
            {/* <DeleteItem /> */}
            <GetItem />
          </div>

        </div>
        {/* <Card /> */}
      </div>
    )
}

export default Landing
