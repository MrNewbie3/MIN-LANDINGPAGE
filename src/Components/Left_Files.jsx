import SubmitBtn from "./Submit_Btn";
import { useDropzone } from "react-dropzone";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
const Left_Files = () => {
  const { acceptedFiles, fileRejections, getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/jpeg": [],
      "image/png": [],
    },
  });

  const acceptedFileItems = acceptedFiles.map((file) =>
    (
      <li key={file.path}>
        {file.path} - {file.size} bytes
      </li>
    )
   
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
    <div className="left-side w-full flex flex-col gap-y-5">
      <div className="title mb-10">
        <h1 className="font-semibold text-lg">Unggah Foto</h1>
        <p className="text-gray-500 font-medium ">Unggah foto dengan ketentuan menggunakan seragam asal sekolah, rapi, wajah tampak jelas</p>
      </div>
      <section className="container text-gray-500  border-2 border-gray-400 rounded-xl py-3 px-4 flex flex-row gap-x-4">
        <div className="wrapper-icons py-10 px-7  border-2 border-gray-400 rounded-xl">
          <div className="icons p-4 text-5xl">
            <PersonRoundedIcon fontSize="" />
          </div>
        </div>
        <div className="wrapper-input w-full">
          <div {...getRootProps({ className: "dropzone text-gray-500 border-dashed border-2 border-gray-400 rounded-xl py-3  w-auto h-full text-center flex items-center flex-col justify-center" })}>
            <input {...getInputProps()} />
            <h1>{acceptedFileItems}</h1>
            <p>Klik/Drag foto di sini</p>
            <em>(Format file JPG/PNG, Maksimal 2MB)</em>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Left_Files;
