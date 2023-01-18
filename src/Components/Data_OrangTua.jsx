import SelectForm from "./Select_Comps";
import SubmitBtn from "./Submit_Btn";
import TextInput from "./Text_input";
const Gender = [
  { value: "Laki-Laki", label: "Laki-Laki" },
  { value: "Perempuan", label: "Perempuan" },
];
const bloodType = [
  { value: "A", label: "A" },
  { value: "B", label: "B" },
  { value: "AB", label: "AB" },
  { value: "O", label: "O" },
];
const DataOrtu = () => {
  return (
    <div className="mainwrapper w-full">
      <div className="title my-10">
        <h1 className="font-semibold text-lg">Identitas Orang Tua</h1>
        <p className="text-gray-500 font-medium ">
          Lengkapi data dibawah, Jika terdapat <span className="text-red-600">(*)</span> maka wajib diisi
        </p>
      </div>
      <div className="Wrapper w-full flex flex-row gap-x-5">
        <div className="left-side w-full flex flex-col gap-y-5">
          <TextInput title="Nama Lengkap" required={true} type="text" hintText="cth: Tommy Kurniawan" value="" />
          <TextInput title="NIK" required={true} type="number" hintText="cth: 3507028929839" value="" />
          <SelectForm title="Pekerjaan" required={true} value={Gender} />
          <TextInput title="Nama Kantor" required={true} type="text" hintText="cth: Google" value="" />
          <SelectForm title="Penghasilan" required={true} value={bloodType} />
        </div>
        <div className="right-side w-full flex flex-col gap-y-5">
          <TextInput title="Nama Lengkap" required={true} type="text" hintText="cth: Tommy Kurniawan" value="" />
          <TextInput title="NIK" required={true} type="number" hintText="cth: 3507028929839" value="" />
          <SelectForm title="Pekerjaan" required={true} value={Gender} />
          <TextInput title="Nama Kantor" required={true} type="text" hintText="cth: Google" value="" />
          <SelectForm title="Penghasilan" required={true} value={bloodType} />
          <div className="flex justify-end w-full">
            <SubmitBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataOrtu;
