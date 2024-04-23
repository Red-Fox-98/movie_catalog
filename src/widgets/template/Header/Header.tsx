import { FC } from 'react';
import Styles from './Header.module.scss';
import Image from 'next/image';
import logo from './headerImages/Logo.svg';
import name from './headerImages/Name.svg';

const Header: FC = () => {
  return (
    <div className={Styles.header}>
      <div className={Styles.logo}>
        <Image src={logo} alt={'logo'} priority={true} />
        <Image src={name} alt={'name'} priority={true} />
      </div>
      <div className={Styles.searchForm}>
        <input className={Styles.input} />
        <button className={Styles.searchButton} />
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
