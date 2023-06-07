import {React,useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import AllCards from './AllCards'
import ShowView from './ShowView';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormPage from './FormPage';


function App() {
  const [show,setShow]=useState({});
  // useEffect(() => {
  //   // Update the document title using the browser API
  //   var card1=document.getElementsByClassName("Card")[0];
  //   console.log(card1);
  //   // if(card1!==undefined)
  //   //   card1.click(); 
  // });

  function childtoparent(data){
    console.log("childtoparent",data);
    setShow(data);
    // setFormc(data);
  }

  // function formparent(data){
  //   console.log("form",data);
  //   setFormc(data);
  //   // setFormc(data);
  // }


  
  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
      <Route path="/" element={[<ShowView key={1} show={show}/>, <AllCards key={2} childtoparent={childtoparent}/>]}/>
      <Route path="form" element={<FormPage formc={show}/>}/>
      </Routes>
    </BrowserRouter>
      {/* <ShowView show={show}/>
      <AllCards childtoparent={childtoparent}/> */}
    </div>
  );
}

export default App;
