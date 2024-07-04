
import HeaderStyles from "./styles/Header.module.css";


const Header = ( {children} ) => {
  return (
    <header className={HeaderStyles.container}>
      {children}
    </header>
  );
};

export default Header
