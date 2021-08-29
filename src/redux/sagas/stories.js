import { call, takeLatest, put, all } from "redux-saga/effects";
import { getStories } from "../../api";
import { fetchData } from "../reducers/stories";

import {
  FETCH_STORIES_REQUEST,
  FETCH_STORIES_SUCCESS,
  FETCH_STORIES_FAILED,
} from "../actions/stories";

export function* fetchStories({ payload }) {
  try {
    const { entriesId } = payload;
    const { data } = yield call(() => getStories(entriesId));
    yield put(fetchData(data));
    yield put({ type: FETCH_STORIES_SUCCESS, data });
  } catch (e) {
    yield put({ type: FETCH_STORIES_FAILED, message: e.message });
  }
}

export default function* watchStories() {
  yield all([takeLatest(FETCH_STORIES_REQUEST, fetchStories)]);
}
