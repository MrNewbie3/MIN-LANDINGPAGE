import { useState } from "react";
import SubmitBtn from "./Submit_Btn";
import TextInput from "./Text_input";

const DataAlamat = () => {
  const [alamatValues, setFormValues] = useState({
    alamat: "",
    KK: "",
    kelurahan: "",
    kecamatan: "",
    kota: "",
    kp: "",
    tel: "",
    phone: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: [value],
    }));
  };
  const handleSubmit = (e) => {
    console.log(alamatValues);
  };
  return (
    <div className="mainwrapper w-full">
      <div className="title my-10">
        <h1 className="font-semibold text-lg">Data Alamat</h1>
        <p className="text-gray-500 font-medium ">
          Lengkapi data dibawah, Jika terdapat <span className="text-red-600">(*)</span> maka wajib diisi
        </p>
      </div>
      <div className="Wrapper w-full flex flex-row gap-x-5">
        <div className="left-side w-full flex flex-col gap-y-5">
          <TextInput name="alamat" title="Alamat" required={true} type="text" hintText="cth: Jalan Danau Ranau g4" value={alamatValues.alamat} onChange={handleChange} />
          <TextInput name="KK" title="Nomor KK" required={true} type="number" hintText="cth: 3507028929839" value={alamatValues.KK} onChange={handleChange} />
          <TextInput name="kelurahan" title="Kelurahan" required={true} type="text" hintText="cth: Sawojajar" value={alamatValues.kelurahan} onChange={handleChange} />
          <TextInput name="kecamatan" title="Kecamatan" required={true} type="text" hintText="cth: Pagak" value={alamatValues.kecamatan} onChange={handleChange} />
          <TextInput name="kota" title="Kota/Kabupaten" required={true} type="text" hintText="cth: Kab. Malang" value={alamatValues.kota} onChange={handleChange} />
        </div>
        <div className="right-side w-full flex flex-col gap-y-5">
          <TextInput name="kp" title="Kode Pos" required={true} type="text" hintText="cth: 651658" value={alamatValues.kp} onChange={handleChange} />
          <TextInput name="tel" title="Telepon Rumah" required={true} type="tel" hintText="cth: 085855008901" value={alamatValues.tel} onChange={handleChange} />
          <TextInput name="phone" title="Nomor Telepon" required={true} type="text" hintText="cth: 087881488608" value={alamatValues.phone} onChange={handleChange} />
          <div className="flex justify-end w-full">
            <SubmitBtn onClick={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataAlamat;
