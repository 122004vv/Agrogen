import React,{ memo } from 'react';
import resets from '../../_resets.module.css';
import classes from './Announcement3.module.css';
import Announcement3Icon from './Announcement3Icon.jsx'; // Assuming this is the correct import for Announcement3Icon

const Announcement3 = memo(function Announcement3({ className = '', rootClassName = '' }) {
  return (
    <div className={`${resets.storybrainResets} ${rootClassName} ${className} ${classes.root}`}>
      <div className={classes.icon}>
        <Announcement3Icon className={classes.icon2} />
      </div>
    </div>
  );
});


const Memo = memo(Announcement3);
export { Memo as Announcement3 };