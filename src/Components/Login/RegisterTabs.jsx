import React, { useState } from "react";
import { redirect } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import { useAuthContext } from "../../hooks/useAuthContext";
import axios from "../../lib/axios";
import TitleLogin from "./TitleLogin";

const RegisterTabs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const newUser = {
      nama_lengkap: name,
      email: email,
      password: password,
      confirm_password: confirmPassword,
    };

    await axios.post("/api/auth/register", newUser).then((user) => {
      localStorage.setItem("user", user.data.data.user);

      dispatch({ type: "LOGIN", payload: user.data.data.user });

      setLoading(false);
      redirect("/login");
    });

    setLoading(false);
  };

  return (
    <>
      <div className="content-wrap mt-8 flex justify-center flex-col">
        <TitleLogin desc={"Buat email dan kata sandi untuk login"} />
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="form-content mt-7">
            <div className="form-input mb-2">
              <p className="text-base font-medium">Nama siswa : </p>
              <input
                className="w-full px-4 py-2 rounded-full mt-2 bg-grey text-gray-700"
                type={"text"}
                placeholder={"cth: Tommy Kurniawan"}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-input mb-2">
              <p className="text-base font-medium">Email : </p>
              <input
                className="w-full px-4 py-2 rounded-full mt-2 bg-grey text-gray-700"
                type={"email"}
                placeholder={"cth: tommykurniawan123@gmail.com"}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-input mb-2">
              <p className="text-base font-medium">Kata sandi : </p>
              <input
                className="w-full px-4 py-2 rounded-full mt-2 bg-grey text-gray-700"
                type={"password"}
                placeholder={"********"}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-input mb-2">
              <p className="text-base font-medium">Ulangi Kata sandi : </p>
              <input
                className="w-full px-4 py-2 rounded-full mt-2 bg-grey text-gray-700"
                type={"password"}
                placeholder={"********"}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="button-login mt-4">
            <button
              type="submit"
              className="py-2 w-full rounded-full bg-green-900 text-white font-semibold text-base"
            >
              {loading && <SyncLoader size={7} color={"#fff"} />}
              {!loading && "Daftar"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegisterTabs;
