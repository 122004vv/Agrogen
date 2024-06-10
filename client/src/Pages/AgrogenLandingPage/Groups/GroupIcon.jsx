import { memo } from 'react';

const GroupIcon = (props) => (
  <svg preserveAspectRatio='none' viewBox='0 0 85 43' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M42.5 24.1563C48.2729 24.1563 53.3729 25.5375 57.5167 27.3437C61.3417 29.0437 63.75 32.8687 63.75 37.0125V39.2083C63.75 41.1563 62.1563 42.75 60.2083 42.75H24.7917C22.8438 42.75 21.25 41.1563 21.25 39.2083V37.0479C21.25 32.8687 23.6583 29.0438 27.4833 27.3792C31.6271 25.5375 36.7271 24.1563 42.5 24.1563ZM14.1667 25.0417C18.0625 25.0417 21.25 21.8542 21.25 17.9583C21.25 14.0625 18.0625 10.875 14.1667 10.875C10.2708 10.875 7.08333 14.0625 7.08333 17.9583C7.08333 21.8542 10.2708 25.0417 14.1667 25.0417ZM18.1688 28.9375C16.8583 28.725 15.5479 28.5833 14.1667 28.5833C10.6604 28.5833 7.33125 29.3271 4.32083 30.6375C1.7 31.7708 0 34.3208 0 37.1896V39.2083C0 41.1563 1.59375 42.75 3.54167 42.75H15.9375V37.0479C15.9375 34.1083 16.7521 31.3458 18.1688 28.9375ZM70.8333 25.0417C74.7292 25.0417 77.9167 21.8542 77.9167 17.9583C77.9167 14.0625 74.7292 10.875 70.8333 10.875C66.9375 10.875 63.75 14.0625 63.75 17.9583C63.75 21.8542 66.9375 25.0417 70.8333 25.0417ZM85 37.1896C85 34.3208 83.3 31.7708 80.6792 30.6375C77.6688 29.3271 74.3396 28.5833 70.8333 28.5833C69.4521 28.5833 68.1417 28.725 66.8313 28.9375C68.2479 31.3458 69.0625 34.1083 69.0625 37.0479V42.75H81.4583C83.4063 42.75 85 41.1563 85 39.2083V37.1896ZM42.5 0.25C48.3792 0.25 53.125 4.99583 53.125 10.875C53.125 16.7542 48.3792 21.5 42.5 21.5C36.6208 21.5 31.875 16.7542 31.875 10.875C31.875 4.99583 36.6208 0.25 42.5 0.25Z'
      fill='white'
    />
  </svg>
);

const Memo = memo(GroupIcon);
export { Memo as GroupIcon };