import { combineReducers } from 'redux';

import transferSortReducer from './transferSortReducer';
import sortTicketReducer from './sortTIcketReducer';

const reducer = combineReducers({
  transferSort: transferSortReducer,
  active: sortTicketReducer,
});

export default reducer;
