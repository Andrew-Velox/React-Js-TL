
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import { useState } from 'react';

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
    }
    else{
      setMode("light")
      document.body.style.backgroundColor='pink';
      document.body.color = "black"
      showAlert("Light Mode Has been enabled","warning")
    }
  }
  const toogleMode2 =() =>{
    if(Mode === "danger"){
      setMode("dark");
      document.body.style.backgroundColor='black';
      document.body.color="white";
      showAlert("Dark Mode Has been enabled","success")
    }
    else{
      setMode("primary")
      document.body.style.backgroundColor='pink';
      document.body.color = "black"
      showAlert("Light Mode Has been enabled","warning")
    }
  }
  return (
    <>


    
    <Navbar title="Textutils" mode={Mode} toogleMode={toogleMode} /> 
    
    <Alert alert={alert} />

    {/* About/> */}
    <div className="container mt-5 my-3">
      <TextForm heading="Enter Text Here" mode={Mode} showAlert={showAlert} />
    </div>
    </>
  );
}

export default App;
