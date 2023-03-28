import styles from './Cards.module.scss';
import classNames from 'classnames';
import { useState, useEffect, useContext } from 'react';
import { Card } from '../card/Card';
import { SearchContext } from '../../context/SearchContext';

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
    const { state } = useContext(SearchContext);
    const { sortBy, genre, query } = state;
    
    useEffect(() => {

        fetch(
            query !== ''
                ? `https://api.themoviedb.org/3/search/movie?api_key=92f3b3d1823f09766cf72d2c816b7bab&query=${query}`
                : `https://api.themoviedb.org/3/discover/movie?api_key=92f3b3d1823f09766cf72d2c816b7bab&sort_by=${sortBy}&with_genres=${genre}&query=${query}`
        )
            .then((res) => res.json())
            .then((data) => setMovies(data.results))
            .catch((err) => console.log(err));
    },[sortBy, genre, query]);

    return (
        <div className={classNames(styles.root, className)}>
            {movies.map((movie) => (
                <Card movie={movie} key={movie.id} />
            ))}
        </div>
    );
};
