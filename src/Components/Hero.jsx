import React from "react";
import "../Assets/Hero.scss";
import { Link } from "react-router-dom";
const  Hero = () => {
  return (
    <div className="hero flex flex-col justify-center items-center">
      <div className="container h-fit flex items-center">
        <div className="hero-wrapper flex justify-between items-center">
          <article>
            <h1>PPDB Online</h1>
            <h3>Tiada Hari Tanpa Prestasi</h3>
            <p>Pendaftaran tahun ajaran 2023/2024 dilakukan secara online melalui website ini, untuk tata penggunaan bisa dilihat ke bawah</p>
            <Link to={"/login"}>
              <button className="btn-primary">Daftar Sekarang</button>
            </Link> 
          </article>
          <figure className="d-flex justify-content-center">
            <img src="images/Introduction/Foto_Sekolah.jpg" alt="design by freepik" className="rounded-full scale-90" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Hero;
