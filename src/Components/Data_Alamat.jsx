import SubmitBtn from "./Submit_Btn";
import TextInput from "./Text_input";

const DataAlamat = () => {
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
          <TextInput title="Alamat" required={true} type="text" hintText="cth: Jalan Danau Ranau g4" value="" />
          <TextInput title="Nomor KK" required={true} type="number" hintText="cth: 3507028929839" value="" />
          <TextInput title="Kelurahan" required={true} type="text" hintText="cth: Sawojajar" value="" />
          <TextInput title="Kecamatan" required={true} type="text" hintText="cth: Pagak" value="" />
          <TextInput title="Kota/Kabupaten" required={true} type="text" hintText="cth: Kab. Malang" value="" />
        </div>
        <div className="right-side w-full flex flex-col gap-y-5">
          <TextInput title="Kode Pos" required={true} type="text" hintText="cth: 651658" value="" />
          <TextInput title="Telepon Rumah" required={true} type="tel" hintText="cth: 085855008901" value="" />
          <TextInput title="Nomor Telepon" required={true} type="text" hintText="cth: 087881488608" value="" />
          <div className="flex justify-end w-full">
            <SubmitBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataAlamat;
