import React, { memo } from 'react';

const Ellipse1Icon = (props) => (
  <svg preserveAspectRatio='none' viewBox='0 0 125 125' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle opacity={0.3} cx={62.5} cy={62.5} r={62.5} fill='black' fillOpacity={0.4} />
  </svg>
);

const Memo = memo(Ellipse1Icon);
export { Memo as Ellipse1Icon };
