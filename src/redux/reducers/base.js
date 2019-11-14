import types from '../actions/types';

const INITIAL_STATE = {
    title: 'Graphql Frontend',
    rootCategory: false,
    pages: false,
};

const base = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.PAGE_TITLE:
            return {
                ...state,
                title: action.title,
            };

        case types.STORE_CONFIG:
            return {
                ...state,
                title: action.title,
            };

        case types.SET_CMS_PAGES:
            return {
                ...state,
                pages: action.pages,
            };

        default:
            return state;
    }
};

export default base;
