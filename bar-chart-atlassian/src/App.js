import { Chart } from "./components/chart";
import { chartConfig } from "./engine";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Chart config={chartConfig} />
    </div>
  );
}
