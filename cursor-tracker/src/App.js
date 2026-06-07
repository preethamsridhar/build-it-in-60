import { Cursortracker } from "./components/cursortracker"
import "./styles.css";

export default function App() {

  const CustomEle = () => {
    return <div>hello world</div>
  }
  return (
    <div className="App">
      <Cursortracker  height={600} width={800} render={CustomEle()} />
    </div>
  );
}
