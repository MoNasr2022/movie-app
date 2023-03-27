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

const initialState: State = {