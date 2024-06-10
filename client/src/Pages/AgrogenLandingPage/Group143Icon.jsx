import { memo } from 'react';

const Group143Icon = () => (
  <svg preserveAspectRatio='none' viewBox='0 0 70 70' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <g opacity={0.5} filter='url(#filter0_d_148_236)'>
      <rect width={70} height={70} rx={35} fill='white' />
    </g>
    <path
      d='M31.9363 46.0095L45.4714 37.347C47.5095 36.0426 47.5095 33.9355 45.4714 32.6311L31.9363 23.9685C28.644 21.8948 23 23.3665 23 26.3432V43.6349C23 46.645 28.644 48.1167 31.9363 46.0095Z'
      fill='#204E51'
    />
    <defs>
      <filter
        id='filter0_d_148_236'
        x={-24}
        y={-9}
        width={118}
        height={118}
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dy={15} />
        <feGaussianBlur stdDeviation={12} />
        <feComposite in2='hardAlpha' operator='out' />
        <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0' />
        <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_148_236' />
        <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_148_236' result='shape' />
      </filter>
    </defs>
  </svg>
);

// export default memo(Group143Icon);
const Memo = memo(Group143Icon);
export { Memo as Group143Icon};
