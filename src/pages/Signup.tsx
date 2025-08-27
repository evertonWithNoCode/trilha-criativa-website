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
    <div className="w-full h-screen relative overflow-hidden bg-[#FFFCF2]">
      <BackgroundDecoration />
      
      <header className="absolute left-10 top-10 max-md:left-5 max-md:top-5 max-sm:left-4 max-sm:top-4 z-10">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/09b8c8b2251ba50585cbbd8ee69d204f9ad06348?width=240"
          alt="Trilha Criativa Logo"
          className="w-[120px] h-[78px] shrink-0 aspect-[20/13] max-md:w-[100px] max-md:h-[65px] max-sm:w-20 max-sm:h-[52px]"
        />
      </header>

      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <div className="text-center mb-8 max-w-lg">
          <h1 className="text-[#2C2623] text-[32px] font-extrabold leading-8 tracking-[-0.32px] mb-4 max-md:text-[28px] max-sm:text-2xl">
            Comece sua jornada!
          </h1>
          
          <p className="text-[#2C2623] text-lg font-medium leading-6 tracking-[0.18px] max-md:text-base max-sm:text-sm">
            Cadastre-se para acessar o universo Trilha Criativa.
          </p>
        </div>

        <SignupForm />

        <div className="text-[#2C2623] text-base font-extrabold leading-5 tracking-[0.16px] text-center mt-12 max-sm:text-sm max-sm:mt-8">
          Você já possui cadastro?{' '}
          <button
            onClick={handleLoginClick}
            className="font-bold text-base text-[#EEA63B] hover:underline cursor-pointer"
          >
            Faça login
          </button>
        </div>
      </div>

      <HelpButton />
    </div>
  );
};

export default Signup;