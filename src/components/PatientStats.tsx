import React, { useState } from 'react';

interface PatientStatsProps {
  description: string;
  sessionsCompleted: number;
  averageScore: string;
  totalTime: string;
}

export const PatientStats: React.FC<PatientStatsProps> = ({
  description,
  sessionsCompleted,
  averageScore,
  totalTime
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className={`flex w-[588px]  mx-auto flex-col   gap-10  ${isExpanded ? 'h-[535px]' : 'h-[335px]'} pt-4`}>
      <article className="flex flex-col items-start gap-4  ">
        <p
          className={`self-stretch overflow-hidden text-[#2C2623] text-center text-lg font-medium leading-6 tracking-[0.38px]
    ${isExpanded ? 'whitespace-normal h-auto' : 'line-clamp-4'}
  `}
        >
          {description}
        </p>
        <div className="flex justify-center items-center gap-4 self-stretch ">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 relative"
            aria-label={isExpanded ? "Recolher descrição" : "Expandir descrição"}
          >
            <span className="text-[#2C2623] text-center text-base font-bold leading-5 tracking-[0.16px] relative">
              {isExpanded ? 'Recolher' : 'Expandir'}
            </span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}
            >
              <path
                d="M5 7.5L10 12.5L15 7.5"
                stroke="#F7B34D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </article>

      <div className="flex items-center self-stretch ">
        <div className="flex flex-col items-start gap-2 flex-[1_0_0] relative">
          <h3 className="self-stretch text-[#2C2623] text-center text-lg font-extrabold leading-6 tracking-[0.18px] relative">
            Sessões realizadas
          </h3>
          <div className="self-stretch text-[#2C2623] text-center text-[32px] font-extrabold leading-8 tracking-[-0.32px] relative">
            {sessionsCompleted}
          </div>
        </div>
        <div className="flex flex-col items-start gap-2 flex-[1_0_0] relative">
          <h3 className="self-stretch text-[#2C2623] text-center text-lg font-extrabold leading-6 tracking-[0.18px] relative">
            Pontuação média
          </h3>
          <div className="self-stretch text-[#2C2623] text-center text-[32px] font-extrabold leading-8 tracking-[-0.32px] relative">
            {averageScore}
          </div>
        </div>
        <div className="flex flex-col items-start gap-2 flex-[1_0_0] relative">
          <h3 className="self-stretch text-[#2C2623] text-center text-lg font-extrabold leading-6 tracking-[0.18px] relative">
            Tempo total
          </h3>
          <div className="self-stretch text-[#2C2623] text-center text-[32px] font-extrabold leading-8 tracking-[-0.32px] relative">
            {totalTime}
          </div>
        </div>
      </div>
    </section>
  );
};
