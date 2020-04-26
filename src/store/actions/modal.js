import * as actionTypes from './actionTypes';

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
 
export const setOptions = ( options ) => {
  return {
    type: actionTypes.SET_OPTIONS,
    options: options
  }
}