import styles from './Menu.module.scss';
import classNames from 'classnames';

export interface MenuProps {
    className?: string;
}

const sortedBy: {q:string,text:string}[] = [
    { text: 'Popularity', q: 'popularity.desc' },
   
    { text: 'Release Date', q: 'release_date.desc' },
    
    
    { text: 'Revenue Ascending', q: 'revenue.asc' },

];
const genres: {id:number, text:string}[] = [
    { text: 'Action', id: 28 },
    { text: 'Adventure', id: 12 },
    { text: 'Animation', id: 16 },
    { text: 'Comedy', id: 35 },
    { text: 'Documentary', id: 99 },
    { text: 'Drama', id: 18 },
    { text: 'Romance', id: 10749 },
    { text: 'Thriller', id: 53 },
    { text: 'Horror', id: 27 },
    
];

export const Menu = ({ className }: MenuProps) => {
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
                {sortedBy.map((item, index) => (
                    <li className={styles['list-item']} key={index}>
                        {' '}
                        {item}{' '}
                    </li>
                ))}
            </ul>
            <span className={styles.title}>Genre</span>
            <hr className={styles.hr} />
            <ul className={styles.list}>
                {genres.map((item, index) => (
                    <li className={styles['list-item']} key={index}>
                        {' '}
                        {item}{' '}
                    </li>
                ))}
            </ul>
        </div>
    );
};
