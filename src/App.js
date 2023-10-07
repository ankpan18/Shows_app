import {React, useState} from 'react';
import './App.css';
import AllCards from './components/AllCards'
import ShowView from './components/ShowView';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormPage from './components/FormPage';


function App() {
  const [show,setShow]=useState({});

  function childtoparent(data){
    console.log("childtoparent",data);
    setShow(data);
    
  }

  
  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
      <Route path="/" element={[<ShowView key={1} show={show}/>, <AllCards key={2} childtoparent={childtoparent}/>]}/>
      <Route path="form" element={<FormPage formc={show}/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
