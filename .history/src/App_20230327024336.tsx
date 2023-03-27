import styles from './App.module.scss';
import { Menu } from './components/menu/Menu';
import { Container } from './components/container/Container';
import { Favorite } from './components/favorite/Favorite';

function App() {
    return (
        <div className={styles.App}>
            <Menu />
            
            <Container />
            <Favorite />
        </div>
    );
}

export default App;
