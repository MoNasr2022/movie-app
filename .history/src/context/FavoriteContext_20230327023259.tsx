import React, { createContext, useReducer } from 'react';

interface Movie {
    id: number;
    title: string;
    poster_path?: string;
    release_date: string;
    vote_average: number;
 }