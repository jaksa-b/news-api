import { expectSaga } from "redux-saga-test-plan";

import watchAutocompletes from "../../redux/sagas/autocompletes";

describe("Autocompletes saga", () => {
  it("should have the expected watchers", (done) => {
    expectSaga(watchAutocompletes)
      .run({ silenceTimeout: true })
      .then((saga) => {
        expect(saga).toMatchSnapshot();
        done();
      });
  });
});
