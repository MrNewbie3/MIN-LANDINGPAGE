import { Fragment, useState } from "react";
import SelectForm from "./Select_Comps";
import TextInput from "./Text_input";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import SubmitBtn from "./Submit_Btn";
const options = [
  { value: "Undefined", label: "Undefined 1" },
  { value: "Undefined-1", label: "Undefined 2" },
  { value: "Undefined-2", label: "Undefined 3" },
];

const DataPrestasi = () => {
  const [input, setInputs] = useState([{ name: "", peringkat: "", tingkat: "", file: "" }]);
  const handleFormChange = (index, event) => {
    let data = [...input];
    data[index][event.target.name] = event.target.value;
    setInputs(data);
  };
  const addForms = () => {
    let newForms = { name: "", peringkat: "", tingkat: "", file: "" };
    setInputs([...input, newForms]);
  };
  const removeForms = (index) => {
    let data = [...input];
    data.splice(index, 1);
    setInputs(data);
  };
  const handleSubmit = () => {
    console.log(input);
  };
  return (
    <div className="flex flex-col w-full gap-y-5">
      <div className="title mt-10 mb-6">
        <h1 className="font-semibold text-lg">Data Prestasi</h1>
        <p className="text-gray-500 font-medium ">
          Masukkan jumlah prestasi yang dimiliki, klik tanda tambah jika lebih dari 1 dan upload sertifikat perlombaan <span className="text-red-600">*batas upload 2mb</span>
        </p>
      </div>
      {input.map((input, index) => {
        return (
          <div key={index} className="wrapper flex flex-col gap-y-4 lg:flex-row w-full justify-center items-center">
            <TextInput
              title={"Prestasi " + (index + 1)}
              type="text"
              name="name"
              hintText="cth: Olimpiade Matematika"
              value={input.name}
              onChange={(event) => {
                handleFormChange(index, event);
              }}
            />
            <SelectForm value={options} name="peringkat" />
            <SelectForm value={options} name="tingkat" />
            <TextInput
              type="file"
              name="file"
              hintText="cth: Olimpiade Matematika"
              value={input.file}
              onChange={(event) => {
                handleFormChange(index, event);
              }}
            />
            {index > 0 ? (
              <button
                className="self-center flex rounded-full ml-4 text-white p-2 bg-red"
                onClick={() => {
                  removeForms(index);
                }}
              >
                <DeleteRoundedIcon />
              </button>
            ) : (
              <button onClick={addForms} className=" ml-4 self-center flex rounded-full text-white p-2 bg-add-blue">
                {" "}
                <AddRoundedIcon />
              </button>
            )}
          </div>
        );
      })}
      <div className="wrapper-btn flex justify-center md:justify-end w-full">
        <SubmitBtn onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default DataPrestasi;
