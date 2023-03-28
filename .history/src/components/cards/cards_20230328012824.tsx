import styles from './Cards.module.scss';
import classNames from 'classnames';
import { useState, useEffect } from 'react';
import { Card } from '../card/Card';

export interface CardsProps {
    className?: string;
}

export interface Movie {
    id: number;
    title: string;
    poster_path?: string;
    release_date: string;
    vote_average: number;
    overview: string;
}

export const Cards = ({ className }: CardsProps) => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const { state } = useContext(SearcContext);
    useEffect(() => {

        fetch('https://api.themoviedb.org/3/discover/movie?api_key=92f3b3d1823f09766cf72d2c816b7bab')
            .then((res) => res.json())
            .then((data) => setMovies(data.results))
            .catch((err) => console.log(err));
    });

    return (
        <div className={classNames(styles.root, className)}>
            {movies.map((movie) => (
                <Card movie={movie} key={movie.id} />
            ))}
        </div>
    );
};
