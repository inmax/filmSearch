import * as types from "./actionTypes";
import { DispatchObject } from "../../util/types";
import { toLowerCaseKeyObj } from "../../util/helper";
import get from "lodash/get"
import axios from "axios";

const api_key: string = process.env.OMDB_SECRET_KEY;


export const sending_request = (): DispatchObject => ({
  type: types.SENDING_REQUEST,
  payload: {
    isLoaded: false,
  },
});

export const request_data = (data: any,): DispatchObject => {
  const newList = get(data,"data.Search",[]).map((film:object) => {
    return  toLowerCaseKeyObj(film)
  });
  
  return {
    type: types.REQUEST_DATA,
    payload: {
      list: newList,
      isLoaded: true,
      totalResults: get(data,"data.totalResults",undefined),
      s:data.s,
      page:data.page
    },
  };
};

export const request_error = (data: any): DispatchObject => ({
  type: types.REQUEST_ERROR,
  payload: {
    list: data.list,
    error: data.error,
    isLoaded: true,
  },
});

export const getListFilms = (key: string, s: string, page: number): any => {
  return axios
    .get(
      `http://www.omdbapi.com/?apikey=${key}&s=${s}&type=movie&plot=short&page=${page}`
    )
    .then((res) => ({...res,s,page}))
    .catch((error) => error);
};

export const fetchData = (s:string,page:number=1) => (dispatch: any) => {
  dispatch(sending_request());
  return getListFilms(api_key,s,page)
    .then((data: any) => {dispatch(request_data(data))})
    .catch((error: any) => {
      dispatch(request_error(error));
    });
};
