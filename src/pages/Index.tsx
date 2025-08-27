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
    <main className="w-full min-h-screen relative overflow-hidden bg-[#FFFCF2] max-lg:rounded-none lg:rounded-[20px] lg:max-w-[1440px] lg:min-h-[863px] lg:mx-auto max-md:p-5 max-sm:p-4">
      
      
      <header>
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/09b8c8b2251ba50585cbbd8ee69d204f9ad06348?width=240"
          alt="Logo da empresa"
          className="w-[120px] h-[78px] absolute left-10 top-10 max-md:w-[100px] max-md:h-[65px] max-md:left-5 max-md:top-5 max-sm:w-20 max-sm:h-[52px] max-sm:left-4 max-sm:top-4"
        />
      </header>

      <section className="text-center">
        <h1 className="w-[511px] h-8 text-[#2C2623] text-center text-[32px] font-extrabold leading-8 tracking-[-0.32px] absolute left-[465px] top-[198px] max-md:w-full max-md:-translate-x-2/4 max-md:text-[28px] max-md:leading-7 max-md:left-2/4 max-md:top-[120px] max-sm:text-2xl max-sm:leading-6 max-sm:px-4 max-sm:py-0 max-sm:top-[100px]">
          Bem-vindo de volta!
        </h1>
        
        <p className="w-[512px] h-6 text-[#2C2623] text-center text-lg font-medium leading-6 tracking-[0.18px] absolute left-[464px] top-[238px] max-md:w-full max-md:-translate-x-2/4 max-md:text-base max-md:leading-[22px] max-md:left-2/4 max-md:top-40 max-sm:text-sm max-sm:leading-5 max-sm:px-4 max-sm:py-0 max-sm:top-[136px]">
          Acesse sua conta.
        </p>
      </section>

      <LoginForm />

      <footer className="w-[330px] h-[400px] text-center text-base leading-5 tracking-[0.16px] absolute left-[555px] top-[803px] max-md:w-full max-md:-translate-x-2/4 max-md:left-2/4 max-md:top-auto max-md:bottom-20 max-sm:text-sm max-sm:px-4 max-sm:py-0 max-sm:bottom-[60px]">
        <span className="text-[#2C2623] font-normal">
          Não possui conta ainda?{' '}
        </span>
        <button
          onClick={handleSignUp}
          className="text-[#EEA63B] font-extrabold cursor-pointer hover:text-[#d4951f] transition-colors"
        >
          Cadastre-se agora!
        </button>
      </footer>

      <HelpButton />
    </main>
  );
};

export default Index;
