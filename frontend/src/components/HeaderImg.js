import HeaderStyles from "./styles/Header.module.css";

const HeaderImg = ( {src, style} ) => {
  return (
    // <img src={src} alt="Header" style={{width: '100%', margin: '0'}} className={HeaderStyles.image}  />
    <img 
      src={src} 
      alt="Header" 
      style={{ ...style, width: '100%', margin: '0' }} 
      className={HeaderStyles.image}  
    />
  )
}

export default HeaderImg
