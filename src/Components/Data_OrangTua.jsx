import { useState } from "react";
import SelectForm from "./Select_Comps";
import SubmitBtn from "./Submit_Btn";
import TextInput from "./Text_input";
const Pekerjaan = [
  { value: "Laki-Laki", label: "Laki-Laki" },
  { value: "Perempuan", label: "Perempuan" },
];
const Penghasilan = [
  { value: "A", label: "A" },
  { value: "B", label: "B" },
  { value: "AB", label: "AB" },
  { value: "O", label: "O" },
];

const DataOrtu = () => {
  const [dataOrtuAyah, setFormValues] = useState({ name: "", nik: "", pekerjaan: "", kantor: "", penghasilan: "" });
  const [dataOrtuIbu, setFormValueIbu] = useState({ name: "", nik: "", pekerjaan: "", kantor: "", penghasilan: "" });
  const handleChangeAyah = (e) => {
    const { name, value } = e.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: [value],
    }));
  };
  const handleChangeAyahPekerjaan = (e) => {
    setFormValues((prevState) => ({
      ...prevState,
      pekerjaan: [e.value],
    }));
  };
  const handleChangeAyahPenghasilan = (e) => {
    setFormValues((prevState) => ({
      ...prevState,
      penghasilan: [e.value],
    }));
  };
  const handleChangeIbu = (e) => {
    const { name, value } = e.target;
    setFormValueIbu((prevState) => ({
      ...prevState,
      [name]: [value],
    }));
  };
  const handleChangeIbuPekerjaan = (e) => {
    setFormValueIbu((prevState) => ({
      ...prevState,
      pekerjaan: [e.value],
    }));
  };
  const handleChangeIbuPenghasilan = (e) => {
    setFormValueIbu((prevState) => ({
      ...prevState,
      penghasilan: [e.value],
    }));
  };
  const handleSubmit = (e) => {
    localStorage.setItem(
      "dataAyah",
      JSON.stringify({ nama_lengkap_ayah: dataOrtuAyah.name, nik_ayah: dataOrtuAyah.nik, pekerjaan_ayah: dataOrtuAyah.pekerjaan, nama_kantor_ayah: dataOrtuAyah.kantor, penghasilan_ayah: dataOrtuAyah.penghasilan })
    );
    localStorage.setItem("dataIbu", JSON.stringify({ nama_lengkap_ibu: dataOrtuIbu.name, nik_ibu: dataOrtuIbu.nik, pekerjaan_ibu: dataOrtuIbu.pekerjaan, nama_kantor_ibu: dataOrtuIbu.kantor, penghasilan_ibu: dataOrtuIbu.penghasilan }));
  };
  return (
    <div className="mainwrapper w-full">
      <div className="title my-10">
        <h1 className="font-semibold text-lg">Identitas Orang Tua</h1>
        <p className="text-gray-500 font-medium ">
          Lengkapi data dibawah, Jika terdapat <span className="text-red-600">(*)</span> maka wajib diisi
        </p>
      </div>
      <div className="Wrapper w-full flex flex-col gap-y-5 lg:flex-row lg:gap-x-5">
        <div className="left-side w-full flex flex-col gap-y-5">
          <div className="title ">
            <h1 className="font-semibold text-lg">Data Ayah</h1>
          </div>
          <TextInput title="Nama Lengkap" required={true} name="name" type="text" hintText="cth: Tommy Kurniawan" onChange={handleChangeAyah} value={dataOrtuAyah.name} />
          <TextInput title="NIK" required={true} name="nik" type="number" hintText="cth: 3507028929839" onChange={handleChangeAyah} value={dataOrtuAyah.nik} />
          <SelectForm
            title="Pekerjaan"
            required={true}
            name="pekerjaan"
            onChange={(choice) => {
              handleChangeAyahPekerjaan(choice);
            }}
            value={Pekerjaan}
          />
          <TextInput title="Nama Kantor" required={true} name="kantor" type="text" hintText="cth: Google" onChange={handleChangeAyah} value={dataOrtuAyah.kantor} />
          <SelectForm
            title="Penghasilan"
            required={true}
            name="penghasilan"
            onChange={(choice) => {
              handleChangeAyahPenghasilan(choice);
            }}
            value={Penghasilan}
          />
        </div>
        <div className="right-side w-full flex flex-col gap-y-5">
          <div className="title ">
            <h1 className="font-semibold text-lg">Data Ibu</h1>
          </div>
          <TextInput title="Nama Lengkap" required={true} name="name" type="text" hintText="cth: Tommy Kurniawan" onChange={handleChangeIbu} value={dataOrtuIbu.name} />
          <TextInput title="NIK" required={true} name="nik" type="number" hintText="cth: 3507028929839" onChange={handleChangeIbu} value={dataOrtuIbu.nik} />
          <SelectForm
            title="Pekerjaan"
            required={true}
            name="pekerjaan"
            onChange={(choice) => {
              handleChangeIbuPekerjaan(choice);
            }}
            value={Pekerjaan}
          />
          <TextInput title="Nama Kantor" required={true} name="kantor" type="text" hintText="cth: Google" onChange={handleChangeIbu} value={dataOrtuIbu.kantor} />
          <SelectForm
            title="Penghasilan"
            required={true}
            name="penghasilan"
            onChange={(choice) => {
              handleChangeIbuPenghasilan(choice);
            }}
            value={Penghasilan}
          />
          <div className="flex justify-center md:justify-end w-full">
            <SubmitBtn onClick={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataOrtu;
