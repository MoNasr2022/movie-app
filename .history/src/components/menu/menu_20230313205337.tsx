import styles from './menu.module.scss';
import classNames from 'classnames';

export interface MenuProps {
    className?: string;
}

const sortedBy = ["Popularity", "Most Voted", "Release Date"];

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
                {sortedBy.map((item) => (

                    <li className={styles['list-item']} > Popularity </li>
                    )}
            </ul>
        </div>
    );
};
