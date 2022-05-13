// setup data layer, track the basket
// like a global variable?
// be able to use user information in the login and in the main page
import React, { useContext, useReducer } from 'react';
import {createContext} from 'react';

//Data Layer
export const StateContext = createContext();

//Buil a provider
export const StateProvider = ({ reducer, initialState, children }) => (
        <StateContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </StateContext.Provider>
    );

export const useStateValue = () => useContext(StateContext); 

