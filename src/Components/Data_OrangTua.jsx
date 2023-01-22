import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import axios from "../lib/axios";
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
  const [dataOrtuAyah, setFormValues] = useState({
    name: "",
    nik: "",
    pekerjaan: "",
    kantor: "",
    penghasilan: "",
    no_telp: "",
  });

  const [dataOrtuIbu, setFormValueIbu] = useState({
    name: "",
    nik: "",
    pekerjaan: "",
    kantor: "",
    penghasilan: "",
    no_telp: "",
  });

  const { user } = useAuthContext();

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
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const dataAyah = {
      nama_lengkap_ayah: dataOrtuAyah.name[0],
      nik_ayah: dataOrtuAyah.nik[0],
      pekerjaan_ayah: dataOrtuAyah.pekerjaan[0],
      nama_kantor_ayah: dataOrtuAyah.kantor[0],
      penghasilan_ayah: dataOrtuAyah.penghasilan[0],
      no_telp: dataOrtuAyah.no_telp[0],
    };

    await axios
      .put(`/api/fathers/${user.user.id}`, dataAyah, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((result) => {
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });

    const dataIbu = {
      nama_lengkap_ibu: dataOrtuIbu.name[0],
      nik_ibu: dataOrtuIbu.nik[0],
      pekerjaan_ibu: dataOrtuIbu.pekerjaan[0],
      nama_kantor_ibu: dataOrtuIbu.kantor[0],
      penghasilan_ibu: dataOrtuIbu.penghasilan[0],
      no_telp: dataOrtuIbu.no_telp[0],
    };

    await axios.put(`/api/mothers/${user.user.id}`, dataIbu, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
  };
  return (
    <div className="mainwrapper w-full">
      <div className="title my-10">
        <h1 className="font-semibold text-lg">Identitas Orang Tua</h1>
        <p className="text-gray-500 font-medium ">
          Lengkapi data dibawah, Jika terdapat <span className="text-red-600">(*)</span> maka wajib diisi
        </p>
      </div>
      <div className="">
        <form onSubmit={(e) => handleSubmit(e)} className="Wrapper w-full flex-col flex lg:flex-row gap-y-5 lg:gap-x-5 ">
          <div className="left-side w-full flex flex-col gap-y-5">
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
            <TextInput title="No. Telp Ayah" required={true} name="no_telp" type="number" hintText="cth: 3507028929839" onChange={handleChangeAyah} value={dataOrtuAyah.no_telp} />
          </div>
          <div className="right-side w-full flex flex-col gap-y-5">
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
            <TextInput title="No. Telp" required={true} name="no_telp" type="number" hintText="cth: 3507028929839" onChange={handleChangeIbu} value={dataOrtuIbu.no_telp} />
            <div className="flex justify-center lg:justify-end w-full">
              <SubmitBtn onClick={handleSubmit} loading={loading} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DataOrtu;
