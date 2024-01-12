import React from 'react';
import '../Home-type.css'; // Make sure to replace with the correct CSS file name

const Typewritter = () => {
  return (
    <div className="wrapper">
      <div className="static-txt">Let's</div>
      <ul className="dynamic-txts">
        <li><span>Dance </span></li>
        {/* <li><span>Sing</span></li> */}
        <li><span>Enjoy</span></li>
        <li><span>Vibe</span></li>
      </ul>
      <div className="static-txt">together</div>
    </div>
  );
}

export default Typewritter;
