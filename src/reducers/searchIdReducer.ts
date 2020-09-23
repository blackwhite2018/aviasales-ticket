import { UPDATE_SEARCH_ID } from './../actions/actionTypes';

const initialState: string | null = null;

interface actionType {
  type: string;
  payload: string;
}

const searchIdReducer = (state = initialState, { type, payload }: actionType) => {
  switch (type) {
    case UPDATE_SEARCH_ID:
      return payload;
    default:
      return state;
  }
};

export default searchIdReducer;
