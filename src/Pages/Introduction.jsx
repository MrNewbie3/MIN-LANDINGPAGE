import React from "react";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import RegisterFlow from "../Components/RegisterFlow";
import Schedule from "../Components/Schedule";
import Swal from "sweetalert2";
const Introduction = () => {
  Swal.fire({
    icon: "error",
    title: "Info Penting!",

    text: "PPDB sudah ditutup, silahkan download kartu peserta",
  });
  return (
    <div className="md:pl-16">
      <Navbar />
      <Hero />
      <RegisterFlow />
      <Schedule />
      <Footer />
    </div>
  );
};

export default Introduction;
