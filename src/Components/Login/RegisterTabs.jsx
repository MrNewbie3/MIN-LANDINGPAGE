import React from 'react'
import LoginForm from './LoginForm';
import TitleLogin from './TitleLogin';

const RegisterTabs = () => {
  return (
    <>
      <div className="content-wrap mt-8 flex justify-center flex-col">
        <TitleLogin desc={'Buat email dan kata sandi untuk login'} />
        <div className="form-content mt-7">
          <LoginForm label={'Nama Siswa'} type={'text'} placeholder={'cth: Tommy Kurniawan'} />
          <LoginForm label={'Email'} type={'email'} placeholder={'cth: tommykurniawan123@gmail.com'} />
          <LoginForm label={'Kata sandi'} type={'password'}/>
          <LoginForm label={'Ulangi Kata Sandi'} type={'password'}/>
        </div>
        <div className="button-login mt-4">
          <button type='submit' className='py-2 w-full rounded-full bg-green-900 text-white font-semibold text-base'>Daftar</button> 
        </div>
      </div>
      
    </>
  )
}

export default RegisterTabs;