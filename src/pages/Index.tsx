import React from 'react';
import { useNavigate } from 'react-router-dom';
import BackgroundSVG from '@/components/BackgroundSVG';
import LoginForm from '@/components/LoginForm';
import HelpButton from '@/components/HelpButton';

const Index: React.FC = () => {
  const navigate = useNavigate();
  
  const handleSignUp = () => {
    navigate('/signup');
  };

  return (
    <div className="w-full h-screen relative overflow-hidden bg-[#FFFCF2]">
      
      <BackgroundSVG />
      <header className="absolute left-10 top-10 max-md:left-5 max-md:top-5 max-sm:left-4 max-sm:top-4 z-10">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/09b8c8b2251ba50585cbbd8ee69d204f9ad06348?width=240"
          alt="Logo da empresa"
          className="w-[120px] h-[78px] max-md:w-[100px] max-md:h-[65px] max-sm:w-20 max-sm:h-[52px]"
        />
      </header>

      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <div className="text-center mb-8 max-w-lg">
          <h1 className="text-[#2C2623] text-[32px] font-extrabold leading-8 tracking-[-0.32px] mb-4 max-md:text-[28px] max-sm:text-2xl">
            Bem-vindo de volta!
          </h1>
          
          <p className="text-[#2C2623] text-lg font-medium leading-6 tracking-[0.18px] max-md:text-base max-sm:text-sm">
            Acesse sua conta.
          </p>
        </div>

        <LoginForm />

        <div className="text-center text-base leading-5 tracking-[0.16px] mt-8 max-sm:text-sm">
          <span className="text-[#2C2623] font-normal">
            Não possui conta ainda?{' '}
          </span>
          <button
            onClick={handleSignUp}
            className="text-[#EEA63B] font-extrabold cursor-pointer hover:text-[#d4951f] transition-colors"
          >
            Cadastre-se agora!
          </button>
        </div>
      </div>

      <HelpButton />
    </div>
  );
};

export default Index;
