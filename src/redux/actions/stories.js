export const FETCH_STORIES_REQUEST = "FETCH_STORIES_REQUEST";
export const FETCH_STORIES_SUCCESS = "FETCH_STORIES_SUCCESS";
export const FETCH_STORIES_FAILED = "FETCH_STORIES_FAILED";

export const getStories = (payload) => ({
  type: FETCH_STORIES_REQUEST,
  payload,
});
