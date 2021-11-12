export const SET_BANDS = 'SET_BANDS';
export const SET_FILTER = 'SET_FILTER';
export const SET_USER = 'SET_USER';
export const UPDATE_USER = 'UPDATE_USER';

export function setBands(value) {
  console.log('SET_BANDS action reached');
  return { type: SET_BANDS, value };
}

export function setFilter(value) {
  console.log('SET_FILTER action reached');
  return { type: SET_FILTER, value };
}

export function setUser(value) {
  console.log('SET_USER action reached');
  return { type: SET_USER, value };
}

export function updateUser(value) {
  console.log('UPDATE_USER action reached');
  return { type: UPDATE_USER, value };
}