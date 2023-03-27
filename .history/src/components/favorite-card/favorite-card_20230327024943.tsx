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

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-favorite-cards-and-templates
 */
export const FavoriteCard = ({ className, movie }: FavoriteCardProps) => {
    const { state, dispatch } = useContext(FavoriteContext);
    return (
        <div className={classNames(className, styles.root)}>
            <img src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" className={styles['favorite-img']} />
            <div className={styles.details}>
                <h1 className={styles.title}>{movie.title}</h1>
                <span>{movie.vote_average}</span>
            </div>
            <div className={styles.dbutton}>
                <img src="http://i.imgur.com/oFxZf6r.png" alt="" />
            </div>
        </div>
    );
};
