import React from 'react'
import LoginForm from './LoginForm';
import TitleLogin from './TitleLogin';

const LoginTabs = () => {
  return (
    <> 
    <div className="content-wrap mt-8 flex justify-center flex-col">
      <TitleLogin desc={'Masukan email dan password yang sudah dibuat'} />
      <div className="form-content mt-7">
        <LoginForm label={'Email'} type={'email'} placeholder={'cth: Tommy Kurniawan'}/>
        <LoginForm label={'Kata Sandi'} type={'password'}/>
      </div>
      <div className="button-login mt-4">
        <button type='submit' className='py-2 w-full rounded-full bg-green-900 text-white font-semibold text-base'>Login</button> 
        <div className='w-full h-px my-3 bg-gray-300'></div>
        <button type='submit' className='py-2 w-full rounded-full border-2 border-green-900  text-green-900 font-semibold text-base'>Lupa kata sandi</button> 
      </div>
    </div>
    </>
  )
}

export default LoginTabs;