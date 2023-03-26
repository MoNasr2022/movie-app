import styles from './Card.module.scss';
import classNames from 'classnames';

export interface CardProps {
    className?: string;
    movies: {
        id: number;
        title: string;
        poster_path: string;
    }
}

export const Card = ({ className }: CardProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <img />
            <div>
                <h1 />
                <span></span>
                <p>This is a paragraph.</p>
                <button>Button</button>
            </div>
        </div>
    );
};
