import React from "react";
import { useNavigate } from 'react-router-dom'
import './landing.scss'
import aceLogo from '../../resources/logos/ACEMarketplacelogo.png'
import SearchBar from '../search/SearchBar'
import LogIn from "../users/LogIn";
import Register from "../users/Register";
import ItemMap from "../mapping/ItemMap"

import Card from '../card/card'



import Registration from "../testComponents/Registration";
import AddItem from "../testComponents/AddItem";
import DeleteItem from "../testComponents/DeleteItem";
import GetItem from "../testComponents/GetItem";


const Landing = ({ itemDisplayList, setItemDisplayList, category, setCategory}) => {
  const navigate = useNavigate()

  return (
    <div id="landing-area">
      <div id="top-area">
        <div id="logo-area"><img className="logo" src={aceLogo} alt="ACE Logo" /></div>

        <SearchBar
             itemDisplayList={itemDisplayList}
             setItemDisplayList={setItemDisplayList}
             category={category}
             setCategory={setCategory}
        />

        <div id="logins">
          <LogIn />
          <Register />
          <button className="buttons" onClick={() => navigate('/Admin')}>Admin</button>
        </div>

        



        {/* <div className="test-components">
            <Registration />
            <AddItem />
            <DeleteItem />
          </div> */}

        

          

  

      {/* <div>
          <FileUpload />
        </div> */}
        <div className="admin">{category} For Sale</div>
   
      <div className="cardProductContainer">
        <ItemMap
          array={itemDisplayList}
          itemDisplayList={itemDisplayList}
          setItemDisplayList={setItemDisplayList}
        />
      </div>
    </div>

  )
}

export default Landing
