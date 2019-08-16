import {
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_FAILURE
} from '../actions';

const initialState = {
  smurfs: [],
  isLoading: false,
  error: ""
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURFS_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      }
      case FETCH_SMURFS_SUCCESS:
        return {
          ...state,
        isLoading: false,
        error: "",
        smurfs: action.payload
        }
    default:
      return state;
  }
}