import styles from './Menu.module.scss';
import classNames from 'classnames';

export interface MenuProps {
    className?: string;
}

const sortedBy: string[] = ['Popularity', 'Most Voted', 'Release Date'];
const genres: (id:number, text:string) = [
    { tes: 'Action', id: 28 },
    { tes: 'Adventure', id: 12 },
    { tes: 'Animation', id: 16 },
    { tes: 'Comedy', id: 35 },
    { tes: 'Crime', id: 80 },
    { tes: 'Documentary', id: 99 },
    { tes: 'Drama', id: 18 },
    { tes: 'Family', id: 10751 },
    { tes: 'Fantasy', id: 14 },
    { tes: 'History', id: 36 },
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
