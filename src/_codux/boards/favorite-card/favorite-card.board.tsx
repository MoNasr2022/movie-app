import { createBoard } from '@wixc3/react-board';
import { FavoriteCard } from '../../../components/favorite-card/favorite-card';

export default createBoard({
    name: 'FavoriteCard',
    Board: () => (
        <FavoriteCard
            movie={{
                id: 43,
                overview:
                    'an alrenatuve rthe= vksaksjhg kjahgkadhghasdg afdsghadsghakdshfgka g;dsklfhgasdhghkjfg',
                release_date: '2000',
                title: 'Avatar',
                vote_average: 9,
                poster_path:
                    'https://imageio.forbes.com/specials-images/imageserve/63dd9ff2ce8d860c182f90bb/Official-Dolby-Cinema-poster-for--Avatar--The-Way-of-Water-/960x0.jpg?height=1053&width=711&fit=bounds',
            }}
        />
    ),
    environmentProps: {
        canvasHeight: 425,
    },
});
