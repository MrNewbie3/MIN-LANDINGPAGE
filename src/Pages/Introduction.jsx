import React from "react";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import RegisterFlow from "../Components/RegisterFlow";
import Schedule from "../Components/Schedule";
import Swal from "sweetalert2";
const Introduction = () => {
  Swal.fire({
    icon: "success",
    title: "Info Penting!",

    text: "Verifikasi berkas sudah selesai, silahkan download kartu peserta bagi anda yang lolos. Dan silahkan lengkapi berkas bagi anda yang data berkasnya masih belum lengkap",
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
