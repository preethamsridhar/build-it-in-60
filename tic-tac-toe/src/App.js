import { Tictactoe } from "./components/tictactoe";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Tictactoe size={4} />
    </div>
  );
}
