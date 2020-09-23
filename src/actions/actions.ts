import { ISimpleAction } from '../types';
import { SELECT_SORT, TRANSFER_ACTIVE_SORT, UPDATE_TICKETS, UPDATE_SEARCH_ID, LOADED_TICKETS } from './actionTypes';

export const sortTicketAction = (payload: number) => ({
  type: SELECT_SORT,
  payload,
});

export const transferItemAction = (payload: ISimpleAction) => ({
  type: TRANSFER_ACTIVE_SORT,
  payload,
});

export const updateSearchId = (searchId: string) => ({
  type: UPDATE_SEARCH_ID,
  payload: searchId,
});

export const loadedTickets = (loaded: boolean) => ({
  type: LOADED_TICKETS,
  payload: loaded,
});

export const updateTickets = (tickets: any) => ({
  type: UPDATE_TICKETS,
  payload: tickets,
});

export const getSearchId = (dispatch: Function) => {
  return (url: string) => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        dispatch(updateSearchId(data.searchId));
      })
      .catch(error => {
        console.error(error);
      });
  };
};

const fetchData = (url: string, dispatch: Function) => {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data) {
        dispatch(updateTickets(data.tickets));
        dispatch(loadedTickets(data.stop));
        if (!data.stop) {
          setTimeout(fetchData, 10000, url, dispatch);
        } else {
          console.log('ticket loaded');
        }
      }
    })
    .catch(error => {
      console.error(error);
      dispatch(loadedTickets(true));
    });
};

export const ticketLoad = (dispatch: Function) => {
  return (url: string) => {
    fetchData(url, dispatch);
  };
};
