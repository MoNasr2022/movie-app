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

        fetch(`&`)
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
