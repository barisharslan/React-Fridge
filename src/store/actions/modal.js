import * as actionTypes from './actionTypes';
import axios from '../../axios-firebase'

export const addStep = ( step ) => {
  return {
    type: actionTypes.ADD_STEP,
    step: step
  }
}

export const resetModal = () => {
  return {
    type: actionTypes.RESET_MODAL
  }
}
 
export const setOptions = () => {
  return dispatch => {
    dispatch(setOptionsStart());
    axios.get('/options.json')
      .then(res => {
        console.log(res.data)
        dispatch(setOptionsSuccess(res.data))
      })
      .catch(err => {
        dispatch(setOptionsFail(err))
      })
  }
}

export const setOptionsStart = () => {
  return {
    type: actionTypes.SET_OPTIONS_START
  }
}

export const setOptionsSuccess = ( fetchedOptions ) => {
  return {
    type: actionTypes.SET_OPTIONS_SUCCESS,
    fetchedOptions: fetchedOptions
  }
}

export const setOptionsFail = ( error ) => {
  return {
    type: actionTypes.SET_OPTIONS_FAIL,
    error: error
  }
}