import { FileFolder } from "../filefolder";
import { FileTree } from "../filetree";
import "./styles.css";

export const FileList = ({ fileList, fileState }) => {
  const byId = fileState.byId;
  return (
    <div className="filelist__container">
      {fileList && fileList.length && fileList.map((id) => {
        return (
          <FileFolder key={id} root={id} fileState={fileState} name={byId[id].name} type={byId[id].type} />
        );
      })}
    </div>
  );
};
