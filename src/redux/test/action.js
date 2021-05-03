import { FETCH_DATA, FETCH_DATA_ERROR, FETCH_DATA_SUCCESS } from "../actions";

export const fetchData = (url) => ({
  type: FETCH_DATA,
  payload: url,
});

export const fetchDataSuccess = (res) => ({
  type: FETCH_DATA_SUCCESS,
  payload: res,
});

export const fetchDataError = (error) => ({
  type: FETCH_DATA_ERROR,
  payload: error,
});
