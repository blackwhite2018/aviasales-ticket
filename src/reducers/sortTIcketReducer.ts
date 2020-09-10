const initialState: number = 0;

const sortTicketReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SELECT_SORT':
      return action.payload;
    default:
      return state;
  }
};

export default sortTicketReducer;
