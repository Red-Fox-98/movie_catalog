import One from "src/shared/uikit/numbers/One";
import Two from "src/shared/uikit/numbers/Two";
import Three from "src/shared/uikit/numbers/Three";
import { ReactNode } from "react";

interface INumber {
  number: ReactNode;
}

export const getTheNumbers = () => {
  const numbers: INumber[] = [
    {
      number: <One />
    },
    {
      number: <Two />
    },
    {
      number: <Three />
    },
    {
      number: <One />
    },
    {
      number: <Two />
    },
    {
      number: <Three />
    },
    {
      number: <One />
    },
    {
      number: <Two />
    },
    {
      number: <Three />
    },
    {
      number: <One />
    }
  ];

  return numbers;
};
