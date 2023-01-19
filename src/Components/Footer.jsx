import React from "react";
import "../Assets/Footer.scss";
import { AiFillFacebook, AiFillInstagram, AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-wrapper d-flex flex-column justify-content-between">
          <div className="footer-content-wrapper d-flex">
            <div className="footer-brand d-flex">
              <figure>
                <img src="/images/Introduction/logo-slogan.png" />
              </figure>
            </div>
            <div className="footer-content d-flex">
              <div className="content d-flex flex-column">
                <h5>Tautan Lain</h5>
                <ul>
                  <li>
                    <a href="#hero">Dashboard</a>
                  </li>
                  <li>
                    <a href="#regisflow">Alur Pendaftaran</a>
                  </li>
                  <li>
                    <a href="#schedule">Jadwal Pendaftaran</a>
                  </li>
                </ul>
              </div>
              <div className="content d-flex flex-column">
                <h5>Narahubung</h5>
                <ul>
                  <li>
                    <a href="">081234567890 (Bu Ayu)</a>
                  </li>
                  <li>
                    <a href="">080987654321 (Pak Bagus)</a>
                  </li>
                  <li>
                    <a href="">080123123123 (Pak Budi)</a>
                  </li>
                </ul>
              </div>
              <div className="location d-flex flex-column">
                <h5>Alamat Sekolah</h5>
                <p>Jl. Bandung No.7C, Penanggungan, Kec. Klojen, Kota Malang, Jawa Timur 65113</p>
              </div>
            </div>
          </div>
          <div className="footer-content-sosmed d-flex">
            <div className="copyright text-center w-full">
              <p>©2022. MIN 1 Kota Malang, All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
