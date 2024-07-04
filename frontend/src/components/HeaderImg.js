import HeaderStyles from "./styles/Header.module.css";

const HeaderImg = ( {src} ) => {
  return (
    <img src={src} alt="Header" style={{width: '100%', margin: '0'}} className={HeaderStyles.image}  />
  )
}

export default HeaderImg
