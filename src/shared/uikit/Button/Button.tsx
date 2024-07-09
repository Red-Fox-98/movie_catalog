import { FC, ReactNode } from "react";
import Styles from "./Button.module.scss";
import { clsx } from "clsx";

type ButtonVariantType = "primary" | "secondary";
export type SizeType = "m" | "l" | "s";

interface ButtonProps {
  value: string | ReactNode;
  variant: ButtonVariantType;
  size: SizeType;
  isWide?: boolean;
  link?: URL;
}

const Button: FC<ButtonProps> = ({ value, variant, size, isWide, link }) => {
  return (
    <button
      className={clsx(
        Styles.btn,
        Styles[variant],
        size === "m" && Styles.medium,
        size === "l" && Styles.large,
        size === "s" && Styles.small,
        isWide && Styles.wide
      )}
    >
      {typeof link !== "undefined" ? <a href={link.href}>{value}</a> : value}
    </button>
  );
};

export default Button;
