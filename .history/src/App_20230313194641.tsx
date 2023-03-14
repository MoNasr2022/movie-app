import logo from './assets/logo.svg';
import styles from './App.module.scss';
import { Menu } from './components/menu/menu';
import { Container } from './components/container/container';
import { Favorite } from './components/favorite/favorite';

function App() {
    return (
        <div className={styles.App}>
            <Favorite />
            <Menu />
            <Container />
        </div>
    );
}

export default App;
