import { FC } from 'react';
import Styles from './Header.module.scss';
import Logo from '../../../shared/uikit/icons/Logo';
import Name from '../../../shared/uikit/icons/Name';
import Search from '../../../shared/uikit/icons/Search';

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
        <button className={Styles.buyButton}>7 дней за 0 ₽</button>
        <button className={Styles.promocodeButton}>Промокод</button>
        <button className={Styles.authButton}>Войти</button>
      </div>
    </div>
  );
};

export default Header;
