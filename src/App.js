import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Text from './components/Text';
import Contact from './components/Contact';
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const[alert, setAlert] = useState(null);
  const showAlert =(message, type) =>{
    setAlert({
      msg: message,
      type :type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);

  }
  
  const toggleMode=() =>{
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'gray';
      showAlert("Dark mode has been enabled !", "success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled !", "success")
    }

}
  return (
    <>
    <Router >
    <Navbar mode ={mode} toggleMode={toggleMode} /> 
    <Alert alert={alert} />
    <div className='container'>
   
    <Routes >
          <Route exact path="/" element={<Text heading="Text Converter - 
          Conver the text into Upper case, Lower case & Copy text" mode={mode} showAlert ={showAlert}/>}>
          </Route>

          <Route exat path="/contact" element={<Contact mode={mode} />}>
          </Route>

          <Route exact path='/about' element={<About mode={mode}/>}>
          </Route>
     </Routes>
     </div>
 </Router>
    </>
  );
}

export default App;
