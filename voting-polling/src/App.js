
import { Whiteboard } from "./components/whiteboard";
import { shapeConfig } from "./engine/core";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Whiteboard rows={2} cols={3} shapeConfig={shapeConfig} />
    </div>
  );
}
