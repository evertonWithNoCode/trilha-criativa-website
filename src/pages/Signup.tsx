import React from 'react';
import { BackgroundDecoration } from '@/components/BackgroundDecoration';
import { SignupForm } from '@/components/SignupForm';
import HelpButton from '@/components/HelpButton';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  
  const handleLoginClick = () => {
    navigate('/');
  };

  return (
    <main className="w-full h-screen relative overflow-hidden bg-[#FFFCF2]">
      <BackgroundDecoration />
      
      <header className="absolute left-10 top-10 max-md:left-5 max-md:top-5">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/09b8c8b2251ba50585cbbd8ee69d204f9ad06348?width=240"
          alt="Trilha Criativa Logo"
          className="w-[120px] h-[78px] shrink-0 aspect-[20/13] max-md:w-[100px] max-md:h-[65px] max-sm:w-20 max-sm:h-[52px]"
        />
      </header>

      <div className="text-center">
        <h1 className="w-[511px] text-[#2C2623] text-center text-[32px] font-extrabold leading-8 tracking-[-0.32px] absolute h-8 left-[465px] top-[130px] max-md:w-[90%] max-md:-translate-x-2/4 max-md:text-[28px] max-md:left-2/4 max-md:top-[100px] max-sm:text-2xl max-sm:top-20">
          Comece sua jornada!
        </h1>
        
        <p className="w-[512px] text-[#2C2623] text-center text-lg font-medium leading-6 tracking-[0.18px] absolute h-6 left-[464px] top-[170px] max-md:w-[90%] max-md:-translate-x-2/4 max-md:text-base max-md:left-2/4 max-md:top-[140px] max-sm:text-sm max-sm:top-[115px]">
          Cadastre-se para acessar o universo Trilha Criativa.
        </p>
      </div>

      <SignupForm />

      <div className="text-[#2C2623] text-base font-extrabold leading-5 tracking-[0.16px] absolute w-[262px] h-5 left-[589px] top-[803px] max-md:-translate-x-2/4 max-md:text-center max-md:left-2/4 max-md:top-auto max-md:bottom-[100px] max-sm:text-sm max-sm:bottom-20">
        Você já possui cadastro?{' '}
        <button
          onClick={handleLoginClick}
          className="font-bold text-base text-[#EEA63B] hover:underline cursor-pointer"
        >
          Faça login
        </button>
      </div>

      <HelpButton />
    </main>
  );
};

export default Signup;