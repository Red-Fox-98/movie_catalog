import { FC } from "react";
import Style from "./PromoNotice.module.scss";
import { clsx } from "clsx";

interface PromoTagsProps {
  value: string;
  className?: string;
}

const PromoNotice: FC<PromoTagsProps> = ({ value, className }) => {
  return <div className={clsx(Style.tag, className)}>{value}</div>;
};

export default PromoNotice;
