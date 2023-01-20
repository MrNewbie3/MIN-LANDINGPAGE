import React, { useState } from "react";
import axios from "../../lib/axios";
import TitleLogin from "./TitleLogin";
import { SyncLoader } from "react-spinners";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";

const LoginTabs = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const dataLogin = { email, password };

    await axios.post("/api/auth/login", dataLogin).then((user) => {
      localStorage.setItem("user", JSON.stringify(user.data.data));
      console.log("user", user);

      dispatch({ type: "LOGIN", payload: user.data.data.user });

      setLoading(false);
      navigate("/ppdbapps");
    });

    setLoading(false);
  };

  return (
    <>
      <div className="content-wrap mt-8 flex justify-center flex-col">
        <TitleLogin desc={"Masukan email dan password yang sudah dibuat"} />
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="form-content mt-7">
            <div className="form-input mb-2">
              <p className="text-base font-medium">Email :</p>
              <input
                className="w-full px-4 py-2 rounded-full mt-2 bg-grey text-gray-700"
                type={"email"}
                placeholder={"cth: Tommy Kurniawan"}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-input mb-2">
              <p className="text-base font-medium">Password :</p>
              <input
                className="w-full px-4 py-2 rounded-full mt-2 bg-grey text-gray-700"
                type={"password"}
                placeholder={"*******"}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="button-login mt-4">
            <button
              type="submit"
              className="py-2 w-full rounded-full bg-green-900 text-white font-semibold text-base d-flex items-center justify-center"
            >
              {loading && <SyncLoader size={7} color={"#fff"} />}
              {!loading && "Login"}
            </button>
            <div className="w-full h-px my-3 bg-gray-300"></div>
            <button
              type="submit"
              className="py-2 w-full rounded-full border-2 border-green-900  text-green-900 font-semibold text-base"
            >
              Lupa kata sandi
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginTabs;
