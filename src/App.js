import { useDispatch, useSelector } from "react-redux";
import "./App.css";

function App() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return <></>;
}

export default App;
