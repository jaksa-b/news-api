import { expectSaga } from "redux-saga-test-plan";

import watchStories from "../../redux/sagas/stories";

describe("Stories saga", () => {
  it("should have the expected watchers", (done) => {
    expectSaga(watchStories)
      .run({ silenceTimeout: true })
      .then((saga) => {
        expect(saga).toMatchSnapshot();
        done();
      });
  });
});
