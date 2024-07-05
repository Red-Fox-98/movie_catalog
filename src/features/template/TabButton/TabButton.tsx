import { FC, ReactNode } from "react";
import Styles from "./TabButton.module.scss";
import { clsx } from "clsx";

interface TabButtonProps {
  link: string;
  name: string;
  icon: ReactNode;
  isActive: boolean;
  onClick: (link: string) => void;
}

const TabButton: FC<TabButtonProps> = ({ link, name, icon, isActive, onClick }) => {
  return (
    <button className={Styles.tabButton} onClick={() => onClick(link)}>
      <a href={link || "http://localhost:3000"}>
        <div className={clsx(isActive && Styles.activeTabButton)}></div>
        <div className={clsx(Styles.icon, isActive && Styles.activeIcon)}>{icon}</div>
        <div className={clsx(Styles.name, isActive && Styles.activeName)}>{name}</div>
      </a>
    </button>
  );
};

export default TabButton;
