import SubmitBtn from "./Submit_Btn";
import Dropzone, { useDropzone } from "react-dropzone";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import { useState } from "react";
import { useCallback } from "react";
import axios from "../lib/axios";
import { useAuthContext } from "../hooks/useAuthContext";
const Left_Files = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const onDrop = useCallback((acceptedFiles) => {
    const formData = new FormData();
    console.log(formData);
    acceptedFiles.forEach((file) => {
      formData.append("file", file);
    });
    axios
      .post("/api/students/" + user.user.id, { foto_siswa: formData, _method: "PUT" }, { headers: { "Content-Type": "multipart/form-data, application/JSON", Authorization: `Bearer ${user.token}` } })
      .then((result) => {
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const { acceptedFiles, fileRejections, getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/jpeg": [],
      "image/png": [],
    },
    onDrop,
  });

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
  const [file, setFile] = useState(null);
  const handleFileChange = (event) => {
    console.log(event.target.files[0]);
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.set("foto_akte", file);
    formData.append("name", "Atharafi");
    console.log(formData.values());
    axios
      .post("/api/students/" + user.user.id, { formData, _method: "PUT" }, { headers: { "Content-Type": "multipart/form-data", Authorization: `Bearer ${user.token}` } })
      .then((result) => {
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="left-side w-full flex flex-col gap-y-5">
      <div className="title lg:mb-10">
        <h1 className="font-semibold text-lg">Unggah Foto</h1>
        <p className="text-gray-500 font-medium ">Unggah foto dengan ketentuan menggunakan seragam asal sekolah, rapi, wajah tampak jelas</p>
      </div>
      <section className="container text-gray-500  border-2 border-gray-400 rounded-xl py-3 px-4 flex flex-row gap-x-4">
        <div className="wrapper-icons py-10 px-7  border-2 border-gray-400 rounded-xl ">
          <div className="icons p-4 text-5xl">
            <PersonRoundedIcon fontSize="" />
          </div>
        </div>
        <div className="wrapper-input w-full">
          <form method="POST" encType="multipart/form-data" onSubmit={handleSubmit}>
            {/* <div {...getRootProps({ className: "dropzone text-gray-500 border-dashed border-2 border-gray-400 rounded-xl py-3  w-auto h-full text-center flex items-center flex-col justify-center" })}> */}
            {/* <input {...getInputProps()} />
              {dataFile.length > 0 ? (
                <h1>{acceptedFileItems}</h1>
              ) : (
                <div className="wrap">
                  <p>Klik/Drag foto di sini</p>
                  <em>(Format file JPG/PNG, Maksimal 2MB)</em>
                </div>
              )} */}
            <input type="file" onChange={handleFileChange} name="foto_akte" id="" />
            <button type="submit">Submit</button>
            {/* </div> */}
          </form>
        </div>
      </section>
    </div>
  );
};
export default Left_Files;
