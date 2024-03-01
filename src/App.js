
import './App.css';
import Signup from './Signup';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Yourinformation from './component/Yourinformation';
import FirmInformation from './component/FirmInformation';
import SetPassword from './component/SetPassword';
import Firmsetting from './component/Firmsetting';
import YourRoll from './component/YourRoll';
import CaseNoone from './component/CaseNoone';
import Servicesfirmoffer from './component/Servicesfirmoffer';
import Firmdetails from './component/Firmdetails';
import Datepicker from './component/Datepicker';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CaseNoone />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/yourinformation' element={<Yourinformation />} />
          <Route path='/firminformation' element={<FirmInformation />} />
          <Route path='/setpassword' element={<SetPassword />} />
          <Route path='/firmsetting' element={<Firmsetting />} />
          <Route path='/yourroll' element={<YourRoll />} />
          <Route path='/servicesfirm' element={<Servicesfirmoffer />} />
          <Route path='/firmdetails' element={<Firmdetails />} />
          <Route path='/datepicker' element={<Datepicker />} />




        </Routes>

      </BrowserRouter>



    </>


  );
}

export default App;
