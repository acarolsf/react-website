import historiaTypes from "./historia.types";

export const addHistoriaStart = historiaData => ({
    type: historiaTypes.ADD_NEW_HISTORY_START,
    payload: historiaData
});

export const showHistoriaStart = () => ({
    type: historiaTypes.SHOW_HISTORY
});

export const setHistoria = historia => ({
    type: historiaTypes.SET_HISTORY,
    payload: historia
});