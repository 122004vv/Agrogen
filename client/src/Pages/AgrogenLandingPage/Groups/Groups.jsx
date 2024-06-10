import { memo } from 'react';
import resets from '../../_resets.module.css';
import { GroupIcon } from './GroupIcon.jsx';
import classes from './Groups.module.css';

/* @figmaId 1:97 */
const Groups = memo(function Groups(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.group}>
        <GroupIcon className={classes.icon} />
      </div>
    </div>
  );
});

const Memo = memo(Groups);
export { Memo as Groups };
