import Api from ".";

export const getAutocompletes = (term) => {
  return Api({
    method: "get",
    url: `/autocompletes?type=source_names&term=${term}`,
  });
};
