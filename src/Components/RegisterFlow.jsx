import React from 'react';
import '../Assets/RegisterFlow.scss';


const handleCard = () => {
  console.log('klik')
}

function CardList ({data}) {
  
}

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
              <ul className='d-flex gap-3 text-center align-items-center flex-wrap'>
                <li className='card-active' onClick={handleCard}><a>
                  <h6>1</h6>
                  <p>Data Diri</p></a>
                  </li>
                <li><a>
                  <h6>2</h6>
                  <p>Isi Identitas Diri</p></a>
                  </li>
                <li><a>
                  <h6>3</h6>
                  <p>Unggah Berkas</p></a>
                  </li>
                <li><a>
                  <h6>4</h6>
                  <p>Tunggu Verifikasi</p></a>
                  </li>
                <li><a>
                  <h6>5</h6>
                  <p>Lakukan Tes</p></a>
                  </li>
                <li><a>
                  <h6>6</h6>
                  <p>Lihat Hasil Tes</p></a>
                  </li>
                <li><a>
                  <h6>7</h6>
                  <p>Daftar Ulang</p></a>
                  </li>
              </ul>
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