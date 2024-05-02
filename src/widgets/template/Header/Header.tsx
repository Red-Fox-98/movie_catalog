import { FC } from 'react';
import Styles from './Header.module.scss';
import Logo from '../../../shared/uikit/icons/Logo';
import Name from '../../../shared/uikit/icons/Name';
import Search from '../../../shared/uikit/icons/Search';
import Button from "../../../shared/uikit/Button/Button";

const Header: FC = () => {
  return (
    <div className={Styles.header}>
      <div className={Styles.logo}>
        <Logo />
        <Name />
      </div>
      <div className={Styles.searchForm}>
        <input className={Styles.input} />
        <button className={Styles.searchButton}>
          <Search />
        </button>
      </div>
      <div className={Styles.headerRight}>
        <Button name={"7 дней за 0 ₽"} variant={"primary"} width={129} height={44} font_size={16} />
        <button className={Styles.promoCodeButton}>Промокод</button>
        <button className={Styles.authButton}>Войти</button>
      </div>
    </div>
  );
};

export default Header;
