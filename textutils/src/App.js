
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>

    {/* <Navbar/> */}
    
    <Navbar title="Textutils"/> 
    <div className="container mt-5 my-3">
      <TextForm heading="Enter Text Here" />
    </div>
    </>
  );
}

export default App;
