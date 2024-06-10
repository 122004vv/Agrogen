import { memo } from 'react';

const Ellipse3Icon = () => (
  <svg preserveAspectRatio='none' viewBox='0 0 125 125' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <circle opacity={0.3} cx={62.5} cy={62.5} r={62.5} fill='black' fillOpacity={0.4} />
  </svg>
);

// export default memo(Ellipse3Icon);
const Memo = memo(Ellipse3Icon);
export { Memo as Ellipse3Icon };
