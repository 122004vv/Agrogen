import { memo } from 'react';

const VectorIcon = (props) => (
  <svg preserveAspectRatio='none' viewBox='0 0 57 42' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M18 33.9L6.43333 22.3333C5.13333 21.0333 3.03333 21.0333 1.73333 22.3333C0.433333 23.6333 0.433333 25.7333 1.73333 27.0333L15.6667 40.9667C16.9667 42.2667 19.0667 42.2667 20.3667 40.9667L55.6333 5.7C56.9333 4.4 56.9333 2.3 55.6333 1C54.3333 -0.299998 52.2333 -0.299998 50.9333 1L18 33.9Z'
      fill='white'
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
