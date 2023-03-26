import styles from './Container.module.scss';
import classNames from 'classnames';

import { Cards } from '../cards/Cards';
import { Search } from '../search/Search';

export interface ContainerProps {
    className?: string;
}


export const Container = ({ className }: ContainerProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Search />
            <Cards />
        </div>
    );
};
