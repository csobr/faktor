import { writable } from 'svelte/store';

export const isAuthenticated = writable(false);
export const user = writable({});
export const openPopup = writable(false);
export const setError = writable('');
