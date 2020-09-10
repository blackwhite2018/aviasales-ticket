import simpleAction from '../interface/simpleAction';

const initialState = Array(5).fill(false);

const isAllChecked = (array: Array<boolean>) => array.every(item => item === true);

const transferSort = (state = initialState, action: simpleAction) => {
  const firstItemKey: number = action.payload?.index;
  let newState = [...state];
  let flag: boolean = false;

  if ((newState[0] && action.payload.index === 0) || (firstItemKey === 0 && action.payload.value)) {
    flag = !newState[0];
    newState = newState.map(item => flag);
  }

  switch (action.type) {
    case 'TRANSFER_ACTIVE_SORT':
      newState[action.payload.index] = action.payload.value;
      if (isAllChecked(newState.slice(1))) {
        newState[0] = true;
      }
      if (!isAllChecked(newState)) {
        newState[0] = false;
      }
      return newState;
    default:
      return state;
  }
};

export default transferSort;
