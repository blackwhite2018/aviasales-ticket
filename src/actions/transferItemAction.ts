import simpleAction from '../interface/simpleAction';

const transferItemAction = (payload: simpleAction) => ({
  type: 'TRANSFER_ACTIVE_SORT',
  payload,
});

export default {
  transferItemAction,
};
