import styles from './Container.module.scss';
import classNames from 'classnames';
import { Search } from '../search/Search';
import { Cards } from '../cards/Cards';

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
