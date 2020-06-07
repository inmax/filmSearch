import * as types from "../actions/actionTypes";

interface StateList {
  s?: string;
  page?: number;
  list?: any[];
  error?: object | null;
  isLoaded?: boolean;
}
const initState: StateList = {
  s: "*the*",
  page: 4,
  list: [],
  error: null,
  isLoaded: false,
};

const listFilmState = (
  state: StateList = initState,
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
   
    case types.SENDING_REQUEST: {
      return {
        ...state,
        isLoaded: action.payload.isLoaded,
      };
    }
    case types.REQUEST_DATA: {
      return {
        ...state,
        list: action.payload.list,
        isLoaded: action.payload.isLoaded,
      };
    }
    case types.REQUEST_ERROR: {
      return {
        ...state,
        error: action.payload.error,
        isLoaded: action.payload.isLoaded,
      };
    }

    default:
      return state;
  }
};

export default listFilmState;
