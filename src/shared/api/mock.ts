import { VideoInformation, AdditionalMovieInformation, MovieInfo, MovieWeek, NewMovieInfo, IReview } from "./types";

import previewAvatarLegendOfAang from "./home/moviePreviews/AvatarLegendOfAang.png";
import logoAvatarLegendOfAang from "./home/infoFilm/LogoAvatarLegendOfAang.png";

import previewManOnALedge from "./home/newMoviesPreviews/ManOnALedge.png";
import previewOceanSEight from "./home/newMoviesPreviews/OceanSEight.png";
import previewNancyDrew from "./home/newMoviesPreviews/NancyDrew.png";
import previewNoChangeOnTheWesternFront from "./home/newMoviesPreviews/NoChangeOnTheWesternFront.png";
import previewAvatarWaterway from "./home/newMoviesPreviews/AvatarWaterway.png";

import topOne from "./home/weekTop/1.png";
import topTwo from "./home/weekTop/2.png";
import topThree from "./home/weekTop/3.png";
import topFour from "./home/weekTop/4.png";
import topFive from "./home/weekTop/5.png";
import topSix from "./home/weekTop/6.png";
import topSeven from "./home/weekTop/7.png";
import topEight from "./home/weekTop/8.png";
import topNine from "./home/weekTop/9.png";
import topTen from "./home/weekTop/10.png";

import firstSeries from "../uikit/images/Series/first_series.png";
import secondSeries from "../uikit/images/Series/second_series.png";
import thirdSeries from "../uikit/images/Series/third_series.png";
import fourthSeries from "../uikit/images/Series/fourth_series.png";

export const MovieInfoMock: MovieInfo[] = [
  {
    id: 0,
    name: "Аватар: Легенда об Аанге",
    description:
      "Чтобы спасти мир от разрушительной войны, мальчик по имени Аанг должен справиться с четырьмя стихиями и вступить в схватку с безжалостным противником, который пытается его остановить.",
    link: "avatar-legenda-ob-aange",
    preview: previewAvatarLegendOfAang.src,
    logo: logoAvatarLegendOfAang.src,
    rating: 7.9,
    year: 2024,
    genre: "Фэнтези",
    country: "США",
    ageRating: "16+",
    countSeasons: 4
  },
  {
    id: 1,
    name: "Аватар: Легенда об Аанге",
    description:
      "Чтобы спасти мир от разрушительной войны, мальчик по имени Аанг должен справиться с четырьмя стихиями и вступить в схватку с безжалостным противником, который пытается его остановить.",
    link: "avatar-legenda-ob-aange",
    preview: previewAvatarLegendOfAang.src,
    logo: logoAvatarLegendOfAang.src,
    rating: 7.9,
    year: 2024,
    genre: "Фэнтези",
    country: "США",
    ageRating: "16+",
    countSeasons: 4
  },
  {
    id: 2,
    name: "Аватар: Легенда об Аанге",
    description:
      "Чтобы спасти мир от разрушительной войны, мальчик по имени Аанг должен справиться с четырьмя стихиями и вступить в схватку с безжалостным противником, который пытается его остановить.",
    link: "avatar-legenda-ob-aange",
    preview: previewAvatarLegendOfAang.src,
    logo: logoAvatarLegendOfAang.src,
    rating: 7.9,
    year: 2024,
    genre: "Фэнтези",
    country: "США",
    ageRating: "16+",
    countSeasons: 4
  },
  {
    id: 3,
    name: "Аватар: Легенда об Аанге",
    description:
      "Чтобы спасти мир от разрушительной войны, мальчик по имени Аанг должен справиться с четырьмя стихиями и вступить в схватку с безжалостным противником, который пытается его остановить.",
    link: "avatar-legenda-ob-aange",
    preview: previewAvatarLegendOfAang.src,
    logo: logoAvatarLegendOfAang.src,
    rating: 7.9,
    year: 2024,
    genre: "Фэнтези",
    country: "США",
    ageRating: "16+",
    countSeasons: 4
  }
];

