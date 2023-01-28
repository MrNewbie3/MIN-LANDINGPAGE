import SubmitBtn from "./Submit_Btn";
import { useDropzone } from "react-dropzone";
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

  const dataFile = acceptedFiles.map((items) => {
    return items;
  });

  const acceptedFileItems = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {Math.round(file.size / (1024 * 1024))} MB
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
          <div {...getRootProps({ className: "dropzone text-gray-500 border-dashed border-2 border-gray-400 rounded-xl py-3  w-auto h-full text-center flex items-center flex-col justify-center" })}>
            <form onDrop={onDrop} method="PUT" encType="multipart/form-data">
              <input {...getInputProps()} />
              {dataFile.length > 0 ? (
                <h1>{acceptedFileItems}</h1>
              ) : (
                <div className="wrap">
                  <p>Klik/Drag foto di sini</p>
                  <em>(Format file JPG/PNG, Maksimal 2MB)</em>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Left_Files;
