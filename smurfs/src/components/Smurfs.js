import React from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions';
import SmurfsCard from './SmurfsCard';

function Smurfs(props) {

  return (
    <>
      <h1>Smurfs Component</h1>
      <button onClick={props.getData}>click</button>
      <SmurfsCard smurfs={props.smurfs}/>
    </>
  )
}

const mapStateToProps = state => {
  return {
    ...state
  }
}

export default connect(mapStateToProps, { getData })(Smurfs)