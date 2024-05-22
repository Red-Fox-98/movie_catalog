import {
  VideoInformation,
  AdditionalMovieInformation,
  MovieInfo,
  MovieWeek,
  NewMovieInfo
} from "./types";
// import { VideoInformation } from "src/features/moviePage/VideoContent/types";

import previewAvatarLegendOfAang from "../../api/home/moviePreviews/AvatarLegendOfAang.png";
import logoAvatarLegendOfAang from "../../api/home/infoFilm/LogoAvatarLegendOfAang.png";

import previewManOnALedge from "../../api/home/newMoviesPreviews/ManOnALedge.png";
import previewOceanSEight from "../../api/home/newMoviesPreviews/OceanSEight.png";
import previewNancyDrew from "../../api/home/newMoviesPreviews/NancyDrew.png";
import previewNoChangeOnTheWesternFront from "../../api/home/newMoviesPreviews/NoChangeOnTheWesternFront.png";
import previewAvatarWaterway from "../../api/home/newMoviesPreviews/AvatarWaterway.png";

import topOne from "../../api/home/weekTop/1.png";
import topTwo from "../../api/home/weekTop/2.png";
import topThree from "../../api/home/weekTop/3.png";
import topFour from "../../api/home/weekTop/4.png";
import topFive from "../../api/home/weekTop/5.png";
import topSix from "../../api/home/weekTop/6.png";
import topSeven from "../../api/home/weekTop/7.png";
import topEight from "../../api/home/weekTop/8.png";
import topNine from "../../api/home/weekTop/9.png";
import topTen from "../../api/home/weekTop/10.png";

import firstSeries from "../../uikit/images/Series/first_series.png";
import secondSeries from "../../uikit/images/Series/second_series.png";
import thirdSeries from "../../uikit/images/Series/third_series.png";
import fourthSeries from "../../uikit/images/Series/fourth_series.png";

export const MovieInfoMock: MovieInfo = {
  name: "Аватар: Легенда об Аанге",
  description:
    "Чтобы спасти мир от разрушительной войны, мальчик по имени Аанг должен справиться с четырьмя стихиями и вступить в схватку с безжалостным противником, который пытается его остановить.",
  link: "avatar-legenda-ob-aange",
  preview: previewAvatarLegendOfAang.src,
  logo: logoAvatarLegendOfAang.src,
  rating: "7,9",
  year: 2024,
  genre: "Фэнтези",
  country: "США",
  ageRating: "16+",
  seasonsNumber: 4
};

export const VideoInformationMock: VideoInformation[] = [
  {
    id: 0,
    type: "season",
    season: 1,
    episode: 1,
    preview: firstSeries.src,
    duration: "43:54",
    status: "Просмотрено"
  },
  {
    id: 1,
    type: "season",
    season: 1,
    episode: 2,
    preview: secondSeries.src,
    duration: "43:54",
    status: "Просмотрено"
  },
  {
    id: 2,
    type: "season",
    season: 1,
    episode: 3,
    preview: thirdSeries.src,
    duration: "43:54",
    status: "Просмотрено"
  },
  {
    id: 3,
    type: "season",
    season: 1,
    episode: 4,
    preview: fourthSeries.src,
    duration: "43:54",
    status: "Просмотрено"
  }
];

export const AdditionalMovieInformationMock: AdditionalMovieInformation = {
  description:
    "Прекрасная планета Пандорра по-прежнему похожа на рай, где нашел себе приют бывший солдат Салли. Подрастают дети его нового народа, они играют на морских рифах и в подводном царстве. Кроме подростков на’ви на Пандорре растет и земной ребенок Джек Чемпион. Воскресают те, кто умер в былых сражениях: героиня Сигурни Уивер и зловещий полковник. Наконец, и земные корпорации снова предъявляют свои права на богатства Пандорры. Независимость фантастического первобытного рая придется отстаивать всем, кто его населяет."
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

export const moviesWeekMock: MovieWeek[] = [
  {
    id: 0,
    preview: topOne.src
  },
  {
    id: 1,
    preview: topTwo.src
  },
  {
    id: 2,
    preview: topThree.src
  },
  {
    id: 3,
    preview: topFour.src
  },
  {
    id: 4,
    preview: topFive.src
  },
  {
    id: 5,
    preview: topSix.src
  },
  {
    id: 6,
    preview: topSeven.src
  },
  {
    id: 7,
    preview: topEight.src
  },
  {
    id: 8,
    preview: topNine.src
  },
  {
    id: 9,
    preview: topTen.src
  }
];
