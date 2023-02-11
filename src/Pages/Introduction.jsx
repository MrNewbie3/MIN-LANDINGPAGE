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

    text: "PPDB sudah ditutup, Silahkan cek kartu peserta anda di website PPDB dan gunakan informasi yang terakhir di update pada laman web kami, bagi yang sudah mendownload sebelum pukul 13.30 silahkan mendownload ulang kartu peserta ",
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
