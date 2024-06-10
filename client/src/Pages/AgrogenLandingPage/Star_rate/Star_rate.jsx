import { memo } from 'react';
import resets from '../../_resets.module.css';
import GroupIcon from './GroupIcon.jsx'; // Assuming GroupIcon is a JSX component
import classes from './Star_rate.module.css';

/* @figmaId 1:87 */
const Star_rate = memo(function Star_rate(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.group}>
        <GroupIcon className={classes.icon} />
      </div>
    </div>
  );
});

const Memo = memo(Star_rate);
export { Memo as Star_rate };
