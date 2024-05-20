import { ReactNode } from "react";
import One from "src/shared/uikit/numbers/One";
import Two from "src/shared/uikit/numbers/Two";
import Three from "src/shared/uikit/numbers/Three";
import Four from "src/shared/uikit/numbers/Four";
import Five from "src/shared/uikit/numbers/Five";
import Six from "src/shared/uikit/numbers/Six";
import Seven from "src/shared/uikit/numbers/Seven";
import Eight from "src/shared/uikit/numbers/Eight";
import Nine from "src/shared/uikit/numbers/Nine";
import Ten from "src/shared/uikit/numbers/Ten";

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
      number: <Four />
    },
    {
      number: <Five />
    },
    {
      number: <Six />
    },
    {
      number: <Seven />
    },
    {
      number: <Eight />
    },
    {
      number: <Nine />
    },
    {
      number: <Ten />
    }
  ];

  return numbers;
};
