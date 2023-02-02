import React from "react";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import RegisterFlow from "../Components/RegisterFlow";
import Schedule from "../Components/Schedule";
import Swal from "sweetalert2";
const Introduction = () => {
  Swal.fire({
    icon: "info",
    title: "Info Penting!",

    text: "Untuk keperluan verifikasi, seluruh pendaftar harap segera melengkapi data berkas dan data lainnya. Apabila ada yang kosong, harap segera mengunggah file KK, Akta dan berkas lain maupun data lainnya",
    footer: '<a href="http://203.175.11.243/">Periksa kelengkapan berkas</a>',
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
