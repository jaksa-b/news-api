import { all } from "redux-saga/effects";

import watchStories from "./stories";
import watchAutocompletes from "./autocompletes";

export default function* rootSaga() {
  yield all([watchAutocompletes(), watchStories()]);
}
