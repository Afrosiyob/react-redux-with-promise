import { all } from "redux-saga/effects";
import fetchDataSaga from "./fetch/saga";

export default function* rootSaga() {
  yield all([fetchDataSaga()]);
}
