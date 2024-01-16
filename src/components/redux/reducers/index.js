const searchReducer = (state = { results: [], loading: false, error: null }, action) => {
    switch (action.type) {
      case 'SEARCH_START':
        return {
          ...state,
          loading: true,
          error: null,
        };
      case 'SEARCH_SUCCESS':
        return {
          ...state,
          loading: false,
          results: action.payload,
        };
      case 'SEARCH_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default searchReducer;