import { FC, ReactNode } from 'react';
import Style from './Button.module.scss';

type ButtonContentType = string | ReactNode;
type ButtonVariantType = "primary" | "secondary";

interface ButtonProps {
  name: ButtonContentType;
  variant: ButtonVariantType;
  width: number;
  height: number;
  font_size?: number;
}

const Button: FC<ButtonProps> = ({ name, variant, width, height, font_size }) => {
  return (
    <button
      style={{ width: width, height: height, fontSize: font_size }}
      className={Style[variant]}
    >
      {name}
    </button>
  );
};

export default Button;
