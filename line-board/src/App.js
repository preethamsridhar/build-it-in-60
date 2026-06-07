import { Lineboard } from "./components/lineboard"
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Lineboard size={12} sequenceCount={5} />
    </div>
  );
}
