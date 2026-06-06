import {DICTIONARY} from './engine/core';
import {Boggle} from "./components/boggle";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Boggle dictionary={DICTIONARY} />
    </div>
  );
}
