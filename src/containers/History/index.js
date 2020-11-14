import React from "react";
import './index.style.scss';
import HistoryItem from '../../components/HistoryItem'

function History ( {userHistory} ) {

  if (!userHistory.length) {
    return (<div></div>)
  } else {
    return (
      <div className="history-container">
      Your attempts:
        {userHistory.map((el,index) => {
          return (
          <HistoryItem
            key={index}
            instructions={el}
          />
          )
        })}
      </div>
    )
  }
};

export default History;