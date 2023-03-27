import { createBoard } from '@wixc3/react-board';
import { Favorite } from '../../../components/favorite/Favorite';

export default createBoard({
    name: 'Favorite',
    Board: () => <Favorite />,
    environmentProps: {
        canvasHeight: 199,
    },
});
