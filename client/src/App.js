import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss';
import Landing from './components/landingPage/Landing';
import Admin from './components/adminPage/Admin';
import mockData from './data';
function App() {

  const [itemDisplayList, setItemDisplayList] = useState(mockData)
  console.log(itemDisplayList)

  return (
    <>


      <BrowserRouter>

        <Routes>


          <Route path='/' element={
            <Landing
              itemDisplayList={itemDisplayList}
              setItemDisplayList={setItemDisplayList}
            />} />


          <Route path='/Admin' element={<Admin />} />


        </Routes>


      </BrowserRouter>
    </>
  );
}

export default App;
