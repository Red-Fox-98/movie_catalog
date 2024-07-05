import { widthMobile } from "@styles/values";
import { SizeType } from "src/shared/uikit/Button/Button";

export const getSizeBtn = (width: number): SizeType => {
  return width <= widthMobile ? "m" : "l";
};
