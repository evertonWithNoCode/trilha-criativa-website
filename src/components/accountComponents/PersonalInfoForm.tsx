import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';

interface FormData {
  fullName: string;
  specialty: string;
  email: string;
  phone: string;
  professionalRegistry: string;
}

interface PersonalInfoFormProps {
  className?: string;
}

export const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({ className = "" }) => {
  const { user } = useAuth();
  const [formData, setFormData] = useState<FormData | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 🔹 Buscar dados reais do usuário
  useEffect(() => {
  const fetchUserData = async () => {
    if (!user) {
      setError("Usuário não logado");
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase
        .from('usuarios')
        .select('nome, especialidade, email, telefone, registro_profissional')
        .eq('id', user.id)
        .single();

      if (error) throw error;

      if (data) {
        setFormData({
          fullName: data.nome || "não informado",
          specialty: data.especialidade || "não informado",
          email: data.email || "não informado",
          phone: data.telefone || "não informado",
          professionalRegistry: data.registro_profissional || "não informado"
        });
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  fetchUserData();
}, [user]);

  const handleInputChange = (field: keyof FormData, value: string) => {
    if (!formData) return;
    setFormData(prev => ({
      ...prev!,
      [field]: value
    }));
  };

  // 🔹 Atualizar dados no Supabase
 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!formData || !user) return;

  try {
    const { error } = await supabase
      .from('usuarios')
      .update({
        nome: formData.fullName === "não informado" ? null : formData.fullName,
        especialidade: formData.specialty === "não informado" ? null : formData.specialty,
        email: formData.email === "não informado" ? null : formData.email,
        telefone: formData.phone === "não informado" ? null : formData.phone,
        registro_profissional: formData.professionalRegistry === "não informado" ? null : formData.professionalRegistry,
      })
      .eq('id', user.id);

    if (error) throw error;

    setIsEditing(false);
  } catch (err: any) {
    setError(err.message);
  }
};

  if (loading) return <p>Carregando...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!formData) return null;


  return (
    <section className={`${className}`}>
      <h2 className="text-[#2C2623] text-2xl font-bold leading-8 tracking-[0.24px] mt-[20px]">
        Informações pessoais
      </h2>
      
      <form onSubmit={handleSubmit} className="mt-12">
        <div className="grid grid-cols-[1fr_1fr] gap-6 w-full max-md:grid-cols-[1fr] max-md:gap-4 max-sm:gap-3">
          <div className="flex flex-col items-start gap-2 w-[512px] max-md:w-full">
            <label htmlFor="fullName" className="text-[#BB9205] text-sm font-normal leading-5 tracking-[0.14px] h-5 max-sm:text-xs">
              Nome completo
            </label>
            <div className="flex h-12 items-center gap-2 w-full bg-[#FEF9E5] p-4 rounded-2xl max-sm:h-10 max-sm:p-3">
              {isEditing ? (
                <input
                  id="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  className="flex-1 text-[#2C2623] text-base font-normal leading-5 tracking-[0.16px] max-sm:text-sm bg-transparent border-none outline-none"
                  required
                />
              ) : (
                <div className="flex-1 text-[#2C2623] text-base font-normal leading-5 tracking-[0.16px] max-sm:text-sm">
                  {formData.fullName}
                </div>
              )}
            </div>
          </div>
          
          <div className="flex flex-col items-start gap-2 w-[512px] max-md:w-full">
            <label htmlFor="specialty" className="text-[#BB9205] text-sm font-normal leading-5 tracking-[0.14px] h-5 max-sm:text-xs">
              Especialidade
            </label>
            <div className="flex h-12 items-center gap-2 w-full bg-[#FEF9E5] p-4 rounded-2xl max-sm:h-10 max-sm:p-3">
              {isEditing ? (
                <input
                  id="specialty"
                  type="text"
                  value={formData.specialty}
                  onChange={(e) => handleInputChange('specialty', e.target.value)}
                  className="flex-1 text-[#2C2623] text-base font-normal leading-5 tracking-[0.16px] max-sm:text-sm bg-transparent border-none outline-none"
                  required
                />
              ) : (
                <div className="flex-1 text-[#2C2623] text-base font-normal leading-5 tracking-[0.16px] max-sm:text-sm">
                  {formData.specialty}
                </div>
              )}
            </div>
          </div>
          
          <div className="flex flex-col items-start gap-2 w-[512px] max-md:w-full">
            <label htmlFor="email" className="text-[#BB9205] text-sm font-normal leading-5 tracking-[0.14px] h-5 max-sm:text-xs">
              E-mail
            </label>
            <div className="flex h-12 items-center gap-2 w-full bg-[#FEF9E5] p-4 rounded-2xl max-sm:h-10 max-sm:p-3">
              {isEditing ? (
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="flex-1 text-[#2C2623] text-base font-normal leading-5 tracking-[0.16px] max-sm:text-sm bg-transparent border-none outline-none"
                  required
                />
              ) : (
                <div className="flex-1 text-[#2C2623] text-base font-normal leading-5 tracking-[0.16px] max-sm:text-sm">
                  {formData.email}
                </div>
              )}
            </div>
          </div>
          
          <div className="flex flex-col items-start gap-2 w-[512px] max-md:w-full">
            <label htmlFor="phone" className="text-[#BB9205] text-sm font-normal leading-5 tracking-[0.14px] h-5 max-sm:text-xs">
              Telefone
            </label>
            <div className="flex h-12 items-center gap-2 w-full bg-[#FEF9E5] p-4 rounded-2xl max-sm:h-10 max-sm:p-3">
              {isEditing ? (
                <input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="flex-1 text-[#2C2623] text-base font-normal leading-5 tracking-[0.16px] max-sm:text-sm bg-transparent border-none outline-none"
                  required
                />
              ) : (
                <div className="flex-1 text-[#2C2623] text-base font-normal leading-5 tracking-[0.16px] max-sm:text-sm">
                  {formData.phone}
                </div>
              )}
            </div>
          </div>
          
          <div className="flex flex-col items-start gap-2 w-[512px] max-md:w-full">
            <label htmlFor="professionalRegistry" className="text-[#BB9205] text-sm font-normal leading-5 tracking-[0.14px] h-5 max-sm:text-xs">
              Registro profissional
            </label>
            <div className="flex h-12 items-center gap-2 w-full bg-[#FEF9E5] p-4 rounded-2xl max-sm:h-10 max-sm:p-3">
              {isEditing ? (
                <input
                  id="professionalRegistry"
                  type="text"
                  value={formData.professionalRegistry}
                  onChange={(e) => handleInputChange('professionalRegistry', e.target.value)}
                  className="flex-1 text-[#2C2623] text-base font-normal leading-5 tracking-[0.16px] max-sm:text-sm bg-transparent border-none outline-none"
                  required
                />
              ) : (
                <div className="flex-1 text-[#2C2623] text-base font-normal leading-5 tracking-[0.16px] max-sm:text-sm">
                  {formData.professionalRegistry}
                </div>
              )}
            </div>
          </div>
        </div>
        
        {isEditing && (
          <div className="flex gap-4 mt-6 max-sm:flex-col">
            <button
              type="submit"
              className="inline-flex h-10 justify-center items-center gap-2 cursor-pointer bg-[#FCE699] px-5 py-2 rounded-xl hover:bg-[#FBE085] transition-colors focus:outline-none focus:ring-2 focus:ring-[#BB9205] focus:ring-offset-2"
            >
              <span className="text-[#2C2623] text-sm font-bold leading-5 tracking-[0.14px]">
                Salvar alterações
              </span>
            </button>
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="inline-flex h-10 justify-center items-center gap-2 cursor-pointer bg-[#FFFCF2] px-5 py-2 rounded-xl border border-[#FCE699] hover:bg-[#FEF9E5] transition-colors focus:outline-none focus:ring-2 focus:ring-[#BB9205] focus:ring-offset-2"
            >
              <span className="text-[#2C2623] text-sm font-bold leading-5 tracking-[0.14px]">
                Cancelar
              </span>
            </button>
          </div>
        )}
        
     
      </form>
    </section>
  );
};
