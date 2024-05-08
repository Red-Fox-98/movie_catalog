import { MovieInfo, NewMovieInfo } from './type';

import previewAvatarLegendOfAang from '../../api/home/moviePreviews/AvatarLegendOfAang.png';
import logoAvatarLegendOfAang from '../../api/home/infoFilm/LogoAvatarLegendOfAang.png';
import previewManOnALedge from '../../api/home/newMoviesPreviews/ManOnALedge.png';
import previewOceanSEight from '../../api/home/newMoviesPreviews/OceanSEight.png';
import previewNancyDrew from '../../api/home/newMoviesPreviews/NancyDrew.png';
import previewNoChangeOnTheWesternFront from '../../api/home/newMoviesPreviews/NoChangeOnTheWesternFront.png';
import previewAvatarWaterway from '../../api/home/newMoviesPreviews/AvatarWaterway.png';

export const MovieInfoMock: MovieInfo = {
  preview: previewAvatarLegendOfAang.src,
  logo: logoAvatarLegendOfAang.src,
  rating: 7.9,
  year: 2024,
  genre: 'Фэнтези',
  country: 'США',
  ageRating: '16+',
};

export const NewMoviesInfoMock: NewMovieInfo[] = [
  {
    id: 0,
    preview: previewManOnALedge.src,
    name: 'На грани',
  },
  {
    id: 1,
    preview: previewOceanSEight.src,
    name: '8 подруг Оушена',
  },
  {
    id: 2,
    preview: previewNancyDrew.src,
    name: 'Нэнси Дрю',
  },
  {
    id: 3,
    preview: previewNoChangeOnTheWesternFront.src,
    name: 'На западном фронте без перемен',
  },
  {
    id: 4,
    preview: previewAvatarWaterway.src,
    name: 'Аватар. Путь воды',
  },
  {
    id: 5,
    preview: previewAvatarWaterway.src,
    name: 'Аватар. Путь воды',
  },
];
