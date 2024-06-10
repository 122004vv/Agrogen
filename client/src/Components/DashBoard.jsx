import React from 'react';
// import Navbar from './Navbar';
import dashboardimg from '../assets/dashboardimg.jpeg';
import Dashboardtab from './Dashboardtab';

function DashBoard() {
  return (
    <div>
      {/* <Navbar /> */}
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div>
          <img src={dashboardimg} width="1300"  alt="dashboardimg" />
        </div>
        <div style={{marginTop:'100px' , marginLeft:'30px'}}>
          <Dashboardtab />
        </div>
      </div>
    </div>
  );
}

export default DashBoard;