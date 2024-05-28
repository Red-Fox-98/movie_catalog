import { SizeType } from "src/shared/uikit/Button/Button";

export const getSizeBtn = (width: number): SizeType => {
  return width <= 375 ? "m" : "l";
};
