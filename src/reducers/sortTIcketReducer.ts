import { SELECT_SORT } from './../actions/actionTypes';

const initialState: number = 0;

const sortTicket = (state = initialState, action: any) => {
  switch (action.type) {
    case SELECT_SORT:
      return action.payload;
    default:
      return state;
  }
};

export default sortTicket;
