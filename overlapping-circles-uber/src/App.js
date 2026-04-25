import { Board } from "./components/board";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Board size={4} />
    </div>
  );
}
