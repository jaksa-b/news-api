import { useDispatch, useSelector } from "react-redux";

import { Autocomplete, Container, Post } from "./components";
import { getStories } from "./redux/actions/stories";

function App() {
  const dispatch = useDispatch();
  const stories = useSelector((state) => state.stories.data);
  const state = useSelector((state) => state);

  console.log("state", state);

  const onTermSelect = (id) => {
    dispatch(getStories({ entriesId: id }));
  };

  return (
    <Container>
      <Autocomplete
        placeholder="Companies, Organizations, People & Places..."
        onItemSelect={onTermSelect}
      />

      {stories.length > 0
        ? stories.map((post, index) => <Post data={post} key={index} />)
        : null}
    </Container>
  );
}

export default App;
