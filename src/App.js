import React, { useState } from "react";
import './App.css';
import { Login } from "./Login";
import { Register } from "./Register";

 function App() {
    const [currentForm,setcurrentForm]=useState('login');
   const toggleForm =(forName) => {
      setcurrentForm(forName);

   }
    return (
        <div className="App">
             {
                currentForm ==="login"?<Login onFormSwitch={toggleForm}/>:<Register onFormSwitch={toggleForm} />
             }
        </div>
    );
 }
  
export default App;
