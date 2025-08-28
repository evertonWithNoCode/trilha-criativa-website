import React, { useState, useEffect, ChangeEvent } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';

interface ProfileHeaderProps {
  className?: string;
}

interface UserProfile {
  id: string;
  nome: string;
  especialidade: string | null;
  email: string;
  telefone: string | null;
  registro_profissional: string | null;
  photo_url: string | null;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({ className = "" }) => {
  const { user } = useAuth();
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const defaultImage = "https://api.builder.io/api/v1/image/assets/TEMP/639cc8e2c4a257cd8eba5d5aa28e53fa9fe56f0d?width=320";

  // Busca os dados do usuário na tabela usuarios
  useEffect(() => {
    const fetchUserProfile = async () => {
      if (!user) {
        setError('Usuário não está logado');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('usuarios')
          .select('id, nome, especialidade, email, telefone, registro_profissional, photo_url')
          .eq('id', user.id)
          .single();

        if (error) {
          throw error;
        }

        setUserProfile(data);
      } catch (err: any) {
        setError(err.message || 'Erro ao carregar perfil do usuário');
        console.error('Erro ao buscar perfil:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [user]);

  const handleImageChange = async (event: ChangeEvent<HTMLInputElement>) => {
  if (!event.target.files || !event.target.files[0] || !user) {
    console.log('Nenhum arquivo selecionado ou usuário não autenticado');
    return;
  }

  const file = event.target.files[0];
  const fileExt = file.name.split('.').pop();
  const fileName = `${user.id}-${Date.now()}.${fileExt}`;
  const filePath = `private/${fileName}`; // Ajustado para salvar na pasta 'private'

  try {
    console.log('Iniciando upload para:', filePath);
    // Faz upload da imagem para o Supabase Storage
    const { error: uploadError } = await supabase.storage
      .from('TC-media')
      .upload(filePath, file);

    if (uploadError) {
      console.error('Erro no upload:', uploadError);
      throw uploadError;
    }

    // Obtém a URL pública da imagem
    const { data: urlData } = supabase.storage
      .from('TC-media')
      .getPublicUrl(filePath);

    const newPhotoUrl = urlData.publicUrl;
    console.log('URL pública:', newPhotoUrl);

    // Atualiza a coluna photo_url na tabela usuarios
    const { error: updateError } = await supabase
      .from('usuarios')
      .update({ photo_url: newPhotoUrl })
      .eq('id', user.id);

    if (updateError) {
      console.error('Erro ao atualizar photo_url:', updateError);
      throw updateError;
    }

    // Atualiza o estado local
    setUserProfile((prev) => (prev ? { ...prev, photo_url: newPhotoUrl } : prev));
  } catch (err: any) {
    console.error('Erro ao fazer upload da imagem:', err);
    alert('Erro ao atualizar a foto de perfil: ' + (err.message || 'Tente novamente'));
  }
};

  const handlePasswordChange = () => {
    console.log('Change password clicked');
  };

  const handleEditProfile = () => {
    console.log('Edit profile clicked');
  };

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error || !userProfile) {
    return <div>Erro ao carregar perfil: {error || 'Dados não encontrados'}</div>;
  }

  return (
    <section className={`${className}`}>
      {userProfile.photo_url ? (
        <img
          src={userProfile.photo_url}
          alt="Profile picture"
          className="w-40 h-40 absolute object-cover rounded-[60px] left-[252px] top-[344px] max-md:w-[120px] max-md:h-[120px] max-md:left-8 max-md:top-[260px] max-sm:w-20 max-sm:h-20 max-sm:left-6 max-sm:top-[200px]"
        />
      ) : (
        <div
          className="w-40 h-40 absolute flex items-center justify-center bg-white rounded-[60px] left-[252px] top-[344px] max-md:w-[120px] max-md:h-[120px] max-md:left-8 max-md:top-[260px] max-sm:w-20 max-sm:h-20 max-sm:left-6 max-sm:top-[200px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="gray"
            className="w-16 h-16 max-md:w-12 max-md:h-12 max-sm:w-8 max-sm:h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
            />
          </svg>
        </div>
      )}
      
      <div className="flex w-80 flex-col items-start gap-2 absolute h-16 left-[444px] top-[368px] max-md:w-[calc(100%_-_202px)] max-md:left-[170px] max-md:top-[280px] max-sm:w-[calc(100%_-_144px)] max-sm:left-[120px] max-sm:top-[220px]">
        <h1 className="text-[#2C2623] text-[32px] font-bold leading-8 tracking-[-0.32px] max-md:text-[28px] max-md:leading-7 max-sm:text-xl max-sm:leading-6">
          {userProfile.nome}
        </h1>
        <p className="text-[#2C2623] text-lg font-normal leading-6 tracking-[0.18px] max-sm:text-sm">
          {userProfile.especialidade || 'Não especificado'}
        </p>
      </div>
      
      <div className="flex gap-4 absolute left-[444px] top-[484px] max-md:flex-wrap max-md:gap-3 max-md:left-8 max-md:top-[400px] max-sm:flex-col max-sm:gap-2 max-sm:w-[calc(100%_-_48px)] max-sm:left-6 max-sm:top-[300px]">
        <label
          className="inline-flex h-10 justify-center items-center gap-2 cursor-pointer bg-[#FCE699] px-5 py-2 rounded-xl max-sm:w-full max-sm:justify-center hover:bg-[#FBE085] transition-colors focus:outline-none focus:ring-2 focus:ring-[#BB9205] focus:ring-offset-2"
          aria-label="Change profile photo"
        >
          <span className="text-[#2C2623] text-sm font-bold leading-5 tracking-[0.14px]">
            Alterar foto
          </span>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
        </label>
        
        <button
          onClick={handlePasswordChange}
          className="inline-flex h-10 justify-center items-center gap-2 cursor-pointer bg-[#FCE699] px-5 py-2 rounded-xl max-sm:w-full max-sm:justify-center hover:bg-[#FBE085] transition-colors focus:outline-none focus:ring-2 focus:ring-[#BB9205] focus:ring-offset-2"
          aria-label="Change password"
        >
          <span className="text-[#2C2623] text-sm font-bold leading-5 tracking-[0.14px]">
            Alterar senha
          </span>
        </button>
        
        <button
          onClick={handleEditProfile}
          className="inline-flex h-10 justify-center items-center gap-2 cursor-pointer bg-[#FCE699] px-5 py-2 rounded-xl max-sm:w-full max-sm:justify-center hover:bg-[#FBE085] transition-colors focus:outline-none focus:ring-2 focus:ring-[#BB9205] focus:ring-offset-2"
          aria-label="Edit profile"
        >
          <span className="text-[#2C2623] text-sm font-bold leading-5 tracking-[0.14px]">
            Editar perfil
          </span>
        </button>
      </div>
    </section>
  );
};