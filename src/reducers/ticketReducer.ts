import { UPDATE_TICKETS } from './../actions/actionTypes';

const initialState: any = [];

const ticketReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case UPDATE_TICKETS:
      return state.concat(action.payload);
    default:
      return state;
  }
};

export default ticketReducer;
