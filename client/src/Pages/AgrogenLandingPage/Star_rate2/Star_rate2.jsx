import { memo } from 'react';
import resets from '../../_resets.module.css';
import GroupIcon from './GroupIcon.jsx'; // Assuming GroupIcon is a JSX component
import classes from './Star_rate2.module.css';

/* @figmaId 1:179 */
const Star_rate2 = memo(function Star_rate2(props) {
  const { className = '', classes: { root = '' } = {} } = props;
  return (
    <div className={`${resets.storybrainResets} ${root} ${className} ${classes.root}`}>
      <div className={classes.group}>
        <GroupIcon className={classes.icon} />
      </div>
    </div>
  );
});

// export default Star_rate2;
const Memo = memo(Star_rate2);
export { Memo as Star_rate2 };
