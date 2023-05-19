import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Text from './components/Text';
import Contact from './components/Contact';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  
} from "react-router-dom";
import About from './components/About';






function App() {
  const [mode, setMode] = useState('light');
  const toggleMode=() =>{
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'gray';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
    }

}
  return (
    <>
    <Router>
    <Navbar mode ={mode} toggleMode={toggleMode} /> 
    <div className='container'>
   
    <Routes>
          <Route path="/contact" element={<Contact mode={mode} />}>
          </Route>

          <Route path="/" element={ <Text heading="Text Converter" mode={mode}/>}>
          </Route>

          <Route path='/about' element={<About mode={mode}/>}>

          </Route>
     </Routes>
     </div>
 </Router>



 

   

  
    </>
  );
}

export default App;
