import { memo } from 'react';
import resets from '../_resets.module.css';
import { Announcement3 } from './Announcement3/Announcement3';
import classes from './Helpline.module.css';

const Helpline = memo(function Helpline(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.rectangle17929}></div>
      <div className={classes.image20}></div>
      <div className={classes.rectangle7341}></div>
      <div className={classes.weAreFocusedOnMakingYourProces}>
        <div className={classes.textBlock}>We Are Focused On</div>
        <div className={classes.textBlock2}>Making Your Process A</div>
        <div className={classes.textBlock3}>Success</div>
      </div>
      <div className={classes.weAreHereToHelpYou}>We are here to help you</div>
      <div className={classes.image28} style={{backgroundImage:'url("https://i.ytimg.com/vi/5vYj_bpttFY/maxresdefault.jpg")'}}></div>
      <div className={classes.rectangle7344}></div>
      <div className={classes.for}>For</div>
      <div className={classes.happyClients}>Happy Clients</div>
      <input type="text" className={classes.describeYourIssue} placeholder="Describe your issue" />

      <Announcement3 className={classes.announcement3} />
    </div>
  );
});

const Memo = memo(Helpline);
export default Helpline;