import types from './types';

export const setPageTitle = title => ({
    title,
    type: types.PAGE_TITLE,
});

export const setCMSPages = pages => ({
    pages,
    type: types.SET_CMS_PAGES,
});
