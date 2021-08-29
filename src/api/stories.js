import Api from ".";

export const getStories = (entriesId) => {
  return Api({
    method: "get",
    url: `/stories?entities=[${entriesId}]`,
  });
};
