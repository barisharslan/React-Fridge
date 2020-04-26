import * as actionTypes from '../actions/actionTypes';
// import { updateObject } from '../utility';

const initalState = {
  options: [],
  steps: []
}

const addStep = ( state, action ) => {
  console.log(action.step);
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
    steps: []
  }
}

const setOptions = ( state, action ) => {
  return state;
}

const reducer = ( state = initalState, action ) => {
  switch (action.type) {
    case actionTypes.ADD_STEP: return addStep( state, action );
    case actionTypes.GO_BACK: return goBack( state, action );
    case actionTypes.RESET_MODAL: return resetModal( state, action );
    case actionTypes.SET_OPTIONS: return setOptions( state, action )
    default: return state;
  }
}

export default reducer;