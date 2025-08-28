import React, { useState, useMemo } from 'react';
import { AppSidebar } from '@/components/AppSideBar';
import { SearchInput } from '@/components/SearchInput';
import { FilterDropdown } from '@/components/FilterDropdown';
import { PatientCard } from '@/components/PatientCard';
import HelpButton from '@/components/HelpButton';

interface Patient {
  id: string;
  name: string;
  age: number;
  image: string;
  lastSession: string;
}

const mockPatients: Patient[] = [
  { id: '1', name: 'Luiz Araújo', age: 10, image: 'https://api.builder.io/api/v1/image/assets/TEMP/658593cc62f44d00bfc3c15062e18f5d13f9fcc5?width=160', lastSession: 'Última sessão há 5 dias.' },
  { id: '2', name: 'Maria Luíza', age: 6, image: 'https://api.builder.io/api/v1/image/assets/TEMP/5c956be17f983b36aa0df5b3da278ec1f720b633?width=160', lastSession: 'Última sessão há 5 dias.' },
  { id: '3', name: 'Ana Alice', age: 11, image: 'https://api.builder.io/api/v1/image/assets/TEMP/ec5126e7d6b682863075e3194d5762aae1b647d1?width=160', lastSession: 'Última sessão há 5 dias.' },
  { id: '4', name: 'Clarisse Lima', age: 11, image: 'https://api.builder.io/api/v1/image/assets/TEMP/ec5126e7d6b682863075e3194d5762aae1b647d1?width=160', lastSession: 'Última sessão há 5 dias.' },
  { id: '5', name: 'Noa Castilho', age: 12, image: 'https://api.builder.io/api/v1/image/assets/TEMP/83cbd87a8d9c3e373a3374e665758b76bcfd0dd5?width=160', lastSession: 'Última sessão há 5 dias.' },
  { id: '6', name: 'Paulo Duarte', age: 11, image: 'https://api.builder.io/api/v1/image/assets/TEMP/ec5126e7d6b682863075e3194d5762aae1b647d1?width=160', lastSession: 'Última sessão há 5 dias.' },
  { id: '7', name: 'Mel Andrade', age: 5, image: 'https://api.builder.io/api/v1/image/assets/TEMP/9acb3fc4f248fb6a8faebca550959baac533d500?width=160', lastSession: 'Última sessão há 5 dias.' },
  { id: '8', name: 'Tulio Dantas', age: 11, image: 'https://api.builder.io/api/v1/image/assets/TEMP/0f7f1fd7e0ac10510979406cd87252f941b53093?width=160', lastSession: 'Última sessão há 5 dias.' },
  { id: '9', name: 'Theo Filho', age: 12, image: 'https://api.builder.io/api/v1/image/assets/TEMP/a7c2b8b037ffd00d307a0d47aea70e74df22d924?width=160', lastSession: 'Última sessão há 5 dias.' },
];

export const PatientDashboard: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [ageFilter, setAgeFilter] = useState('Todas as idades');

  const filteredPatients = useMemo(() => {
    let filtered = mockPatients;
    if (searchQuery) {
      filtered = filtered.filter(patient =>
        patient.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    if (ageFilter !== 'Todas as idades') {
      switch (ageFilter) {
        case '0-5 anos':
          filtered = filtered.filter(p => p.age <= 5);
          break;
        case '6-10 anos':
          filtered = filtered.filter(p => p.age >= 6 && p.age <= 10);
          break;
        case '11-15 anos':
          filtered = filtered.filter(p => p.age >= 11 && p.age <= 15);
          break;
        case '16+ anos':
          filtered = filtered.filter(p => p.age >= 16);
          break;
      }
    }
    return filtered;
  }, [searchQuery, ageFilter]);

  return (
    <div className="w-full min-h-screen bg-white relative">
      {/* Backgrounds */}
      <div className="absolute w-full h-[300px] bg-[#FFFCF2] rounded-b-2xl top-0" />
      <div className="absolute w-full top-[250px] bottom-0 bg-[#FEF2CC] rounded-t-2xl" />

      {/* Sidebar */}
      <AppSidebar />
      <HelpButton />

      {/* Content */}
      <main className="relative z-10 px-4 sm:px-8 md:px-16 lg:px-32 py-10">
        {/* Header */}
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
          <div>
            <h1 className="text-[#2C2623] text-3xl sm:text-4xl lg:text-5xl font-extrabold">
              Pacientes
            </h1>
            <p className="text-[#2C2623] text-base sm:text-lg mt-2">
              Gerencie os pacientes e acompanhe o progresso.
            </p>
          </div>
          <button
            onClick={() => console.log('Novo paciente')}
            className="bg-[#FCE699] px-5 py-2 rounded-xl text-sm font-extrabold text-[#2C2623] hover:bg-[#F7B34D] transition"
          >
            Cadastrar paciente
          </button>
        </header>

        {/* Search + Filter */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-10">
          <SearchInput onSearch={setSearchQuery} />
          <FilterDropdown onFilterChange={setAgeFilter} className="hidden sm:block" />
        </div>

        {/* Patients Grid */}
        <section className=' flex justify-center mt-20'>
          <div className="grid grid-cols-[repeat(3,336px)] gap-10 max-lg:grid-cols-[repeat(2,336px)] max-md:grid-cols-1 max-sm:grid-cols-1">
            {filteredPatients.map(patient => (
              <PatientCard key={patient.id} patient={patient} onViewPatient={id => console.log(id)} />
            ))}
          </div>

          {filteredPatients.length === 0 && (
            <div className="text-center py-12">
              <p className="text-[#2C2623] text-lg font-medium">
                Nenhum paciente encontrado.
              </p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};
