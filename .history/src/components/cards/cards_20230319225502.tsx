import styles from './cards.module.scss';
import classNames from 'classnames';
import { Search } from '../search/search';
import { Cards as Cards0 } from './cards';

export interface CardsProps {
    className?: string;
}

export const Cards = ({ className }: CardsProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            
            <Cards />
        </div>
    );
};
