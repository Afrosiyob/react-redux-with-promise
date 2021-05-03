import { FETCH_DATA, FETCH_DATA_ERROR, FETCH_DATA_SUCCESS } from "../actions";

const INIT_STATE = {
  loading: false,
  data: [],
};

export const testReducer = (state = INIT_STATE, { type, payload }) => {
  switch (type) {
    case FETCH_DATA:
      return { ...state, loading: true };

    case FETCH_DATA_SUCCESS:
      return { ...state, loading: false, data: payload };

    case FETCH_DATA_ERROR:
      return { ...state, loading: false, error: payload };

    default:
      return { ...state };
  }
};
