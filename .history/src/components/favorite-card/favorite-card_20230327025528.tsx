import styles from './favorite-card.module.scss';
import classNames from 'classnames';
import { useContext } from 'react';
import { FavoriteContext } from '../../context/FavoriteContext';


export interface FavoriteCardProps {
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


export const FavoriteCard = ({ className, movie }: FavoriteCardProps) => {
    const {  dispatch } = useContext(FavoriteContext);
    return (
        <div className={classNames(className, styles.root)}>
            <img src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" className={styles['favorite-img']} />
            <div className={styles.details}>
                <h1 className={styles.title}>{movie.title}</h1>
                <span>{movie.vote_average}</span>
            </div>
            <div className={styles.dbutton}
            onClick={() => dispatch({ type: "REMOVE_FROM_FAVORITE", payload: movie })}
            >
                <img src="http://i.imgur.com/oFxZf6r.png" alt="" />
            </div>
        </div>
    );
};
