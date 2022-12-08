const ActionType = {
  ERROR: 'ERROR',
};

function errorActionCreator(error) {
  return {
    type: ActionType.ERROR,
    payload: {
      error,
    },
  };
}

export { ActionType, errorActionCreator };
