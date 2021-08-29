import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import { storiesReducer, autocompletesReducer } from "./reducers";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = configureStore({
  reducer: {
    autocompletes: autocompletesReducer,
    stories: storiesReducer,
  },
  middleware,
});

sagaMiddleware.run(rootSaga);

export default store;
