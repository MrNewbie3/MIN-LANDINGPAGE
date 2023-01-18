import React, { useEffect, useState } from "react";
import "../Assets/RegisterFlow.scss";

const RegisterFlow = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleClickTab = (tab) => {
    setActiveTab(tab);
  };

  const DataTab = [
    { label: 'Data Diri', id: 'tab1', content: 'Klik “Daftar Sekarang” atau “Login” diatas, Pilih Tab Daftar, Masukan Data, Login Menggunakan email dan password ketika daftar' },
    { label: 'Isi Identitas Diri', id: 'tab2', content: 'Isi identitas diri anda sesuai dengan apa yang harus diisi' },
    { label: 'Unggah Berkas', id: 'tab3', content: 'Unggah berkas berkas yang diperlukan dan pastikan gambar terlihat bagus dan dapat dibaca' },
    { label: 'Tunggu Verifikasi', id: 'tab4', content: 'Jika semua identitas dan berkas telah diisi, tunggu verifikasi dari admin' },
    { label: 'Lakukan Tes', id: 'tab5', content: 'Tes dilakukan secara offline atau onside di Man 1 Kota Malang, jadwal bisa dilihat dibawah ini' },
    { label: 'Lihat Hasil Tes', id: 'tab6', content: 'Tunggu pengumuman keluar sambil banyak banyak beroda' },
    { label: 'Daftar Ulang', id: 'tab7', content: 'Setelah dipastikan lolos, pastikan untuk segera melakukan daftar ulang sesuai dengan jadwal dibawah' },
  ]

  return (
    <section className="register-flow" id='regisflow'>
      <div className="container">
        <div className="register-flow-wrapper d-flex align-items-center">
          <article>
            <div className="title">
              <h2>Alur Pendaftaran</h2>
              <p>Ikuti langkah langkah dibawah ini supaya proses pendaftaran berjalan lancar tanpa kendala apapun.</p>
            </div>
            <div className="figure-content-wrap d-flex flex-column">
              <div className="tab-wrapper">
                <ul className="d-flex gap-4 text-center align-items-center flex-wrap">
                  {DataTab.map((tab, index) => (
                    <li key={tab.id} className={` tab card py-4 h-fit  ${activeTab === tab.id ? "card-active" : ""}`} onClick={() => handleClickTab(tab.id)}>
                      <h6>{index + 1}</h6>
                      <p className="leading-5">{tab.label}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="tab-content">
                  {DataTab.map((tab) => (
                    activeTab === tab.id && 
                    <div className='content' key={tab.id}>
                      <p>{tab.content}</p>
                    </div>
                  ))}
              </div>
            </div>
          </article>
          <figure className="d-flex justify-content-center">
            <img src="images/Introduction/confused.png" alt="design by freepik" />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default RegisterFlow;
