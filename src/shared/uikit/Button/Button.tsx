import { FC, ReactNode } from "react";
import Styles from "./Button.module.scss";
import { clsx } from "clsx";

type ButtonVariantType = "primary" | "secondary";
type SizeType = "m" | "l" | "s";

interface ButtonProps {
  value: string | ReactNode;
  variant: ButtonVariantType;
  size: SizeType;
  isWide?: boolean;
  link?: string;
}

const Button: FC<ButtonProps> = ({ value, variant, size, isWide, link }) => {
  const linking = (link: string) => {
    typeof link !== "undefined" && window.location.assign(`http://localhost:3000/${link}`);
  };

  return (
    <button
      className={clsx(
        Styles[variant],
        size === "m" && Styles.medium,
        size === "l" && Styles.large,
        size === "s" && Styles.small,
        isWide && Styles.wide
      )}
      onClick={() => linking(link)}
    >
      {value}
    </button>
  );
};

export default Button;
