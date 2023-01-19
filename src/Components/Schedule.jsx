import React from "react";
import "../Assets/Schedule.scss";

const Schedule = () => {
  return (
    <section className="schedule" id='schedule'>
      <div className="container">
        <div className="schedule-wrapper d-flex align-items-center">
          <figure>
            <img src="images/Introduction/school.png" alt="design by freepik" />
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
                  <p>7 Januari sd. 20 Januari 2023</p>
                </div>
                <div className="content">
                  <h5>Pelengkapan Berkas dan Verifikasi</h5>
                  <p>21 Januari sd. 30 Januari 2023</p>
                </div>
                <div className="content">
                  <h5>Pelaksanaan Tes Offline</h5>
                  <p>5 Februari 2023</p>
                </div>
                <div className="content">
                  <h5>Pengumuman Hasil Tes</h5>
                  <p>12 Februari 2023</p>
                </div>
                <div className="content">
                  <h5>Daftar Ulang</h5>
                  <p>15 Februari sd. 18 Februari 2023</p>
                </div>
                <div className="content">
                  <h5>Penguman dan Daftar Ulang Cadangan</h5>
                  <p>19 Februari sd. 23 Februari 2023</p>
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
