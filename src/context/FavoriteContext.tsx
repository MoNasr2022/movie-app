import React, { createContext, useReducer } from 'react';

interface Movie {
    id: number;
    title: string;
    poster_path?: string;
    release_date: string;
    vote_average: number;
    overview: string;
}
 
interface State {
    favorites: Movie[];
}
 
interface FavoriteAction { 
    type: 'ADD_TO_FAVORITE' | 'REMOVE_FROM_FAVORITE';
    payload: Movie;
}

const INITIAL_STATE : State = {
    favorites: [],
}


const FavoriteReducer = (state: State, action: FavoriteAction) => {
    switch (action.type) {
        case 'ADD_TO_FAVORITE':
            return {
                ...state,
                favorites: [...state.favorites, action.payload],
            };
        case 'REMOVE_FROM_FAVORITE':
            return {
                ...state,
                favorites: state.favorites.filter((movie) => movie.id !== action.payload.id),
            };
        default:
            return state;
    }
}

export const FavoriteContext = createContext
    <{
        state: State,
        dispatch: React.Dispatch<FavoriteAction>
    }>
    ({ state: INITIAL_STATE, dispatch: () => { } })


export const FavoriteContextProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(FavoriteReducer, INITIAL_STATE);

    return (
        <FavoriteContext.Provider value={{ state, dispatch }}>
            {children}
        </FavoriteContext.Provider>
    );
};