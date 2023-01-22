const SubmitBtn = (props) => {
  return (
    <div className="wrapper">
      {props.loading ? (
        <button onClick={props.onClick} className="px-6 py-2 bg-gray-400 w-fit  rounded-full text-white">
          <p>Simpan Perubahan</p>
        </button>
      ) : (
        <button onClick={props.onClick} className="px-6 py-2 bg-green-primary w-fit  rounded-full text-white">
          <p>Simpan Perubahan</p>
        </button>
      )}
    </div>
  );
};

export default SubmitBtn;
