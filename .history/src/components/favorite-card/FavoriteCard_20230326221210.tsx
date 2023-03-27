import styles from './favoritCard.module.scss';
import classNames from 'classnames';

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
    return (
        <div className={classNames(styles.root, className)}>
            <img src={}/>
            <div>
                <h1>{movie.title}</h1>
                <span>{movie.vote_average}</span>
            </div>
            <div>
                <img />
            </div>
        </div>
    );
};
