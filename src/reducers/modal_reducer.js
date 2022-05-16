const modal_reducer = (state, action) => {
  if (action.type === "ShowCreateAccountModal") {
    return {
      ...state,
      createNewAccountModalIsHidden: !state.createNewAccountModalIsHidden,
    };
  }
};

export default modal_reducer;
