import React, { useState } from 'react';

const HistoryItem = ({ item, id }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <li
        className={styles.historyItem}
        key={id}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <img
          src={getImageUrl(item.imageSrc)}
          alt={`${item.organisation} Logo`}
        />
        <div className={styles.historyItemDetails}>
          <h3>{`${item.role}, ${item.organisation}`}</h3>
          <p>{`${item.startDate} - ${item.endDate}`}</p>
        </div>
      </li>
      <section>
        {isExpanded && (
          <div>
            <p>hi</p>
            {/* <ul>{getExperiences(item.experiences)}</ul> */}
          </div>
        )}
      </section>
    </div>
  );
};

export default getHistory;
