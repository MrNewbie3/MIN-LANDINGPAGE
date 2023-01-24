import SubmitBtn from "./Submit_Btn";
import { useDropzone } from "react-dropzone";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import { useCallback } from "react";
import axios from "../lib/axios";
import { useState } from "react";
const Right_Files = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [file, setFile] = useState(null);
  const { acceptedFiles, fileRejections, getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/jpeg": [],
      "image/png": [],
    },
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      setFile(file);
      console.log(file);
    },
  });
  const handleUpload = () => {
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => {
      const binaryData = new Uint8Array(reader.result);
      console.log(binaryData);
      axios
        .post("/api/students/" + user.user.id, { foto_akta: binaryData, _method: "PUT" }, { headers: { "Content-Type": "multipart/form-data, application/JSON", Authorization: `Bearer ${user.token}` } })
        .then((result) => {
          console.log(result.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
  };

  const acceptedFileItems = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

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
    <div className="right-side w-full flex flex-col gap-y-5">
      <div className="title lg:mb-10">
        <h1 className="font-semibold text-lg">Unggah Akta</h1>
        <p className="text-gray-500 font-medium ">Unggah foto akta kelahiran dengan ketentuan tulisan tampak jelas dan bisa terbaca dengan baik</p>
      </div>
      <section className="container text-gray-500  border-2 border-gray-400 rounded-xl py-3 px-4 flex flex-row gap-x-4">
        <div className="wrapper-icons py-10 px-7  border-2 border-gray-400 rounded-xl">
          <div className="icons p-4 text-5xl">
            <DescriptionRoundedIcon fontSize="" />
          </div>
        </div>
        <div className="wrapper-input w-full">
          <div {...getRootProps({ className: "dropzone text-gray-500 border-dashed border-2 border-gray-400 rounded-xl py-3  w-auto h-full text-center flex items-center flex-col justify-center" })}>
            <input {...getInputProps()} name="foto_akte" />
            <h1>{acceptedFileItems}</h1>
            <p>Klik/Drag foto di sini</p>
            <em>(Format file JPG/PNG, Maksimal 2MB)</em>
          </div>
        </div>
      </section>
      <div className="flex justify-end w-full">
        <SubmitBtn onClick={handleUpload} />
      </div>
    </div>
  );
};
export default Right_Files;
