import { useState } from "react";
import { PostData } from "../Auth/Axios";
import SelectForm from "./Select_Comps";
import SubmitBtn from "./Submit_Btn";
import TextInput from "./Text_input";
import { useAuthContext } from "../hooks/useAuthContext";
import axios from "../lib/axios";

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

const value = JSON.parse(localStorage.getItem("data_umum")) === null ? "" : JSON.parse(localStorage.getItem("data_umum"));

const DataUmum = () => {
  const [dataDiri, setFormValue] = useState({
    nama_lengkap: value === "" ? "" : value.nama_lengkap,
    jenis_kelamin: value === "" ? "" : value.jenis_kelamin,
    gol_darah: value === "" ? "" : value.gol_darah,
    tempat_lahir: value === "" ? "" : value.tempat_lahir,
    tanggal_lahir: value === "" ? "" : value.tanggal_lahir,
    anak_ke: value === "" ? "" : value.anak_ke,
    nisn: value === "" ? "" : value.nisn,
    nama_sekolah: value === "" ? "" : value.nama_sekolah,
    asal_sekolah: value === "" ? "" : value.asal_sekolah,
    npsn: value === "" ? "" : value.npsn,
  });
  const { user } = useAuthContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setFormValue((prevState) => ({
      ...prevState,
      [name]: [value],
    }));
  };
  const handleChangeKelamin = (e) => {
    setFormValue((prevState) => ({
      ...prevState,
      jenis_kelamin: [e.value],
    }));
  };
  const handleChangeGoldar = (e) => {
    setFormValue((prevState) => ({
      ...prevState,
      gol_darah: [e.value],
    }));
  };

  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const dataSiswa = {
      nama_lengkap: dataDiri.nama_lengkap[0],
      nisn: dataDiri.nisn[0],
      jenis_kelamin: dataDiri.jenis_kelamin[0],
      tempat_lahir: dataDiri.tempat_lahir[0],
      tanggal_lahir: dataDiri.tanggal_lahir[0],
      gol_darah: dataDiri.gol_darah[0],
    };

    await axios
      .put(`/api/students/${user.user.id}`, dataSiswa, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((result) => {
        setLoading(false);
        localStorage.setItem("data_umum", JSON.stringify(dataDiri));
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  return (
    <div className="mainwrapper w-full">
      <div className="title my-10">
        <h1 className="font-semibold text-lg">Identitas Diri</h1>
        <p className="text-gray-500 font-medium ">
          Lengkapi data dibawah, Jika terdapat <span className="text-red-600">(*)</span> maka wajib diisi
        </p>
      </div>
      <div className="">
        <form onSubmit={handleSubmit} className="Wrapper w-full flex-col flex lg:flex-row gap-y-5 lg:gap-x-5 ">
          <div className="left-side w-full flex flex-col gap-y-5">
            <TextInput title="Nama Lengkap" required={true} type="text" hintText="cth: Tommy Kurniawan" onChange={(e) => handleChange(e)} value={dataDiri.nama_lengkap} name="nama_lengkap" />
            <SelectForm
              onChange={(choices) => {
                handleChangeKelamin(choices);
              }}
              title="Jenis Kelamin"
              name="jenis_kelamin"
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
              name="gol_darah"
            />
            <TextInput title="Tempat Lahir" required={true} type="text" hintText="cth: Malang" onChange={handleChange} value={dataDiri.tempat_lahir} name="tempat_lahir" />
            <TextInput title="Tanggal Lahir" required={true} type="date" hintText="cth: Tommy Kurniawan" onChange={handleChange} value={dataDiri.tanggal_lahir} name="tanggal_lahir" />
          </div>
          <div className="right-side w-full flex flex-col gap-y-5">
            <TextInput title="Anak Ke" required={true} type="number" hintText="cth: 1" onChange={handleChange} value={dataDiri.anak_ke} name="anak_ke" />
            <TextInput title="NISN" required={true} type="number" hintText="cth: 00634565XXX" onChange={handleChange} value={dataDiri.nisn} name="nisn" />
            <TextInput title="Asal Sekolah" required={true} type="text" hintText="TK / BA" onChange={handleChange} value={dataDiri.asal_sekolah} name="asal_sekolah" />
            <TextInput title="Nama Sekolah" required={true} type="text" hintText="cth: TK Kusuma Mulia Malang" onChange={handleChange} value={dataDiri.nama_sekolah} name="nama_sekolah" />
            <TextInput title="NPSN" required={true} type="number" hintText="cth: 09817322" onChange={handleChange} value={dataDiri.npsn} name="npsn" />
            <div className="flex justify-center lg:justify-end w-full">
              <SubmitBtn loading={loading} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DataUmum;
