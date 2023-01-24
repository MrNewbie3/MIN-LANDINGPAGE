import SubmitBtn from "./Submit_Btn";
import { useDropzone } from "react-dropzone";
import Left_Files from "./Left_Files";
import Right_Files from "./Right_Files";
const DataBerkas = () => {
  return (
    <div className="mainwrapper w-full my-10">
      <div className="Wrapper w-full flex flex-col gap-y-10 lg:flex-row lg:gap-x-5">
        <Left_Files />
        <Right_Files />
      </div>
    </div>
  );
};
export default DataBerkas;
