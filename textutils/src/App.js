
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";



function App() {
  const [Mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert= (message,type) =>{
    setAlert({
      msg: message,
      type: type,
    })

    setTimeout(()=>{
      setAlert(null);
    },2000)
  }
  const toogleMode =() =>{
    if(Mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor='black';
      document.body.color="white";
      showAlert("Dark Mode Has been enabled","success")
      document.title = "TextUtils - Dark Mode";

      // setInterval(()=>{
      //   document.title = "textUtils Amazing"
      // },2000);

      // setInterval(()=>{
      //   document.title = "textUtils Running"
      // },1500);
    }
    else{
      setMode("light")
      document.body.style.backgroundColor='pink';
      document.body.color = "black"
      showAlert("Light Mode Has been enabled","warning")
      document.title = "TextUtils - Light Mode";
    }
  }
  // const toogleMode2 =() =>{
  //   if(Mode === "danger"){
  //     setMode("dark");
  //     document.body.style.backgroundColor='black';
  //     document.body.color="white";
  //     showAlert("Dark Mode Has been enabled","success")
  //   }
  //   else{
  //     setMode("primary")
  //     document.body.style.backgroundColor='pink';
  //     document.body.color = "black"
  //     showAlert("Light Mode Has been enabled","warning")
  //   }
  // }
  return (
    <>

    <Router>


    
    <Navbar title="Textutils" mode={Mode} toogleMode={toogleMode} /> 
    
    <Alert alert={alert} />
    <div className="container mt-5 my-3">

      <Routes>
        <Route exact path="/" element={<TextForm heading="Enter Text Here" mode={Mode} showAlert={showAlert} />} />

        <Route exact path="/about" element={<About  mode={Mode} howAlert={showAlert} />} />
      </Routes>
    </div>

    
    
      
    
    </Router>
    </>
  );
}

export default App;
