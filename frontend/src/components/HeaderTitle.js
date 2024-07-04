
import HeaderStyles from "./styles/Header.module.css";


const HeaderTitle = ( {headTitle, color} ) => {
  return (
    <h1 style={{ color }} className={HeaderStyles.title}>
        {headTitle}
    </h1>
  )
}

export default HeaderTitle
