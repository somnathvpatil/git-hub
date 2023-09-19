import { useState } from 'react';
import './App.css';
//import About from './components/About';  <About/>
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
function App() {
  const[mode,setMode] = useState('light'); //whether dark mode is enabled or not
  const[alert,setAlert]=useState(null);

  const showAlert =(message,type)=>{
    setAlert({
      msg : message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);

    },5500);

  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","success");
      
      document.title='Text Utils - Enable Dark Mode';
      /*setInterval(() => {
        
        document.title='Text Utils - DDDDDDDDDDDDDDDDDDDDDDD Dark Mode';
      }, 3000);

      setInterval(() => {
        
        document.title='Text Utils - Amazing Text Mode';
      }, 100);*/
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","error");
      document.title='Text Utils - Enable Light Mode';
      
    }
    
  }

  return (
    <>
      {/*<Navbar title="TextUtils"  aboutText="About Sample TextUtils"></Navbar>*/}
      {/*<Navbar/>*/}
     
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container">
      <TextForm heading="Enter the text to Analyze below"  mode={mode} showAlert={showAlert}></TextForm>

    
      </div>
      
    </>    
  );
}

export default App;
