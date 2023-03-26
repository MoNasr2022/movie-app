import { createBoard } from '@wixc3/react-board';
import { Container } from '../../../components/container/Container';

export default createBoard({
    name: 'Container ',
    Board: () => <Container />,
});
