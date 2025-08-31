const Dashboard: React.FC = () => {
  // ================= HEADER =================
  const Header = () => (
    <header className="flex items-start justify-between relative z-[1] pt-12 pb-0 px-[252px] max-md:flex-col max-md:gap-6 max-md:pt-6 max-md:pb-0 max-md:px-8 max-sm:pt-4 max-sm:pb-0 max-sm:px-5">
     
      <div className="flex-1">
        <h1 className="text-[#2C2623] text-5xl font-extrabold leading-[56px] tracking-[-0.48px] mb-2 max-sm:text-[32px] max-sm:leading-10">
          Olá, Maria!
        </h1>
        <p className="text-[#2C2623] text-lg font-medium leading-6 tracking-[0.18px] max-sm:text-base">
          Acompanhe o progresso dos seus pacientes
        </p>
      </div>
      <div className="flex items-center justify-between w-[336px] h-14 bg-[#FFFCF2] ml-auto p-4 rounded-2xl border-2 border-solid border-[#FEF2CC] max-md:w-full max-sm:h-auto max-sm:p-3">
        <div>
          {/* Ícone raio */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M14.2495 2H8.49395..."></path></svg>
        </div>
        <div className="text-[#2C2623] text-base font-extrabold leading-5 tracking-[0.16px] flex-1">
          Últimos 3 dias de teste
        </div>
        <div>
          {/* Chevron */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9 18L15 12L9 6" stroke="#F7B34D" strokeWidth="2"></path></svg>
        </div>
      </div>
    </header>
  );

  // ================= ACTION BUTTONS =================
  const ActionButtons = () => {
  const buttons = [
    { text: 'Iniciar sessão', bgColor: 'bg-[#CCEDEF]', icon: '/iconStreaming.png' },
    { text: 'Adicionar paciente', bgColor: 'bg-[#D7F0DF]', icon: '/iconSmile.png' },
    { text: 'Gerar relatório', bgColor: 'bg-[#FAD2E1]', icon: '/iconGraph.png' },
    { text: 'Ver conquistas', bgColor: 'bg-[#FEF2CC]', icon: '/iconMedal.png' },
  ];

  return (
    <section className="flex gap-4 relative z-[1] mt-9 px-[252px] max-md:flex-wrap max-md:px-8 max-sm:flex-col max-sm:px-5">
      {buttons.map((btn, i) => (
        <button
          key={i}
          className="flex items-center w-[248px] h-16 shadow-[0_3px_0_0_#FEF2CC] gap-3 bg-white pl-2 pr-5 py-2 rounded-[20px] border-2 border-solid border-[#FEF2CC] hover:shadow-[0_5px_0_0_#FEF2CC]"
        >
          {/* Ícone */}
          <div className={`w-10 h-10 flex items-center justify-center ${btn.bgColor} rounded-xl`}>
            <img src={btn.icon} alt={btn.text} className="w-6 h-6" />
          </div>

          {/* Texto */}
          <div className="text-[#2C2623] text-base font-extrabold">{btn.text}</div>
        </button>
      ))}
    </section>
  );
};

  // ================= STATS CARDS =================
  const StatsCards = () => {
    const stats = [
      { title: 'Pacientes cadastrados', value: '48' },
      { title: 'Sessões realizadas', value: '56' },
      { title: 'Média por paciente', value: '7,2' }
    ];
    return (
      <section className="flex gap-4 relative z-[1] mt-24 px-[252px] max-md:flex-col max-md:px-8 max-sm:px-5">
        {stats.map((s, i) => (
          <article key={i} className="shadow-[0_3px_0_0_#FFE0B2] bg-white p-6 rounded-3xl border-2 border-solid border-[#FBDEB1]">
            <div className="flex justify-between items-start mb-14">
              <h3 className="text-[#2C2623] text-lg font-extrabold">{s.title}</h3>
              <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full border-4 border-solid border-[#FEF9E5]"></div>
            </div>
            <div className="text-[#2C2623] text-[64px] font-extrabold">{s.value}</div>
          </article>
        ))}
      </section>
    );
  };

  // ================= RECENT SESSIONS =================
  const RecentSessions = () => {
    const sessions = [
      { name: 'Ana Alice', sessions: 11, performance: 'Excelente' },
      { name: 'Théo Santos', sessions: 6, performance: 'Bom' },
      { name: 'João Pedro', sessions: 5, performance: 'Regular' }
    ];
    return (
      <section className="mt-12 px-[252px] max-md:px-8 max-sm:px-5">
        <h2 className="text-[#2C2623] text-2xl font-extrabold mb-6">Últimas sessões</h2>
        <div className="flex gap-4 max-md:flex-col">
          {sessions.map((s, i) => (
            <article key={i} className="flex w-[336px] h-24 items-center gap-5 shadow-[0_3px_0_0_#FFE0B2] bg-white p-2 rounded-3xl border-2 border-solid border-[#FBDEB1]">
              <div className="w-20 h-20 bg-gray-200 rounded-2xl"></div>
              <div className="flex flex-col justify-between flex-1">
                <div className="flex justify-between items-center">
                  <h3 className="text-[#2C2623] text-lg font-extrabold">{s.name}</h3>
                  <span className="text-sm font-bold bg-white px-2 py-0.5 rounded-full border border-[#E8E5E3]">{s.sessions}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-base font-bold">{s.performance}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    );
  };

  // ================= POPULAR GAMES =================
  const PopularGames = () => (
    <section className="mt-12 px-[252px] max-md:px-8 max-sm:px-5">
      <h2 className="text-[#2C2623] text-2xl font-extrabold mb-6">Jogos populares</h2>
      <div className="flex gap-4">
        <div className="w-40 h-40 bg-[#FAD2E1] flex items-center justify-center rounded-3xl">🎮</div>
        <div className="w-40 h-40 bg-[#CCEDEF] flex items-center justify-center rounded-3xl">🧠</div>
      </div>
    </section>
  );

  return (
    <main className="bg-[#FFFCF2] min-h-screen">
      <Header />
      <ActionButtons />
      <StatsCards />
      <RecentSessions />
      <PopularGames />
    </main>
  );
};

export default Dashboard;