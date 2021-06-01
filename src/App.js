//import logo from './logo.svg';
import React from 'react';
import Profile from "./components/Profile";
import ProfileUser from "./components/ProfileUser";
import Age from "./components/age";
//import reactDom from 'react-dom';
//const image = require ('./assets/city.jpg')

 function App() {
  return (
    <div style={{
      font: 'initial',
      color: 'solid dark',
      textAlign: 'center' ,
      border: '1px solid dark',
      padding: '10px',
     
    }}
       className = "App"> 
          Welcome to My Profile
    <br></br>

    
    
    <Profile fullName= 'hager' bio= 'about me' profession= 'Banker'/>
    <Age desc= 'My age is'  />
    <ProfileUser/>
   
    

    </div>
  );
}




    
  
export default App;