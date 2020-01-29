import uuid from 'uuid';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types';

const initialState = {
    items: [
        {id: uuid(), name: 'Sweet Potatoes'},
        {id: uuid(), name: 'Beets'},
        {id: uuid(), name: 'Kale'},
        {id: uuid(), name: 'Butter'},
    ]
};

export default function (state = initialState , action) {
    switch(action.type) {
        case GET_ITEMS:
            return {
                ...state
            }
        default:
            return state;
    };
};