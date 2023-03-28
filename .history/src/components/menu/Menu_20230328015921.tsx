import styles from './Menu.module.scss';
import classNames from 'classnames';
import { useContext } from 'react';
import { SearchContext } from '../../context/SearchContext';

export interface MenuProps {
    className?: string;
}

const sortedBy: {q:string,text:string}[] = [
    { text: 'Popularity', q: 'popularity.desc' },
    { text: 'Release Date', q: 'release_date.desc' },
    { text: 'Most Voted', q: 'vote_count.desc' },

];
const genres: {id:string, text:string}[] = [
    { text: 'Action', id: '28' },
    { text: 'Adventure', id: '12' },
    { text: 'Animation', id: '16' },
    { text: 'Comedy', id: '35' },
    { text: 'Documentary', id: '99' },
    { text: 'Drama', id: '18' },
    { text: 'Romance', id: '10749' },
    { text: 'Thriller', id: '53' },
    { text: 'Horror', id: '27' },
    
];

export const Menu = ({ className }: MenuProps) => {
    const { dispatch, state } = useContext(SearchContext);


    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.logo}>
                <img
                    src="https://img.freepik.com/premium-vector/cinema-movie-background-popcorn-filmstrip-clapboard-tickets-movie-time-background_41737-248.jpg?size=626&amp;ext=jpg"
                    alt="LOGO"
                    className={styles['logo-img']}
                />
                <span className={styles['logo-text']}>Nasr Movies</span>
            </div>
            <span className={styles.title}>Sort By</span>
            <hr className={styles.hr} />
            <ul className={styles.list}>
                {sortedBy.map((item) => (
                    <li
                        className={styles['list-item']}
                        key={item.q}
                        onClick={() => {
                            dispatch({ type: 'SORT_BY', payload: item.q });
                        }}
                    >
                        {item.text}
                    </li>
                ))}
            </ul>
            <span className={styles.title}>Genre</span>
            <hr className={styles.hr} />
            <ul className={styles.list}>
                {genres.map((item) => (
                    <li
                        className={styles['list-item']}
                        key={item.id}
                        onClick={() => {
                            dispatch({ type: 'ADD_GENRE', payload: item.id });
                        }}
                    >
                        {item.text}
                    </li>
                ))}
            </ul>
        </div>
    );
};
