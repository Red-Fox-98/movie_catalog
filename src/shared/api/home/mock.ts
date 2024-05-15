import { MovieInfo, NewMovieInfo } from "./types";

import previewAvatarLegendOfAang from "../../api/home/moviePreviews/AvatarLegendOfAang.png";
import logoAvatarLegendOfAang from "../../api/home/infoFilm/LogoAvatarLegendOfAang.png";
import previewManOnALedge from "../../api/home/newMoviesPreviews/ManOnALedge.png";
import previewOceanSEight from "../../api/home/newMoviesPreviews/OceanSEight.png";
import previewNancyDrew from "../../api/home/newMoviesPreviews/NancyDrew.png";
import previewNoChangeOnTheWesternFront from "../../api/home/newMoviesPreviews/NoChangeOnTheWesternFront.png";
import previewAvatarWaterway from "../../api/home/newMoviesPreviews/AvatarWaterway.png";

export const MovieInfoMock: MovieInfo = {
  preview: previewAvatarLegendOfAang.src,
  logo: logoAvatarLegendOfAang.src,
  rating: "7,9",
  year: 2024,
  genre: "Фэнтези",
  country: "США",
  ageRating: "16+"
};

export const NewMoviesInfoMock: NewMovieInfo[] = [
  {
    id: 0,
    preview: previewManOnALedge.src,
    rating: "8,9",
    name: "На грани",
    year: 2022,
    numberOfHours: 2,
    numberOfMinutes: 37
  },
  {
    id: 1,
    preview: previewOceanSEight.src,
    rating: "8,2",
    name: "8 подруг Оушена",
    year: 2022,
    numberOfHours: 2,
    numberOfMinutes: 37
  },
  {
    id: 2,
    preview: previewNancyDrew.src,
    rating: "9,0",
    status: "newSeason",
    name: "Нэнси Дрю",
    year: 2022,
    numberOfHours: 2,
    numberOfMinutes: 37
  },
  {
    id: 3,
    preview: previewNoChangeOnTheWesternFront.src,
    rating: "7,9",
    status: "premiere",
    name: "На западном фронте без перемен",
    year: 2022,
    numberOfHours: 2,
    numberOfMinutes: 37
  },
  {
    id: 4,
    preview: previewAvatarWaterway.src,
    rating: "9,9",
    status: "premiere",
    name: "Аватар. Путь воды",
    year: 2022,
    numberOfHours: 2,
    numberOfMinutes: 37
  },
  {
    id: 5,
    preview: previewAvatarWaterway.src,
    rating: "9,9",
    status: "premiere",
    name: "Аватар. Путь воды",
    year: 2022,
    numberOfHours: 2,
    numberOfMinutes: 37
  }
];
