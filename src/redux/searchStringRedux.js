import {strContains} from "../utils/strContains";

//selectors
export const getFilteredCards = ({ cards, searchString }, columnId) => cards
    .filter(card => card.columnId === columnId && strContains(card.title, searchString));

// actions
const createActionName = actionName => `app/string/${actionName}`;
const UPDATE_SEARCHSTRING = createActionName('UPDATE_SEARCHSTRING');

// action creators
export const searchString = payload => ({type: UPDATE_SEARCHSTRING, payload});


const searchStringReducer = (statePart = '', action) => {
    switch(action.type) {
        case UPDATE_SEARCHSTRING:
            return action.payload.title;
        default:
            return statePart;
    }
};

export default searchStringReducer;