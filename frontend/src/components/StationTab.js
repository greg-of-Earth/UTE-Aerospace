import { useState } from 'react';
import stationStyle from './styles/BaseStations.module.css';

const StationTab = ({ title, description }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={stationStyle.tabContainer} onClick={handleClick}>
      <div className={`${stationStyle.tab} ${isFlipped ? stationStyle.flipped : ''}`}>
        <section className={stationStyle.tabFront}>
              <h2>{title}</h2>
          </section>
          <section className={stationStyle.tabBack}>
              <p>{description}</p>
          </section>
      </div>
    </div>
  )
}

export default StationTab
