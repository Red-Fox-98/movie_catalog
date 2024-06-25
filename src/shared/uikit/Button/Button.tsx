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
  link?: string;
}

const Button: FC<ButtonProps> = ({ value, variant, size, isWide, link }) => {
  const linking = (link: string) => {
    // Для "перенаправления" лучше использовать или "useRouter" или (гораздо лучше) https://nextjs.org/docs/pages/api-reference/components/link
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
      // А почему у тебя можно запихнуть string | undefined в функцию, которая принимает только string.
      // Проверь настройки typescript
      onClick={() => linking(link)}
    >
      {value}
    </button>
  );
};

export default Button;
