import { useState } from "react";
import { PostData } from "../Auth/Axios";
import SelectForm from "./Select_Comps";
import SubmitBtn from "./Submit_Btn";
import TextInput from "./Text_input";
const Gender = [
  { value: null, label: "Pilih Jenis Kelamin" },
  { value: "Laki-Laki", label: "Laki-Laki" },
  { value: "Perempuan", label: "Perempuan" },
];
const bloodType = [
  { value: null, label: "Pilih Golongan Darah" },
  { value: "A", label: "A" },
  { value: "B", label: "B" },
  { value: "AB", label: "AB" },
  { value: "O", label: "O" },
];

const DataUmum = () => {
  const [dataDiri, setFormValue] = useState({ name: "", jk: "", goldar: "", tempat: "", tgl: "", items: "", nisn: "", namaAsal: "", asalSekolah: "", npsn: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue((prevState) => ({
      ...prevState,
      [name]: [value],
    }));
  };
  const handleChangeKelamin = (e) => {
    setFormValue((prevState) => ({
      ...prevState,
      jk: [e.value],
    }));
  };
  const handleChangeGoldar = (e) => {
    setFormValue((prevState) => ({
      ...prevState,
      goldar: [e.value],
    }));
  };
  const handleChangeAsal = (e) => {
    setFormValue((prevState) => ({
      ...prevState,
      asalSekolah: [e.value],
    }));
  };
  const handleSubmit = () => {
    localStorage.setItem(
      "updateData",
      JSON.stringify({ nama_lengkap: dataDiri.name[0], nisn: dataDiri.nisn[0], jenis_kelamin: dataDiri.jk[0], tempat_lahir: dataDiri.tempat[0], tanggal_lahir: dataDiri.tgl[0], gol_darah: dataDiri.goldar[0] })
    );
  };
  return (
    <div className="mainwrapper w-full">
      <div className="title my-10">
        <h1 className="font-semibold text-lg">Identitas Diri</h1>
        <p className="text-gray-500 font-medium ">
          Lengkapi data dibawah, Jika terdapat <span className="text-red-600">(*)</span> maka wajib diisi
        </p>
      </div>
      <div className="Wrapper w-full flex flex-col gap-y-5 lg:flex-row lg:gap-x-5">
        <div className="left-side w-full flex flex-col gap-y-5">
          <TextInput title="Nama Lengkap" required={true} type="text" hintText="cth: Tommy Kurniawan" onChange={handleChange} value={dataDiri.name} name="name" />
          <SelectForm
            onChange={(choices) => {
              handleChangeKelamin(choices);
            }}
            title="Jenis Kelamin"
            required={true}
            value={Gender}
          />
          <SelectForm
            onChange={(choices) => {
              handleChangeGoldar(choices);
            }}
            title="Golongan Darah"
            required={true}
            value={bloodType}
          />
          <TextInput title="Tempat Lahir" required={true} type="text" hintText="cth: Malang" onChange={handleChange} value={dataDiri.tempat} name="tempat" />
          <TextInput title="Tanggal Lahir" required={true} type="date" hintText="cth: Tommy Kurniawan" onChange={handleChange} value={dataDiri.tgl} name="tgl" />
        </div>
        <div className="right-side w-full flex flex-col gap-y-5">
          <TextInput title="Anak Ke" required={true} type="number" hintText="cth: 1" onChange={handleChange} value={dataDiri.items} name="items" />
          <TextInput title="NISN" required={true} type="number" hintText="cth: 00634565XXX" onChange={handleChange} value={dataDiri.nisn} name="nisn" />
          <SelectForm
            onChange={(choices) => {
              handleChangeAsal(choices);
            }}
            title="Asal Sekolah"
            required={true}
            value={bloodType}
          />
          <TextInput title="Nama Sekolah" required={true} type="text" hintText="cth: TK Kusuma Mulia Malang" onChange={handleChange} value={dataDiri.namaAsal} name="namaAsal" />
          <TextInput title="NPSN" required={true} type="number" hintText="cth: 09817322" onChange={handleChange} value={dataDiri.npsn} name="npsn" />
          <div className="flex justify-center md:justify-end w-full">
            <SubmitBtn onClick={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataUmum;
