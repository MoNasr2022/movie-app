import { createBoard } from '@wixc3/react-board';
import { Card } from '../../../components/card/Card';

export default createBoard({
    name: 'Card 1',
    Board: () => <Card />,
});
