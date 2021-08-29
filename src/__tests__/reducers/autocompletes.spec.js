import autocompletesReducer from "../../redux/reducers/autocompletes";
import {
  FETCH_AUTOCOMPLETES_REQUEST,
  FETCH_AUTOCOMPLETES_SUCCESS,
  FETCH_AUTOCOMPLETES_FAILED,
} from "../../redux/actions/autocompletes";

describe("Autocompletes", () => {
  it("should return the initial state", () => {
    expect(autocompletesReducer(undefined, {})).toMatchSnapshot();
  });

  it(`should handle ${FETCH_AUTOCOMPLETES_REQUEST}`, () => {
    expect(
      autocompletesReducer(undefined, {
        type: FETCH_AUTOCOMPLETES_REQUEST,
        payload: { term: "apple" },
      })
    ).toMatchSnapshot();
  });

  it(`should handle ${FETCH_AUTOCOMPLETES_SUCCESS}`, () => {
    expect(
      autocompletesReducer(undefined, {
        type: FETCH_AUTOCOMPLETES_SUCCESS,
        payload: {},
      })
    ).toMatchSnapshot();
  });

  it(`should handle ${FETCH_AUTOCOMPLETES_FAILED}`, () => {
    expect(
      autocompletesReducer(undefined, {
        type: FETCH_AUTOCOMPLETES_FAILED,
        payload: {},
      })
    ).toMatchSnapshot();
  });
});
