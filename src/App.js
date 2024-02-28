
import './App.css';
import Signup from './Signup';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Yourinformation from './component/Yourinformation';
import FirmInformation from './component/FirmInformation';
import SetPassword from './component/SetPassword';
import Firmsetting from './component/Firmsetting';
import YourRoll from './component/YourRoll';
import CaseNoone from './component/CaseNoone';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/yourinformation' element={<Yourinformation />} />
          <Route path='/firminformation' element={<FirmInformation />} />
          <Route path='/setpassword' element={<SetPassword />} />
          <Route path='/firmsetting' element={<Firmsetting />} />
          <Route path='/yourroll' element={<YourRoll />} />
          <Route path='/' element={<CaseNoone />} />
          
          
          
        </Routes>

      </BrowserRouter>



    </>


  );
}

export default App;
