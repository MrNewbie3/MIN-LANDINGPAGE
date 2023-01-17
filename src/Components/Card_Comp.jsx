import { CloseRounded } from "@mui/icons-material";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";

const CardComps = (props) => {
  return props.status ? (
    <div className="card w-80 py-2 px-2 bg-base-100 rounded-2xl bg-gradient-to-b from-green-primary to-green-gradient text-white">
      <div className="card-body">
        <div className="flex flex-row justify-between">
          <div className="text">
            <p className="font-bold">{props.title}</p>
            <p className="font-medium">{props.value}</p>
          </div>
          <div className="status-icon flex items-center">
            <DoneRoundedIcon fontSize="large" />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="card w-80 py-2 px-2 bg-base-100 rounded-2xl  text-gray-500">
      <div className="card-body">
        <div className="flex flex-row justify-between">
          <div className="text">
            <p className="font-bold capitalize">{props.title}</p>
            <p className="font-medium capitalize">{props.value}</p>
          </div>
          <div className="status-icon flex items-center">
            <CloseRounded fontSize="large" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComps;
