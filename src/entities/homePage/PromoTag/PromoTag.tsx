import { FC, ReactNode } from "react";
import Styles from "./PromoTag.module.scss";

interface PromoTagProps {
  value: string;
  icon: ReactNode;
}

const PromoTag: FC<PromoTagProps> = ({ value, icon }) => {
  return (
    <div className={Styles.tag}>
      <div className={Styles.icon}>{icon}</div>
      <div className={Styles.title}>{value}</div>
    </div>
  );
};

export default PromoTag;
