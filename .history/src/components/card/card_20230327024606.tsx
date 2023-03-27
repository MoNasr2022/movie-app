import styles from './Card.module.scss';
import classNames from 'classnames';

import { FavoriteContext } from '../../context/FavoriteContext';
import { useContext } from 'react';

export interface CardProps {
    className?: string;
    movie: {
        id: number;
        title: string;
        poster_path?: string;
        release_date: string;
        vote_average: number;
        overview: string;
    };
}

export const Card = ({ className, movie }: CardProps) => {
    
    return (
        <div className={classNames(styles.root, className)}>
            <img src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="poster_photo" className={styles['card-img']} />
            <div className={styles['card-details']}>
                <h1>{movie.title}</h1>
                <span className={styles.rating}>{movie.vote_average}</span>
                <p className={styles['card-desc']}>{movie.overview.substring(0,180)}</p>
                <button className={styles['card-button']}>+</button>
            </div>
        </div>
    );
};
