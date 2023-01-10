import React from 'react';
import '../Assets/RegisterFlow.scss';


const handleCard = () => {
  console.log('klik')
}

function CardList ({data}) {
  return (
    <ul className='d-flex gap-3 text-center align-items-center flex-wrap'>
    {data.map((item, index) => (
      <>
        <li key={index} onClick={handleCard}><a>
          <h6>{index + 1}</h6>
          <p>{item.content}</p>
          </a>
        </li>
      </>
    ))}
    </ul>
  );
}

const DataFlowRes = [
  {content : 'Data Diri'},
  {content : 'Isi Identitas Diri'},
  {content : 'Unggah Berkas'},
  {content : 'Tunggu Verifikasi'},
  {content : 'Lakukan Tes'},
  {content : 'Lihat Hasil Tes'},
  {content : 'Daftar Ulang'},
]

const RegisterFlow = () => {
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
              <CardList data={DataFlowRes}  />
              <div className="tab-content-wrapper">
                <div className="tab-panel">
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
          <figure className='d-flex justify-content-center'>
            <img src="images/Introduction/confused.png" alt="design by freepik" />
          </figure>
        </div>
      </div>
    </section>
  )
}

export default RegisterFlow;