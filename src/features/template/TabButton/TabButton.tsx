import { FC, ReactNode } from "react";
import Styles from "./TabButton.module.scss";
import { clsx } from "clsx";

interface TabButtonProps {
  link: URL;
  name: string;
  icon: ReactNode;
  isActive?: boolean;
  onClick?: (link: URL) => void;
}

const TabButton: FC<TabButtonProps> = ({ link, name, icon, isActive, onClick }) => {
  return (
    <button className={Styles.tabButton} onClick={() => onClick(link)}>
      <div className={clsx(isActive && Styles.activeTabButton)}></div>
      <div className={Styles.icon}>{icon}</div>
      <div className={Styles.name}>{name}</div>
    </button>
  );
};

export default TabButton;
