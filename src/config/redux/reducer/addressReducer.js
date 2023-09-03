const initialState = {
    address: [],
    addressDetail: [],
  };
  
  const addressReducer = (state = initialState, action) => {
    if (action.type === "GET_ALL_ADDRESS") {
      return {
        ...state,
        address: action.payload,
      };
    } else if (action.type === "GET_DETAIL_ADDRESS") {
      return {
        ...state,
        address: action.payload,
      };
    } else if (action.type === "CREATE_ADDRESS") {
      return state;
    } else if (action.type === "UPDATE_ADDRESS") {
      return state;
    } else if (action.type === "DELETE_ADDRESS") {
      return state;
    } else {
      return state;
    }
  };
  
  export default addressReducer;