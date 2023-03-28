import React, { createContext, useReducer } from 'react';



interface State {
    sortBy: string;
    genre: string;
    query: string;
}

interface SearchAction {
    type: string;
    payload: string;
}

const INITIAL_STATE: State = {
    sortBy: "popularity.desc",
    genre: '',
    query: '',
};

const SearchReducer = (state: State, action: SearchAction) => {
    switch (action.type) {
        case 'SORT_BY':
            return {
                ...state,
                sortBy: action.payload,
            };
        case 'GENRE':
            return {
                ...state,
                genre: action.payload,
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
