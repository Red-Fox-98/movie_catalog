import { TrailerSectionType } from "src/widgets/trailerSection/TrailerSection";
import { widthMobile } from "@styles/values";

export const hideSwiper = (width: number, currentTrailerSectionType: TrailerSectionType) => {
  const swiperPagination = document.querySelector(".swiper-pagination") as HTMLElement;

  if (currentTrailerSectionType !== "home") swiperPagination.style.display = "none";
  else if (width > widthMobile) swiperPagination.style.display = "none";
  else swiperPagination.style.display = "block";
};
