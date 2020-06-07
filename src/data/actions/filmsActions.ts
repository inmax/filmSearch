import * as types from "./actionTypes";
import { DispatchObject} from '../../util/types';


export const search__film = (data:any):DispatchObject => ({
  type: types.SEARCH_FILM,
  payload: {
    s:data.t,
    page:data.page
  },
});


export const store_all = (data:any):DispatchObject => ({
  type: types.STORE_ALL,
  payload: {
    list:data.list,
    error:data.error,
    isLoaded:data.isLoaded
  },
});


