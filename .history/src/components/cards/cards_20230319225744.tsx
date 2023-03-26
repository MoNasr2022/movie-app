import styles from './cards.module.scss';
import classNames from 'classnames';
import { Search } from '../search/Search';
import { card  } from './card/card';

export interface CardsProps {
    className?: string;
}

export const Cards = ({ className }: CardsProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <card />
        </div>
    );
};
