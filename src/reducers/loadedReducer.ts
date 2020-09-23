import { LOADED_TICKETS } from './../actions/actionTypes';

const initialState: boolean = false;

const loadedReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOADED_TICKETS:
      return true;
    default:
      return state;
  }
};

export default loadedReducer;
