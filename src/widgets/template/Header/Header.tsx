import { FC } from "react";
import Styles from "./Header.module.scss";
import Image from "next/image";
import logo from "./headerImages/Logo.svg";
import text from "./headerImages/Text.svg";

const Header: FC = () => {
  return <div className={Styles.header}>
    <div className={Styles.logo}>
      <Image src={logo} alt={"logo"} />
      <Image src={text} alt={"name"} />
    </div>
  </div>;
};

export default Header;
