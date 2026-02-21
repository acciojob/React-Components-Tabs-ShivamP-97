import React from 'react';

function Tabs() {
  return (
    <div>
      <div className="tabs">
        <button id="Home-Tab" className="tab">Home</button>
        <button id="About-Tab" className="tab">About</button>
        <button id="Features-Tab" className="tab">Features</button>
      </div>

      <div className="viewport">
        Pages Go Here
      </div>
    </div>
  );
}

export default Tabs;