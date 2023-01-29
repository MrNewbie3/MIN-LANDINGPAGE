import React from "react";
import "../Assets/Schedule.scss";

const Schedule = () => {
  return ( 
    <section className="schedule" id="schedule">
      <div className="container">
        <div className="schedule-wrapper d-flex align-items-center">
          <figure>
            <img src="images/Introduction/Foto_Bocil.jpg" alt="design by freepik" className="rounded-full scale-75" />
          </figure>
          <article className="d-flex justify-content-center">
            <div className="schedule-content-wrapper">
              <div className="title">
                <h2>Jadwal Pendaftaran</h2>
                <p>Berikut rincian jadwal PPDB tahun 2023/2024</p>
              </div>
              <div className="content-wrapper flex flex-col gap-y-5">
                <div className="content">
                  <h5>Pendaftaran</h5>
                  <p>30 Januari – 4 Februari 2023</p>
                </div>
                <div className="content">
                  <h5>Verifikasi Data Oleh Panitia</h5>
                  <p>6 – 10 Februari 2023</p>
                </div>
                <div className="content">
                  <h5>Pengumuman Hasil Verifikasi Data/Cetak Kartu Peserta</h5>
                  <p>11 Februari 2023</p>
                </div>
                <div className="content">
                  <h5>Pemetaan</h5>
                  <p>20 – 23 Februari 2023</p>
                </div>
                <div className="content">
                  <h5>Pengumuman Hasil Pemetaan (Online)</h5>
                  <p>2 Maret 2023</p>
                </div>
                <div className="content">
                  <h5>Pertemuan Orang Tua dengan Komite</h5>
                  <p>4 Maret 2023</p>
                </div>
                <div className="content">
                  <h5>Daftar Ulang</h5>
                  <p>6 – 8 Maret 2023</p>
                </div> 
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
