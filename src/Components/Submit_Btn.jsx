const SubmitBtn = (props) => {
  return (
    <button onClick={props.onClick} className="px-6 py-2 bg-green-primary w-fit  rounded-full text-white">
      <p>Simpan Perubahan</p>
    </button>
  );
};

export default SubmitBtn;
