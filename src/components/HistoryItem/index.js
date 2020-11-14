import React from "react";
import './index.style.scss';


function HistoryItem ( {instructions} ) {

  return (
    <div className="historyitem-container">
      <p>{instructions}</p>
    </div>
  );
};

export default HistoryItem;