import React, { useState } from 'react';

interface Note {
  id: string;
  content: string;
  timestamp: string;
  avatar: string;
}

interface NotesSectionProps {
  notes?: Note[];
  onAddNote?: (content: string) => void;
}

export const NotesSection: React.FC<NotesSectionProps> = ({ notes, onAddNote }) => {
  const [noteContent, setNoteContent] = useState('');

  const defaultNotes: Note[] = [
    {
      id: '1',
      content: 'Progresso excelente em jogos visuais. Mostra maior interesse em atividades colaborativas. Demonstra melhora significativa na concentração e tempo de atenção.',
      timestamp: 'Há 1 semana atrás',
      avatar: 'https://api.builder.io/api/v1/image/assets/TEMP/ca7f8883f98949dc5843cac8c53ac749ea844887?width=96'
    },
    {
      id: '2',
      content: 'Excelente para trabalhar memória. Meus pacientes adoram!',
      timestamp: 'Há 1 semana atrás',
      avatar: 'https://api.builder.io/api/v1/image/assets/TEMP/ca7f8883f98949dc5843cac8c53ac749ea844887?width=96'
    }
  ];

  const notesList = notes || defaultNotes;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (noteContent.trim() && onAddNote) {
      onAddNote(noteContent.trim());
      setNoteContent('');
    }
  };

  return (
    <section className="relative">
      <h2 className="text-[#2C2623] text-2xl font-extrabold leading-8 tracking-[0.24px] opacity-90 absolute w-[239px] h-8 left-[108px] top-[1920px]">
        Notas e observações
      </h2>
      
      <div className="w-[1256px] h-0 absolute bg-[#FCE699] left-0 top-[1856px]" />
      
      <form onSubmit={handleSubmit} className="w-[1040px] h-24 shrink-0 absolute left-[108px] top-[1976px]">
        <div className="w-[1040px] h-24 shrink-0 absolute bg-white rounded-[20px] left-0 top-0" />
        
        <div className="flex w-[801px] h-12 items-center gap-2 shrink-0 absolute bg-[#FEF9E5] p-4 rounded-2xl left-[95px] top-6">
          <div className="flex items-center gap-2 flex-[1_0_0] relative">
            <input
              type="text"
              value={noteContent}
              onChange={(e) => setNoteContent(e.target.value)}
              placeholder="Adicione notas sobre seu paciente"
              className="text-[#BB9205] text-base font-medium leading-5 tracking-[0.16px] relative bg-transparent border-none outline-none flex-1 placeholder:text-[#BB9205]"
              aria-label="Campo para adicionar notas sobre o paciente"
            />
          </div>
        </div>
        
        <button
          type="submit"
          className="inline-flex h-10 justify-center items-center gap-2 shrink-0 absolute w-24 bg-[#FCE699] px-5 py-2 rounded-xl left-[912px] top-7 hover:bg-[#F7B34D] transition-colors"
          disabled={!noteContent.trim()}
        >
          <span className="text-[#2C2623] text-sm font-extrabold leading-5 tracking-[0.14px] relative">
            Publicar
          </span>
        </button>
        
        <div className="w-6 h-6 shrink-0 absolute left-[84px] top-9">
          <div className="w-[17px] h-[17px] shrink-0 absolute bg-[#FEF9E5] rounded-sm left-0 top-0" />
        </div>
        
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/ca7f8883f98949dc5843cac8c53ac749ea844887?width=96"
          alt="Avatar do usuário"
          className="w-12 h-12 shrink-0 absolute rounded-[20px] left-6 top-6"
        />
      </form>

      <div className="w-[1040px] h-[200px] shrink-0 absolute left-[108px] top-[2120px]">
        <div className="w-[1040px] h-0 absolute bg-[#FCE699] left-0 top-28" />
        
        {notesList.map((note, index) => (
          <article key={note.id} className={`absolute ${index === 0 ? 'top-px' : 'top-[152px]'}`}>
            <p className="w-[664px] text-[#2C2623] text-lg font-medium leading-6 tracking-[0.18px] absolute h-[72px] left-28 top-0">
              {note.content}
            </p>
            <time className="w-40 text-[#2C2623] text-base font-medium leading-5 tracking-[0.16px] absolute h-5 left-[880px] top-1">
              {note.timestamp}
            </time>
            <div className="w-12 h-12 shrink-0 absolute bg-[#FBDEB1] rounded-[20px] left-6 top-0" />
          </article>
        ))}
      </div>
    </section>
  );
};
