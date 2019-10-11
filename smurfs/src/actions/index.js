import axios from 'axios';

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE';

// export const POST_SMURFS_START = "POST_SMURFS_START";
// export const POST_SMURFS_SUCCESS = "POST_SMURFS_SUCCESS";
// export const POST_SMURFS_FAILURE = "POST_SMURFS_FAILURE";


export const getData = () => {
  return dispatch => {
    dispatch({ type: FETCH_SMURFS_START })
    axios
      .get('http://localhost:3333/smurfs')
      .then (response => {
        console.log(response);
        dispatch({ type: FETCH_SMURFS_SUCCESS, payload: response.data})
      })
      .catch(error => {
        dispatch({ type: FETCH_SMURFS_FAILURE, payload: error.response })
      })
  }
}

export const postData = (item) => {
  // console.log(item);
  return dispatch => {
    // dispatch({ type: POST_SMURFS_START })
    axios
      .post('http://localhost:3333/smurfs', item)
      // .then (response => {
      //   console.log(response);
      //   dispatch({ type: POST_SMURFS_SUCCESS, payload: response.data})
      // })
      // .catch(error => {
      //   dispatch({ type: POST_SMURFS_FAILURE, payload: error.response })
      // })
  }
}