import { createBoard } from '@wixc3/react-board';
import { Menu } from '../../../components/menu/Menu';

export default createBoard({
    name: 'Menu',
    Board: () => <Menu />
});
