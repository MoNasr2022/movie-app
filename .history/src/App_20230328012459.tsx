import styles from './App.module.scss';
import { Menu } from './components/menu/Menu';
import { Container } from './components/container/Container';
import { Favorite } from './components/favorite/Favorite';
import { FavoriteContextProvider } from './context/FavoriteContext';

function App() {
    return (
        <div className={styles.App}>
            <SearchContextProvider>

            <Menu />
            <FavoriteContextProvider>
                <Container />
                <Favorite />
            </FavoriteContextProvider>
            </SearchContextProvider>
        </div>
    );
}

export default App;
