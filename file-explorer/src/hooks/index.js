import { useState } from "react"

export const useFileExplorer  = (fileExplorerConfig) => {
    const [fileState, setFileState] = useState(fileExplorerConfig);

    return {
        fileState
    }
}