import { memo } from 'react';

const GroupIcon = (props) => (
  <svg preserveAspectRatio='none' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M24.05 16.6667L21.6 8.6C21.1167 7.01667 18.8833 7.01667 18.4167 8.6L15.95 16.6667H8.53333C6.91667 16.6667 6.25 18.75 7.56667 19.6833L13.6333 24.0167L11.25 31.7C10.7667 33.25 12.5667 34.5 13.85 33.5167L20 28.85L26.15 33.5333C27.4333 34.5167 29.2333 33.2667 28.75 31.7167L26.3667 24.0333L32.4333 19.7C33.75 18.75 33.0833 16.6833 31.4667 16.6833H24.05V16.6667Z'
      fill='#FFBE40'
    />
  </svg>
);

// const Memo = memo(GroupIcon);
// export { Memo as GroupIcon };
export default GroupIcon;
