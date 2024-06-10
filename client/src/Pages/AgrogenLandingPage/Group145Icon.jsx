import { memo } from 'react';

const Group145Icon = () => (
  <svg preserveAspectRatio='none' viewBox='0 0 70 70' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <g filter='url(#filter0_d_148_233)'>
      <rect width={70} height={70} rx={35} fill='white' />
    </g>
    <path
      d='M38.0637 23.9909L24.5286 32.6477C22.4905 33.9513 22.4905 36.057 24.5286 37.3605L38.0637 46.0173C41.356 48.123 47 46.6189 47 43.6442V26.3306C47 23.3559 41.356 21.8852 38.0637 23.9909Z'
      fill='#204E51'
    />
    <defs>
      <filter
        id='filter0_d_148_233'
        x={-12}
        y={0}
        width={94}
        height={109}
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
        <feMorphology radius={12} operator='erode' in='SourceAlpha' result='effect1_dropShadow_148_233' />
        <feOffset dy={27} />
        <feGaussianBlur stdDeviation={12} />
        <feComposite in2='hardAlpha' operator='out' />
        <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0' />
        <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_148_233' />
        <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_148_233' result='shape' />
      </filter>
    </defs>
  </svg>
);

// export default memo(Group145Icon);
const Memo = memo(Group145Icon);
export { Memo as Group145Icon };
