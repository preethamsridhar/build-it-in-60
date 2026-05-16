import { FileTree } from "../filetree";
import "./styles.css";

export const FileFolder = ({ name, type, fileState, root }) => {
  return (
    <div>
      <div className="filename__contianer">
        {name}{" "}
        {type === "folder" ? (
          <div class="filename__button_group">
            <button>Add folder</button>
            <button>Add file</button>
          </div>
        ) : null}
      </div>
      {type === "folder" ? (
        <FileTree fileExplorerConfig={fileState} root={root} />
      ) : null}
    </div>
  );
};
