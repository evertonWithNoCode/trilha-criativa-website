import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { AppSidebar } from '@/components/AppSideBar';

const Dashboard: React.FC = () => {
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut();
      toast.success('Logout realizado com sucesso!');
    } catch (error) {
      toast.error('Erro ao fazer logout');
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#FEF9E5] to-[#F7B34D]/20">
      {/* Sidebar fixa */}
      <AppSidebar />

      {/* Conteúdo principal */}
      <div className="flex-1 ml-[112px] flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-3xl border-2 border-[#FBDEB1] shadow-[0_3px_0_0_#FFE0B2] max-w-md w-full text-center">
          <h1 className="text-2xl font-bold text-[#BB9205] mb-4">
            Bem-vindo à plataforma!
          </h1>
          <p className="text-[#999694] mb-6">
            Email: {user?.email}
          </p>
          <Button
            onClick={handleSignOut}
            className="w-full bg-[#F7B34D] hover:bg-[#e6a043] text-white font-bold py-3 px-6 rounded-xl transition-colors"
          >
            Sair da plataforma
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
