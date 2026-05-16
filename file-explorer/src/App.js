
import { FileTree } from "./components/filetree";
import { fileExplorerConfig } from "./engine/core";
import { useFileExplorer } from "./hooks";
import "./styles.css";

export default function App() {
  const {fileState} = useFileExplorer(fileExplorerConfig);
  return (
    <div className="App">
      <FileTree fileExplorerConfig={fileState} root="root"/>
    </div>
  );
}
