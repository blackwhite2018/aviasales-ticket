import { ISimpleAction } from '../types';
import { TRANSFER_ACTIVE_SORT } from './../actions/actionTypes';

const initialState: boolean[] = Array(5).fill(false);

const isAllTransferItemChecked = (array: boolean[]): boolean => array.every(item => item === true);

const transferSort = (state = initialState, action: ISimpleAction): boolean[] => {
  const firstItemKey: number = action.payload?.index;
  let newState = [...state];
  let flag: boolean = false;

  if ((newState[0] && action.payload.index === 0) || (firstItemKey === 0 && action.payload.value)) {
    flag = !newState[0];
    newState = newState.map(item => flag);
  }

  switch (action.type) {
    case TRANSFER_ACTIVE_SORT:
      newState[action.payload.index] = action.payload.value;
      if (isAllTransferItemChecked(newState.slice(1))) {
        newState[0] = true;
      }
      if (!isAllTransferItemChecked(newState)) {
        newState[0] = false;
      }
      return newState;
    default:
      return state;
  }
};

export default transferSort;
