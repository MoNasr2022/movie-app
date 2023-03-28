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

interface SearchAction {
    type: 'ADD_TO_FAVORITE' | 'REMOVE_FROM_FAVORITE';
    payload: Movie;
}

const INITIAL_STATE: State = {
    favorites: [],
};

const SearchReducer = (state: State, action: SearchAction) => {
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
};

export const SearchContext = createContext<{
    state: State;
    dispatch: React.Dispatch<SearchAction>;
}>({ state: INITIAL_STATE, dispatch: () => {} });

export const SearchContextProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);

    return (
        <SearchContext.Provider value={{ state, dispatch }}>{children}</SearchContext.Provider>
    );
};
