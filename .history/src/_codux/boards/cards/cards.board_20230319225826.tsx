import { createBoard } from '@wixc3/react-board';
import { Cards } from '../../../components/cards/Cards';

export default createBoard({
    name: 'Cards',
    Board: () => <Cards />,
    environmentProps: {
        canvasWidth: 40,
        canvasHeight: 414,
    },
});
