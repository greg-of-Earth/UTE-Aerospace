import stationStyle from './styles/BaseStations.module.css'

const StationTab = ( {title, description} ) => {
  return (
    <>
        <section className={stationStyle.descTitle}>
            <h2>{title}</h2>
        </section>
        <section className={stationStyle.descInfo}>
            <p>{description}</p>
        </section>
    </>
  )
}

export default StationTab
