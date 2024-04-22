import { FC } from 'react';
import Styles from './Header.module.scss';
import Image from 'next/image';
import logo from './headerImages/Logo.svg';
import text from './headerImages/Text.svg';

const Header: FC = () => {
  return (
    <div className={Styles.header}>
      <div className={Styles.logo}>
        <Image src={logo} alt={'logo'} priority={true} />
        <Image src={text} alt={'name'} priority={true} />
      </div>
      <div className={Styles.searchForm}>
        <input className={Styles.input} />
        <button className={Styles.button} onClick={() => console.log('search')} />
      </div>
    </div>
  );
};

export default Header;
