import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss';
import Landing from './components/landingPage/Landing';
import Admin from "../src/components/admin/admin"
function App() {
  return (
    <>


      <BrowserRouter>

        <Routes>


          <Route path='/' element={<Landing/>} />


          <Route path='/admin' element={<Admin/>} />
        </Routes>


      </BrowserRouter>
    </>
  );
}

export default App;
