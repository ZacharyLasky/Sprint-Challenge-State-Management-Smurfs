import axios from 'axios';

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE';
// export const POST_SMURFS = "POST_SMURFS";

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

// export const postData = () => {
//   return dispatch => {
//     axios
//       .post("http://localhost:3333/smurfs")
//       .then (response => {
//         dispatch({ type: POST_SMURFS, payload: response.data })
//       })
//   }
// }