import React from "react";
import LoginInterface from "../Components/Login/LoginInterface";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
const Login = () => {
  const user = localStorage.getItem("user");
  const navigation = useNavigate();
  useEffect(() => {
    if (user !== null) {
      return navigation("/");
    }
  }, []);

  return (
    <>
      <LoginInterface />
    </>
  );
};

export default Login;
