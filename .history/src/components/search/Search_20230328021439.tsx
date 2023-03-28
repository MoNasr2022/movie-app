import styles from './Search.module.scss';
import classNames from 'classnames';
import { useContext, useState } from 'react';
import { SearchContext } from '../../context/SearchContext';

export interface SearchProps {
    className?: string;
}

export const Search = ({ className }: SearchProps) => {
    const [input, setInput] = useState('');
    const { dispatch } = useContext(SearchContext);
    return (
        <div className={classNames(styles.root, className)}>
            <input className={styles.input} placeholder={'Search...'}  />
            <button className={styles['search-button']}>Search</button>
        </div>
    );
};
