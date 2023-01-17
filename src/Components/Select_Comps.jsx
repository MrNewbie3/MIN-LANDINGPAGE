import Select from "react-select";
const options = [
  { value: "Undefined", label: "Undefined" },
  { value: "Undefined", label: "Undefined" },
  { value: "Undefined", label: "Undefined" },
];
const SelectForm = (props) => {
  return (
    <div className="form flex flex-row w-full items-center ">
      <div className="text w-2/5">
        <p className="text-base font-medium ">
          {props.title} <span className="text-red-600">{props.required ? "*" : ""}</span>
        </p>
      </div>
      <div className="forms w-full">
        <Select
          styles={{
            control: (baseStyles) => ({
              ...baseStyles,
              background: "#EAEAEA",
              borderRadius: "100px",
              border: 0,
              fontFamily: "Open Sans",
              outline: "none",
              boxShadow: "none",
              padding: "4px",
            }),
          }}
          defaultValue={props.value[0]}
          options={props.value === null || undefined ? options : props.value}
        />
      </div>
    </div>
  );
};
export default SelectForm;
