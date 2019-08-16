import React, { Component } from "react";
import "./App.css";
import Smurfs from './Smurfs'
import FormikSmurfForm from './Form';

function App() {
  
    return (
      <div className="App">
       <Smurfs/>
       <FormikSmurfForm />
      </div>
    );
}

export default App;