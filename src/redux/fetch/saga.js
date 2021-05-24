import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { FETCH_DATA } from "../actions";
import { fetchData } from "../services/api";
import { fetchDataError, fetchDataSuccess } from "./action";

function* watchFetchData() {
  yield takeEvery(FETCH_DATA, workFetchData);
}

function* workFetchData({ payload }) {
  const url = payload;

  const { data, error } = yield call(fetchData, url);

  if (data) {
    yield put(fetchDataSuccess(data));
  } else {
    yield put(fetchDataError(error));
  }
}

export default function* fetchDataSaga() {
  yield all([fork(watchFetchData)]);
}
