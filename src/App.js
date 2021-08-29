import { useDispatch, useSelector } from "react-redux";
import { getAutocompletes } from "./redux/actions/autocompletes";
import { getStories } from "./redux/actions/stories";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  console.log("state", state);

  return (
    <div className="App">
      <button onClick={() => dispatch(getAutocompletes({ term: "apple" }))}>
        Get autocompletes
      </button>
      <button onClick={() => dispatch(getStories({ entriesId: "125670" }))}>
        Get stories
      </button>
    </div>
  );
}

export default App;
