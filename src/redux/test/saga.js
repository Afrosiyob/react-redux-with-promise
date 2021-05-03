import { all, call, fork, put, takeEvery } from "@redux-saga/core/effects";
import { FETCH_DATA } from "../actions";

import { fetchDataApi } from "../services/api";
import { fetchDataError, fetchDataSuccess } from "./action";

function* watchFetchData() {
  yield takeEvery(FETCH_DATA, workFetchData);
}

function* workFetchData({ payload }) {
  const url = payload;

  const { data, error } = yield call(fetchDataApi, url);

  if (data) {
    yield put(fetchDataSuccess(data));
  } else {
    yield put(fetchDataError(error));
  }
}

export default function* testSaga() {
  yield all([fork(watchFetchData)]);
}
