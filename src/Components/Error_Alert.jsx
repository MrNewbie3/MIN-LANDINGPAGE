import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
const ErrorAlert = () => {
  return (
    <div className="wrapper-container my-10">
      <div className="alert-notifications flex flex-col gap-y-6">
        <div className="flex flex-row gap-x-2 font-semibold items-center ">
          <InfoRoundedIcon />
          <p className="text-lg">Pengumuman</p>
        </div>
        <div className="alert alert-error outline outline-2 outline-red-600 rounded-2xl bg-red-100">
          <div className="flex flex-col items-start">
            <p className="font-bold">Identitas diri belum lengkap!</p>
            <p className="font-medium">Lengkapi terlebih dahulu identitas diri anda dengan klik “Identitas Diri” di atas</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorAlert;
