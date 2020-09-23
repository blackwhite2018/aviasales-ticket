import { combineReducers } from 'redux';

import transferSortReducer from './transferSortReducer';
import sortTicketReducer from './sortTIcketReducer';
import ticketReducer from './ticketReducer';
import searchIdReducer from './searchIdReducer';
import loadedReducer from './loadedReducer';

const rootReducer = combineReducers({
  transferSort: transferSortReducer,
  active: sortTicketReducer,
  tickets: ticketReducer,
  searchId: searchIdReducer,
  loadedTickets: loadedReducer,
});

export default rootReducer;
