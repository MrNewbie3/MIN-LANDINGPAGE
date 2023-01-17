import { tab } from "@testing-library/user-event/dist/tab";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Assets/RegisterFlow.scss";

// function CardList ({data}) {
//   return (
//     <ul className='d-flex gap-3 text-center align-items-center flex-wrap'>
//     {data.map((item, index) => (
//       <>
//         <li key={index} onClick={handleCard} className={item.active ? "card-active" : ""} id={`tab${index}`}>
//           <Link to={`/?id=${index}`}>
//           <h6>{index + 1}</h6>
//           <p>{item.content}</p>
//           </Link>
//         </li>
//       </>
//     ))}
//     </ul>
//   );
// }

const RegisterFlow = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleCard = () => {
    console.log("klik");
  };

  const handleClickTab = (tab) => {
    setActiveTab(tab);
  };

  const DataTab = [
    { label: "Data Diri", id: "tab1", content: "" },
    { label: "Isi Identitas Diri", id: "tab2", content: "" },
    { label: "Unggah Berkas", id: "tab3", content: "" },
    { label: "Tunggu Verifikasi", id: "tab4", content: "" },
    { label: "Lakukan Tes", id: "tab5", content: "" },
    { label: "Lihat Hasil Tes", id: "tab6", content: "" },
    { label: "Daftar Ulang", id: "tab7", content: "" },
  ];

  return (
    <section className="register-flow">
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
              <div className="tab-content"></div>
              <div className="tab-content-wrapper">
                <div className="tab-panel my-4">
                  <ul>
                    <li>Klik “Daftar Sekarang” atau “Login” diatas</li>
                    <li>Pilih tab Daftar</li>
                    <li>Masukan data</li>
                    <li>Login menggunakan email dan password ketika daftar</li>
                  </ul>
                </div>
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
