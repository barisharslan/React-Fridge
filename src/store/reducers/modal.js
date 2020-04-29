import * as actionTypes from '../actions/actionTypes';
// import { updateObject } from '../utility';

const initalState = {
  options: [],
  steps: [],
  loading: false
}

const addStep = ( state, action ) => {
  // console.log(action.step);
  return {
    ...state,
    steps: [...state.steps, action.step]
  }
}
const goBack = ( state, action ) => {
  return state;
}
const resetModal = ( state, action ) => {
  return {
    ...state,
    options: [], 
    steps: []
  }
}

const setOptionsStart = ( state, action ) => {
  return {
    ...state,
    loading: true
  }
}

const setOptionsSuccess = ( state, action ) => {
  return {
    ...state,
    loading: false,
    options: action.fetchedOptions
  }
}

const setOptionsFail = ( state, action ) => {
  return {
    ...state, 
    loading: false
  }
}

const reducer = ( state = initalState, action ) => {
  switch (action.type) {
    case actionTypes.ADD_STEP: return addStep( state, action );
    case actionTypes.GO_BACK: return goBack( state, action );
    case actionTypes.RESET_MODAL: return resetModal( state, action );
    case actionTypes.SET_OPTIONS_START: return setOptionsStart( state, action );
    case actionTypes.SET_OPTIONS_SUCCESS: return setOptionsSuccess( state, action );
    case actionTypes.SET_OPTIONS_FAIL: return setOptionsFail( state, action );
    default: return state;
  }
}

export default reducer;