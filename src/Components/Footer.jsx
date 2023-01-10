import React from 'react';
import '../Assets/Footer.scss';
import { AiFillFacebook ,AiFillInstagram, AiFillYoutube } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-wrapper d-flex align-items-flex-start">
          <div className="footer-brand d-flex flex-column justify-content-between">
            <figure>
              <img src="/images/Introduction/logo-slogan.png" />
            </figure>
            <p>©2022. MIN 1 Kota Malang, All rights reserved.</p>
          </div>
          <div className="footer-content d-flex gap-4">
            <div className="content d-flex flex-column justify-content-between">
              <h5>Tautan Lain</h5>
              <ul>
                <li><a href="">Dashboard</a></li>
                <li><a href="">Alur Pendaftaran</a></li>
                <li><a href="">Jadwal Pendaftaran</a></li>
              </ul>
              <AiFillFacebook />
            </div>
            <div className="content d-flex flex-column justify-content-between">
              <h5>Narahubung</h5>
              <ul>
                <li><a href="">081234567890 (Bu Ayu)</a></li>
                <li><a href="">080987654321(Pak Bagus)</a></li>
                <li><a href="">080123123123(Pak Budi)</a></li>
              </ul>
              <AiFillInstagram />
            </div>
            <div className="location d-flex flex-column justify-content-between">
              <h5>Alamat Sekolah</h5>
              <p>Jl. Bandung No.7C, Penanggungan, Kec. Klojen, Kota Malang, Jawa Timur 65113</p>
              <AiFillYoutube />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer