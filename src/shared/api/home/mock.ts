import { MovieImages, MovieTags } from "./type";

import previewAvatarLegendOfAang from "../../api/home/moviePreviews/AvatarLegendOfAang.png";
import logoAvatarLegendOfAang from "../../api/home/infoFilm/LogoAvatarLegendOfAang.png";

export const recommendedMovieImages: MovieImages ={
  preview: previewAvatarLegendOfAang.src,
  logo: logoAvatarLegendOfAang.src
}

export const movieInformationModuleMock:MovieTags = {
  rate: 7.9,
  year: 2024,
  genre: "Фэнтези",
  country: "США",
  ageRating: "+16"
};
