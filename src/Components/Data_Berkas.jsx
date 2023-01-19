import SubmitBtn from "./Submit_Btn";
import { useDropzone } from "react-dropzone";
import Left_Files from "./Left_Files";
import Right_Files from "./Right_Files";
const DataBerkas = () => {
  const { acceptedFiles, fileRejections, getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/jpeg": [],
      "image/png": [],
    },
  });

  const acceptedFileItems = acceptedFiles.map((file) =>
    // (
    //   <li key={file.path}>
    //     {file.path} - {file.size} bytes
    //   </li>
    // )
    {
      console.log(file);
    }
  );

  const fileRejectionItems = fileRejections.map(({ file, errors }) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
      <ul>
        {errors.map((e) => (
          <li key={e.code}>{e.message}</li>
        ))}
      </ul>
    </li>
  ));

  return (
    <div className="mainwrapper w-full my-10">
      <div className="Wrapper w-full flex flex-row gap-x-10">
        <Left_Files />
        <Right_Files />
      </div>
    </div>
  );
};
export default DataBerkas;
