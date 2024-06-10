import { memo } from 'react';
import resets from '../../_resets.module.css';
import classes from './Check.module.css';
import { VectorIcon } from './VectorIcon.jsx';

/* @figmaId 1:71 */
export const Check = memo(function Check(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.vector}>
        <VectorIcon className={classes.icon} />
      </div>
    </div>
  );
});
export default Check;

