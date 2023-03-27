import styles from './Favorite.module.scss';
import classNames from 'classnames';
import { FavoriteCard } from '../favorite-card/favorite-card';
import { useContext } from 'react';

export interface FavoriteProps {
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
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-favorites-and-templates
 */
export const Favorite = ({ className, movie }: FavoriteProps) => {
    const { state } = useContext(FavoriteContext);
    return (
        <div className={classNames(styles.root, className)}>
        <h1> Favorites </h1>
            <FavoriteCard />
        </div>
    );
};
