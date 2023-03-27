import { createBoard } from '@wixc3/react-board';
import { Search } from '../../../components/search/Search';

export default createBoard({
    name: 'Search',
    Board: () => <Search />,
    environmentProps: {
        canvasHeight: 49,
        canvasWidth: 316,
    },
});
