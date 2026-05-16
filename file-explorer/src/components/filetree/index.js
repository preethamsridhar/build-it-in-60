import { useFileExplorer } from "../../hooks"
import { FileList } from "../fileList";

export const FileTree = ({fileExplorerConfig, root}) => {
    
    const parentToChild = fileExplorerConfig.parentToChild;

    return <div>
        <FileList fileList={parentToChild[root]} fileState={fileExplorerConfig} />
    </div>
} 