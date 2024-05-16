import { FC } from "react";
import Style from "./PromoNotice.module.scss";

interface PromoTagsProps {
  value: string;
  top?: number;
  left?: number;
  rotation?: number;
}

const PromoNotice: FC<PromoTagsProps> = ({ value, top, left, rotation }) => {
  return (
    <div
      className={Style.tag}
      style={{ top: top, left: left, transform: `rotate(${rotation}deg)` }}
    >
      {value}
    </div>
  );
};

export default PromoNotice;
