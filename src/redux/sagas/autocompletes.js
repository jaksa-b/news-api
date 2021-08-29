import { call, put, takeLatest, all } from "redux-saga/effects";
import { getAutocompletes } from "../../api";
import { fetchData } from "../reducers/autocompletes";

import {
  FETCH_AUTOCOMPLETES_REQUEST,
  FETCH_AUTOCOMPLETES_FAILED,
  FETCH_AUTOCOMPLETES_SUCCESS,
} from "../actions/autocompletes";

function* fetchAutocompletes({ payload }) {
  try {
    const { term } = payload;
    const { data } = yield call(() => getAutocompletes(term));
    yield put(fetchData(data));
    yield put({ type: FETCH_AUTOCOMPLETES_SUCCESS, payload: data });
  } catch (e) {
    yield put({ type: FETCH_AUTOCOMPLETES_FAILED, message: e.message });
  }
}

export default function* watchAutocompletes() {
  yield all([takeLatest(FETCH_AUTOCOMPLETES_REQUEST, fetchAutocompletes)]);
}
