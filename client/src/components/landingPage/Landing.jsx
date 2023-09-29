import React from "react";
import { useNavigate } from 'react-router-dom'
import './landing.scss'
import aceLogo from '../../resources/logos/ACEMarketplacelogo.png'
import SearchBar from '../search/SearchBar'
import LogIn from "../users/LogIn";
import Register from "../users/Register";
import ItemMap from "../mapping/ItemMap"
import Card from '../card/card'
// import Registration from "../testComponents/Registration";
// import AddItem from "../testComponents/AddItem";
// import DeleteItem from "../testComponents/DeleteItem";


const Landing = ({ itemDisplayList, setItemDisplayList }) => {
  const navigate = useNavigate()

  const resetList = ()=>{
    setItemDisplayList(mockData)
  }

  return (

    <div id="landing-area">

      <div id="top-area">

        <div id="logo-area"><img className="logo" src={aceLogo} alt="ACE Logo" /></div>
        
        <div id="logins">
          <LogIn />

          <Register />
          <button className="buttons" onClick={() => navigate('/Admin')}>Admin</button>
        </div>
        
        <SearchBar
             itemDisplayList={itemDisplayList}
             setItemDisplayList={setItemDisplayList}
        />


        {/* <div className="test-components">
            <Registration />
            <AddItem />
            <DeleteItem />
          </div> */}

        
      </div>


      {/* <div>
          <FileUpload />
        </div> */}
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
