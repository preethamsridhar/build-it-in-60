
import { Polling } from "./components/polling";
import { pollingConfig, shapeConfig } from "./engine/core";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Polling config={pollingConfig} />
    </div>
  );
}
