import styles from './Search.module.scss';
import classNames from 'classnames';
import { useState } from 'react';

export interface SearchProps {
    className?: string;
}

export const Search = ({ className }: SearchProps) => {
    const [, set] = useState('');
    return (
        <div className={classNames(styles.root, className)}>
            <input className={styles.input} placeholder={'Search...'} />
            <button className={styles['search-button']}>Search</button>
        </div>
    );
};
