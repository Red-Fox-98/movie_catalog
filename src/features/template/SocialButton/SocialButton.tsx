import { FC, ReactNode } from "react";
import Styles from "./SocialButton.module.scss";

interface SocialButtonProps {
  name: string;
  href: string;
  icon: ReactNode;
}

const SocialButton: FC<SocialButtonProps> = ({ name, href, icon }) => {
  return (
    <a href={href}>
      {name}
      <div className={Styles.socialIcon}>{icon}</div>
    </a>
  );
};

export default SocialButton;
