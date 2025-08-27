import React from 'react';

const BackgroundSVG: React.FC = () => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html:
          "<svg id=\"3504:71\" width=\"100%\" height=\"650\" viewBox=\"0 0 100 45\" preserveAspectRatio=\"none\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"background-svg\" style=\"width: 100vw; height: 1050px; position: absolute; left: 0; top: 420px\"> <path d=\"M0 3.2H100V103C100 104.105 99.105 105 98 105H2C0.895432 105 0 104.105 0 103V3.2Z\" fill=\"#FEF2CC\"></path> <path d=\"M0 6.4C0.4202 6.4 0.836345 6.31723 1.22459 6.15641C1.61283 5.9956 1.96559 5.75989 2.26274 5.46274C2.55989 5.16559 2.7956 4.81283 2.95641 4.42459C3.11723 4.03634 3.2 3.62023 3.2 3.2C3.2 2.77977 3.11723 2.36365 2.95641 1.97541C2.7956 1.58717 2.55989 1.23441 2.26274 0.937258C1.96559 0.640111 1.61283 0.4044 1.22459 0.243585C0.836345 0.0827703 0.42023 0 0 0L0 3.2L0 6.4Z\" fill=\"#FEF2CC\"></path> <circle cx=\"6.4\" cy=\"3.2\" r=\"3.2\" fill=\"#FEF2CC\"></circle> </svg>",
      }}
    />
  );
};

export default BackgroundSVG;
