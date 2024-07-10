import HeaderStyles from "./styles/Header.module.css";

const HeaderTitle = ( {headTitle, color, style} ) => {
  return (
    <h1 style={{...style, color}} className={HeaderStyles.title}>
        {headTitle}
    </h1>
    
  )
}

export default HeaderTitle
