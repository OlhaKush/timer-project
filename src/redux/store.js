import {legacy_createStore as createStore} from 'redux';
import initialState from './initialState';
import shortid from 'shortid';
import { strContains } from '../utils/strContains';
import { combineReducers } from 'redux';
import listsReducer from './listsRedux';
import columnsReducer from './columnsRedux';
import cardsReducer from './cardsRedux';
import searchStringReducer from './searchStringRedux';


//selectors
// export const getFilteredCards = ({ cards, searchString }, columnId) => cards
//     .filter(card => card.columnId === columnId && strContains(card.title, searchString));

// export const getAllColumns = state => state.columns;

// export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId);

// export const getColumnsByList = ({ columns }, listId) => columns.filter(column => column.listId === listId);

// export const getAllLists = state => state.lists;

// export const getFavorite = ({cards}, isFavorite) => cards.filter(card => card.isFavorite === true);


// action creators
// export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });
// export const addCard = payload => ({ type: 'ADD_CARD', payload });
// export const addList = payload => ({ type: 'ADD_LIST', payload });
// export const searchString = payload => ({type: 'UPDATE_SEARCHSTRING', payload});
// export const toggleCard = payload => ({type: 'TOGGLE_CARD_FAVORITE', payload});
// export const removeCard = payload => ({type: 'REMOVE_CARD', payload});


// const listsReducer = (statePart = [], action) => {
//     switch(action.type) {
//         case 'ADD_LIST':
//             return [...statePart, { ...action.payload, id: shortid() }];
//         default:
//             return statePart;
//     }
// };


// const columnsReducer = (statePart = [], action) => {
//     switch(action.type) {
//         case 'ADD_COLUMN':
//             return [...statePart, { ...action.payload, id: shortid() }];
//         default:
//             return statePart;
//     }
// };

// const cardsReducer = (statePart = [], action) => {
//     switch(action.type) {
//         case 'ADD_CARD':
//             return [...statePart, { ...action.payload, id: shortid() }];
//         case 'TOGGLE_CARD_FAVORITE':
//             return statePart.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card);
//         case 'REMOVE_CARD':
//             return statePart.filter(card => card.id !== action.payload);
//         default:
//             return statePart;
//     }
// };

// const searchStringReducer = (statePart = '', action) => {
//     switch(action.type) {
//         case 'UPDATE_SEARCHSTRING':
//             return action.payload.title;
//         default:
//             return statePart;
//     }
// };

// const reducer = (state, action) => {
//     const newState = {
//         lists: listsReducer(state.lists, action),
//         columns: columnsReducer(state.columns, action),
//         cards: cardsReducer(state.cards, action),
//         searchString: searchStringReducer(state.searchString, action)
//     };
//
//     return newState;
// };

const subreducers = {
    lists: listsReducer,
    columns: columnsReducer,
    cards: cardsReducer,
    searchString: searchStringReducer
};

const reducer = combineReducers(subreducers);


// const reducer = (state, action) => {
//     switch(action.type) {
//         case 'ADD_COLUMN':
//             return { ...state, columns: [...state.columns, {...action.payload, id: shortid()}]};
//         case 'ADD_CARD':
//             return { ...state, cards: [...state.cards, {...action.payload, id: shortid()}]};
//         case 'ADD_LIST':
//             return { ...state, lists: [...state.lists, { ...action.payload, id: shortid() }]};
//         case 'UPDATE_SEARCHSTRING':
//             return { ...state, searchString: action.payload.title };
//         case 'TOGGLE_CARD_FAVORITE':
//             return { ...state, cards: state.cards.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card) };
//         case 'REMOVE_CARD':
//             return {...state, cards: state.cards.filter(card => card.id !== action.payload)};
//         default:
//             return state;
//     }
// };


const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;