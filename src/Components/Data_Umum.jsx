import SelectForm from "./Select_Comps";
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
const DataUmum = () => {
  return (
    <div className="mainwrapper w-full">
      <div className="title my-10">
        <h1 className="font-semibold text-lg">Identitas Diri</h1>
        <p className="text-gray-500 font-medium ">
          Lengkapi data dibawah, Jika terdapat <span className="text-red-600">(*)</span> maka wajib diisi
        </p>
      </div>
      <div className="Wrapper w-full flex flex-row gap-x-5">
        <div className="left-side w-full flex flex-col gap-y-5">
          <TextInput title="Nama Lengkap" required={true} type="text" hintText="cth: Tommy Kurniawan" value="" />
          <SelectForm title="Jenis Kelamin" required={true} value={Gender} />
          <SelectForm title="Jenis Kelamin" required={true} value={bloodType} />
          <TextInput title="Tempat Lahir" required={true} type="text" hintText="cth: Malang" value="" />
          <TextInput title="Tanggal Lahir" required={true} type="date" hintText="cth: Tommy Kurniawan" value="" />
        </div>
        <div className="right-side w-full flex flex-col gap-y-5">
          <TextInput title="Anak Ke" required={true} type="number" hintText="cth: 1" value="" />
          <TextInput title="NISN" required={true} type="number" hintText="cth: 00634565XXX" value="" />
          <SelectForm title="Asal Sekolah" required={true} value={bloodType} />
          <TextInput title="Nama Sekolah" required={true} type="text" hintText="cth: TK Kusuma Mulia Malang" value="" />
          <TextInput title="NPSN" required={true} type="number" hintText="cth: 09817322" value="" />
        </div>
      </div>
    </div>
  );
};

export default DataUmum;
