import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import Self from './components/Self.js';
 import TextForm from './components/TextForm.js';
import Alerts from './components/Alerts.js';
import{
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";
function App() {
  const[mode, setMode] = useState('light');
  const[alert,setAlert]=useState(null);
  const showAlert=(message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);

  }
const removeBodyClasses=()=>
{
  document.body.classList.remove('bg-light')
  document.body.classList.remove('bg-dark')
  document.body.classList.remove('bg-warning') 
   document.body.classList.remove('bg-danger')
   document.body.classList.remove('bg-success')




}

 const toggleMode=(cls)=>{
  console.log(cls)
  removeBodyClasses();
  document.body.classList.add('bg-'+cls)
if(mode === 'light'){
  setMode ('dark');
  document.body.style.backgroundColor = '#042743';
  showAlert("Dark mode has been enabled","success");
  document.title = 'TextUtils - Dark Mode';
  // setInterval(()=>{
  //   document.title ='TextUtils is amazing Mode';
  // },2000);
  // setInterval(()=>{
  //   document.title='Install TextUtils Now';
  // }, 1500);
}
else{
  setMode ( 'light');
  document.body.style.backgroundColor = 'white';
  showAlert("Light mode has been enabled","success");
  document.title = 'TextUtils - light Mode';



}
  }
  return (
    <>
      {/* You can also pass props here if needed */}
      <Router>
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
      <Alerts alert={alert}/>
      <div className="container" >      
      <Switch>
        <Route  exact path="/Self">
           <Self mode={mode}/>
          </Route>
          
          <Route  exact path="/">
          <TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces" mode={mode}/>
          </Route>
        </Switch>
        {/* <Self></Self> */}
      </div>
      </Router>
          </>
  );
}

export default App;
