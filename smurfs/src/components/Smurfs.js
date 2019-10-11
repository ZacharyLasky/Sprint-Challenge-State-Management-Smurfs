import React from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions';
import SmurfsCard from './SmurfsCard';
import './Smurfs.css';

function Smurfs(props) {

  return (
    <div className="smurfs">
      <button onClick={props.getData}>Click To See Smurfs</button>
      <SmurfsCard smurfs={props.smurfs}/>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    ...state
  }
}

export default connect(mapStateToProps, { getData })(Smurfs)