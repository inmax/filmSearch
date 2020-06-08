import * as types from "../actions/actionTypes";

interface StateList {
  s?: string;
  page?: number;
  list?: any[];
  error?: object | null;
  isLoaded?: boolean;
  totalResults:undefined|number
}
const initState: StateList = {
  s: "*the*",
  page: 1,
  list: [],
  error: null,
  isLoaded: false,
  totalResults:undefined
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
        totalResults:action.payload.totalResults,
        s:action.payload.s,
        page:action.payload.page
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
