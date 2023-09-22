import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss';
import Landing from './components/landingPage/Landing';
import Admin from './components/adminPage/Admin';

function App() {
  return (
    <>


      <BrowserRouter>

        <Routes>


          <Route path='/' element={<Landing/>} />
          <Route path='/Admin' element={<Admin/>} />
                        
        </Routes>


      </BrowserRouter>
    </>
  );
}

export default App;
