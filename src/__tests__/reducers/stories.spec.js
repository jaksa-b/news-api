import storiesReducer from "../../redux/reducers/stories";
import {
  FETCH_STORIES_REQUEST,
  FETCH_STORIES_SUCCESS,
  FETCH_STORIES_FAILED,
} from "../../redux/actions/stories";

describe("Stories", () => {
  it("should return the initial state", () => {
    expect(storiesReducer(undefined, {})).toMatchSnapshot();
  });

  it(`should handle ${FETCH_STORIES_REQUEST}`, () => {
    expect(
      storiesReducer(undefined, {
        type: FETCH_STORIES_REQUEST,
        payload: { entriesId: "125670" },
      })
    ).toMatchSnapshot();
  });

  it(`should handle ${FETCH_STORIES_SUCCESS}`, () => {
    expect(
      storiesReducer(undefined, {
        type: FETCH_STORIES_SUCCESS,
        payload: {},
      })
    ).toMatchSnapshot();
  });

  it(`should handle ${FETCH_STORIES_FAILED}`, () => {
    expect(
      storiesReducer(undefined, {
        type: FETCH_STORIES_FAILED,
        payload: {},
      })
    ).toMatchSnapshot();
  });
});
