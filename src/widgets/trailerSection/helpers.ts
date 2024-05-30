import { SizeType } from "src/shared/uikit/Button/Button";
import { NextRouter } from "next/router";

export const getSizeBtn = (width: number): SizeType => {
  return width <= 375 ? "m" : "l";
};

export const getWidthWindow = () => {
  return typeof window !== "undefined" && window.innerWidth;
};

export const hideSwiper = (width: number, currentLink: NextRouter) => {
  const swiperPagination = document.querySelector(".swiper-pagination");

  if (currentLink.pathname !== "/") swiperPagination["style"] = "display:none";
  else if (width > 375) swiperPagination["style"] = "display:none";
};
