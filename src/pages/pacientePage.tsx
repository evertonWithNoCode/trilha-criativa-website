import React from 'react';
import { PatientHeader } from '@/components/PatientHeader';
import { PatientProfile } from '@/components/PatientProfile';
import { PatientStats } from '@/components/PatientStats';
import  PerformanceChart  from '@/components/PerformanceChart';
import { SessionHistory } from '@/components/SessionHistory';
import { NotesSection } from '@/components/NotesSection';
import { AppSidebar } from '@/components/AppSideBar';



const PacienteDetalhes = () => {
  const handleBackClick = () => {
    console.log('Navegando de volta para lista de pacientes');
  };

  const handlePatientEdit = () => {
    console.log('Editando paciente');
  };

  const handleDownloadReport = () => {
    console.log('Baixando relatório');
  };

  const handleStartSession = () => {
    console.log('Iniciando nova sessão');
  };

  const handleAddNote = (content: string) => {
    console.log('Adicionando nota:', content);
  };

  const handleSidebarItemClick = (item: string) => {
    console.log('Item do menu clicado:', item);
  };

  const handleHelpClick = () => {
    console.log('Abrindo ajuda');
  };

  

  return (

    <main className="w-full ">





      <PatientProfile
        name="Ana Alice"
        age={11}
        avatarUrl="https://api.builder.io/api/v1/image/assets/TEMP/1169dbd94a7f73f045b2179aedda032e6e03da94?width=240"
        onEdit={handlePatientEdit}
        onDownload={handleDownloadReport}
        onPlay={handleStartSession}
      />

   
      <PatientStats
        description="Alice apresenta desafios relacionados à comunicação espontânea e à interação social em contextos estruturados. O plano terapêutico será centrado no uso de jogos interativos como ferramenta de estímulo ao engajamento, à escuta ativa e à expressão verbal e não verbal. As sessões terão como foco o fortalecimento de habilidades sociais, respeitando o ritmo e as preferências da paciente para garantir segurança emocional e interesse contínuo. Através da plataforma Trilha Criativa, serão aplicadas atividades que permitam acompanhar indicadores como tempo de foco, resposta a estímulos e compreensão de instruções. O progresso será registrado e analisado periodicamente, oferecendo base para ajustes nas abordagens e apoio na tomada de decisão clínica."
        sessionsCompleted={12}
        averageScore="77%"
        totalTime="4h32m"
      />

     
      <PerformanceChart />

    
      <SessionHistory />

      {/* Notes Section */}
      <NotesSection onAddNote={handleAddNote} />

      {/* Decorative elements */}
      <div className="w-[1256px] h-0 absolute bg-[#FCE699] left-0 top-[1856px]" />
    </main>




  );
};

export default PacienteDetalhes;
