import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postData } from '../actions';

function SmurfForm(props) {

  const [item, setItem] = useState(
    {
      name: "",
      age: "",
      height: ""
    }
  );

  function handleChange(event) {
    setItem({ ...item, [event.target.name]: event.target.value });
    console.log(item);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("item",item);
    props.postData(item);
    setItem({
      name: "",
      age: "",
      height: ""
    })
    
  }

    return (
      <form onSubmit={handleSubmit}>
        <input placeholder="Name" type="text" value={item.name} name="name" onChange={handleChange}/>
        <input placeholder="Age" type="number" value={item.age} name="age" onChange={handleChange}/>
        <input placeholder="Height" type="text" value={item.height} name="height" onChange={handleChange}/>
        
        <button type="submit">Add</button>
       
      </form>
    )
  }

const mapStateToProps = state => {
  return {
    ...state
  }
}

export default connect(mapStateToProps, { postData })(SmurfForm)