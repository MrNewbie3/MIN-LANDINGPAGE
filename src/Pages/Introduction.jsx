import React from "react";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import RegisterFlow from "../Components/RegisterFlow";
import Schedule from "../Components/Schedule";
import Swal from "sweetalert2";
const Introduction = () => {
  Swal.fire({
    icon: "danger",
    title: "Info Penting!",

    text: "Dikarenakan kebutuhan penyempurnaan, akses kedalam web PPDB sementara dinonaktifkan. Mohon maaf atas ketidaknyamanannya",
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
