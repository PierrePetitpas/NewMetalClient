export const SET_BANDS = 'SET_BANDS';
export const SET_FILTER = 'SET_FILTER';

export function setBands (value) {
    console.log('SET_MOVIES action reached');
    return { type: SET_BANDS, value};
}

export function setFilter (value) {
    console.log('SET_FILTER action reached');
    return { type: SET_FILTER, value};
}

