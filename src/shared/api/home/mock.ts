import { MovieInfo } from "./type";

import previewAvatarLegendOfAang from "../../api/home/moviePreviews/AvatarLegendOfAang.png";
import logoAvatarLegendOfAang from "../../api/home/infoFilm/LogoAvatarLegendOfAang.png";

export const MovieInfoMock: MovieInfo = {
  preview: previewAvatarLegendOfAang.src,
  logo: logoAvatarLegendOfAang.src,
  rate: 7.9,
  year: 2024,
  genre: "Фэнтези",
  country: "США",
  ageRating: "+16"
};
