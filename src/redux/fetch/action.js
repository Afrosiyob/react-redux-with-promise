import { FETCH_DATA, FETCH_DATA_ERROR, FETCH_DATA_SUCCESS } from "../actions";

export const fetchData = (url) => ({
  type: FETCH_DATA,
  payload: url,
});

export const fetchDataSuccess = (response) => ({
  type: FETCH_DATA_SUCCESS,
  payload: response,
});

export const fetchDataError = (error) => ({
  type: FETCH_DATA_ERROR,
  payload: error,
});
