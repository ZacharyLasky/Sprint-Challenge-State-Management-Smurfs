import React, { Component } from "react";
import "./App.css";
import Smurfs from './Smurfs'
// import FormikSmurfForm from './Form';
import SmurfForm from './SmurfForm';

function App() {
  
    return (
      <div className="App">
      {/* <FormikSmurfForm /> */}
      <SmurfForm />
       <Smurfs/>
      </div>
    );
}

export default App;