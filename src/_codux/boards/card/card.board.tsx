import { createBoard } from '@wixc3/react-board';
import { Card } from '../../../components/card/Card';

export default createBoard({
    name: 'Card',
    Board: () => (
        <Card
            movie={{
                id: 123,
                overview:
                    'lorem sgasgasdhgdahdshdhgkljhslkifggkskghsahgfhsadkhgfksahdgfkhsdlkjgfhskadhgfklshdgkhsahgflksdhfghsdkgfhsdhghsdvhsdlkhdglksdhglkshgksdhglkshglkshvkshgsd',
                release_date: '2000',
                title: 'Avatar',
                vote_average: 6,
                poster_path:
                    'https://imageio.forbes.com/specials-images/imageserve/639e09798e6da4e16a8cea7f/Official-IMAX-poster-for--Avatar--The-Way-of-Water-/960x0.jpg?height=889&width=711&fit=bounds',
            }}
        />
    ),
    environmentProps: {
        canvasHeight: 380,
    },
});
