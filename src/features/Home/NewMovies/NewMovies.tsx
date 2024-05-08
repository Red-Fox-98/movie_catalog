import { FC, useEffect } from 'react';
import Styles from './NewMovies.module.scss';
import { NewMovieInfo } from '../../../shared/api/home/type';
import Image from 'next/image';

interface NewMoviesProps {
  movieInfo: NewMovieInfo[];
}

const NewMovies: FC<NewMoviesProps> = ({ movieInfo }) => {
  useEffect(() => {
    const movies = typeof document !== 'undefined' && document.getElementById('movies');
    const onWheel = (event: WheelEvent) => {
      event.preventDefault();
      movies.scrollBy({
        left: event.deltaY < 0 ? -32 : 32,
      });
    };

    movies.addEventListener('wheel', onWheel);
    return () => movies.removeEventListener('wheel', onWheel);
  }, []);

  return (
    <div className={Styles.contentNewMovies} id={'movies'}>
      {movieInfo?.map((movie) => (
        <div key={movie.id} className={Styles.movie}>
          <Image src={movie.preview} alt={'preview'} width={216} height={324} priority />
          <div className={Styles.name}>{movie.name}</div>
        </div>
      ))}
    </div>
  );
};

export default NewMovies;