export const VideoInformationMock: VideoInformation[] = [
  {
    id: 0,
    type: "season",
    season: 1,
    episode: 1,
    preview: firstSeries.src,
    numberOfMinutes: 43,
    numberOfSeconds: 54,
    status: "reviewed"
  },
  {
    id: 1,
    type: "season",
    season: 1,
    episode: 2,
    preview: secondSeries.src,
    numberOfMinutes: 43,
    numberOfSeconds: 54,
    status: "reviewed"
  },
  {
    id: 2,
    type: "season",
    season: 1,
    episode: 3,
    preview: thirdSeries.src,
    numberOfMinutes: 43,
    numberOfSeconds: 54,
    status: "reviewed"
  },
  {
    id: 3,
    type: "season",
    season: 1,
    episode: 4,
    preview: fourthSeries.src,
    numberOfMinutes: 43,
    numberOfSeconds: 54,
    status: "reviewed"
  }
];

export const ReviewsMock: IReview[] = [
  {
    id: 0,
    name: "Николай",
    day: 10,
    month: 5,
    year: 2023,
    appraisal: 9,
    commentary:
      "Как по мне, обсуждать качество сериала довольно глупо. Субъективно для меня — оно очевидно плохого уровня. Это ни капельки не похоже на Ведьмака, к которому мы привыкли в играх и книгах. Отсутствие оригинальности в сюжете и персонажах делает сериал предсказуемым и скучным. В общем, «Ведьмак» - это просто пустая траты времени и потерянный потенциал. Я разочарован и не рекомендую этот сериал никому."
  },
  {
    id: 1,
    name: "Николай",
    day: 10,
    month: 5,
    year: 2023,
    appraisal: 9,
    commentary:
      "Как по мне, обсуждать качество сериала довольно глупо. Субъективно для меня — оно очевидно плохого уровня. Это ни капельки не похоже на Ведьмака, к которому мы привыкли в играх и книгах. Отсутствие оригинальности в сюжете и персонажах делает сериал предсказуемым и скучным. В общем, «Ведьмак» - это просто пустая траты времени и потерянный потенциал. Я разочарован и не рекомендую этот сериал никому."
  },
  {
    id: 2,
    name: "Николай",
    day: 10,
    month: 5,
    year: 2023,
    appraisal: 9,
    commentary:
      "Как по мне, обсуждать качество сериала довольно глупо. Субъективно для меня — оно очевидно плохого уровня. Это ни капельки не похоже на Ведьмака, к которому мы привыкли в играх и книгах. Отсутствие оригинальности в сюжете и персонажах делает сериал предсказуемым и скучным. В общем, «Ведьмак» - это просто пустая траты времени и потерянный потенциал. Я разочарован и не рекомендую этот сериал никому."
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
    rating: 8.9,
    name: "На грани",
    year: 2022,
    numberOfHours: 2,
    numberOfMinutes: 37
  },
  {
    id: 1,
    preview: previewOceanSEight.src,
    rating: 8.2,
    name: "8 подруг Оушена",
    year: 2022,
    numberOfHours: 2,
    numberOfMinutes: 37
  },
  {
    id: 2,
    preview: previewNancyDrew.src,
    rating: 9.0,
    status: "newSeason",
    name: "Нэнси Дрю",
    year: 2022,
    numberOfHours: 2,
    numberOfMinutes: 37
  },
  {
    id: 3,
    preview: previewNoChangeOnTheWesternFront.src,
    rating: 7.9,
    status: "premiere",
    name: "На западном фронте без перемен",
    year: 2022,
    numberOfHours: 2,
    numberOfMinutes: 37
  },
  {
    id: 4,
    preview: previewAvatarWaterway.src,
    rating: 9.9,
    status: "premiere",
    name: "Аватар. Путь воды",
    year: 2022,
    numberOfHours: 2,
    numberOfMinutes: 37
  },
  {
    id: 5,
    preview: previewAvatarWaterway.src,
    rating: 9.9,
    status: "premiere",
    name: "Аватар. Путь воды",
    year: 2022,
    numberOfHours: 2,
    numberOfMinutes: 37
  }
];

export const MoviesWeekMock: MovieWeek[] = [
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
