import Header from "../components/Header";
import HeaderImg from "../components/HeaderImg";
import HeaderTitle from "../components/HeaderTitle";
import baseStationImg from "../assets/baseStation.png"
import StationTab from "../components/StationTab";
import stationStyle from './styles/BaseStationsPage.module.css';

const BaseStations = () => {
  return (
    <>
    <Header>
         <HeaderTitle headTitle='Mobile Base Station' color=' black' style={{position: 'relative', top: '10%', marginBottom: '0'}}/>
        <HeaderImg src={baseStationImg}/>
    </Header>
    <div className="features-container">
        <StationTab title='EXTENDED RANGE'> 
        </StationTab>
        
        <StationTab title='CAPACITY'>          
        </StationTab>

        <StationTab title='PERSONNEL'>
        </StationTab>
    </div>
    </>
  )
}

export default BaseStations
