import Header from "../components/Header";
import HeaderImg from "../components/HeaderImg";
import HeaderTitle from "../components/HeaderTitle";
import baseStationImg from "../assets/baseStation.png"
import StationTab from "../components/StationTab";





const BaseStations = () => {
  return (
    <>
    <Header>
         <HeaderTitle headTitle='Mobile Base Station' color=' black' style={{position: 'relative', top: '10%', marginBottom: '0'}}/>
        <HeaderImg src={baseStationImg}/>
    </Header>
    <div className="features-container">
        <StationTab title='EXTENDED RANGE' description='Will allow extended range and depending on the tank sizes selected will allow up to 2 days of spraying without refill'> 
        </StationTab>
        
        <StationTab title='CAPACITY' description='Will transport two drones, but when additional drones are flown to the mobile base station location, can support a fleet of up to 10 drones (based upon flying distance)'>          
        </StationTab>

        <StationTab title='PERSONNEL' description='Line shack for 2 people with toilet, shower, and kitchenette'>
        </StationTab>
    </div>
    </>
  )
}

export default BaseStations
