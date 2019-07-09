import * as constant from './constants';

export const searchInputFocus = (focused) => ({
    type: constant.SEARCH_FOCUS,
    focused
});

export const searchInputBlur = (focused) => ({
    type: constant.SEARCH_BLUR,
    focused
});