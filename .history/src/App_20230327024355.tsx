import styles from './App.module.scss';
import { Menu } from './components/menu/Menu';
import { Container } from './components/container/Container';
import { Favorite } from './components/favorite/Favorite';
import { FavoriteContextProvider } from './context/FavoriteContext';

function App() {
    return (
        <div className={styles.App}>
            <Menu />
            <FavoriteContextProvider>
                <Container />
                <Favorite />
            </FavoriteContextProvider>
        </div>
    );
}

export default App;
