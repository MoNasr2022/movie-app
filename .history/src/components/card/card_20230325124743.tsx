import styles from './Card.module.scss';
import classNames from 'classnames';

export interface CardProps {
    className?: string;
    movie: {
        id: number;
        title: string;
        poster_path: string;
        release_date: string;
        vote_average: number;
        overview: string;
    }
}

export const Card = ({ className, movie }: CardProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <img src={movie.poster_path } alt="poster_photo" />
            <div>
                <h1>{ movie.title}</h1>
                <span>{movie.vote_average }</span>
                <p>{}</p>
                <button>Button</button>
            </div>
        </div>
    );
};