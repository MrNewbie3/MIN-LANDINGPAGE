import React from 'react';
import '../Assets/Hero.scss';

const Hero = () => {
  return (
    <div className="hero" id='hero'>
      <div className="container">
        <div className="hero-wrapper d-flex justify-content-between">
          <article>
            <h1>PPDB Online</h1>
            <h3>Tiada Hari Tanpa Prestasi</h3>
            <p>Pendaftaran tahun ajaran 2023/2024 dilakukan secara online melalui website ini, untuk tata penggunaan bisa dilihat ke bawah</p>
            <button className='btn-primary'>Daftar Sekarang</button>
          </article>
          <figure className='d-flex justify-content-center'>
            <img src="images/Introduction/task-list.png" alt="design by freepik" />
          </figure>
        </div>
      </div>
    </div>
  )
}

export default Hero