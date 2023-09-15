import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss';
import Landing from './components/landingPage/Landing';

function App() {
  return (
    <>


      <BrowserRouter>

        <Routes>


          <Route path='/' element={<Landing/>} />



        </Routes>


      </BrowserRouter>
    </>
  );
}

export default App;
