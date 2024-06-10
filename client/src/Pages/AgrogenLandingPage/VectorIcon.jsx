import { memo } from 'react';

const VectorIcon = (props) => (
  <svg preserveAspectRatio='none' viewBox='0 0 19 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M12.0083 0L18.6373 7.83208L12.0083 15.6642M0.0717163 7.83208H18.4516'
      stroke='white'
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
