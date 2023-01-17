const TextInput = (props) => {
  return (
    <div className="form flex flex-row w-full items-center ">
      <div className="text w-2/5">
        <p className="text-base font-medium ">
          {props.title} <span className="text-red-600">{props.required ? "*" : ""}</span>
        </p>
      </div>
      <div className="forms w-full">
        <input type={props.type} placeholder={props.hintText} value={props.value} onChange={props.onChange} className="input w-full bg-stroke-number rounded-full" name={props.name} id={props.id} />
      </div>
    </div>
  );
};

export default TextInput;
