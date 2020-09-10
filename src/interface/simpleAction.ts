interface simpleAction {
  type: string;
  payload: {
    index: number;
    value: boolean;
  };
}

export default simpleAction;
